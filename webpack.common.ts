import { envjoi } from '@twiddler/envjoi'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin'
import EsLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as Joi from 'joi'
import * as path from 'path'
import * as webpack from 'webpack'

const envSchema = Joi.object({
    API_BASE_URL: Joi.string().required(),

    // must begin with / to correctly resolve non-index.html requests
    PUBLIC_PATH: Joi.string().regex(/^\//u).default('/'),
})

const envjoiPlugin = envjoi(envSchema)

const configuration: webpack.Configuration = {
    devtool: 'source-map',

    entry: {
        app: ['react-hot-loader/patch', './src/index.tsx'],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: process.env.PUBLIC_PATH,
    },

    plugins: [
        new EsLintPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React template',
        }),
        new CspHtmlWebpackPlugin({
            // Allow script-src unsafe-eval for react-hot-loader
            // To allow React Devtools Extension in Firefox, add script-src unsafe-inline
            /* eslint-disable quotes */
            'script-src': ["'self'", "'unsafe-eval'"],
            'style-src': ["'self'", "'unsafe-inline'"],
            /* eslint-enable quotes */
        }),
        envjoiPlugin,
    ],

    module: {
        rules: [
            {
                test: /\.(js|ts|mjs|mts|jsx|tsx)$/u,
                exclude: /node_modules/u,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/u,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/u,
                type: 'asset/resource',
            },
        ],
    },

    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: [
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.mts',
            '.jms',
            '.css',
            '.png',
            '.svg',
            '.jpg',
            '.gif',
        ],
    },
}

export default configuration

export function defaultNodeEnvTo(defaultValue) {
    if (process.env.NODE_ENV === undefined) {
        process.env.NODE_ENV = defaultValue
    } else if (process.env.NODE_ENV !== defaultValue) {
        console.warn(
            `WARNING: The webpack configuration file you are using targets ${defaultValue}, but NODE_ENV is set to ${process.env.NODE_ENV} instead of ${defaultValue}.`
        )
    }
}
