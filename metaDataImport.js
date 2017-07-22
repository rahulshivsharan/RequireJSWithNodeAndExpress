define("metaDataImport",[],function(){
	var obj = {};
	// public method
	obj.getData = getData;

	return obj;

	function getData(){
		var data = {
			"system": {
				"id": "eed3d451-4ff5-4193-b951-ffcc68954299",
				"rev": "78cffad",
				"version": "2.27",
				"date": "2017-07-03T12:18:42.935"
			},
			"dataSets": [

				{
					"lastUpdated": "2017-07-03T12:30:50.022",
					"id": "SwOdzq5MuZh",
					"created": "2017-07-03T11:04:33.437",
					"name": "Data trial set",
					"shortName": "Data trial set",
					"validCompleteOnly": false,
					"dataElementDecoration": false,
					"publicAccess": "rw------",
					"notifyCompletingUser": false,
					"noValueRequiresComment": false,
					"skipOffline": false,
					"fieldCombinationRequired": false,
					"renderHorizontally": false,
					"renderAsTabs": false,
					"mobile": false,
					"version": 1,
					"timelyDays": 15,
					"periodType": "Monthly",
					"openFuturePeriods": 0,
					"expiryDays": 0,
					"categoryCombo": {
						"id": "p0KPaWEg3cf"
					},
					"lastUpdatedBy": {
						"id": "M5zQapPyTZI"
					},
					"user": {
						"id": "M5zQapPyTZI"
					},
					"dataSetElements": [
						{
							"categoryCombo": {
								"id": "qI5bEmuW1bi"
							},
							"dataElement": {
								"id": "rhXstKVfvvj"
							},
							"dataSet": {
								"id": "SwOdzq5MuZh"
							}
						}
					],
					"compulsoryDataElementOperands": [],
					"translations": [],
					"dataInputPeriods": [],
					"organisationUnits": [						
						{
							"id": "ZwVNnjED1Dh"
						}
					],
					"userGroupAccesses": [],
					"attributeValues": [],
					"indicators": [],
					"userAccesses": [],
					"legendSets": []
				}
			],
			"dataElements": [
				{
					"code": "Population1524",
					"lastUpdated": "2017-07-03T12:17:11.901",
					"id": "rhXstKVfvvj",
					"created": "2017-07-03T12:17:11.901",
					"name": "Population aged 15-24",
					"shortName": "Population aged 15-24",
					"aggregationType": "SUM",
					"domainType": "AGGREGATE",
					"publicAccess": "rw------",
					"description": "Population aged 15-24",
					"valueType": "NUMBER",
					"zeroIsSignificant": false,
					"categoryCombo": {
						"id": "qI5bEmuW1bi"
					},
					"lastUpdatedBy": {
						"id": "M5zQapPyTZI"
					},
					"user": {
						"id": "M5zQapPyTZI"
					},
					"translations": [],
					"userGroupAccesses": [],
					"attributeValues": [],
					"userAccesses": [],
					"legendSets": [],
					"aggregationLevels": []
				}
			]
		}// data

		return data;
	} // end of getData
});