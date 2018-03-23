module.exports = {
    entry: './app/',
    output: {
        path: __dirname,
        publicPath: '',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.vue','.ts','.jsx', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        loaders: [
            {
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
                    presets: ['react', 'es2015','stage-2']
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