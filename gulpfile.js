let gulp = require('gulp')
let pug = require('gulp-pug')

gulp.task('pug', ()=> {
	return gulp.src("*.pug")
		.pipe(pug())
		.pipe(gulp.dest(""))
})