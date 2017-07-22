var requireJS = require("./lib/r.js");

requireJS.config({
	nodeRequire : require
});

requireJS([	"app",
			"organisationUnit",
			"user",
			"metadata",
			"dataElement"],
		  function(	app,
					organisationUnit,
					user,
					metadata,
					dataElement){

	var server = app.listen(app.getPort(),serverFn);

	organisationUnit.init();
	user.init();
	metadata.init();
	dataElement.init();

	function serverFn(){

  		var host = server.address().address;
  		var port = server.address().port;

  		console.log("Example app listening at http://%s:%s", host, port);
	} // end of serverFn
});