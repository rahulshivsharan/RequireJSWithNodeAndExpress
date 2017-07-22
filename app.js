define("app",["express"],function(express){
	var app = express();

	var END_POINT = "http://localhost:8082"; // endpoint where dhis is deployed
	var SERVER_PORT = 8187;

	// public methods
	app.getPort = getPort;
	app.getHeaders = getHeaders;
	app.getEndPoint = getEndPoint;

	var headerObject = {
		"Cookie" : "io=-4m0nrYZXnfeNYBhAADR; JSESSIONID=1wuf55y9k3lek1f0j8a2xpclsw"
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