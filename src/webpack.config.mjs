import path from 'path';
import { DefinePlugin } from 'webpack';

export default {
    resolve: {
        fallback: {
            "stream": require.resolve("readable-stream"),
            "crypto": require.resolve("crypto-browserify")
        }
    },
    plugins: [
        new DefinePlugin({
            'process.env.NODE_DEBUG': JSON.stringify(false)
        })
    ]
};

