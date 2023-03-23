sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.CreateEmployee", {
            onInit: function () {

            },

            onSave: function () {
                var oModel = this.getOwnerComponent().getModel("EmployeesList");

                var oView = this.getView();
                var sEID = oView.byId("IEID").getValue();
                var sFName = oView.byId("IFName").getValue();
                var sLName = oView.byId("ILName").getValue();
                var sAge = oView.byId("IAge").getValue();
                var sDHire = oView.byId("IDHire").getValue();
                var sCLevel = oView.byId("ICLevel").getSelectedKey();
                var sCProj = oView.byId("ICProj").getSelectedKey();

                var oData = {
                    "EmployeeID" : sEID,
                    "FirstName" : sFName,
                    "LastName" : sLName,
                    "Age" : sAge,
                    "DateHire" : sDHire,
                    "CareerLevel" : sCLevel,
                    "CurrentProject" : sCProj

                }

                oModel.create("/Employee", oData),

                this.getRouter().navTo("RouteEmployeeList");
            },

            onCancel: function () {
                this.getRouter().navTo("RouteEmployeeList");
            },

            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

        });
    });