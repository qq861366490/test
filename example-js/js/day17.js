'use strict'
var warterfall = $('.warterfall')[0],
	content = '';
for(var i=1; i<=70; i++){
	content += `<div class="imgs-wrap">
				<img src="imgs1/${i}.jpg" class="img"/>
				<p>哈啊啊啊啊啊</p>
			</div>`;
}
warterfall.innerHTML = content;

//  [
//		{left:0,height:333},
//		{left:250,height:600}
//	]
//

window.onload = function(){
	var arr = [],
		imgsWrap = $('.imgs-wrap');
	//第一行
	for(var i=0; i<4; i++){
		animate(imgsWrap[i],{left:i*250,top:0});
		
//		imgsWrap[i].style.left = i*250 + 'px';
//		imgsWrap[i].style.top = 0;
		arr.push({left:i*250,height:imgsWrap[i].offsetHeight+20})
	}
	
	//其他行
	for(var j=4; j<imgsWrap.length; j++){
		var col = getMinIndex();
		animate(imgsWrap[j],{left:col*250,top:arr[col].height});
		
//		imgsWrap[j].style.left = col*250 + 'px';
//		imgsWrap[j].style.top = arr[col].height+'px';
		arr[col].height += imgsWrap[j].offsetHeight+20;
	}
	function getMinIndex(){
		var min = arr[0].height,
			index1 = 0;
		for(var k=0; k<arr.length; k++){
			if(min>arr[k].height){
				min = arr[k].height;
				index1 = k;
			}
		}
		return index1;
	}
}
