$(function(){
	var 
		verify = $('.verify'),
		main = verify.find('.verify-main'),
		img = verify.find('.verify-img'),
		slice = verify.find('.verify-slice'),
		move = main.find('.verify-move'),
		tip = main.find('.verify-tip'),
		width = move.width(),
		vWidth = main.width();


	move.hover(function(){
		img.show();
	},function(){
		img.hide();
	})
	move.on('mousedown',function(e){
		e.stopPropagation();
		var self = $(this),
			doc = $(document);
		self.addClass('move');
		tip.hide();
		doc.on('mousemove',function(e){
			e.stopPropagation();
			img.show();
			var x = e.pageX - main.offset().left - width/2;
			x = x < 0 ? 0 : (x > (vWidth-width) ? (vWidth-width) : x);
			move.css({
				left: x
			});
			slice.css({
				left: x+20
			})
		});
		doc.on('mouseup',function(){
			doc.off('mousemove');
			move.removeClass('move');
			tip.show();
			var l = parseInt( move.css('left') );
			if(l <= 140 && l >= 134){
				alert('验证成功');
				slice.css({
					left: 20
				});
				move.css({
					left: 0
				});
				img.hide();
				return;
			}else{
				slice.stop(true).animate({
					left: 20
				});
				move.stop(true).animate({
					left: 0
				});
				img.hide();
			}
		})
	})

});