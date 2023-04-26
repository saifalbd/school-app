const mix = require('laravel-mix');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
mix.webpackConfig({
  
    stats: {
         children: true
    }
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('vue/app.ts', 'public/js') .vue({
    version: 3,
})
.sass('vue/assets/scss/main.scss', 'public/css')
.js('resources/avisitor/js/app.js', 'public/visitor/js')
.sass('resources/avisitor/sass/app.scss', 'public/visitor/css')
.browserSync({
    proxy: 'http://127.0.0.1:8000'
});

/*

*/
