//node index.js or nodemon로 서버 실행.
var express = require('express'); //npm install --save express로 express 모듈 설치.
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var sha256      = require('sha256');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

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
	store : new MySQLStore({
		host     : 'localhost',
		port	 : 3306,
		user     : 'syk531',
		password : '1q2w3e4r!',
		database : 'syk531'
	})
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
	var resultData = {
		resultCode : '200'
	}
	
	console.log('req.user : ', req.user);
	
	var sql = 'select * from users where userId=?';
	conn.query(sql, [req.user], function(err, results){
		console.log('results : ', results);
		
		if(err){
			console.log('회원정보 조회 쿼리에러 발생');
			resultData.resultCode = '999';
		} else{
			if(results != null && results.length > 0) {
				var user = results[0];
				resultData.userId = user.userId;
				resultData.userName = user.userName;
			} else {
				console.log('로그인이 안되었습니다.');
				resultData.resultCode = '900';
			}
		}
		
		res.send(JSON.stringify(resultData));
	});

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

passport.serializeUser(function(user, done){
	//console.log('serializeUser', user);
	done(null , user.userId); //처음 로그인 했을때 세션에 해당 계정의 userId 저장.
});

passport.deserializeUser(function(id, done){
	//로그인 한 후 페이지 이동 시 마다 호출됨. 
	//console.log('deserializeUser', id); 
	/*
	var sql = 'select * from users where userId=?';
	conn.query(sql, [id], function(err, results){
		console.log(sql, err, results);
		if(err){
			console.log('쿼리에러가 발생했습니다.');
		} else{
			done(null, results[0]);
		}
	});
	*/
	done(null, id);
});

passport.use(new LocalStrategy(
	function(username, password, done){
		 var userId = username;
		 var password = password;
		 
		 var resultData = {
			resultCode : '200'
		 }
		 
		 var sql = 'select * from users where userId=?';
		 conn.query(sql, [userId], function(err, results){
			console.log(results);
			
			if(results != null && results.length > 0) {
				var user = results[0];
				
				if(err) {
					console.log('쿼리에러가 발생했습니다.');
					return done(null, false);
				} else {
					if(sha256(password) === user.pwd) {
						console.log('로그인 성공.');
						return done(null, user);
					} else {
						console.log('비밀번호가 틀립니다.');
						return done(null, false);
					}
				}
			} else {
				console.log('사용자가 없습니다.');
				return done(null, false);
			}
		 });
	}
));

app.post('/api/member/login', 
	passport.authenticate('local'), 	
	function(req, res) {
		var resultData = {
			resultCode : '200'
		}
		
		if (!res) { //로그인실패
			resultData.resultCode = '600';
		}
		console.log('resultData.resultCode : ' + resultData.resultCode);
		res.send(JSON.stringify(resultData));
	}
);

passport.use(new FacebookStrategy({
    clientID: '1949513565298116',
    clientSecret: '957c4c98c04150611c3f4e0d2680cfa2',
    callbackURL: "/api/member/facebookLogin/callback"
  },
  function(accessToken, refreshToken, profile, done) {
	  console.log('profile : ', profile);
  }
));

app.get('/api/member/facebookLogin', 
	passport.authenticate('facebook')
);

app.get('/api/member/facebookLogin/callback',
	passport.authenticate('facebook'),
	function(req, res) {
		var resultData = {
			resultCode : '200'
		}
		
		if (!res) { //로그인실패
			resultData.resultCode = '600';
		}
		console.log('resultData.resultCode : ' + resultData.resultCode);
		res.send(JSON.stringify(resultData));
	}
);

/*
passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "/api/member/twitterLogin/callback"
  },
  function(accessToken, refreshToken, profile, done) {
	  console.log('profile : ', profile);
  }
));

app.get('/api/member/twitterLogin', 
	passport.authenticate('twitter')
);

app.get('/api/member/twitterLogin/callback',
	passport.authenticate('twitter'),
	function(req, res) {
		var resultData = {
			resultCode : '200'
		}
		
		if (!res) { //로그인실패
			resultData.resultCode = '600';
		}
		console.log('resultData.resultCode : ' + resultData.resultCode);
		res.send(JSON.stringify(resultData));
	}
);
*/

app.get('/api/member/logout', function(req, res) {
	console.log('logout before req : ' + req);
	console.log('logout before req.user : ' + req.user);
	req.logout();
	console.log('logout after req : ' + req);
	console.log('logout after req.user : ' + req.user);
	res.send({resultCode : '200'});
});

app.get('*', function(req, res){ //refsh 404 방지.
	res.sendfile('./front/index.html');
});

app.listen(process.env.PORT || 3000, function(){ //heroku port 가 동적으로 변해서 포트 세팅되게
	console.log('server starting');
});