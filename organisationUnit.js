define("organisationUnit",["app","request"],function(app,request){

	var organisationUnit = {};

	// private variables
	var URL = "/api/organisationUnits.json";

	// private methods
	var get = get;

	// public methods
	organisationUnit.init = init; 

	return organisationUnit;

	// initialise organisationUnit
	function init(){
		get();
	} // end of init

	// get Organisation Units
	function get(){
		
		// the below api is for Express framework 'GET' method
		// for the particular URL 
		app.get(URL,function(req,res){
			var url = app.getEndPoint() + URL;

			request({
				url : url,
				method : "GET",
				headers : app.getHeaders()
			},function(error,response){
				
				if(error){

					res.status(400);
					res.send(error);
				}else{
					res.status(200);
					res.send(response);			
				}
				
				res.end();	
			}); // end of request api

		}); // end of app.get

	} // end of get method
});