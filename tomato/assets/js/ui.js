$(function(){
	
	$('.btn_open_menu').on('click',function () {
		if(!$(this).hasClass('open')) {
			$(this).addClass('open').siblings('.gnb').addClass('show');
			$('.hlogo').addClass('on');
		}else {
			$(this).removeClass('open').siblings('.gnb').removeClass('show');
			$('.hlogo').removeClass('on');
		}
		
	})

});


function parallaxFn () {
	var	_wh = $(window).height();
	var _sct = $(window).scrollTop();
	var $section = $('.main_sec_prods'); 
	var _target = $section.find('.img');
	var _ot = $section.offset().top + 150;
	var _secH = $section.innerHeight();
	var _bottom = _secH / 1.7;

	var _start = _sct + _wh;
	var _stop = _ot + _secH + _wh;

	_bttm1 = -_bottom + ((_start - _ot) * .2) > -100 ? -100 : -_bottom + ((_start - _ot) * .2);


	if (_start >= _ot && _start <= _stop) {
		_target.css({
			bottom: _bttm1
		})
	}else if (_start > _stop ) {
		_target.css({
			bottom: -_bottom + ((_wh + _secH) * .2)
		})
	}else {
		_target.css({
			bottom: - _bottom
		})
	}	
}