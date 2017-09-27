define("dataValueSets",["app","request"],function(app,request){
	var obj = {};
	var URL = "/api/dataValueSets"; ///api/24/dataValueSets

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
			
			var url = app.getEndPoint() + URL + "?importStrategy=" + req.query["importStrategy"];
			var data = {};
			data["dataValues"] = req.body.dataValues;
			
			//console.log(" URL ",url);
			//console.log(" Request Param ",data);
			
						
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
				
				res.end();	
			 }); // end of request api
			 
			 
		}); // end of app.post

	} // importBulkData
});