define("dataElementOperands",["app","request"],function(app,request){
	var obj = {};
	var URL = "/api/27/dataElementOperands.json";

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
				urlAppend += "?filter="+ req.query["filter"];  
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