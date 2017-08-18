define("dataValueSets",["app","request"],function(app,request){
	var obj = {};
	var URL = "/api/24/dataValueSets";

	// public methods
	obj.init = init;

	// private methods
	var importBulkData = importBulkData; 
	
	return obj;

	function init(){
		importBulkData();
	}

	function importBulkData(){
		
		app.post(URL,function(req,res){
			
			var url = app.getEndPoint() + URL;
			var data = req.body.data;
			
			console.log(data);
			
			/*
			request({
				url : url,
				method : "POST",
				headers : app.getHeaders(),
				json : true,
				body : data
			},function(error,response){
				
				if(error){

					res.status(400);
					res.send(error);
				}else{
					res.status(200);
					res.send(response);			
				}
				
					
			 }); // end of request api
			 */
			 res.end();
		}); // end of app.post

	} // importBulkData
});