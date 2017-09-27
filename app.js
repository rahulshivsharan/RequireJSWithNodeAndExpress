define("app",["express","body-parser"],function(express,bodyParser){
	var app = express();


	var END_POINT = "http://localhost:8082"; // endpoint where dhis is deployed
	END_POINT = "http://hivpopdata.org/service"; // HIVPOPData1 / HIVPOPData1
	var SERVER_PORT = 8187;

	// public methods
	app.getPort = getPort;
	app.getHeaders = getHeaders;
	app.getEndPoint = getEndPoint;

	var headerObject = {
		"Cookie" : "JSESSIONID=9CE985AE9ADC853BED65549145501D3B"
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
	  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");	  
	  next();
	});

	// app.use(bodyParser.json());
	// app.use(bodyParser.urlencoded({
	// 	"extended" : true
	// }));

	
	
	app.use(bodyParser.json({ verify: rawBodySaver,limit: '50mb' }));
	app.use(bodyParser.raw({ verify: rawBodySaver,limit: '50mb', type: function () { return true } }));
	app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true, limit: '50mb' }));
		

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