//node index.js or nodemon로 서버 실행.
var express = require('express'); //npm install --save express로 express 모듈 설치.
var app = express();

//app.use('/', express.static(__dirname + '/front')); //front폴더에 있는 정적파일 사용.(angular 소스들)

app.use('/front', express.static(__dirname + '/front')); 
app.use('/node_modules', express.static(__dirname + '/node_modules')); //node_modules폴더에 있는 정적파일 사용

app.get('/', function(req, res) {
	//angular home html 로 연결하기.
	res.sendfile('./front/index.html');
});

app.listen(3000, function(){
	console.log('server starting');
})