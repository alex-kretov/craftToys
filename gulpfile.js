"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var svgstore = require("gulp-svgstore");
 
 gulp.task('style', function() {
 gulp.src('less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
       autoprefixer()
    ]))
    .pipe(gulp.dest('css'))
    .pipe(server.stream()); 
});

gulp.task("sprite", function() {
  return gulp.src("img/inline-icons/*.svg")
    .pipe(svgstore({      /* вырезает из SVG-файлов лишнюю инф-цию */
      inLineSvg: true
    }))
    .pipe(rename("sprite.svg")) /* нужно переименовать, так как мы не знаем имя спрайта */
    .pipe(gulp.dest("img"))
});

gulp.task('serve', ['style'], function(){
    server.init({
      server: '.',
      notify: false,
      open: true,
      cors: true,
      ui: false    
    });
    
    gulp.watch('less/**/*.less',['style']);
    gulp.watch('*.html').on('change', server.reload);  
    
});































