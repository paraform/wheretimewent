const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // HACK: for pnpm vite issue https://github.com/storybookjs/builder-vite/issues/237
    const { dirname } = require("path");
    config.root = dirname(require.resolve("@storybook/builder-vite"));
    // config.server.fsServe = {};
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@wtw/ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },
};
