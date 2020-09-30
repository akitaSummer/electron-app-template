// react webpack config

const {
    override,
    addBabelPlugin,
    addWebpackPlugin,
} = require('customize-cra');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (config, env) => {
    const prod = config.mode === 'production';

    return override(!prod && addBabelPlugin('react-refresh/babel'), !prod && addWebpackPlugin(new ReactRefreshPlugin()))(config, env);
};