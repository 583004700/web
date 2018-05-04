require.config({
    baseUrl: "/web/easyuitest/js",
    paths: {
        jquery: "jquery",
        easyui: "jquery-easyui-1.5.4.2/jquery.easyui.min",
        zhCN: "jquery-easyui-1.5.4.2/locale/easyui-lang-zh_CN",
        global: "global",
        index:"index"
    },
    shim: {
        easyui: {
            deps: ["jquery"]
        },
        zhCN: {
            deps: ["jquery", "easyui"]
        },
        global: {
            deps: ["jquery", "easyui"]
        },
        layer: {
            deps: ["jquery"]
        },
        validatebox: {
            deps: ["jquery", "easyui"]
        }
    }
});

require(["index"],function(data){

});


