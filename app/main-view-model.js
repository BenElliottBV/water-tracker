var observable = require("data/observable");
var observableArray = require("data/observable-array");
var tnsfx = require('nativescript-effects');
var apiModule = require('./shared/api');

var HelloWorldModel = (function(_super) {
  __extends(HelloWorldModel, _super);

  function HelloWorldModel() {
    _super.call(this);
    this.set("drinks", new observableArray.ObservableArray());
    this.set("counter", this.drinks.length);
    this.set("mls",800);
  }

  HelloWorldModel.prototype.tapAction = function(args) {
    console.log(this.get("counter"));
    this.get("drinks").push(this.get("mls"));
    this.get("drinks").forEach(function(d){
      console.log(d);
    })

    console.log(this.get("drinks").length)

    var glass = args.object;
    glass.shake();
  };
  return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
