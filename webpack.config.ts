import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js','.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ],
    devServer: {
        static: path.join(__dirname, 'build'),
        compress: true,
        port: 4000,
    },
};

export default config;
