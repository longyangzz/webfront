module.exports = {
    header: {
        height: 48,
        logoHeight: 36,
        logoUrl: '/public/img/home-logo.png',
        fontSize: 18,
        title: '智慧水利数据可视化平台',
        fontWeight: 400,
        themeSelector: true,
        class: 'ui-widget-content',
        userAdditionalInfo: '角色: {roles}'
    },
    toolbar: {
        buttons: [{
            icon: 'far fa-bell',
            title: '通知',
            actionUrl: 'http://www.bjdclw.com/'
        }, {
            icon: 'far fa-sun',
            title: '个人设置',
            hiddenOnMobile: true,
            actionUrl: 'https://github.com/longyangzz/longyangzz.github.io'
        }]
    },
    apps: {
        personalizedFilter: false,
        class: 'ui-state-default',
        position: 'left',
        title: '我的应用',
        titleFontSize: 18,
        width: 310,
        listStyle: 'block',
        fontSize: 14,
        appHeight: 72,
        appSpacing: 8,
        list: [{
            id: 'app1',
            name: '河南洪水分析',
            title: '河南-洪水分析',
            icon: 'fab fa-amazon-pay',
            url: 'http://hsfx.bjdclw.com:8099/HenanFront/user/home',
            openMode: 'imbedded',
            hiddenOnMobile: true,
            hiddenOnPC: false,
            class: 'ui-state-highlight'
        }, {
            id: 'app2',
            name: '陕西大屏',
            title: '陕西大屏',
            img: '',
            icon: 'fas fa-dollar-sign',
            url: 'http://hsfx.bjdclw.com:8099/ShanxiFront/home/homePage',
            openMode: 'imbedded',
            class: 'ui-widget-content'
        }, {
            id: 'app3',
            name: '广西凤亭河水库大坝',
            title: '广西凤亭河水库大坝',
            img: '/public/img/home-logo.png',
            url: 'http://hsfx.bjdclw.com:8062/GXDB/Home/index',
            openMode: 'imbedded',
            class: 'ui-widget-content'
        },{
            id: 'app4',
            name: '海林洪水分析',
            title: '海林洪水分析',
            img: '/public/img/home-logo.png',
            url: 'http://hsfx.bjdclw.com:8099/FloodAnalysis_HL/user/login',
            openMode: 'imbedded',
            class: 'ui-widget-content'
        }]
    },
    modules: {
        personalizedFilter: false,
        moduleHeight: 320,
        moduleSpacing: 6,
        list: [{
            id: 'mod-1',
            name: '河南洪水分析',
            height: 360,
            width: 'calc(50% - 12px)',
            url: 'http://hsfx.bjdclw.com:8099/HenanFront/user/home'
        }, {
            height: 360,
            width: '50%',
            id: 'mod-2',
            name: '陕西大屏',
            url: 'http://hsfx.bjdclw.com:8099/ShanxiFront/home/homePage'
        }, {
            id: 'mod-3',
            name: '广西凤亭河水库大坝',
            height: 500,
            width: 'calc(50% - 12px)',
            url: 'http://hsfx.bjdclw.com:8062/GXDB/Home/index'
        }, {
            id: 'mod-4',
            name: '海林洪水分析',
            height: 500,
            width: '50%',
            url: 'http://hsfx.bjdclw.com:8099/FloodAnalysis_HL/user/login'
        }]
    },
    bottom: {
        height: 20,
        fontSize: 12,
        text: '©2019 鼎创智慧水利',
        textAlign: 'center'
    }
};
