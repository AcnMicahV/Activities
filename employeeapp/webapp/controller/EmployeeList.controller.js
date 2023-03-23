sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeList", {
            onInit: function () {
                
            },

            onSelect: function(oEvent){
                //Get the control list
                var oList = oEvent.getSource();

                //Get the selected item
                // var oSelItem = oList.getSelectedItem();

                //Get the context binding path
                // var sSelItemPath = oSelItem.getBindingContextPath();
                var sSelItemPath = oList.getBindingContextPath();

                //Bind the selected item to the control
                var oForm = this.getView().byId("headerForTest");

                oForm.bindElement({
                    path: sSelItemPath,
                    model: "Employee"
                })

            },

            onAdd: function() {
                this.getRouter().navTo("RouteCreateEmployee");
            },

            onDelete: function() {
                MessageBox.confirm("Are you sure you want to delete the selected employee/s?");
            },

            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

        });
    });
