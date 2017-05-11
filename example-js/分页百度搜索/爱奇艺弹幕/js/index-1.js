$(function(){
	//弹幕输入框
	var input = $('#user-input input');
	//弹幕区
	var video = $('.video');
	var height = video.height();
	//发送
	$('#user-input .btn').click(function(){
		//获取用户输入的弹幕信息
		var val = input.val();
		//判断用户是否输入
		if(val.trim() == ''){
			return;
		}
		
		//创建p元素
		var p = $('<p class="remark"></p>');
		p.html(val).css({
			top: getPosY(),
			color: getColor()
		});
		
		//往弹幕区追加弹幕信息
		video.append(p);
		
		//弹幕运动
		p.animate({
			left: '-100%'
		},5000,'linear',function(){
			p.remove();
		});
		
	});
	//随机获取top值
	function getPosY(){
		return Math.random()*height;
	}
	//随机颜色
	function getColor(){
		/*000 - fff    0 - 4096*/
		return '#'+(parseInt(Math.random()*4097).toString(16));
	}
});


//
/*10  100 => 0 + 0*10 + 1 * 100
16  23  => 3 * 1 + 2 * 16 = 35
25 => 19

2进制  1111 => 1 + 2 + 4 + 8 = 15
8进制  11   => 9*/


