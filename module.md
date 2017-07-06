# module
- 정의는 exports객체, 사용은 require함수
- Node.js는 기본으로 포함하고 있는 모듈이 있는데, 이를 **코어 모듈**이라 함.

코어 로듈을 로딩할 때에는 패스를 명시하지 않아도 무방
```node
var http = require('http');
```
