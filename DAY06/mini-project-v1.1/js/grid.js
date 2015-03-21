(function(global){
	var grid = document.querySelector('.grid');
	// 사용자가 키보드를 누를 때를 감지
	document.onkeydown = function(e) {
		// e <- Event 객체
		// 키코드 e.keyCode
		// 71 === G 키
		if( e.keyCode === 71 ) {
			grid.classList.toggle('show');
		}
	};

})(window);