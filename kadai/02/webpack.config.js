// CSSを別でまとめるライブラリの導入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // バンドルするモジュールごとの設定
  module: {
    rules: [
      {
        // プロジェクトにある.scssが対象
        test: /\.scss/,
        use: [
          {
            // CSSファイルを書き出すオプションを有効にする
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // CSSをバンドルする
            loader: "css-loader",
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              importLoaders: 2
            }
          },
          {
            // SCSSをバンドルする
            loader: "sass-loader",
          }
        ]
      }
    ]
  },
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/js/index.js`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/`,
    // 出力ファイル名
    filename: "bundle.js"
  },
  plugins: [
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: "style.css",
    }),
  ],

};
