
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("sass", function(){
  gulp.src("./css/**/*.sass")
  .pipe(sass())
  .pipe(gulp.dest("./css"))
});
// sass для одиночной компиляции

gulp.task("sass:watch", function(){
  gulp.watch("./css/**/*.sass", ['sass']);
});

//sass:watch для компиляции без перерыва
//что бы начать новый проект нужно скопировать package.json и  gulpfile.js  и прописать "gulp up"







