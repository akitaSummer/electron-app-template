// electron webpack config
const path = require('path')

module.exports = {
    target: 'electron-main',
    entry: './build/electron-ts-build/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'main.js'
    },
    node: {
        __dirname: false
    }
}