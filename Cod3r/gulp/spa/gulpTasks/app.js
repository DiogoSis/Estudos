//criando a estrutura inteira dos arquivos

const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require ('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

//collapseWhitespace = tirar os espaços brancos de uma aplicaçao
function appHTML () {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
}

function appCSS () {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments" :true}))
        //unglyComments -  nao quero que os comentarios apareçam no arquivo final
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS () {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG () {
    return gulp.src('src/assets/imgs/**/*.*')
        //.pipe(concat('app.min.imgs'))
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML, 
    appCSS, 
    appJS, 
    appIMG
}
