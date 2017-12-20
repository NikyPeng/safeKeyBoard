/**
 * Created by glzc on 2017/7/24.
 */
import {
    Dimensions,
    PixelRatio,
    Platform,
    NativeModules,
} from 'react-native';
import axios from 'axios';
import config from './config';

const Util = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    pixel: Platform.OS === 'ios' ? (PixelRatio.get() > 2 ? 1.12 : 1) : 1.1,
    lineHeight: (height: Number) => {
            return Platform.OS === 'ios' ? height : Math.round(height*1.1 + 0.5);
        },
    commonFontSize: (fontSize: Number) => {
            return Platform.OS === 'ios' ? (PixelRatio.get() > 2 ? fontSize+2 : fontSize) : fontSize+2;
        },
    isIOS: Platform.OS === 'ios',
    getStateForAction: (navigation) => {
        const defaultGetStateForAction = navigation.router.getStateForAction;
        navigation.router.getStateForAction = (action, state) => {
            //console.log('123',action,state);
            if(action.type == 'Navigation/NAVIGATE'){
                if((global.__isLogin == undefined || global.__isLogin == null) && (action.routeName == "Mine") ){
                    //action.routeName = 'login';
                }else if(action.routeName == 'tab' && action.params.resetState){
                    let resetState = state.routes[0];
                    state = {index: 0,routes: [resetState]};
                }
            }else if(action.type == 'Navigation/BACK'){
                if(action.key && action.key != ''){
                    //EventEmitter.emit("checkLogin");
                    console.log('action.key',action.key);
                }else if(state.routes.length == 2 && state.routes[1].params && state.routes[1].params.resetState){
                    state = {index: 0,routes: [state.routes.pop()]}
                }else{}
            }else{}
            return defaultGetStateForAction(action, state);
        };
    },
    dateFormat(t,type){
        let time, y, m, d, h,mi,s;
        if(t){
            time = new Date(t);
        }else{
            time = new Date();
        }
        y = time.getFullYear();
        m = time.getMonth() + 1;
        d = time.getDate();
        if(type){
            h = time.getHours();
            mi = time.getMinutes();
            s = time.getSeconds();
            return y+'-'+(m < 10 ? '0'+m : m)+'-'+(d < 10 ? '0'+d : d)+' '+(h < 10 ? '0'+h : h)+':'+(mi < 10 ? '0'+mi : mi)+':'+(s < 10 ? '0'+s : s)
        }else{
            return y+'-'+(m < 10 ? '0'+m : m)+'-'+(d < 10 ? '0'+d : d)
        }
    },
    _serializeJSON: function(data) {
        //data['terminalType'] =  Util.isIOS ? '2' : '3';
        //data['appVersion'] = Util.isIOS ? Product.appVersion : Product.appAndroidVersion;
        //data['idfa'] = DeviceInfo.getUniqueID();
        return Object.keys(data).map(function (keyName) {
            return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
        }).join('&');
    },
    axios: (() => {
        //axios配置
        //console.log('configUrl.api',Platform.OS === 'ios' ? config.configUrl.api : config.configUrl.androidApi);
        const a = axios.create({
            baseURL: Platform.OS === 'ios' ? config.configUrl.api : config.configUrl.androidApi,
            timeout: 20000,    //超时
            headers: {},
            transformResponse: (data) => {
                return data
            },//拦截请求
        });
        return {
            get: (url,successCallback,failureCallback) => a.get(url).then(res => {successCallback(res.data)}).catch(err => {failureCallback(err)}),
            post: (url,data,successCallback,failureCallback) => a.post(url,data).then(res => {successCallback(res.data)}).catch(err => {failureCallback(err)}),
            //get: (url) => a.get(url),
            //post: (url,data) =>a.post(url,data),
        }
    })(),
    get GrowingIO(){
        return {
            track: NativeModules.GrowingIO.track
        }
    }
};

export {
    Util
}