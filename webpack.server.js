const path = require('path')
const CWD = process.cwd()
const nodeExternals = require('webpack-node-externals')
module.exports = {
    name:'server',
    entry:[path.resolve(CWD,'server/server.js')],
    output:{
        path:path.resolve(CWD,'dist'),
        filename: 'server.generated.js',
        publicPath:'/dist/',
        libraryTarget: 'commonjs2'
    },
    externals:[nodeExternals()],
    target:'node',
    module: {
        rules:[
            {
            test: /\.js$/,
            use:['babel-loader'],
            exclude:/node_modules/
        }

        ]
    }
}