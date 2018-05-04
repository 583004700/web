(function () {
    var timer = setInterval(parse, 10);
    function parse() {
        if ($.parser && $.fn.slider && !window.renderedFlag) {
            clearInterval(timer);
            $.parser.parse();
            window.renderedFlag = true;
        }
    }
})();