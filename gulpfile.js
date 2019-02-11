const { series, src, dest } = require('gulp');
const clean = require('gulp-clean');
const minify = require('gulp-minify');
const gzip = require('gulp-gzip');

function cleanTask() {
    return src('dist', {read: false, allowEmpty: true})
        .pipe(clean());
}

function minifyTask() {
    return src('src/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
    }))
    .pipe(dest('dist'))
}

function compress() {
    return src('dist/tinyquoter.min.js')
    .pipe(gzip())
    .pipe(dest('dist'))
}

exports.build = series(cleanTask, minifyTask, compress);
exports.default = exports.build;