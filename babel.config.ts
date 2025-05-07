import type { ConfigFunction } from '@babel/core';

const config: ConfigFunction = () => ({
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    '@babel/preset-typescript',
  ],
});

export default config;