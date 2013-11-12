var ScreenOrientation = {
	set: function(str, success, fail) {
		cordova.exec(success, fail, "ScreenOrientation", "set", [{"str":str}]);
	}
}

module.exports = ScreenOrientation;