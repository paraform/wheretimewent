import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"

const path = require("path")

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    {
      name: "@storybook/addon-essentials",
      options: { backgrounds: false },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@wtw/ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    })
  },
}
export default config
