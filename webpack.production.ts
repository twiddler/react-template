import { merge } from 'webpack-merge'
import common, { defaultNodeEnvTo } from './webpack.common'

export default function () {
    defaultNodeEnvTo('production')

    return merge(common, {
        mode: 'production',

        output: {
            filename: '[name].[contenthash].js',
        },

        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
            },
        },
    })
}
