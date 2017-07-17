define("user",["app","request"],function(app,request){
	var user = {};

	// private variables
	var URL = "/api/users.json";

	// public methods
	user.init = init;

	// private methods
	var get = get;

	return user;

	function init(){
		get();
	} // end of init

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
					res.set("Content-Type","application/json");

					res.send(response);			
				}
				
				res.end();	
			}); // end of request api

		}); // end of app.get

	} // end of get
});