var requireJS = require("./lib/r.js");

requireJS.config({
	nodeRequire : require
});

requireJS(["app","organisationUnit","user"],function(app,organisationUnit,user){

	var server = app.listen(app.getPort(),serverFn);

	organisationUnit.init();
	user.init();

	function serverFn(){

  		var host = server.address().address;
  		var port = server.address().port;

  		console.log("Example app listening at http://%s:%s", host, port);
	} // end of serverFn
});