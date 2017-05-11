/*!
	入口文件
*/

//加载配置文件
require(['config'],function(){

	require(['swiper','jquery','countDown'],function(swiper){
		var mySwiper = new Swiper ('.swiper-container', {
		    autoplay: 5000,
		    loop: true
		});

		$('.qianggou').countDown('2017/03/03 12:00',function(){
			console.log('下课了');
		})

	});

});