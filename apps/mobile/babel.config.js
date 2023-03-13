module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      "nativewind/babel",
      require.resolve("expo-router/babel"),
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: "../../.env",
          allowlist: ["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"],
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["../.."],
          alias: {
            // define aliases to shorten the import paths
            // app: '../../packages/app',
            "@wtw/api": "../../packages/api",
            "@wtw/ui": "../../packages/ui",
          },
          extensions: [".js", ".jsx", ".tsx", ".ios.js", ".android.js"],
        },
      ],
    ],
    presets: ["babel-preset-expo"],
  }
}
