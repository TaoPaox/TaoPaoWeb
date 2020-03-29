// const path = require('path')

// function resolve(dir) {
//     return path.join(__dirname, dir)
// }


module.exports = {
    // entry:'./src/main.js',
    runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本
    publicPath: '',
    productionSourceMap: false, //不在production环境使用SourceMap
    devServer: {
        //跨域
        port: 7777, // 端口号
        // host: "192.168.50.123",
        open: true, //配置自动启动浏览器
        proxy: {
            // 配置跨域处理 可以设置多个
            '/api': {
                target: 'http://ybt.heletech.cn/api/interface.aspx',
                ws: true,
                changeOrigin: true
            },
            '/pdf': {
                target: 'https://ybt.heletech.cn:4333',
                ws: true,
                changeOrigin: true
            }
        }
    },

    // 用于多页配置，默认是 undefined
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.js',
            // 模板文件
            template: 'public/index.html',
            // 输出文件
            filename: 'index.html',
            // 页面title
            title: 'Index Page'
        }
    }


}