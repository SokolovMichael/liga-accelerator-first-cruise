const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const del = require('del');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const gcmq = require('gulp-group-css-media-queries');
const htmlmin = require('gulp-htmlmin');
const squoosh = require('gulp-libsquoosh');
const svgo = require('gulp-svgo');

const css = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer({
      grid: true,
    })]))
    .pipe(gcmq()) // выключите, если в проект импортятся шрифты через ссылку на внешний источник
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(server.stream());
};

const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
};

const js = () => {
  return gulp.src(['source/js/main.js'])
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('build/js'))
};

const optimizeBackgroundImages = () => {
  return gulp.src('source/img/intro/*.jpg')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img/intro'));
};

const copyImages = () => {
  return gulp.src(['source/img/**/*.{png,jpg}', '!source/img/intro/*.jpg'])
    .pipe(gulp.dest('build/img'));
};

const createWebp = () => {
  return gulp.src(['source/img/**/*.{png,jpg}', '!source/img/intro/*.jpg'])
    .pipe(squoosh({
        webp: {}
    }))
    .pipe(gulp.dest('build/img'));
};

const svg = () => {
  return gulp.src(['source/img/**/*.svg', '!source/img/sprite/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/img'));
};

const sprite = () => {
  return gulp.src('source/img/sprite/*.svg')
    .pipe(svgo())
    .pipe(svgstore({
        inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
};

const copy = () => {
  return gulp.src([
    'source/fonts/**',
  ], {
    base: 'source',
  })
      .pipe(gulp.dest('build'));
};

const clean = () => {
  return del('build');
};

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/**.html', gulp.series(copy, refresh));
  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series(css));
  gulp.watch('source/js/**/*.{js,json}', gulp.series(js, refresh));
  gulp.watch('source/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('source/img/**/*.svg', gulp.series(sprite, refresh));
  gulp.watch('source/img/**/*.{png,jpg,webp}', gulp.series(copyImages, refresh));
  gulp.watch('source/favicon/**', gulp.series(copy, refresh));
  gulp.watch('source/video/**', gulp.series(copy, refresh));
  gulp.watch('source/downloads/**', gulp.series(copy, refresh));
  gulp.watch('source/*.php', gulp.series(copy, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(clean, copy, optimizeBackgroundImages, copyImages, css, html, js, svg, sprite, createWebp);

const start = gulp.series(build, syncServer);

exports.webp = createWebp;
exports.start = start;
exports.build = build;
