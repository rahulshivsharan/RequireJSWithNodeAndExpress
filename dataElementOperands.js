define("dataElementOperands",["app","request","underscore"],function(app,request,_){
	var obj = {};
	var URL = "/api/dataElementOperands.json"; ///api/26/dataElementOperands.json"

	obj.init = init;

	var get = get;

	return obj;

	function init(){
		get();
	}

	function get(){
		app.get(URL,function(req,res){
			
			var urlAppend = "";
			
			if(req.query["filter"] !== undefined){
				
				console.log(req.query["filter"]);
				
				if(_.isArray(req.query["filter"])){
					for(var x = 0; x < req.query["filter"].length; x++){
						if(x === 0){
							urlAppend += "?filter="+ req.query["filter"][x];	
						}else{
							urlAppend += "&filter="+ req.query["filter"][x];	
						}
						
					}
				}else{
					urlAppend += "?filter="+ req.query["filter"];  	
				}
				
			}

			if(req.query["fields"] !== undefined){
				urlAppend += "&fields="+ req.query["fields"];  
			}

			if(req.query["totals"] !== undefined){
				urlAppend += "&totals="+ req.query["totals"];  
			}
			
			var url = app.getEndPoint() + URL;
			url += urlAppend;
			console.log(url);
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