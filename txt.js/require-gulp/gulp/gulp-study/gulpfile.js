
//加载gulp对象
var gulp = require('gulp');

/*
	添加任务
	gulp.task() 添加一个任务

	gulp(任务名,处理函数)

	gulp.src(需要操作的文件名)
	gulp.pipe() 管道
	gulp.dest(输出的文件路径)
*/

//复制html文件
gulp.task('copy-html',function(){
	gulp.src('index.html').pipe(gulp.dest('html'));
});

//复制所有的图片
/*
	* 代标文件夹下的所有文件
*/
gulp.task('copy-img',function(){
	gulp.src('img/*.jpg').pipe(gulp.dest('dist/img'));
});

//复制html文件中所有的文件
gulp.task('copy-all',function(){
	gulp.src('html/**/*').pipe(gulp.dest('dist/html'));
});


/*
	同时复制多个文件
	gulp.src([文件1,文件2])
*/
gulp.task('copy-more',function(){
	gulp.src(['html/**/*','img/**/*']).pipe(gulp.dest('dist/mix'));
});

//同时执行多个任务
gulp.task('build',['copy-img','copy-all','copy-more'],function(){
	//所有任务执行完毕 调用
	console.log('任务完毕，请指示！');
});



/*
	使用 gulp-imagemin 进行图片压缩
	
	pipe( imgMin() )  调用图片压缩
*/
var imgMin = require('gulp-imagemin');
gulp.task('imgmin',function(){
	gulp.src('img/**/*').pipe( imgMin() ).pipe(gulp.dest('imgmin'));
});


/*
	使用 gulp-uglify 进行js代码压缩
*/
var jsMin = require('gulp-uglify');
gulp.task('jsmin',function(){
	gulp.src('index.js').pipe( jsMin() ).pipe(gulp.dest('jsmin'));
});

/*
	使用 gulp-connect 开启服务

	livereload: true  开启自动刷新
	connect.reload() 
	gulp.src('dist/index.html').pipe( connect.reload() );
*/

var connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('watch',function(){

	gulp.watch('index.html',function(){
		gulp.src('index.html').pipe(gulp.dest('dist'));
	});

	gulp.watch('dist/index.html',function(){
		gulp.src('dist/index.html').pipe( connect.reload() );
	});
});

gulp.task('server-watch',['watch','server']);















/*var connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root: 'dist',
		livereload: true
	});
});*/


//文件监听并同步
// gulp.task('watch',function(){

// 	gulp.watch('index.html',function(){
// 		gulp.src('index.html').pipe(gulp.dest('dist'));
// 	});

// 	gulp.watch('img/**/*',['copy-img']);

// 	gulp.watch('dist/**/*.html',function(){
// 		gulp.src('dist/**/*.html').pipe(connect.reload());
// 	})

// });

//gulp.task('watch-server',['watch','server'])

