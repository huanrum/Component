try {
    var fs = require('fs');

    (function replace(dir) {
        fs.readdirSync(dir).forEach(function (child) {
            if (fs.statSync(dir + '/' + child).isDirectory()) {
                replace(dir + '/' + child);
            } else {
                if (/\.ts$/.test(child)) {
                    var content = fs.readFileSync(dir + '/' + child).toString();
                    if(/templateUrl\s*:\s*\S+/.test(content)){
                        content = content.replace(/templateUrl\s*:\s*\S+/, 'templateUrl : \'' + dir + '/' + child.replace('.ts', '.html') + '\'');
                        fs.writeFileSync(dir + '/' + child, content);
                    }
                }
            }
        });
    })('app/component');

} catch (e) {

}


module.exports = {
    entry: './app/',
    output: {
        path: __dirname,
        publicPath: '',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.vue', '.ts', '.jsx', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            }
        ]
    },
    devtool: '#eval-source-map'
};