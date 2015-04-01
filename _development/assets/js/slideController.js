SimpleCarousel.SlideController = (function() {
	function SlideController() {}

	SlideController.fn = SlideController.prototype;

	SlideController.fn.init = function() {
	    
	    this.$ulSlide = $('.slide-list');
	    this.$liSlide = $('.slide-item');
	    this.$prev = $('.prev');
	    this.$next = $('.next');
	    this.$navigation = $('.navigation-slide');

	    this.nextSlide();
	    this.prevSlide();
	    this.forSpanDots();
	};

	SlideController.fn.nextSlide = function(args) {
	    
	    var _this = this;
	    var btnNext = $(_this.$next).find('span');
	    var itemsLenght = $('.slide-list').find('li').length

	    _this.i = 0;
	    _this.leftSlide = 0;
	    _this.prevEq = 0;
	    
	    $(btnNext).click( function(){

	      if (_this.i >= itemsLenght-1) {
	        return false;
	      };
	      if (_this.prevEq >= itemsLenght) {
	        return false;
	      };
	      
	      _this.i++;
	      _this.prevEq++;
	      
	      $(_this.$liSlide).removeClass('active');
	      $(_this.$liSlide).eq(_this.i).addClass('active');

	      $(_this.spansDots).removeClass('active');
	      $(_this.spansDots).eq(_this.i).addClass('active');

	      _this.leftSlide += _this.calcStep();
	      _this.leftSlideFix = _this.leftSlide;

	      $(_this.$ulSlide).css('-webkit-transform', 'translate(' + -_this.leftSlideFix + 'px, 0px)');

	    });

	};

	SlideController.fn.prevSlide = function(args) {

		var _this = this;
		var btnPrev = $(_this.$prev).find('span');
		var itemsLenght = $('.slide-list').find('li').length

		_this.rightSlide = 0;

		$(btnPrev).click( function(){

		if (_this.leftSlide == 0) {
		return false;
		};

		_this.prevEq = _this.prevEq - 1;

		$(_this.$liSlide).removeClass('active');
		$(_this.$liSlide).eq(_this.prevEq).addClass('active');

		$(_this.spansDots).removeClass('active');
		$(_this.spansDots).eq(_this.prevEq).addClass('active');

		_this.rightSlide = _this.leftSlide - _this.calcStep();
		_this.leftSlide = _this.rightSlide;
		_this.i = _this.prevEq;

		$(_this.$ulSlide).css('-webkit-transform', 'translate(' + -_this.rightSlide + 'px, 0px)');

		});

	};

	SlideController.fn.calcStep = function(args) {
	    var steps = $(this.$ulSlide).width();
    	return steps;
	};

	SlideController.fn.forSpanDots = function(args) {
		var _this = this;
		var itemsLenght = $('.slide-list').find('li').length;
		var navigation = $('.navigation-slide');

		for (var i = 0; i < itemsLenght - 1; i++) {
		if (i == 0) {
		$(navigation).append('<span class="active">')
		};
		$(navigation).append('<span>')
		};

		_this.spansDots = $(navigation).find('span');
	};
	
	return SlideController;
})();
