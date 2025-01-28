/** @type { import('@storybook/react-vite').StorybookConfig } */
import path from "path";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      "@atoms": path.resolve(__dirname, "../src/components/atoms"),
      "@molecules": path.resolve(__dirname, "../src/components/molecules"),
      "@organisms": path.resolve(__dirname, "../src/components/organisms"),
      "@pages": path.resolve(__dirname, "../src/components/pages"),
      "@templates": path.resolve(__dirname, "../src/components/templates"),
    };
    return config;
  },
};

export default config;
