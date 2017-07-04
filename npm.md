# npm
## node와 npm 버전 확인
```
$ node -v
$ npm -v
```
## npm 최신 버전 설치
```
$ npm install npm@latest -g
```
## 패키지 설치
```
$ npm install <package>
```
디렉토리 생성하고 프로젝트 디렉토리로 이동 :
```
$ mkdir <폴더명> && cd <폴더명>
```

- 패키지 설치 시 별도로 옵션을 지정하지 않으면 지역으로 설치된다.
  + 지역(local) 설치
  + 전역(global) 설치
    * `-g` 옵션 지정
- ``npm WARN enoent ENOENT: no such file or directory, open '~/package.json'``
  + 패키지 관리가 필요
### package.json
- npm은 `package.json` 파일을 통해 프로젝트 정보와 패키지의 의존성(dependency)을 관리
- java의 `pom.xml`과 비슷한 역할
- 제일 중요한 항목은 `name`과 `version` (패키지의 고유성 판단)
- `dependencies`에는 해당 프로젝트가 의존하는 패키지들의 이름과 버전을 명시

`npm.init` 명령어를 사용하여 생성 (`--yes` 또는 `-y` 옵션으로 디폴트 설정 가능) :
```
$ npm init -y
$ npm init --yes
```
`--save` 옵션은 패키지 설치와 함께 package.json의 dependencies에 설치된 패키지와 버전이 기록된다.[^1]
```
$ npm install <package> --save
```
npm install 명령어에 `--save-exact` 옵션을 지정하면 설치된 버전을 범위 지정 없이 기록
npm install 명령어의 패키지명 뒤에 `@버전` 을 추가하면 패키지 버전을 지정할 수 있음
```
$ npm install <package>@1.5.1 --save
```
TypeScript와 같은 트랜스파일러는 개발단계에서만 필요하고 배포할 필요는 없으므로 devDependencies에 포함
```
$ npm install <package> --save-dev
```
npm install 명령어는 package.json에 명시된 의존 패키지를 한번에 설치할 수 있음
```
$ npm install
```
## semantic versioning
버전 정보는 메이저 버전 번호, 마이너 버전 번호, 패치 버전 번호로 구성
> 예를 들어 1.7.3 버전이면
> 1 : major version number
> 7 : minor version number
> 3 : patch version number

따라서 버전 정보 앞에 기호를 부여하여 업데이트 범위를 지정할 수 있음
### 기술 방식
|표기법|Description|
|--------|--------|
|version|명시된 version과 일치|
|>version|명시된 version보다 높은 버전|
|>=version|명시된 version과 같거나 높은 버전|
|<version|명시된 version보다 낮은 버전|
|<=version|명시된 version과 같거나 낮은 버전|
|~version|명시된 version과 근사한 버전|
|^version|명시된 version과 호환되는 버전|
- ~(틸트)는 패치 버전 범위 내에서 업데이트
  + ~0.0.1 : 0.0.1 <= version < 0.1.0
  + ~0.1.1 : 0.1.1 <= version < 0.2.0
- ^(캐럿)은 마이너 버전 범위 내에서 업데이트
  + ^0.1.2 : 0.1.2 <= version < 0.2.0
  + ^1.0.2 : 1.0.2 <= version < 2.0
- 업데이트 버전 범위 확인 : [npm semver calculator](https://semver.npmjs.com/)


[^1]: `npm@5`부터 `--save`는 기본옵션이 되었다. `--save` 옵션을 사용하지 않더라도 모든 install 명령은 package.json의 dependencies에 설치된 패키지와 버전을 기록한다.
