define("metadata",["app","request","metaDataImport"],function(app,request,metaDataImport){
	var metadata = {};

	// private variables
	var URL = "/api/metadata.json";

	// public methods
	metadata.init = init;

	// private methods
	var get = get;
	var post = post;

	return metadata;

	function init(){
		get();
		post();
	}

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

	} // end of get

	function post(){
		// the below api is for Express framework 'POST' method
		// for the particular URL 
		app.post("/api/metadata",function(req,res){
			console.log("Request XML ");
			var url = app.getEndPoint() + URL;
			var data = req.body;
			
			//console.log(data.toString());
			
			var headerObject = app.getHeaders();
			headerObject["Content-Type"] = "application/xml";
			
			request({
				url : url,
				method : "POST",
				headers : headerObject,
				json : false,
				body : data.toString()
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

		}); // end of app.post

	} // end of get
});