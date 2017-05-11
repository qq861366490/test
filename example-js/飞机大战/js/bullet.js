/**
 	子弹类
 */
function Bullet(left,top){
	//子弹图片地址
	this.src = 'image/bullet.png';
	//子弹
	this.self = null;
	//子弹的宽度
	this.width = 0;
	//子弹的高度
	this.height = 0;
	//子弹的left
	this.left = left;
	//子弹的top
	this.top = top;
	
	//子弹的编号
	this.id = 0;
	
}
Bullet.prototype = {
	constructor: Bullet,
	__proto__: Bullet.prototype.__proto__,
	//初始化
	init: function(){
		var _this = this;
		var img = document.createElement('img');
		img.src = this.src;
		img.className = 'bullet';
		img.onload = function(){
			_this.width = img.offsetWidth;
			_this.height = img.offsetHeight;
			_this.left = plane.left + plane.width/2 - _this.width/2;
			_this.top = plane.top -  _this.height;
			img.style.left = _this.left + 'px';
			img.style.top = _this.top  + 'px';
			
		}
		Engine.game.appendChild(img);
		this.self = img;
		//
		this.id = '_' + ( Math.random() + '').substr(2);
		Engine.bullet[this.id] = this;
		this.move();
	},
	move: function(){
		
		this.top -= 5;
		if(this.top < 0){
			this.destroy();
			return;
		}
		for(var i in Engine.enemy){
			if(Engine.gameImpact(this,Engine.enemy[i])){
				Engine.enemy[i].blood--;
				this.destroy();
				if(Engine.enemy[i].blood<=0){
					Engine.score += Engine.enemy[i].score;
					Engine.enemy[i].destroy();
					Engine.scoreBox.innerHTML = '得分：'+Engine.score;
				}
			
			}
		}
		this.self.style.top = this.top + 'px';
	}, 
	boom: function(){

	},
	destroy: function(){
		this.self.remove();
		delete Engine.bullet[this.id];
	}


}
var bullet = function(){
	Bullet.apply(this,arguments);
};
bullet.prototype = {
	constructor: bullet,
	__proto__: Bullet.prototype
};