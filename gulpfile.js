const gulp = require ('gulp');
const {src, dest} = require ('gulp');
const browsersync = require ('browser-sync').create();
const clean = require('gulp-clean');
const scss = require('gulp-sass')(require('sass'));
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;


function browserSync () {
    browsersync.init({
        server:{
            baseDir: './dist'
        },
        notify: false
    })
};

function html () {
    return src('./src/index.html')
        .pipe(dest('dist'))
        .pipe(browsersync.stream())
}

function watchFiles () {
    gulp.watch(['./src/index.html'],html)
    gulp.watch(['./src/styles/*.scss'],css)
    gulp.watch(['./src/**/*.js'],js)
}

function cleanDist () {
    return src('dist')
        .pipe(clean());
};

function css () {
    return src('./src/styles/*.scss') 
    .pipe(scss())
    .pipe(cleancss()) 
    .pipe(dest('dist/styles'))
    .pipe(browsersync.stream())
}

function js () {
    return src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write()) 
    .pipe(dest('dist/js'))
    .pipe(browsersync.stream())
}

const build = gulp.series(cleanDist, js, css, html)
const watch = gulp.parallel(build,watchFiles, browserSync);

exports.js = js;
exports.watch = watch;
exports.default = watch;
exports.build = build;
exports.html = html;
exports.cleanDist = cleanDist;
exports.css = css;

