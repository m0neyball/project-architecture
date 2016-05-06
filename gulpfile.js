var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
  mix.sass('app.scss');

  /**
   * files : 設定監視哪些檔案一變更，就要啟動 Browsersync。
   * port : 設定 Browsersync 所使用的 port。
   * proxy : 指定到 8000，因為 PHP 內建 Http server 為 8000。
   *
   * 啟動 Browsersync，若將來對 PHP、blade 或 JavaScript 有任何修改，只要存檔就會在瀏覽器自動更新。
   */
  mix.browserSync({
    files: [
      'app/**/*',
      'public/**/*',
      'resources/views/**/*'
    ],
    port: 5000,
    proxy: 'localhost:8000'
  });
});
