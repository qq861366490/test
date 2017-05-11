/**
 	英雄机
 */
var plane = {
	//英雄机的图片地址
	src: ['image/plane.gif','image/plane-boom.gif'],
	self: 0,
	//英雄机的宽度
	width: 0,
	//英雄机的高度
	height: 0,
	//英雄机的left
	left: 0,
	//英雄机的top
	top: 0,
	timer: null,
	//初始化
	init: function(){
		var img = document.createElement('img');
		img.src = this.src[0];
		img.className = 'plane';
		Engine.game.appendChild(img);
		
		var _this = this;
		img.onload = function(){
			_this.self = img;
			_this.width = img.offsetWidth;
			_this.height = img.offsetHeight;
			_this.move();
			
		}
		this.fire();
	},
	move: function(){
		var _this = this;
		Engine.game.onmousemove = function(e){
			e = e || window.event;
			var l = Engine.game.offsetParent.offsetLeft,
				t = Engine.game.offsetParent.offsetTop,
				w = Engine.game.offsetWidth,
				h = Engine.game.offsetHeight;
			var x = e.clientX - l - _this.width/2,
				y = e.clientY - t - _this.height/2 + document.body.scrollTop;
			x = x < 0 ? 0 : ( x > ( w - _this.width) ? ( w - _this.width) : x );
			y = y < 0 ? 0 : ( y > ( h - _this.height) ? ( h - _this.height) : y );
			_this.self.style.left = x + 'px';
			_this.self.style.top = y + 'px';
			_this.left = x;
			_this.top = y;
		}
	},
	fire: function(){
		var _this = this;
		clearInterval(this.timer);
		this.timer = setInterval(function(){
			new bullet(_this.left,_this.top).init();
		},400)
		
	},
	boom: function(){
		var _this = this;
		this.self.src = this.src[1];
		setTimeout(function(){
			_this.self.remove();
			Engine.gameOver();
		},1000);
	},
	destroy: function(){
		clearInterval(this.timer);
		this.boom();
	}

}