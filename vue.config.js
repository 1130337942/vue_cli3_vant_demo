const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    // lintOnSave: false,
    // open: true, //浏览器自动打开页面
    devServer: {
        proxy: {
            '/api': {
                target: 'https://app_api.xunbaowang.net',
                secure: true,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
    css: { //   原文链接：https://blog.csdn.net/qq_40513881/article/details/84109699
        // modules:false,
        // extract:true,
        sourceMap: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    }






    // Paths
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    // devServer: {
    //     proxy: {
    //         "/api/": {
    //             target: "https://app_api.xunbaowang.net",
    //             "secure": true,
    //             "changeOrigin": true,
    //             "pathRewrite": {
    //                 "^/api": ""
    //             },
    //             "headers": {
    //                 "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36"
    //             }
    //         }
    //     }

    // }


}