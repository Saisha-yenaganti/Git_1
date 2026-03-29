sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";
    return Controller.extend("files.controller.View1", {
        onInit() {
        },
           onFileChange: function(oEvent){
            var file=oEvent.getParameter("files")[0];
            if(file){
                this.byId("fileNameText").setText("Selected:"+file.name);
            }
           },
           onUpload: function () {
            var oFileUploader = this.byId("fileUploader");
            var file = oFileUploader.oFileUpload.files[0];
            if (!file) {
                MessageToast.show("Please select a file first!");
                return;
            }
            var reader = new FileReader();
            var that = this;
            reader.onload = function (e) {
                var content = e.target.result;
                 that.byId("fileContent").setValue(content);
            };
            reader.readAsText(file);
        }
    });
});