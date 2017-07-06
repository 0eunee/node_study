var myModule = require('./module'); // 해당 디렉토리의 index.js를 로드함
var result = myModule.calc.add(1, 2);
console.log(result);
myModule.print.sayHello();
