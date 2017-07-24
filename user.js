define("user",["app","request"],function(app,request){
	var user = {};

	// private variables
	var URL = "/api/users.json";

	// public methods
	user.init = init;

	// private methods
	var get = get;
	var getBasicInfoOfCurrentUser = getBasicInfoOfCurrentUser;
	var getUserRoles = getUserRoles;

	return user;

	// initialise user module
	function init(){
		get();
		getBasicInfoOfCurrentUser();
		getUserRoles();
	} // end of init

	function getBasicInfoOfCurrentUser(){
		var $url = "/api/me.json";
		
		app.get($url,function(req,res){
			var url = app.getEndPoint() + $url;

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

	} // end of 'getBasicInfoOfCurrentUser'

	function getUserRoles(){
		var $url = "/api/userRoles.json";
		
		app.get($url,function(req,res){
			var url = app.getEndPoint() + $url;

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

	} // end of 'getUserRoles'

	// get users
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

	} // end of get users
});