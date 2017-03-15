var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger');

gulp.task('sass', function(){
    return gulp.src('app/sass/main.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function () {
    return gulp.src('app/js/scripts.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js'))
});

gulp.task('cssLibMin',  function () {
    return gulp.src('app/libs/normalize-css/normalize.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
});

gulp.task('rigger', function () {
    return gulp.src('app/templates/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('app/'))
});

gulp.task('watch', ['browser-sync', 'sass', 'cssLibMin', 'scripts'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('default', ['watch']);

gulp.task('clearCache', function () {
    return cache.clearAll();
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svigoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img' , 'sass', 'cssLibMin', 'scripts'], function (){
    var buildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'));

    var buldFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});