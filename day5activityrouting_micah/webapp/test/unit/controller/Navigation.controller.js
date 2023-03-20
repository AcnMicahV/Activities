/*global QUnit*/

sap.ui.define([
	"zbtp/day5activityrouting_micah/controller/Navigation.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Navigation Controller");

	QUnit.test("I should test the Navigation controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
