/*! rwd-iframe.js © yamoo9.net, 2015.03 */
(function($){
	'use strict';

	/**
	 * 문서 내에 존재하는 <iframe> 요소 수집
	 * --------------------------------
	 */
	var $iframe = $('iframe');

	/**
	 * <iframe> 요소의 가로x세로 비율 조정 함수
	 * -----------------------------------
	 */
	var rwdIframe = function() {
		$.each($iframe, function(index, item){
			var $this = $iframe.eq(index);
			var iw = $this.width(),  // 2
				ih = $this.height(), // 1.2
				rw = $this.parent().width(), // 1.5
				ratio = rw/iw, // 1.5/2 = 0.75
				rh = Math.round(ih*ratio); // 1.2 * 0.75 = 0.9
			// 가로x세로 종횡비 변화 예: 2:1.2 ⇒ 1.5:0.9
			$this.css({
				width: rw,
				height: rh
			});
		});
	};

	/**
	 * 문서 로드/리사이즈 이벤트 발생 시,
	 * rwdIframe() 함수 호출
	 * --------------------------------
	 */
	$(window).on('load resize', function() {
		rwdIframe();
	});

	/**
	 * <body> 요소의 높이 변화 관찰
	 * 관찰 결과, 변화가 발생하면 rwdIframe() 함수 호출
	 * ----------------------------------------
	 */
	var $watch_el = $('body'),
		cur_h     = $watch_el.innerHeight();

	setInterval(function() {
		var new_h = $watch_el.innerHeight();
		if ( cur_h != new_h ) {
			cur_h = new_h;
			rwdIframe();
		}
	}, 400);

})(window.jQuery);