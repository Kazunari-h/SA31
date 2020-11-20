module.exports = {
  // バンドルするモジュールごとの設定
  module: {
    rules: [
      {
        // プロジェクトにある.scssが対象
        test: /\.scss/,
        use: [
          // jsでlinkタグを読み込ませる
          "style-loader",
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
  }
};
