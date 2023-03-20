/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbtp/day5activityrouting_micah/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
