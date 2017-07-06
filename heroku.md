# Heroku
- AWS의 IaaS상에 구축된 PaaS이며, Git으로 deploy가 가능
- 소규모 사이트나 개인 블로그 정도는 충분히 무료로 사용할 수 있는 공간이 주어짐

### 1. 계정 생성
[Heroku](https://www.heroku.com/)에서 sign up을 한다.
### 2. node, npm, git 설치 확인
### 3. Heroku CLI 설치
[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)는 `command line`이나 `shell`에서 Heroku 어플리케이션을 생성하고 관리할 수 있는 도구
### 4. 로그인
```
$ heroku login
```
### 5. Deploy
> 잘 몰라서 일단 성공한 방법으로 작성...ㅎㅎ
git을 깃허브+소스트리로만 사용해서 몰랐는데, 접근하려면 공개 키를 발급받아야 사용중인 컴퓨터가 등록되고 권한이 생기나 봄

공개 키 생성(이미 발급받은 사람은 하지 않아도 됨) :
```
$ ssh-keygen -t rsa
```
heroku에 공개 키를 등록한다.
```
$ heroku keys:add
```
키가 잘 등록되었는지 확인하자.
```
$ heroku keys
```
#### 5-1. 프로젝트를 Git에서 Clone하기
```
$ git clone 주소 app이름(명시해주지 않으면 local repository명으로 생성됨)
$ cd app이름
$ ls -al
```
#### 5-2. 내 프로젝트 폴더를 Commit하기
```
$ git init
$ git add .
$ git commit -m "init"
```
#### 공통
5-1이나 5-2의 과정을 마쳤으면,
```
$ herocu create app이름(명시해주지 않으면 local repository명으로 생성됨)
```
herocu에 프로젝트를 생성한다.<br>*(나의 경우 app이름을 적었더니 대부분이 heroku에 존재하는 이름이라고 거절(Name is already taken)되었다..^^ 특별하게 써줘야 함...*)<br>위 과정을 마치면, .git/config파일에 remote "heroku" 내용이 추가된다. 이제 Push를 한다.
```
$ git push heroku master
```
현재 동작중인지 확인하기 (heroku 사이트 dashboard에서도 확인 가능)
```
$ heroku ps
또는
$ heroku ps --app app이름
```
만약 인스턴스가 동작하고 있지 않으면,
```
$ heroku ps:scale web=1
```
생성된 app URL로 가자.
```
$ heroku open
```
#### 로그 확인하기
```
$ heroku logs --tail
```
### 6. local 환경에서의 확인
package.json의 dependency 설정을 변경
```json
{
  "name": "app이름",
  ...
  "engines": {
    "node": "버전"
  },
  "dependencies": {
    "ejs": "2.4.1",
    "express": "4.13.3"
  }
  ...
}
```
```
$ cd 프로젝트
$ npm install
```
local에서의 app 가동을 확인하자.
```
$ heroku local web
$ npm start
```
### 7. 수정 후 Deploy
```
$ git add .
$ git commit -m "update app"
$ git push heroku master
```
> 주소가 있으면 실행할 때 `$heroku open 주소`

### 8. Github과 연동
1. Heroku Dashboard의 Deploy 탭으로 이동
2. Deployment method에서 Github을 선택
3. Connect to GitHub을 눌러 github repository 등록하고 Connect
4. Automatic Deploys에서 Enable Automatic Deploys 클릭
5. 이후 GitHub에 push하면 자동으로 Heroku에 deploy됨

### 9. Add-on
로그를 관리할 수 있는 서비스 [Papertrail](https://elements.heroku.com/addons/papertrail) 설치하기
```
$ heroku addons:create papertrail
$ heroku addons
$ heroku addons:open papertrail
```

### 10. Database Add-on
Heroku는 Redis, MongoDB, Postgres, MySQL등 data store add-on을 제공한다. MongoDB add-on을 추가해보자.
#### 1-1. bash 사용
```
$ heroku addons:create mongolab
```
#### 1-2. 사이트에서 추가
1. [Add-ons](https://elements.heroku.com/addons)에서 mLab MongoDB를 선택
2. Install mLAB MongoDB 버튼을 클릭하고 app 선택
3. Heroku Dashboard의 Resources 탭으로 가서, Add-ons의 mLab MongoDB 클릭
4. Users 탭을 선택하고, Add database user 버튼을 클릭하여 새로운 사용자 생성
5. MongoDB add-on을 생성하면, database connection URI가 config var에 저장되는데, Node.js 내에서 process.env_MONGODB_URI로 접근할 수 있으므로 새롭게 생성한 user를 config var의 MONGODB_URI에 저장
