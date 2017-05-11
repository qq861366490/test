
/**
 	游戏引擎
 */

var Engine = {
	//敌机
	enemy: {},
	//子弹
	bullet: {},
	//游戏状态
	isStart: false,
	//分数
	score: 0,
	//游戏界面的盒子元素
	game: document.querySelector('.container .game'),
	//开始界面按钮
	startBtn: document.querySelector('.container .start .start-btn'),
	//开始界面的盒子元素
	start: document.querySelector('.container .start'),
	//游戏结束文字的盒子元素
	gameover: document.querySelector('.container .game .game-over'),
	//游戏结束重新开始的按钮
	startBtn1: document.querySelector('.container .game .start-btn1'),
	//游戏界面的计分文字
	scoreBox: document.querySelector('.container .game .score'),
	//游戏界面的暂停继续
	pause: document.querySelector('.container .game .pause'),
	timer1: null,
	timer2: null,
	timer3: null,
	isPause: false,
	
	//初始化
	init: function(){
		
		this.gameStart();
	},
	//背景移动
	bgMove: function(){
		var num = 0,
			_this = this;
		clearInterval(this.timer3);
		this.timer3 =setInterval(function(){
			num++;
			_this.game.style['background-position-y'] = num + 'px';
		},30)
	
	},
	//游戏开始暂停继续
	gameStart: function(){
		var _this = this;

		//开始游戏
		this.startBtn.onclick = function(){
			_this.isStart = true;
			_this.start.style.display = 'none';
			_this.game.style.display = 'block';
			_this.gameInit();
			_this.bgMove();
		}
		//重新开始游戏
		this.startBtn1.onclick = function(e){
			e = e || window.event;
			e.stopPropagation ? e.stopPropagation() : e.cancelBubble = false;
			_this.isStart = true;
			_this.gameover.style.display = 'none';
			_this.scoreBox.innerHTML = '得分：0';
			_this.score = 0;
			_this.gameover.innerHTML = 'GAME OVER得分：'+0;
			_this.startBtn1.style.display = 'none';
			_this.gameInit();
			_this.bgMove();
		}
		//暂停游戏
		this.game.onclick = function(){
			if(!_this.isPause){
				_this.isPause = true;
				_this.pause.style.display = 'block';
				clearInterval(_this.timer1);
				clearInterval(_this.timer2);
				clearInterval(plane.timer);
				plane.self.style.display = 'none';
			}else{
				_this.isPause = false;
				_this.pause.style.display = 'none';
				plane.self.style.display = 'block';
				_this.gameInit();
				_this.gameMove();
				plane.fire();
			}

		}
	},
	gameInit: function(){
		clearInterval(this.timer1);
		this.timer1 = setInterval(function(){
			var num = parseInt(Math.random()*20);
			switch(num){
			 	case 6:
				case 5:
				case 4:
				case 3:
				case 2:
				case 1:
			 		new MiddleEnemy().init();
			 		break;
			 	case 9:
			 	case 8:
			 	case 7:
					new SmallEnemy().init();
					break;
				case 10:
					new LargeEnemy().init();
					break;	
			}
		},1000);
		if(this.isStart){
			plane.init();
			this.isStart = false;
		}
		this.gameMove();
	},
	gameMove: function(){
		var _this = this;
		clearInterval(this.timer2);
		this.timer2 = setInterval(function(){
			for(var i in _this.enemy){
				
				_this.enemy[i].move();
			}
			for(var i in _this.bullet){
				
				_this.bullet[i].move();
			}
		},50)
	},
	gameImpact: function(obj1,obj2){
		var l1 = (obj1.left + obj1.width < obj2.left),
			l2 = (obj2.left + obj2.width < obj1.left),
			t1 = (obj1.top > obj2.top + obj2.height),
			t2 = (obj2.top > obj1.top + obj1.height);
		if(l1 || l2 || t1 || t2){
			return false;
		}
		return true;
	},
	gameOver: function(){
		clearInterval(this.timer1);
		clearInterval(this.timer2);
		clearInterval(this.timer3);
		var imgs = document.querySelectorAll('img');
		for(var i in this.enemy){
			delete this.enemy[i];
		}
		for(var i in this.bullet){
			delete this.bullet[i];
		}
		for(var j=0,len = imgs.length; j<len; j++){
			imgs[j].remove();
		}
		this.isStart = false;
		this.gameover.style.display = 'block';
		this.gameover.innerHTML = 'GAME OVER得分：'+this.score;
		this.startBtn1.style.display = 'block';
	}

}
Engine.init();