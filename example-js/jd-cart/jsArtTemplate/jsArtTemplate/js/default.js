// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
            setData();
        }
    };

    //template item object
    var comment = function (username, content) {
        this.author = username;
        this.content = content;
    };

    function setData() {
        var list = [];
        list.push(new comment("Alexis", "揭秘《泰囧》最美人妖Rose人养成记】贺岁档爆笑电影《泰囧》近期热映，片中不仅有徐峥、王宝强、黄渤三位搞笑大咖联手耍宝卖萌"));
        list.push(new comment("Tom", "【毫不动摇】12月21日，随着中国民主促进会第十一次全国代表大会在北京闭幕，中国八个民主党派五年一次的集中换届圆满落下帷幕"));
        list.push(new comment("Mahoo", "州市委书记陈德荣说：上次（今年5月）我说塘河治理好了"));
        list.push(new comment("laozhao", "今天开始，卓正诊所每周推出一位医生，帮大家解答健康方面的各种问题"));
        list.push(new comment("shuifeng", "粉佳人Pink演唱大热单曲《Try》超清现场！喜欢这首歌真的已经不需要任何语言去形容了！"));
        list.push(new comment("程序员的那些事", "《诊断Java.lang.OutOfMemoryError》一旦堆内存的实际使用量超过其所允许的堆空间，就会产生堆内存压力。而这将导致频繁的全面垃圾回收事件，垃圾回收将窃取CPU周期，轻则导致响应时间延迟，重则导致必须重新启动Java虚拟机才能解决的内存溢出错误。"));
        list.push(new comment("大街网", "致明日考级的斗士们！"));
        list.push(new comment("IBM", "这20大梦幻般技术 5年内有望实现】"));
        list.push(new comment("Google", "Glass is awesome!!!"));
        list.push(new comment("Alexis", "揭秘《泰囧》最美人妖Rose人养成记】贺岁档爆笑电影《泰囧》近期热映，片中不仅有徐峥、王宝强、黄渤三位搞笑大咖联手耍宝卖萌"));
        list.push(new comment("Tom", "【毫不动摇】12月21日，随着中国民主促进会第十一次全国代表大会在北京闭幕，中国八个民主党派五年一次的集中换届圆满落下帷幕"));
        list.push(new comment("Mahoo", "州市委书记陈德荣说：上次（今年5月）我说塘河治理好了"));
        list.push(new comment("laozhao", "今天开始，卓正诊所每周推出一位医生，帮大家解答健康方面的各种问题"));
        list.push(new comment("shuifeng", "粉佳人Pink演唱大热单曲《Try》超清现场！喜欢这首歌真的已经不需要任何语言去形容了！"));
        list.push(new comment("程序员的那些事", "《诊断Java.lang.OutOfMemoryError》一旦堆内存的实际使用量超过其所允许的堆空间，就会产生堆内存压力。而这将导致频繁的全面垃圾回收事件，垃圾回收将窃取CPU周期，轻则导致响应时间延迟，重则导致必须重新启动Java虚拟机才能解决的内存溢出错误。"));
        list.push(new comment("大街网", "致明日考级的斗士们！"));
        list.push(new comment("IBM", "这20大梦幻般技术 5年内有望实现】"));
        list.push(new comment("Google", "Glass is awesome!!!"));
        list.push(new comment("Alexis", "揭秘《泰囧》最美人妖Rose人养成记】贺岁档爆笑电影《泰囧》近期热映，片中不仅有徐峥、王宝强、黄渤三位搞笑大咖联手耍宝卖萌"));
        list.push(new comment("Tom", "【毫不动摇】12月21日，随着中国民主促进会第十一次全国代表大会在北京闭幕，中国八个民主党派五年一次的集中换届圆满落下帷幕"));
        list.push(new comment("Mahoo", "州市委书记陈德荣说：上次（今年5月）我说塘河治理好了"));
        list.push(new comment("laozhao", "今天开始，卓正诊所每周推出一位医生，帮大家解答健康方面的各种问题"));
        list.push(new comment("shuifeng", "粉佳人Pink演唱大热单曲《Try》超清现场！喜欢这首歌真的已经不需要任何语言去形容了！"));
        list.push(new comment("程序员的那些事", "《诊断Java.lang.OutOfMemoryError》一旦堆内存的实际使用量超过其所允许的堆空间，就会产生堆内存压力。而这将导致频繁的全面垃圾回收事件，垃圾回收将窃取CPU周期，轻则导致响应时间延迟，重则导致必须重新启动Java虚拟机才能解决的内存溢出错误。"));
        list.push(new comment("大街网", "致明日考级的斗士们！"));
        list.push(new comment("IBM", "这20大梦幻般技术 5年内有望实现】"));
        list.push(new comment("Google", "Glass is awesome!!!"));

        var colors = [
            'blue',
            'blueDark',
            'green',
            'greenLight',
            'greenDark',
            'red',
            'yellow',
            'orange',
            'orangeDark',
            'pink',
            'pinkDark',
            'purple',
        ];
        var lenght = colors.length;
        for (var i = 0; i < list.length; i++) {
            var index = Math.floor(Math.random() * (lenght - 1));
            list[i].color = 'bg-color-' + colors[index];
            list[i].stickercolor = 'sticker-color-' + colors[index];
        }

        var data = {
            items: list
        }
        $('#container').append(template('DT_Template', data));
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
