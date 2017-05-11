/**
 	敌机类
 */
function Enemy(src,speed,score,blood,time){
	//敌机图片地址
	this.src = src;
	//敌机
	this.self = null;
	//敌机的宽度
	this.width = 0;
	//敌机的高度
	this.height = 0;
	//敌机的left
	this.left = 0;
	//敌机的top
	this.top = 0;
	//敌机的速度
	this.speed = speed;
	//敌机的分值
	this.score = score;
	//敌机的血量
	this.blood = blood;
	//敌机的编号
	this.id = 0;
	//敌机爆炸时间
	this.time = time;

}
Enemy.prototype = {
	constructor: Enemy,
	__proto__: Enemy.prototype.__proto__,
	//初始化
	init: function(){
		var _this = this;
		var img = document.createElement('img');
		img.src = this.src[0];
		img.className = 'enemy';
		
		img.onload = function(){
			_this.width = img.offsetWidth;
			_this.height = img.offsetHeight;
			_this.left = Math.random()*(Engine.game.offsetWidth - plane.width) + plane.width/4;
			_this.top = -_this.height;
			img.style.left = _this.left + 'px';
			img.style.top = _this.top  + 'px';
			
		}
		Engine.game.appendChild(img);
		this.self = img;
		//
		this.id = '_' + ( Math.random() + '').substr(2);
		Engine.enemy[this.id] = this;
	},
	//移动
	move: function(){
		this.top += this.speed;
		
		if(this.top >= Engine.game.offsetHeight){
			this.self.remove();
			delete Engine.enemy[this.id];
			return;
		}
		if(Engine.gameImpact(this,plane)){
			this.destroy();
			plane.destroy();
			return;
		}
		this.self.style.top = this.top + 'px';
	}, 
	//爆炸
	boom: function(){
		var img = document.createElement('img');
		img.src = this.src[1];
		img.style.left = this.left + 'px';
		img.style.top = this.top + 'px';
		Engine.game.appendChild(img);
		setTimeout(function(){
			img.remove();
		},this.time)
	},
	//销毁
	destroy: function(){
		this.self.remove();
		this.boom();
		delete Engine.enemy[this.id];
	}

}
/**
 	小型飞机
 */
var SmallEnemy = function(){
	var speed = 5,
		score = 10,
		blood = 1,
		time = 250,
		src = ['image/enemy1.png','image/enemy1-boom.gif'];

	Enemy.call(this,src,speed,score,blood,time);
};
SmallEnemy.prototype = {
	constructor: SmallEnemy,
	__proto__: Enemy.prototype
};
/**
 	中型飞机
 */
var MiddleEnemy = function(){
	var speed = 4,
		score = 20,
		blood = 3,
		time = 500,
		src = ['image/enemy2.png','image/enemy2-boom.gif'];
	Enemy.call(this,src,speed,score,blood,time);
}
MiddleEnemy.prototype = {
	constructor: MiddleEnemy,
	__proto__: Enemy.prototype
};
/**
 	大型飞机
 */
var LargeEnemy = function(){
	var speed = 3,
		score = 100,
		blood = 10,
		time = 1000,
		src = ['image/enemy3.png','image/enemy3-boom.gif'];
	Enemy.call(this,src,speed,score,blood,time);
}
LargeEnemy.prototype = {
	constructor: LargeEnemy,
	__proto__: Enemy.prototype
};