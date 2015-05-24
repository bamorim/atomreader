var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');

// Webpack Dev Server
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackDevConfig = require('./webpack.config.dev.js');
var webpackStatsConfig = {
  colors: true,
  chunks: false
}

var webpackConfig = require('./webpack.config.js');

gulp.task('webpack-server', function(callback){
  var compiler = webpack(webpackDevConfig);
  new WebpackDevServer(compiler, {
    contentBase: __dirname+"/build",
    stats: webpackStatsConfig,
    hot: true,
    watchDelay: 100
  }).listen(8080, "localhost", function(err){
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html")
  })
});

gulp.task('prepare-dev-server',function(){
  gulp.src("src/index.html")
  .pipe(gulp.dest("build/"));
});

gulp.task('server', ['webpack-server', 'prepare-dev-server']);

// Linting

gulp.task('lint', function(){
  gulp.src("src/**/*.js")
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('watch-lint', function(callback){
  gulp.watch("src/**/*.js", ['lint']);
});

// Building

gulp.task('webpack', function(callback){
  webpack(webpackConfig, function(err,stats){
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString(webpackStatsConfig));
    callback();
  })
});

// Distribution
var removeCode = require('gulp-remove-code');
var ghPages = require('gulp-gh-pages');

gulp.task('dist',['webpack'], function(){
  gulp.src("src/index.html")
    .pipe(removeCode({production: true}))
    .pipe(gulp.dest("dist"))
});

gulp.task('publish', ['dist'], function(){
  gulp.src(["dist/**/*"])
    .pipe(ghPages())
    .pipe(gulp.dest("dist")); // For some weird reason gh-pages are not commiting and doing stuff
});
