/**
 * Created by glzc on 2017/9/21.
 */
const mode='test';
const configUrl={
    production: {
        api: 'https://api.etongdai.com/service/',
        server: 'https://www.etongdai.com/',
        activeServer: 'https://m.etongdai.com/',
    },
    develop: {
        api: 'https://api.nowpre.etongdai.org/service/',
        androidApi: 'http://api.nowpre.etongdai.org/service/',
        server: 'https://www.nowpre.etongdai.org/',
        activeServer: 'https://m.nowpre.etongdai.org/',
    },
    test: {
        api: 'https://api2.etongdai.com/service/',
        androidApi: 'http://api2.etongdai.com/service/',
        server: 'https://test2.etongdai.com/',
        activeServer: 'https://m2.etongdai.com/',
    },
};
const appInfo={
    appVersion: '3.0.0',
    appAndroidVersion: '3.0.0.0',
};
const config={
    appInfo: appInfo,
    configUrl: configUrl[mode],
};
//const config = Object.assign({},appInfo,configUrl[mode]);
module.exports = config;