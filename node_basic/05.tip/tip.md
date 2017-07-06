# TIP
## 설정 정보 관리
세션 키 , 데이터베이스 접속을 위한 정보 등을 관리할 때 사용
- `nopt` 패키지 사용하기
```node
var nopt = require('nopt')
var longOpts = {
    "sessionSecret": String
}
var shortOpts = {
    "s": ["--sessionSecret"]
}
var parsed = nopt(longOpts, shortOpts, process.argv, 2)
console.log("session secret is: ", parsed.sessionSecret);
```
```
node secret-arg.js --sessionSecret "keyboard cat"
node secret-arg.js -s "keyboard cat"
````

- 환경변수 사용하기

OSX, LInux :
```
export SESSION_SECRET = "keyboard cat"
```
Windows :
```
set SESSION_SECRET = "keyboard cat"
```
실행할 때마다 환경변수 설정 : 
```
SESSION_SECRET = "keyboard cat" node secret-env.js
```
코드 내에서 환경변수에 접근할 때 : 
```node
var express = require('express')
var session = require('express-session')

var app = express();

app.use(session({secret: process.env.SESSION_SECRET}));
```