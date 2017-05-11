/*!
	gulpfile.js
	gulp的配置文件
*/

var 
	//加载gulp模块
	gulp = require('gulp'),

	//加载gulp-sass-china (编译和压缩sass)
	sassMin = require('gulp-sass-china'),

	//加载服务模块
	connect = require('gulp-connect');



//同步 编译和压缩sass文件
gulp.task('sass',function(){
	gulp.src('src/sass/*.{scss,sass}')
		.pipe( sassMin({
			outputStyle: 'expanded'
		}))
		.pipe(gulp.dest('dist/css'));
});

//开启服务
gulp.task('server',function(){
	connect.server({
		root: 'dist',
		livereload: true
	});
});

//监听
gulp.task('watch',function(){
	//当输入源发生变化的时候，执行sass任务
	gulp.watch('src/sass/*.{scss,sass}',['sass']);

	gulp.watch('dist/index.html',function(){
		gulp.src('dist/index.html').pipe(connect.reload());
	});
});

//监听-server任务
gulp.task('server-watch',['server','watch']);