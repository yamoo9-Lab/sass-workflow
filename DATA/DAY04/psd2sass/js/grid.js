(function(global){
	'use strict';

	var page = document.querySelector('#page');

	page.classList.add('grid');

	document.onkeydown = function(event) {
		event = event || window.event;
		var key = event.keyCode || event.which;
		var shift = event.shiftKey;
		// Shift + G(71)
		if (shift && key === 71) {
			page.classList.toggle('grid');
		}
	}



})(window);