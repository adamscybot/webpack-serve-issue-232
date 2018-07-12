const path = require('path')

module.exports = {
    extends: ['package-b/base-config.js'],
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './index.js'),
    },
}
