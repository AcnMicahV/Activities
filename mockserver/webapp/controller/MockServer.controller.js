sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller) {
    "use strict";

    return Controller.extend("sapips.training.mockserver.controller.MockServer", {
        onInit: function () {
         
        },

        onAdd: function () {
            var oView = this.getOwnerComponent().getModel("ProductsModel");

            var oData = {
                "ProductID": 999,
                "ProductName": "myProduct",
                "QuantityPerUnit": "QuantityPerUnit999",
                "UnitPrice": 123456.789,
                "UnitsInStock": 123,
                "UnitsOnOrder": 456,
                "ReorderLevel": 789,
                "Discontinued": false,
                "SupplierID": 2468
            };
            //Products is the folder from localService because it is where the data should be saved
            oView.create("/Products", oData);

        }

    });
});