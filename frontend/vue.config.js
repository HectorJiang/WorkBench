module.exports = {
    devServer: {
        port: 8002,
        host: "localhost",
        open: true, //配置浏览器自动打开
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8000',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //       }
        // } //配置代理，跨域使用
    },
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
}