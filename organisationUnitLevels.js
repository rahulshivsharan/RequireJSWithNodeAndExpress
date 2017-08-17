define("organisationUnitLevels",["app","request"],function(app,request){

	// private variabled
	var obj = {};
	var URL = {
		"all" : "/api/organisationUnitLevels.json",
		"one" : "/api/orgUnitLevel",
		"tree" : "/dhis-web-commons-ajax-json/getOrganisationUnitTree.action"
	}

	// public methods
	obj.init = init;

	// private methods
	var get = get;
	var getOneOU = getOneOU;
	var getOuTree = getOuTree;

	return obj;

	function init(){
		get();
		getOneOU();
		getOuTree();
	}

	function getOneOU(){
		app.get(URL.one,function(req,res){

			var url = app.getEndPoint();
			url += "/api/organisationUnitLevels/" + req.query["ouId"] + ".json";
			
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
			});	
		}); // end of app.get
	} // get 

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
				
		}); // end of app.get
	}; // end of get

	function getOuTree(){
		app.get(URL.tree,function(req,res){
			
			var url = app.getEndPoint() + URL.tree;

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
	}

}); // end of organisationUnitLevels