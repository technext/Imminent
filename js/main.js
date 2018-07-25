$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


// $('#countdown').countdown({
// 	date: "December 14, 2019 18:03:26",
// 	render: function(data) {
// 	  var el = $(this.el);
// 	  el.empty()
// 	    // .append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
// 	}
// });


/**
 * @name		jQuery Count-UP Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2012/09/count-up-jquery/
 * @license		MIT License
 */

(function ($) {

	// Number of seconds in every time division
	var days = 24 * 60 * 60,
		hours = 60 * 60,
		minutes = 60;

	var time = ['DAYS', 'HRS', 'MIN', 'SEC'];
	// Creating the plugin
	$.fn.countup = function (prop) {

		var options = $.extend({
			callback: function () { },
			start: new Date()
		}, prop);

		var passed = 0, d, h, m, s;

		// Initialize the plugin
		init(this, options);


		(function tick() {
			passed = Math.floor((new Date() - options.start) / 1000);

			// Number of days passed
			d = Math.floor(passed / days);
			updateDuo(0, d);
			passed -= d * days;

			// Number of hours left
			h = Math.floor(passed / hours);
			updateDuo(1, h);
			passed -= h * hours;

			// Number of minutes left
			m = Math.floor(passed / minutes);
			updateDuo(2, m);
			passed -= m * minutes;

			// Number of seconds left
			s = passed;
			updateDuo(3, s);

			// Calling an optional user supplied callback
			options.callback(d, h, m, s);

			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();

		// This function updates two digit positions at once
		function updateDuo(position, value) {
			value = value < 10 ? '0' + String(value) : value;
			$("#" + time[position] + " > b").html(value);
			
		}

		return this;
	};

	function init(elem, options) {
		$.each(time, function (i) {
			$('<div id ="' + this + '">').html(
				'<b></b><span>' + this + '</span>'
			).appendTo(elem);
		});
	}
})(jQuery);


$('#countdown').countup({
	start: new Date('04,10,2018,00:00:00') //year, month, day, hour, min, sec
});