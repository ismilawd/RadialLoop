const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/radial-slideshow.js',
    output: {
        filename: 'radial-slideshow.js',
        path: path.resolve(__dirname, 'dist'),
    },
};