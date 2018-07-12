const path = require('path')

module.exports = {
    context: path.resolve(__dirname, './src'),
    target: 'web',
    output: {
        path: path.resolve(process.cwd(), './dist'),
        filename: 'bundle.js',
    },
}