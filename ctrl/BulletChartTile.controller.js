sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("customtileapp.ctrl.BulletChartTile", {
		_oTileModel: null,
		_oView: null,
		_sURL: null,
		_sModelName: "BulletChartModel",

		onInit: function() {
			this._oView = this.getView();
			this._oTileModel = new sap.ui.model.odata.ODataModel("/sap/fiori/destinations/d/ngs/sap/opu/odata/sap/ZBFFSAMPLE_SRV/");
			this._oView.setModel(this._oTileModel, this._sModelName);

			window.setInterval(jQuery.proxy(function() {
				this._oTileModel.refresh();
			}, this), 60000);
		}
	});
});