module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "entry",
        corejs: 3
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import"]
};
