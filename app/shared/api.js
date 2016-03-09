var firebase = require("nativescript-plugin-firebase");
var common = require("./common");

var Api = (function(){
  function Api(){
    this.doInit();
  }

  Api.prototype.doInit = function () {
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
  
  return Api;

})();

exports.Api = new Api();
