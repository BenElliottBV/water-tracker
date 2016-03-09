var firebase = require("nativescript-firebase");
var common = require("./common");

var Api = (function(){
  function Api(){
    this.doInit();
  }

  DemoAppModel.prototype.doInit = function () {
    firebase.init({
      url: common.apiUrl
    }).then(
        function (result) {
          console.log("Firebase init success!");
        },
        function (error) {
          console.log("firebase.init error: " + error);
        }
    );
  };

})();

exports.Api = new Api();
