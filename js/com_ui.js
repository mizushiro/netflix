/* 실행함수 */
    $(document).ready(function(){
        
        NetpUI.sideOpen('.side-open');
        NetpUI.popClose('.pop-close');
    });
    
    var NetpUI = {
        checkObj: function(obj) {
            return $(obj).length == 0 ? false : true;
        },

        
	// 모달팝업 실행
	sideOpen: function(obj){
		if(!NetpUI.checkObj(obj)) {
			return;
		};

		var openSide = null;
		var openmodalData = null;
		var openWrap = null;

		function init(obj) {
			openSide = $(obj);
			openmodalData = openSide.data('pop-open');
		};

		function event() {
			openSide.on('click', function (){
				openmodalData = $(this).data('pop-open');
				openWrap = $('.'+ openmodalData).addClass('on');
			});
		};

		init(obj);
		event();
	},

	// 모달팝업 종료
	popClose: function(obj) {
		if (!NetpUI.checkObj(obj)) {
			return;
		};

		var closemodal = null;

		function init(obj) {
			closemodal = $(obj);
            closemodalDate = closemodal.data('pop-close');;
		};

		function event() {
			closemodal.on('click', function (e) {
				$('.'+ closemodalDate).removeClass('on')
			});
		
		};

		init(obj);
		event();
	},
    };