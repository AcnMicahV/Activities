sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("sapips.training.mockservice.controller.MockService", {
            onInit: function () {
                var oProducts = new JSONModel();
            },

            onSelectProduct: function(oEvent) {
                //Get the Control (List)
                var oList = oEvent.getSource();

                //Get the selected item
                var oSelItem = oList.getSelectedItem();

                //Get the context binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                //Bind the selected item to the control (SimpleForm in Panel4)
                var oForm = this.getView().byId("idProductDetails");

                //Get the control to be used
                oForm.bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            },

            onCreate: function() {
                var oView = this.getView();
                // MessageToast.show(evt.getSource().getId() + " Pressed");
                MessageToast.show("Hello");
            }
            
        });
    });
