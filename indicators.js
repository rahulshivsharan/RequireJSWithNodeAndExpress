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
	var editIndicator = editIndicator;

	return obj;

	function init(){
		get();
		getOneIndicator();
		editIndicator();
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

	function editIndicator(){
		app.put(URL.one,function(req,res){
			
			var url = app.getEndPoint() + URL.one + "/" + req.query["indicatorId"] + ".json";
			var numerator = req.body["numerator"],
				indicatorType = req.body["indicatorType"],
				denominator = req.body["denominator"],
				name = req.body["name"],
				shortName = req.body["shortName"];


			request({
				url : url,
				method : "PUT",
				headers : app.getHeaders(),
				json : true,
				body : {
					"numerator" : numerator,
					"indicatorType" : indicatorType,
					"denominator" : denominator,
					"name" : name,
					"shortName" : shortName
				}
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
	}
});