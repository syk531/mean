//node index.js or nodemon로 서버 실행.
var express = require('express'); //npm install --save express로 express 모듈 설치.
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var sha256      = require('sha256');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'syk531',
  password : '1q2w3e4r!',
  database : 'syk531'
});
 
conn.connect();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
	secret : '2345lkjgm3k1213g!@#d',
	resave : false,
	saveUninitialized: true,
	store : new FileStore();
}));
app.use(passport.initialize());
app.use(passport.session());

//app.use('/', express.static(__dirname + '/front')); //front폴더에 있는 정적파일 사용.(angular 소스들)

app.use('/front', express.static(__dirname + '/front')); 
app.use('/img', express.static(__dirname + '/img')); 
app.use('/node_modules', express.static(__dirname + '/node_modules')); //node_modules폴더에 있는 정적파일 사용

app.get('/', function(req, res) {
	//angular home html 로 연결하기.
	res.sendfile('./front/index.html');
});

app.get('/api/member/getMemberInfo', function(req, res) {
	var todos = [{
		  id: 1,
		  title: 'todo 1',
		  completed: false
		}, {
		  id: 2,
		  title: 'todo 2',
		  completed: false
		}, {
		  id: 3,
		  title: 'todo 3',
		  completed: true
		}];
	
	res.json(todos);
});

app.post('/api/member/registUser', function(req, res) { //회원가입.
	var user = {
		userId : req.body.userId,
		pwd : sha256(req.body.pwd), //sha256 암호화
		userName : req.body.userName
	}
	
	var resultData = {
		resultCode : '200'
	}
	
	var sql = 'INSERT INTO users SET ?';
	conn.query(sql, user, function(err, results){
		if(err) {
			console.log('-----------------query error-----------------');
			console.log(err);
			resultData.resultCode = '999';
		} else {
		}
		
		res.send(JSON.stringify(resultData));
	});
});

app.post('/api/member/loginUser', passport.authenticate(
	'local',
	{
		successRedirect: '/',
		failureRedirect: '',
		failureFlash: false
	}
))

app.post('/api/member/loginUser', function(req, res) { //로그인
	//session에 저장.
	//db에 회원정보 있는지 확인.
	
	var user = {
		userId : req.body.userId,
		pwd : sha256(req.body.pwd) //sha256 암호화
	}
	
	
	
	var resultData = {
		resultCode : '200'
	}
	
	var sql = 'INSERT INTO users SET ?';
	conn.query(sql, user, function(err, results){
		if(err) {
			console.log('-----------------query error-----------------');
			console.log(err);
			resultData.resultCode = '999';
		} else {
		}
		
		res.send(JSON.stringify(resultData));
	});
});

app.get('*', function(req, res){ //refsh 404 방지.
	res.sendfile('./front/index.html');
});

app.listen(process.env.PORT || 3000, function(){ //heroku port 가 동적으로 변해서 포트 세팅되게
	console.log('server starting');
});