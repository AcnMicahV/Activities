sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/routing/History",
        "sap/ui/core/ValueState",
        "sap/m/MessageBox"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, History, ValueState, MessageBox) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.CreateEmployee", {
            onInit: function () {
                var oView = this.getView();
                this.fnCheckValidation(oView);
            },

            onSave: function () {
                var oModel = this.getOwnerComponent().getModel("EmployeesList");

                var oView = this.getView();

                var sFName = oView.byId("IFName").getValue();
                var sLName = oView.byId("ILName").getValue();
                var sAge = oView.byId("IAge").getValue();
                var sDHire = new Date(oView.byId("IDHire").getValue());
                var sCLevel = oView.byId("ICLevel").getSelectedKey();
                var sCProj = oView.byId("ICProj").getSelectedKey();

                var sEID = this.getEmployeeID(sFName, sLName).trim();

                var oData = {
                    "EmployeeID": sEID,
                    "FirstName": sFName,
                    "LastName": sLName,
                    "Age": sAge,
                    "DateHire": sDHire,
                    "CareerLevel": sCLevel,
                    "CurrentProject": sCProj

                }

                oModel.create("/Employee", oData, {
                    success: function () {
                        MessageToast.show("Employee has been created.");
                    },

                    error: function () {
                        MessageToast.show("Failed to create employee.");
                    }
                });

                this.getRouter().navTo("RouteEmployeeList");
            },

            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash && sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("RouteEmployeeList");
                }
            },

            onInputChange: function (oEvent) {
                var oModel = this.getOwnerComponent().getModel("EmployeesList");

                var oInput = oEvent.getSource(),
                    sText = oInput.getValue();

                if (sText.length === 0) {
                    oInput.setValueState(ValueState.Error);
                } else {
                    oInput.setValueState(ValueState.None);
                }

                if (oInput.getId().includes('IAge')) {
                    var age = parseInt(oInput.getValue());
                    if (age < 0 || age > 90) {
                        oInput.setValue("");
                        oInput.setValueState(ValueState.Error);
                        MessageBox.warning("Age cannot be less than 0 and greater than 90.");
                    }
                }

                if (oInput.getId().includes('IDHire')) {
                    var dateToday = new Date();
                    if (new Date(oInput.getValue()) > dateToday) {
                        oInput.setValue("");
                        oInput.setValueState(ValueState.Error);
                        MessageBox.warning("You cannot input future dates.");
                    }
                }

                if (oInput.getId().includes('ICLevel')) {
                    oModel.read("/CareerList(CareerID='" + oInput.getSelectedKey() + "')", {
                        success: function (oCareer) {},

                        error: function () {
                            oInput.setValue("");
                            oInput.setValueState(ValueState.Error);
                            MessageBox.warning("Valid entries from the list only.");
                        }
                    });
                }

                if (oInput.getId().includes('CurrentProjectSelect')) {
                    oModel.read("/ProjectList(ProjectID='" + oInput.getSelectedKey() + "')", {
                        success: function (oCareer) {},

                        error: function () {
                            oInput.setValue("");
                            oInput.setValueState(ValueState.Error);
                            MessageBox.warning("Valid entries from the list only.");
                        }
                    });
                }
            },

            onCancel: function () {
                this.getRouter().navTo("RouteEmployeeList");
            },

            fnCheckValidation: function (oView) {
                var oFirstName = oView.byId("IFName");
                oFirstName.attachBrowserEvent("keypress", function (event) {
                    var inputValue = event.which;
                    if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
                        event.preventDefault();
                    }
                });

                var oLastName = oView.byId("ILName");
                oLastName.attachBrowserEvent("keypress", function (event) {
                    var inputValue = event.which;
                    if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
                        event.preventDefault();
                    }
                });

                var oAge = oView.byId("IAge");
                oAge.attachBrowserEvent("keypress", function (event) {
                    var keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];
                    if (!($.inArray(event.which, keyCodes) >= 0)) {
                        event.preventDefault();
                    }
                });
            },

            getEmployeeID: function (firstName, lastName) {
                var dateToday = new Date();
                return "EMPID" + firstName.toUpperCase() + lastName.toUpperCase() + dateToday.getDate() + dateToday.getMonth() + 1;
            },

            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

        });
    });