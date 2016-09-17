sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("customtileapp.ctrl.ComparisonChartTile", {
	    _oTileModel : null,
	    _oView : null,
	    _sURL : null,
	    _sModelName : "ComparisonChartModel",
	
		onInit: function() {
			var sSheetAsJSONID, sSSID;
			sSheetAsJSONID = "https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=";
			sSSID = "1-c1URQtac5w5YyvWg8O5ZzQBLux64VY3eImHvxEE2MQ&sheet=Main";
			this._sURL = ["https://glacial-coast-81752.herokuapp.com",sSheetAsJSONID + sSSID].join("/");
	
			this._oView = this.getView();
			this._oTileModel = new sap.ui.model.json.JSONModel(this._sURL);
			this._oView.setModel(this._oTileModel, this._sModelName);
			
			window.setInterval(jQuery.proxy(function() {
				this._oTileModel.loadData(this._sURL);
			}, this), 60000);
	 	}
	});
});