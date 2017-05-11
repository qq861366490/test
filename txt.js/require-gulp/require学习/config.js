/*!
	配置文件
*/

/*
	用于配置文件路径及及暴露的模块名
	require.config({
		baseUrl: '基础路径',
		paths: {
			模块1: 模块1的路径,
			模块2：模块2的路径
		},
		//处理非AMD规范的模块，不建议使用（有时无效）
		shim: {
			
		}
	}) 
*/
require.config({
	baseUrl: 'public',
	paths: {
		jquery: 'lib/jquery-1.11.3',
		banner: 'js/banner'
	}
});