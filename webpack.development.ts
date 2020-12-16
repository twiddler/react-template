import { merge } from 'webpack-merge'
import common, { defaultNodeEnvTo } from './webpack.common'

export default function () {
    defaultNodeEnvTo('development')

    return merge(common, {
        mode: 'development',

        devServer: {
            contentBase: './dist',
            hot: true,
            historyApiFallback: true, // Correctly resolve page refreshs
        },

        optimization: {
            usedExports: true,
        },
    })
}
