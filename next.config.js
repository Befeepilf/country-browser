const withPlugins = require('next-compose-plugins');
const preact = require('@zeit/next-preact');
const sass = require('@zeit/next-sass');
const path = require('path');

module.exports = withPlugins([[preact], [sass, {}]], {
  webpack: (config, options) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      components: path.resolve('components/'),
      styles: path.resolve('styles/'),
      'react': 'preact/compat',
      'react$': 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom$': 'preact/compat'
    });
    return config;
  }
});
