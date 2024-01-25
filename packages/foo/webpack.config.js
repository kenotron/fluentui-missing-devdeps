module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              transform: {
                react: {
                  runtime: "automatic",
                  importSource: "@fluentui/react-jsx-runtime",
                },
              },
            },
          },
        },
      },
    ],
  },
};
