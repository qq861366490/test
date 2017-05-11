/**
	js方法集合
	@Author pine
	@update 17/01/17
*/

/**
	$  获取元素
	@param
		selector 选择器
*/
function $(selector){
	//如果支持querySelectorAll，使用querySelectorAll
	if(document.querySelectorAll){
		var result = document.querySelectorAll(selector);
		return selector.indexOf('#') > -1 ? result[0] : result;
	}

	//拿到第一个字符，用于判断是何种选择器
	var firstC = selector[0];

	//#banner
	if(firstC == '#'){
		return document.getElementById( selector.substr(1) );
	}
	//.item
	if(firstC == '.'){
		return document.getElementsByClassName(selector.substr(1) );
	}
	//标签
	return document.getElementsByTagName(selector);
}


/**
	css 获取或者设置元素的样式

	@param 
		elem 元素
		style 样式名

*/
function css(elem,style){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem)[style];
	}
	return elem.currentStyle[style];
}

/**
	show 显示元素
	@param 
		elem 元素
*/
function show(elem){
	elem.style.display = 'block';
}

/**
	hide 隐藏元素
	@param
		elem 元素
*/
function  hide(elem){
	elem.style.display = 'none';
}


/**
	attr 获取和设置元素的属性值
	@param
		elem 元素
		attr 属性名
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
	prev 获取前一个元素节点
	@param
		elem 元素
*/

function prev(elem){
	//判断是否有前一个兄弟
	if(!elem.previousSibling) return null;
	//判断前一个兄弟是不是元素节点
	if(elem.previousSibling.nodeType == 1)  return elem.previousSibling;
	return prev(elem.previousSibling);
}

/**
	next 获取后一个元素节点
	@param
		elem 元素
*/
function next(elem){
	//判断是否有后一个兄弟
	if(!elem.nextSibling) return null;
	//判断后一个兄弟是不是元素节点
	if(elem.nextSibling.nodeType == 1)  return elem.nextSibling;
	return next(elem.nextSibling);
}

/**
	scrollTop  获取滚动条的高度
*/

function scrollTop(){
	return document.body.scrollTop || documnet.documentElement.scrollTop;
}

/**
	addClass  给元素添加样式
	@param
		elem 元素
		classN 需要添加的class
*/

function addClass(elem,classN){
	//拿到元素的class内容
	var c = elem.className;
	var arr = c.split(' ');
	//已经存在
	//if(c.indexOf(classN) > -1)  return;
	for(var i=0; i<arr.length; i++){
		if(arr[i] == classN)  return;
	}
	//给元素添加一个样式
	elem.className = c + ' ' + classN;
}

/**
	removeClass  给元素去除样式
	@param
		elem 元素
		classN 需要删除的class

	<div class="item current"></div>

	removeClass(div,'current'); // class="item"
*/

function removeClass(elem,classN){
	var c = elem.className,
		arr = c.split(' ');

	//遍历匹配
	for(var i=0; i<arr.length; i++){
		//如果是需要删除的class，则从数组中删除
		if(arr[i] == classN){
			arr.splice(i,1);
		}
	}
	elem.className = arr.join(' ');
}



/**
	offset  获取元素距离文档边界的距离
	@param
		elem 元素
*/
function offset(elem){
	var json = {};
	json.left = elem.offsetLeft;
	json.top = elem.offsetTop;

	//判断offsetParent是否为null
	while(elem.offsetParent){
		elem = elem.offsetParent;
		json.left += elem.offsetLeft;
		json.top += elem.offsetTop;
	}
	return json;
}

/**
	addEventListener 添加事件
	@param
		elem 元素
		type 事件类型
		fn   事件处理函数
		useCapture 是否捕获
*/
function addEventListener(elem,type,fn,useCapture){
	useCapture = useCapture || false;
	//判断参数是否合法
	if(arguments.length < 3) return;

	//判断是否支持addEventListener方法
	if(elem.addEventListener){
		elem.addEventListener(type,fn,useCapture);
	}else{
		elem.attachEvent('on'+type,fn);
	}
}


/**
 	readCookie 根据cookie名读取cookie值
 	@param
 		cookieName cookie名
*/
function readCookie(cookieName){
	//获取所有的cookie
	var cookie = document.cookie;
	//按照'; '进行分割成数组
	var arr = cookie.split('; ');
	//console.log(arr);
	//遍历查找cookie
	for(var i=0; i<arr.length; i++){
		//将每个cookie按=分隔成数组（提取cookie名和cookie值）
		var item = arr[i].split('=');
		//比较cookie名
		if(item[0] == cookieName){
			return item[1];
		}
	}
}


/**
	setCookie 设置cookie
	@param
		cookieN  cookie名
		value    cookie值
		expires  时间期限
*/
//document.cookie = 'user=pine;expires=时间;path=/'
function setCookie(cookieN,value,expires){
		//设定时间
		var date = new Date();
		date.setDate( date.getDate() + expires );
		//写入
		document.cookie = cookieN + '=' + value + 
				';expires=' + date.toGMTString() + ';path=/';
}

/**
	deleteCookie 删除cookie
	@param
		cookieN cookie名
*/
function deleteCookie(cookieN){
	//将时间设置为过去时间，cookie会自动删除
	setCookie(cookieN,null,-1);
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
function animate(elem,json,fn){
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
		elem 元素
*/
function index(elem){
	var children = elem.parentNode.children;
	for(var i=0,len=children.length; i<len; i++){
		if(elem == children[i]) return i;
	}
	return -1;
}

/**
	siblings 获取自己的兄弟元素（同一个父亲）
	@param
		elem 
*/
function siblings(elem){
	var children = elem.parentNode.children;
	var arr = [];
	for(var i=0,len=children.length; i<len; i++){
		if(elem != children[i]) {
			arr.push(children[i]);
		}
	}
	return arr;
}

