sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.CreateEmployee", {
            onInit: function () {

            },

            onSave: function() {
                var oView = this.getView();
                var oModel = this.getOwnerComponent().getModel("ProductsModel");

                var sEid = oView.byId("IEID").getValue();
                var sFName = oView.byId("IFName").getValue();
                var sLName = oView.byId("ILName").getValue();
                var sDHire = oView.byId("IDHire").getValue();
                var sCLevel = oView.byId("ICLevel").getSelectedKey();
                var sCProj = oView.byId("ICProj").getSelectedKey();

                oModel.create("/Products", oData);
            },

            onCancel: function() {
                
            }

        });
    });
