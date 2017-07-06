# 세션 관리
## Redis
- in-memory data structure store
- key-value의 형태로 data를 저장
- MongoDB와 같은 NoSQL Database의 한 종류로 세션 등의 휘발성 데이터를 저장하는 용도
- application process가 종료되어도 세션 정보 보존 가능
- 복수 서버 환경에서도 세션 정보 공유 가능
- Express의 경우, [connect-redis](https://github.com/tj/connect-redis) 모듈을 사용

### Windows
Redis는 공식적으로 Windows를 지원하지는 않는다.
1. [Windows Radis Download](https://github.com/MSOpenTech/redis)에서 msi 파일을 다운로드하여 설치한다.
2. 설치가 완료 되면, Redis 서버가 서비스로 등록되어 실행되고 있다.
3. 설치 디렉토리에 있는 클라이언트 redis-cli.exe를 실행한다.
```
127.0.0.1:6379> ping
PONG
127.0.0.1:6379> set name 'hi'
OK
127.0.0.1:6379> get name
'hi'
```

### Mac
1. Homebrew를 사용하여 설치한다.
```
$ brew update && brew install redis
```
2. Redis 서버를 기동한다.
```
$ redis-server
```
3. connect-redis 모듈을 인스톨한다.
```
$ npm install connect-redis --save
```
