/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["files/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
