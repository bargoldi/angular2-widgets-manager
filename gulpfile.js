var del = require('del');
var path = require('path');
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var exec = require('child_process').exec;
var symlink = require('gulp-symlink');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var KarmaServer = require('karma').Server;

var tsProject = typescript.createProject('tsconfig.json');

var PATHS = {
    package: {
        ts: ['!src/*.d.ts', 'src/*.ts', 'src/**/*.ts'],
        html: 'src/**/*.html',
        css: 'src/**/*.css',
        test: 'src/*.spec.ts',
        typings: 'src/*.d.ts'
    },
    testTypings: [
        'dist/dts/*.d.ts'
    ]
};

gulp.task('clean', ['clean-package']);

gulp.task('build', ['build-package']);

gulp.task('rebuild', ['clean'], function () {
    return gulp.start('build');
});

gulp.task('clean-package', function (done) {
    return del(['dist'], done);
});

gulp.task('build-package', ['clean-package'], function () {
    return gulp.start('html-package', 'css-package', 'ngc-package');
});

gulp.task('html-package', function () {
    return gulp.src(PATHS.package.html).pipe(gulp.dest('dist'));
});

gulp.task('css-package', function () {
    return gulp.src(PATHS.package.css).pipe(gulp.dest('dist'));
});

gulp.task('ngc-package', function (done) {
    return exec(path.join("node_modules", ".bin", "ngc") + ' -p tsconfig.aot.json', function (err, stdout, stderr) {
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
        done(err);
    });
});

gulp.task('test-clean-build', function (done) {
    return del(['test/*.js'], done)
});

gulp.task('test-build', ['test-clean-build'], function () {
    var tsResult = gulp.src([PATHS.package.test, PATHS.package.typings].concat(PATHS.testTypings))
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('test'));
});

gulp.task('test', ['test-build'], function (done) {
    runSequence('test-link', 'test-run', ['test-link-clean', 'test-clean-build'], done);
});
gulp.task('test-link-clean', function (done) {
    return del(['rxjs'], done);
});
gulp.task('test-link', ['test-link-clean'], function () {
    return gulp.src('node_modules/rxjs/').pipe(symlink('rxjs'));
});
gulp.task('test-run', function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('test-watch', ['test-build'], function (done) {
    var karma = new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
    }).start();
    gulp.watch([PATHS.package.test], [tasks.testBuild]);
});

gulp.task('watch', ['watch-package', 'watch-demo'], function () {
});

gulp.task('watch-package', ['build-package'], function () {
    gulp.watch(PATHS.package.ts, ['ngc-package']);
    gulp.watch(PATHS.package.html, ['html-package']);
    gulp.watch(PATHS.package.css, ['css-package']);
});

gulp.task('default', function () {
    return gulp.start('rebuild');
});