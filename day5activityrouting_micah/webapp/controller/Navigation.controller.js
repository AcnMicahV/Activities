sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent",
        "sap/ui/core/ValueState",
        "sap/m/MessageBox"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent, ValueState, MessageBox) {
        "use strict";

        return Controller.extend("zbtp.day5activityroutingmicah.controller.Navigation", {
            onInit: function () {

            },

            //Triggered whenever an Input has been changed
            onInputChange: function (oEvent) {
                var oInput = oEvent.getSource(),
                    sText = oInput.getValue();
                if (sText.length === 0) {
                    oInput.setValueState(ValueState.Error);
                } else {
                    oInput.setValueState(ValueState.None);
                }
            },

            //Triggered when the button is pressed
            onPress: function () {
                var oView = this.getView(),
                    oResourceBundle = oView.getModel("i18n").getResourceBundle(),
                    oInput1 = oView.byId("idInput1").getValue(),
                    oInput2 = oView.byId("idInput2").getValue();

                //Check if Input fields have values
                this.fnCheckFields(oInput1, oInput2);
                //Send error message if at least one of the input fields have error. Navigate if none have errors.
                if (oInput1 === ValueState.Error || oInput2 === ValueState.Error) {
                    MessageBox.error(oResourceBundle.getText("ErrorMessage"));
                } else {
                    this.fnNavigateToDetailPage(oInput1, oInput2);
                }
            },

            //Checks if values in Input fields are valid
            //oInput1 - Input object
            //oInput2 - Input Object
            fnCheckFields: function (oInput1, oInput2) {
                var sData1 = oInput1,
                    sData2 = oInput2;

                //Check if Input fields have values
                if (!sData1 && sData2) {
                    oInput1.setValueState(ValueState.Error);
                    oInput2.setValueState(ValueState.None);
                } else if (sData1 && !sData2) {
                    oInput1.setValueState(ValueState.None);
                    oInput2.setValueState(ValueState.Error);
                } else if (!sData1 && !sData2) {
                    oInput1.setValueState(ValueState.Error);
                    oInput2.setValueState(ValueState.Error);
                }
            },

            //Triggers navigation and passes parameters
            //oInput1 - 1st parameter passed for navigation
            //oInput2 - 2nd parameter passed for navigation
            fnNavigateToDetailPage: function (oInput1, oInput2) {
                var oRouter = UIComponent.getRouterFor(this);
                debugger;
                oRouter.navTo("Details", {
                        Param1: oInput1,
                        Param2: oInput2
                    }
                );

            },

        });
    });