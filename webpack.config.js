import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve('./build'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new Dotenv(),
    ],
    resolve: {
        modules: ['./', 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ],
    },
};
