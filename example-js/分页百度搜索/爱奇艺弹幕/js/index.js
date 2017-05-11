'use strict';
$(function(){
	var danmu = {
		video: $('.b-wrapper .video'),
		input: $('#user-input input'),
		sendBtn: $('#user-input .btn'),
		init: function(){
			var _this = this;
			this.sendBtn.click(function(){
				var value = _this.input.val();
				if(value.trim().length == 0) return;
				_this.creatDanmu(value);
			})
		},
		creatDanmu: function(value){
			var p = $('<p class="remark"></p>').html(value).css({
				top: this.getTop(),
				color: this.getColor()
			});
			this.video.append(p);
			p.stop(true).animate({
				left: '-100%'
			},5000,'linear',function(){
				p.remove();
				p = null;
			})

		},
		getTop: function(){
			return parseInt(Math.random()*460);
		},
		getColor: function(){
			return '#'+parseInt(Math.random()*255*16).toString(16);
		}
	}
	danmu.init();
})


