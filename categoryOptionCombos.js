define("categoryOptionCombos",["app","request"],function(app,request){

	// private variabled
	var obj = {};
	var URL = "/api/categoryOptionCombos.json";

	// public methods
	obj.init = init;

	// private methods
	var get = get;

	return obj;

	function init(){
		get();
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
});