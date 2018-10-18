const path = require("path");

module.exports = {
  entry: "./client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.jsx|\.js/,
        exclude: [/(node_modules|bower_components)/, /bundle.js/],
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
