SimpleCarousel.Application = (function() {
	function Application(){

		// this.routeClass = {
		// 	'/www/': SimpleCarousel.SlideController
		// };

	}
	
	Application.fn = Application.prototype;

	Application.fn.run = function(location){
		// var RouteClass = this.routeClass[location.pathname];

		// if (RouteClass) {
		// 	var newSlider = new RouteClass();

		// 	newSlider.init();
		// }
		var newSlider = new SimpleCarousel.SlideController;
		newSlider.init();
	}

	return Application;
})();
