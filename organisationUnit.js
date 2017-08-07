define("organisationUnit",["app","request"],function(app,request){

	var organisationUnit = {};

	// private variables
	var URL = "/api/organisationUnits.json";

	// private methods
	var get = get;
	var create = create;

	// public methods
	organisationUnit.init = init; 

	return organisationUnit;

	// initialise organisationUnit
	function init(){
		get();
		create();
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

	function create(){
		app.post(URL,function(req,res){
			var url = app.getEndPoint() + URL;
			
			var name = req.body.name,
				id = req.body.id,
				shortName = req.body.shortName,
				openingDate = req.body.openingDate;
			request({
				url : url,
				method : "POST",
				headers : app.getHeaders(),
				json : true,
				body : {
					"id" : id, // should be 11 charaters long
					"name" : name,
  					"shortName" : shortName,
  					"openingDate" : openingDate
				}
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
	} // end of create
});