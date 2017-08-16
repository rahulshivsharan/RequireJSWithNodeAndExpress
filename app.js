define("app",["express","body-parser"],function(express,bodyParser){
	var app = express();


	var END_POINT = "http://localhost:8082"; // endpoint where dhis is deployed
	var SERVER_PORT = 8187;

	// public methods
	app.getPort = getPort;
	app.getHeaders = getHeaders;
	app.getEndPoint = getEndPoint;

	var headerObject = {
		"Cookie" : "io=YcgYviUR4jb8vC9VAACX; JSESSIONID=1rtw2hpwtiydm1npzguod5hn72"
	}

	var rawBodySaver = function (req, res, buf, encoding) {
		  if (buf && buf.length) {
		    req.rawBody = buf.toString(encoding || 'utf8');
		  }
	}

	// cors headers set
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});

	// app.use(bodyParser.json());
	// app.use(bodyParser.urlencoded({
	// 	"extended" : true
	// }));

	app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
	app.use(bodyParser.raw({ verify: rawBodySaver, type: function () { return true } }));
	app.use(bodyParser.json({ verify: rawBodySaver }));
		

	return app;

	function getPort(){
		return SERVER_PORT;
	}

	function getHeaders(){
		return headerObject;
	}

	function getEndPoint(){
		return END_POINT;
	}

	
});