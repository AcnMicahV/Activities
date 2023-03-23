/*global QUnit*/

sap.ui.define([
	"sapipstraining/mockserver/controller/MockServer.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MockServer Controller");

	QUnit.test("I should test the MockServer controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
