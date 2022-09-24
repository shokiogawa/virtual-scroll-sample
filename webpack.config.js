const path = require("path");
const webpack = require('webpack');
module.exports = {
  //ビルドのタイプを設定(デフォルトではproduction)
  mode: "development",
  //起点となるファイルの場所
  entry: "./src/index.js",
  //バンドルファイルを出力
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  //import時にファイルの拡張子を省略する設定
  resolve: {
    extensions: [".js",".jsx",".ts", ".tsx", ".json"],
  },
  //リアルタイムで変更を確認しながら開発を行う設定
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    //3000番ポートに吐き出します。
    port: 3000,
  },
  //サーバー対応なのか、ブラウザ対応なのかの指定(今回はブラウザなのでweb)
  target: ["web"],
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
      }),
],
 //ローダーの設定
　module:{
  rules: [
    {
      test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
}
};