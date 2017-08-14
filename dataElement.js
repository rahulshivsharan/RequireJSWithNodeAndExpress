define("dataElement",["app","request"],function(app,request){
	var dataElement = {};

	//http://localhost:8082/api/24/dataElements.json?filter=id:eq:rhXstKVfvvj

	// private variables
	var URL = "/api/24/dataElements.json";

	// public methods
	dataElement.init = init;

	// private methods
	var get = get;

	return dataElement;

	function init(){
		get();
	}

	function get(){
		// the below api is for Express framework 'GET' method
		// for the particular URL 
		app.get(URL,function(req,res){
			
			var urlAppend = "";
			
			if(req.query["filter"] !== undefined){
				urlAppend += "?filter="+ req.query["filter"];  
			}
			
			var url = app.getEndPoint() + URL;
			url += urlAppend;
			//console.log(url);
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
});