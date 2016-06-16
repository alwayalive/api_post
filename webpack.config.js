// var path = require('path');
// var glob = require('glob');
//
// const debug = process.env.NODE_ENV !== 'production';
//
// function entries (globPath) {
//     var files = glob.sync(globPath);
//     var entries = {}, entry, dirname, basename;
//
//     for (var i = 0; i < files.length; i++) {
//         entry = files[i];
//         dirname = path.dirname(entry);
//         basename = path.basename(entry, '.js');
//         entries[ basename ] = entry;
//     }
//     console.info(entries)
//
//     return entries;
// }

module.exports = {
    entry: {
        "index":'./public/assets/js/entry.js',
        "data-model-list":'./public/assets/js/data-model-list/list.js',
    },
    // entry: entries('./public/assets/js/*.js'),
    // output: { 
    //     path: __dirname + '/public/dist/js/',
    //     publicPath: "/public/dist/js/",
    //     filename: "[name].js"
    // },
    output: {
        path: __dirname + '/public/assets/',
        publicPath: "/public/assets/",
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
          // { test: /\.js?$/, loaders: ['jsx-loader?harmony'] },
          { test: /\.js?$/, loaders: ['babel-loader'] }
        ]
    }
};