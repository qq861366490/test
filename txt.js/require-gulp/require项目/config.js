/*!
	配置文件
*/

require.config({
	baseUrl: 'js',
	paths: {
		swiper: 'swiper',
		jquery: 'jquery-1.11.3',
		countDown: 'jquery.countdown'
	},
	//shim有时候有效，有时候无效
	/*shim: {
		countDown: {
			deps: ['jquery']
		}
	}*/
});