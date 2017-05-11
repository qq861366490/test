'use strict'
var warterfall = $('.warterfall')[0],
	content = '';
for(var i=1; i<=70; i++){
	content += `<div class="imgs-wrap">
				<img src="imgs1/${i}.jpg" class="img"/>
				<p>哈啊啊啊啊啊</p>
			</div>`
}
warterfall.innerHTML += content;

//  [
//		{left:0,height:333},
//		{left:250,height:}
//	]
//

window.onload = function(){
	var arr=[],
		imgsWrap = $('.imgs-wrap'),
		clientW = 0,
		colsNum = 0,
		spaceX = 0;
		
	//初始化
	function init(){
		//获取当前屏幕的空宽度
		clientW = document.documentElement.offsetWidth;
		//初始化
		arr = [];
		//230需要计算得来 imgsWrap[0].offsetWidth
		colsNum = parseInt( clientW/ 230 );
		//间隙 4列就有5个间隙
		spaceX = (clientW%230)/(colsNum+1);
		handlePosition();	
	}
	init();
	function handlePosition(){
		//第一行
		for(var i=0; i<colsNum; i++){
			var l = (i+1)*spaceX+i*230;
			animate(imgsWrap[i],{
				left: l,
				top: 0
			})
			arr.push({left:l,height: imgsWrap[i].offsetHeight+20})
		}
		//剩余行
		for(var j=colsNum; j<imgsWrap.length; j++){
			var cols = getMinIndex();
			animate(imgsWrap[j],{
				left: arr[cols].left,
				top: arr[cols].height
			})
			//更新当前列的高度
			arr[cols].height += imgsWrap[j].offsetHeight+20;
		}
	}	
	
	window.onresize = function(){
		init();
	}

	function getMinIndex(){
		var min = arr[0].height,
			index = 0;
		for(var k=0; k<arr.length; k++){
			if(min>arr[k].height){
				min = arr[k].height;
				index = k;
			}
		}
		return index;
	}
	
}
