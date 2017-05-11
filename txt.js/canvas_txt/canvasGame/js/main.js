var dom = document.getElementById("can"),
	can = dom.getContext("2d"),
	dw = dom.width,
	dh = dom.height,
	man = {
		x : 30,//吃豆人x坐标
		y : 30,//吃豆人y坐标
		r : 20,//吃豆人大小
		status : 3,//吃豆人状态
		level : 50,//吃豆人张闭嘴细腻度
		eat : false,//true张嘴,false闭嘴
		color : "#ffbe0d",//吃豆人颜色
		fx : "left",
		speed : 1
	}
	
	can.save();//保存画布初始状态
	
	run();
	
function run(){
	setTimeout(function(){
		//清除画布
		can.clearRect(0,0,dw,dh);
		
		//画吃豆人
		pMan();
		
		//判断吃豆人是应该张嘴还是应该闭嘴
		if(man.eat){
//			console.log("张嘴");
			man.status ++;
			if(man.status >= man.level){//吃豆人嘴张到最大的时候,应该闭嘴
				man.status = man.level;
				man.eat = false;
			}
		}else{
//			console.log("闭嘴");
			man.status --;
			if(man.status <= 0){//吃豆人嘴闭到最小的时候,应该张嘴
				man.status = 0;
				man.eat = true;
			}
		}
		if(man.x > dw - man.r){
			alert("GG");
		}else{
			man.x += man.speed;
			run();
		}
		
	},5)
}
	
function pMan(){
	
	var start = 0.25/man.level*man.status,
		end = 2-start;
	
	pinit();
	can.fillStyle = man.color;
	can.moveTo(man.x,man.y);
	can.arc(man.x,man.y,man.r,start*Math.PI,end*Math.PI);
	can.lineTo(man.x,man.y);
	can.closePath();
	can.fill();
}

function pinit(){
	can.restore();//恢复初始状态
	can.save();//保存初始状态
	can.beginPath();//另起一行
}
