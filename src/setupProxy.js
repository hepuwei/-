const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app)=>{
    app.use("/ajax",createProxyMiddleware({
        target:"https://midway.51tiangou.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    })),
    app.use("/api",createProxyMiddleware({
        target:"https://base.51tiangou.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    })),
    app.use("/search",createProxyMiddleware({
        target:"https://searchweb.51tiangou.com",
        changeOrigin:true,
    }))
}
