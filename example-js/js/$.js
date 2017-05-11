
/**
 	js方法集合
 	@author jin
 	@update 2017/02/01
 */

/**
 	$ 获取元素
 	@param
 			selector 选择器(传入字符串)
 */
function $(selector){
		
		if(document.querySelectorAll){
			var r = document.querySelectorAll(selector);
			//如果是ID选择器，就返回$(selector)；如果不是，返回$(selector)[0];
			return selector.indexOf('#') > -1 ? r[0] : r;
		}
		
		var first = selector[0];
		//#ID选择器
		if(first == '#'){
			return document.getElementById(selector.substr(1));
		}
		//.class选择器
		if(first == '.'){
			return document.getElementsByClassName(selector.substr(1));
		}
		//tag标签选择器
		return document.getElementsByTagName(selector);
	}
/**
   css 获取元素的样式
   @param
   			elem 元素
   			style 样式名
   			value 
 */
//  function css(elem,attr){
// 	if(elem.currentStyle){
// 		return elem.currentStyle[attr];
// 	}else{
// 		return window.getComputedStyle(elem)[attr];
// 	}
// }

function css(elems,style,value){
	if(arguments.length == 2){
		if(elems.currentStyle){
			return elems.currentStyle[attr];
		}else{
			return window.getComputedStyle(elems)[attr];
		}
	}else if(arguments.length == 3){
		if(style == 'opacity'){
			elems.style.opacity = value;
			elems.style.filter = 'alpha(opacity = '+value*100+')';
		}else{
			elems.style[style] = value + 'px';
		}
	}
}
/**
   show 显示元素
   @param
   			elem 元素（传入已经经过选择器选择的元素）
 */
function show(elem){
	elem.style.display = 'block';
}
/**
   hide 显示元素
   @param
   			elem 元素
 */
function hide(elem){
	elem.style.display = 'none';
}
/**
	attr 获取和设置元素的属性值
	@param
		elem 元素
		attrName 属性名
		value 属性值
*/
function  attr(elem,attrName,value){
	if(arguments.length < 2) return;
	//获取属性值
	if(arguments.length == 2){
		return elem.getAttribute(attrName);
	}

	//设置属性值
	elem.setAttribute(attrName,value);
}
/**
	removeAttr 删除元素的属性名
	@param
		elem 元素
		attrName 属性名
*/
function  removeAttr(elem,attrName){
	return elem.removeAttribute(attrName);
}
/**
 	prev 获取前一个元素节点
 	@param
		elem 元素
 */
function prev(elem){
	if(!elem.previousSibling) return null;
	if(elem.previousSibling.nodeType == 1) return elem.previousSibling;
	return prev(elem.previousSibling);
}
/**
 	next 获取后一个元素节点
 	@param
		elem 元素
 */
function next(elem){
	//判断是不是有后一个兄弟
	if(elem.nextSibling) return null;
	//判断后一个兄弟是不是元素节点
	if(elem.nextSibling.nodeType == 1) return elem.nextSibling;
	return prev(elem.nextSibling);
}
/**
	获取元素的第一个子元素
*/
function first(elem){
	return elem.firstElementChild || elem.firstChild;
}

/**
	获取元素的最后一个子元素
*/
function last(elem){
	return elem.lastElementChild || elem.lastChild;
}
/**
 	addClass 给元素增加一个class
 	@param
		elems 元素集合
		classN 要增加的class名
 */
function addClass(elems,classN){
	var reg = new RegExp('(^|\\s)'+classN+'(\\s|$)');
	if(!elems.length){
		if( reg.test(elems.className) ) return ;
		if(!elems.className.length){
			elems.className += ''+classN;
		}else{
			elems.className += ' '+classN;
		}
	}else{
		for(var i=0; i<elems.length; i++){
			if( reg.test(elems[i].className) ) continue ;
			if(!elems[i].className.length){
				elems[i].className += ''+classN;
			}else{
				elems[i].className += ' '+classN;
			}
		}
	}
}
/**
 	removeClass 删除元素的一个class
 	@param
		elems 元素集合
		classN 要删除的class名
 */
function removeClass(elems,classN){
	var reg = new RegExp('(^|\\s)'+classN+'(\\s|$)');
	if(!elems.length){
		var n = elems.className;
		var r = n.replace(reg,'');
		elems.className = r;
	}else{
		for(var i=0; i<elems.length; i++){
			var n = elems[i].className;
			var r = n.replace(reg,'');
			elems[i].className = r;
		}
	}
}	
/**
 	scrollTop 获取滚动条的高度
 */
function scrollTop(){
	return document.body.scrollTop || document.documentElement.scrollTop;
}
/**
 	offset 获取元素距离文档左边界和上边界的距离
 	@param
		elem 元素
 */
function offset(elem){
	var o = {};
	o.left = elem.offsetLeft;
	o.top= elem.offsetTop;
	while(elem.offsetParent){
		elem = elem.offsetParent;
		o.left += elem.offsetLeft;
		o.top += elem.offsetTop;
	}
	return o;
}
/**
 	获取浏览器的可用宽度和高度
*/
function getClientWidth(){
	return document.documentElement.clientWidth;
}
function getClientHeight(){
	return document.documentElement.clientHeight;
}

/**
 	preventDefault 阻止事件的默认行为
 	@param 
 			e 事件对象
		
 */
function preventDefault(e){
	return e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
/**
 	stopPropagation 阻止事件的冒泡传播
 	@param
 			e 事件对象
		
 */
function stopPropagation(e){
	return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}
/**
 	addEventListener 添加监听事件
 	@param
 			elem 元素
 			type 事件类型
 			fn   事件方法函数
 			useCapture 是否事件捕获
		
 */
function addEventListener(elem,type,fn,useCapture){
	useCapture = useCapture || false ;
	if(arguments.length < 3) return;
	if(elem.addEventListener){
		return elem.addEventListener(type,fn,useCapture);
	}else{
		return elem.attachEvent('on'+type,fn);
	}
}
/**
 	readCookie 获取cookie名的值
 	@param 
 			cookieName cookie名（字符串）
 */
function readCookie(cookieName){
	var cookie = document.cookie;
	var arr = cookie.split('; ');
	for(var i=0; i<arr.length; i++){
		var item = arr[i].split('=');
		if(item[0] == cookieName){
			return item[1];
		}
	}
}
/**
 	setCookie 设置cookie
 	@param 
 			cookieName  cookie名(字符串)
			Value 		cookie值(字符串)
 			expires     cookie保存时间期限(天数)
 */
function setCookie(cookieName,value,expires){
	var date = new Date();
	date.setDate(date.getDate()+expires);
	document.cookie = cookieName+'='+value+
	';expires='+date.toGMTString()+';path=/';
}
/**
 	delCookie 删除cookie
 	@param 
 			cookieName cookie名
 */
function delCookie(cookieName){
	//setCookie(cookieName,null,-1);
	var date = new Date();
	date.setDate(date.getDate()-1);
	document.cookie = cookieName+'='+
	';expires='+date.toGMTString()+';path=/';
}

/**
	animate 元素运动框架(多个属性值同时变化)减速缓冲运动
	@param
	  			elem	元素
	  			json 	元素json对象集合
	  			fn      函数（前面的运动完成再运动）
	  	json={
	  		width: 100,
	  		height: 100,
	  		opacity: 1
	  	}
 */
function css1(elem,attr){
	if(elem.currentStyle){
		return elem.currentStyle[attr];
	}else{
		return window.getComputedStyle(elem)[attr];
	}
}
function animate(elem,json,time,fn){
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			var start = 0, end = 0, speed = 0;
			if(attr == 'opacity'){
				if(!css1(elem,attr)){
					start = 100;
				}else{
					start = Math.round( parseFloat( css1(elem,attr) )*100 );
				}
				end =  parseFloat( json[attr] )*100;
			}else{
				if(!parseInt(css1(elem,attr))){
					start = 0;
				}else{
					start =  parseInt( css1(elem,attr) );
				}
				end = parseInt(json[attr]) ;
			}
			speed = (end - start)/(time || 8);
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			start += speed;
			if(start != end){
				flag = false;
			}
			if(attr == 'opacity'){
				elem.style.opacity = start/100 ;
				elem.style.filter='alpha(opacity='+start+')';
			}else{
				elem.style[attr] = start + 'px';
			}
		}
		if(flag){
			clearInterval(elem.timer);
			fn && fn();
		}
	},13)
}


/**
 	运动框架（终极）
 	@param	
 		elem  元素
 		data  元素集合
 		time  运动时间
*/
function animate1(elem,data,time,fn){
	//清除上一次的动画
	clearInterval(elem.timer);
	var over = {}; //用于记录已经变化结束的样式
	//定义数据数组 
	var arr = [];
	//遍历json  整合数据 {width:500} => [{style: 'width',end: 500}]
	for(var key in data){
		//获取初值
		var start = parseFloat(css(elem,key));
		var json = {
			start: start,
			end: data[key], 
			speed: (data[key]-start)/(time/13),
			style: key
		};
		arr.push(json);
		over[key] = false;
	}
	//利用定时器不断改变元素的每个要发生变化的样式
	elem.timer = setInterval(function(){
		//利用for循环改变每个样式
		for(var i in arr){
			arr[i].start += arr[i].speed;
			//判断是否达到终值
			if(arr[i].start * arr[i].speed >= arr[i].end * arr[i].speed){
				arr[i].start = arr[i].end;
				//如果结束，将状态置为true
				over[arr[i].style] = true;
			}
			elem.style[arr[i].style] = (arr[i].style=='opacity')? arr[i].start : arr[i].start + 'px';
		}
		var flag = true; //true 代表全部结束
		//判断是否所有的样式运动完毕
		for(var k in over){
			//如果有一个没结束
			if(!over[k]){
				flag = false;
				break;
			}
		}
		if(flag){
			clearInterval(elem.timer);
			fn && fn(); //如果不传递回调函数，fn是undefined
		}
	},13);
}
/**
	用于清除该元素的所有动画
*/
function stop(elem){
	//如果元素没有动画，直接返回
	if(!elem.timerList) return;
	delete elem.timerList.length;
	for(var i in elem.timerList){
		clearInterval(elem.timerList[i]);
		delete elem.timerList[i];
	}
	delete elem.timerList;
}
/**
	aniamte 运动函数
	@param
		elem  运动的元素
		json  更改的样式集合  (距离相关width height  opacity)
			{
				width: 1000,
				height: 500,
				top: 300
			}
*/
function animate0(elem,json,fn){
	//定义定时器集合
	elem.timerList = {length:0};

	//遍历需要更改的样式集
	for(var i in json){
		//为每个需要更改的样式开一块作用域,互不干扰
	   /* (function(attr){
	    	
		})(i);*/
		//为每个需要更改的样式开一块作用域,互不干扰
		(function test(attr){
			//用户可加px，可不加
			var end = parseFloat( json[attr] );
			//如果attr是opacity,将终点值*100（因为速度取整了）
			end = (attr == 'opacity'?end*100:end);
			end = parseInt(end);
			//更改定时器长度
			elem.timerList.length++;
			//添加定时器
			elem.timerList[attr] = setInterval(function(){
				//获取初值
				var start = parseFloat( css(elem,attr) );
				//如果attr是opacity,将初始值*100（因为速度取整了）
				start = (attr == 'opacity'?start*100:start);
				start = parseInt(start);
				var speed = (end - start) / 8;
				//速度取整
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				
				//更改初值
				start += speed;
				elem.style[attr] = (attr=='opacity'?start/100:start+'px');
				//判断临界条件
				if(start == end){
					//清除定时器
					clearInterval(elem.timerList[attr]);

					//将运动完成的样式从timerList中删除
					delete elem.timerList[attr];

					//改变定时器集合的length
					elem.timerList.length--;

					//所有动画完成(length==0)，调用回调函数
					if(elem.timerList.length == 0){
						fn && fn(); //&&常用于对调用方法兼容
						//time = time || 400;
					}
				}
				//检测定时器是否全部关闭
				//console.log(1);
			},13);
		})(i);
	}
}


/**
 	index 获取元素的下标
 	@param
 			elem	元素
 */
function index(elem){
	var parent=elem.parentNode;
	var children = parent.children;
	for(var i in children){
		if(children[i]==elem)  return i;
	}
	return -1;
}
/**
 	siblings 获取元素的兄弟
 	@param
  			elem	元素
 */
function siblings(elem){
	var parent=elem.parentNode;
	var children = parent.children;
	var s = [];
	for(var i in children){
		if(children[i]!=elem){
			s.push(children[i]);
		}
	}
	return s;
}
/**
 	getVerify 获取随机数字、字母验证码
 	@param
  			len	验证码的位数
 */
function getVerify(len){
	var str='';
	for(;str.length<len;str+=Math.random().toString(36).substr(2));
	str=str.substr(0,len);
	var newStr='';
	for(var i=0;i<str.length;i++){
		newStr +=(Math.random()<0.5?str[i].toUpperCase():str[i]);
	}
	return newStr;
}


/**
 	add0 时间数字前面拼接0
 	@param
		num 需要拼接0的数字
 */
function add0(num){
	return num = num < 10 ? '0'+num : num;
}
/**
 	week 转化星期
 	@param
		m 需要转化的星期变量名
 */
function toWeek(m){
	var week1 = '日一二三四五六';
	return week1[m];
}
/**
 	getdate 获取时间（年月日时分秒）（没有星期）
 	@param
  			
 */
function getdate(){
	var date = new Date();
	var y = date.getFullYear(),
		m = add0( date.getMonth()+1),
		d = add0(date.getDate()),
		h = add0(date.getHours()),
		mi = add0(date.getMinutes()),
		s = add0(date.getSeconds());
	return y+'-'+m+'-'+d+' '+h+':'+mi+':'+s
}
/**
 	getDate 获取时间（年月日星期时分秒）
 	@param
  			
 */
function getdatew(){
	var date = new Date();
	var y = date.getFullYear(),
		m = add0( date.getMonth()+1),
		d = add0(date.getDate()),
		w = toWeek(date.getDay()),
		h = add0(date.getHours()),
		mi = add0(date.getMinutes()),
		s = add0(date.getSeconds());
	return y+'年'+m+'月'+d+'日'+'星期'+w+' '+h+':'+mi+':'+s
}
/**
 	placeholder  placeholder兼容
 	@param
 			inputs input框元素集合
			pcolor placeholder的颜色
 */

function placeholder(inputs,pcolor){
	inputs = inputs.length ? inputs : [inputs];
	var n = null;
	var values = [];
	for(var i=0,len=inputs.length;i<len; i++){
		(function(i){
			inputs[i].value = attr(inputs[i],'placeholder');
			inputs[i].style.color = pcolor;
			values[i] = attr(inputs[i],'placeholder');
			inputs[i].onfocus = function(){
				n = attr(this,'placeholder');
				if(n == null) n = '';
				if(n == values[i]){
					this.value = '';
				}
				this.removeAttribute('placeholder');
			}
			inputs[i].onblur = function(){
				if(this.value == ''){
					this.value = n;
				}
				values[i] = this.value;
				this.setAttribute('placeholder',n);
			}
		})(i);
	}
}