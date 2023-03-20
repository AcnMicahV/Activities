sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1micah.controller.Home", {
            onInit: function () {
                //this.router = sap.ui.core.UIComponent.getRouterFor(this);
            },

            onSendBtn: function() {
               var oView = this.getView();
               var sName = oView.byId("NameInput").getValue();
               var sStreet = oView.byId("StreetInput").getValue();
               var sAge = oView.byId("AgeInput").getValue();
               var sTech = oView.byId("TechInput").getSelectedKey();

                var oSample = {
                    sNamePt : sName,
                    sStreetPt : sStreet
                }

                this.getRouter().navTo("Detail", oSample);

                // this.getRouter().navTo("Detail", {
                //     sNamePt: sName,
                //     sStreetPt: sStreet
                // });
                

            //   sap.m.MessageToast.show("Your name is " + sName + ", your street is " + sStreet + ", your age is " + sAge + " Your Tech is " + sTech);
            //   MessageToast.show("Your name is " + sName + ", your street is " + sStreet + ", your age is " + sAge + " Your Tech is " + sTech);
            //   debugger;

            },

            // onSendBtn: function() {
            //     //this.router.navTo("Detail");
            // this.getRouter().navTo("Detail");
            // },

            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

        });
    });
