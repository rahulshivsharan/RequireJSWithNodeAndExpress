define("app",["express"],function(express){
	var app = express();

	var END_POINT = "http://localhost:8082"; // endpoint where dhis is deployed
	var SERVER_PORT = 8187;

	// public methods
	app.getPort = getPort;
	app.getHeaders = getHeaders;
	app.getEndPoint = getEndPoint;

	var headerObject = {
		"Cookie" : "io=vp00bxehm5odCRQXAAAq; JSESSIONID=18hymhmt2jiqkv4eeyyrrguac",
		"Content-Type" : "application/json",
		"Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
		"GET" : "/api/organisationUnits.json HTTP/1.1",
		"Host" : "localhost:8082"
	}

	// cors headers set
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});	

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