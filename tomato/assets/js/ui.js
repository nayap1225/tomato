$(function(){
	
	selectBtn('.btn_select');
	// txtCopy ();

	$('.btn_open_menu').on('click',function () {
		if(!$(this).hasClass('open')) {
			$(this).addClass('open').siblings('.gnb').addClass('show');
			$('.hlogo').addClass('on');
		}else {
			$(this).removeClass('open').siblings('.gnb').removeClass('show');
			$('.hlogo').removeClass('on');
		}
	});

});


function parallaxFn () {
	var	_wh = $(window).height();
	var _sct = $(window).scrollTop();
	var $section = $('.main_sec_prods'); 
	var _target = $section.find('.img');
	var _secH = $section.innerHeight();
	// var _bottom = _secH - 50;
	var _bottom = _target.outerHeight() -80;
	// var _ot = $section.offset().top + 200;
	var _ot = $section.offset().top + _bottom + 10;

	var _start = _sct + _wh;
	var _stop = _ot + _secH + _wh;

	_bttm1 = -_bottom + ((_start - _ot) * .5) > -100 ? -100 : -_bottom + ((_start - _ot) * .5);


	if (_start >= _ot && _start <= _stop) {
		_target.css({
			bottom: _bttm1
		})
	}else if (_start > _stop ) {
		_target.css({
			bottom: -_bottom + ((_wh + _secH) * .5)
		})
	}else {
		_target.css({
			bottom: - _bottom
		})
	};
};

function selectBtn (el) {
	var $btn = el,
		$list = $('.select_list'),
		$listBtn = $($list).find('li');
	$($btn).on('click',function () {
		var $this = $(this);
		$this.hasClass('on') ? $this.removeClass('on').siblings($list).fadeOut(100) : $this.addClass('on').siblings($list).fadeIn(100);
	});
	$($listBtn).on('click','button',function () {
		var $this = $(this),
			_txt = $(this).text(),
			$selBtn = $this.closest($list).siblings($btn);
		$this.parent().addClass('on').siblings().removeClass('on').closest($list).fadeOut(100);
		$selBtn.removeClass('on').find('span').text(_txt);
	});
};

function txtCopy() {
	var $copyTxt = document.querySelector(".txtCopy");
	$copyTxt.select();
	$copyTxt.setSelectionRange(0, 99999)
	document.execCommand("copy");

	if($('.txtCopy').parent().find('.toast_wrap').length < 1) {
		$('.txtCopy').parent().append('<div class="toast_wrap"></div>')
	}

	var $wrapper = $('.toast_wrap')
	var _msg = $('<div class="toast_inner">메일주소가 복사되었습니다</div>');
	var _msgBox = _msg.appendTo($wrapper)

	_msg.appendTo($wrapper)
	$wrapper.show();
	setTimeout(function () {
		_msgBox.addClass('active');
	},300)
	
	_msgBox.delay(1500).queue(function() {
		$(this).removeClass('active');
		if($(this).closest('.toast_wrap').find('.active').length < 1) {
			setTimeout(function () {
				$('.toast_wrap').remove();
			}, 400)	
		}
	})


}