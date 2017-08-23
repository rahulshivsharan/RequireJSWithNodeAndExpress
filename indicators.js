define("indicators",["app","request"],function(app,request){
	var obj = {};

	var URL = {
		"all" : "/api/indicators.json",
		"one" : "/api/indicators"		
	};

	// public methods
	obj.init = init;

	// private methods
	var get = get;
	var getOneIndicator = getOneIndicator;

	return obj;

	function init(){
		get();
		getOneIndicator();
	} // end of init

	function get(){
		app.get(URL.all,function(req,res){
			
			var url = app.getEndPoint() + URL.all;

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
			});
		});
	}// end of get

	function getOneIndicator(){
		app.get(URL.one,function(req,res){
			
			var url = app.getEndPoint() + URL.one + "/" + req.query["indicatorId"] + ".json";

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
			});
		});
	}// end of getOneIndicator
});