(function($) {

	var CFree = {
		challengeElement: null,
		context: null,
		initialOffset: null,
		menuDiff: 40, // .site-header height - .site-header.is-fixed height

		/**
		 * Initialize site
		 */
		init: function() {
			/**
			 * Set the initial breakpoint context
			 */
			CFree.challengeElement = document.querySelector('.breakpoint-context');
			CFree.challengeContext();

			/**
			 * Check breakpoint context on window resizing
			 * Throttled/debounced for better performance
			 */
			$(window).resize(CFree.debounce(function() {
				CFree.challengeContext();
			}, 250));

			/**
			 * Check to see if user is at the top of the screen
			 * Throttled/debounced for better performance
			 */
			CFree.initialOffset = $('.site').offset();

			$(window).on('scroll', CFree.debounce(function() {
				CFree.resizeHeader();
			}, 10));
		},

		/**
		 * Device targeting should be based on media queries in CSS,
		 * we do not define this in scripts
		 * Modified from http://davidwalsh.name/device-state-detection-css-media-queries-javascript
		 */
		challengeContext: function() {
			var styles = window.getComputedStyle(CFree.challengeElement),
				index = parseInt(styles.getPropertyValue('z-index'), 10),
				states = {
					1: 'mobile',
					2: 'tablet'
				};

			CFree.context = states[index] || 'desktop';
		},

		/**
		 * Resize the header
		 */
		resizeHeader: function() {
			if (CFree.context !== 'mobile') {
				var $header = $('.site-header'),
					topDiff = $(window).scrollTop();

				// Has the user scrolled down far enough?
				if (topDiff > (CFree.initialOffset.top + CFree.menuDiff)) {
					$header.addClass('is-fixed');
				} else {
					$header.removeClass('is-fixed');
				}
			}
		},

		/**
		 * Throttle/debounce helper
		 * Modified from http://remysharp.com/2010/07/21/throttling-function-calls/
		 */
		debounce: function(fn, delay) {
			var timer = null;

			return function() {
				var context = this,
					args = arguments;

				clearTimeout(timer);
				
				timer = setTimeout(function() {
					fn.apply(context, args);
				}, delay);
			};
		}
	};

	$(document).ready(function() {
		CFree.init();
	});

})(jQuery);