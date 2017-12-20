/**
 * Created by glzc on 2017/7/24.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    Animated,
    Easing,
    NetInfo,
    TextInput,
} from 'react-native';
import {Util} from './../commons/util';
import Notices from './component/notices';
import Banner from './component/banner';
import QRCode from 'react-native-qrcode';
import config from './../commons/config';
import axios from 'axios';
import KeyboardPanel from './../commons/keyboardPanel';
import TouchableOpacityUpgrade from './../commons/touchableOpacityUpgrade';
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            isRefreshing: false,
            noticeShow: true,
            banner: false,
            value: '',
        }
    };
    componentDidMount(){
        setTimeout(() => {
            Util.GrowingIO.track('pg_home',"100.00","{\"ke1\": \"heel\",\"ke2\": 100,\"struckt\": {\"kk1\": \"heal\",\"kk2\": \"heal\"}}",(msg) => { console.log('123',msg) })
        },2000);
        NetInfo.fetch().done( status => {    //获取网络连接
            console.log('789status :' + status);
        });
        NetInfo.isConnected.fetch().done(isConnected => {  //简单判断是否有网络连接
            console.log('789First,is '+(isConnected ? 'online' : 'offline'))
        });
        if(!Util.isIOS){
            NetInfo.isConnectionExpensive().then(res => {   //判断当前连接是否收费（仅android可用）
                console.log('789Connection is ' + (res ? 'charged for.' : 'free of charge.'))
            })
        }
        /*setInterval(()=>{
            this.setState({
                noticeShow: !this.state.noticeShow
            })
        },2000);*/
        setTimeout(() => {
            this.setState({
                banner: true,
            })
        });
        //this.loadData();
    };
    _onRefresh(){
        this.setState({
            isRefreshing: !this.state.isRefreshing
        })
    };
    toPage(routeName,params){
        this.props.navigation.navigate(routeName,params);
    };
    loadData(){
        let body = {
            page: 1,
            pageSize: 5,
            useType: 0,//this.props.type == 'investment' ? 0 : 1,
        };
        /*axios.post(config.configUrl.api+'investments/list',body).then((res) => {
            console.log('=======   investments/list  success',res);
        }).catch(err => {
            console.log('=======   investments/list fail',err)
        });*/
        Util.axios.post('investments/list',body,res => {
            console.log('=======   investments/list  success',res)
        },err => {
            console.log('=======   investments/list fail',err)
        });
    };
    _onFocus(){
        this.keyboardPanel.showModal();
    };
    setValue(v){
        if(this.input.props.maxLength && this.state.value.length >= this.input.props.maxLength){
            return false;
        };
        this.setState({
            value: this.state.value+v,
        });
    };
    deleteValue(){
        if(this.state.value.length > 0){
            this.setState({
                value: this.state.value.slice(0,this.state.value.length - 1),
            })
        }
    };
    render(){
        return (
            <View style={homeStyles.container}>
                <View style={{height: Util.pixel*40}}>
                    {
                        this.state.noticeShow ? <Notices /> : null
                    }
                </View>
                <View style={{width: Util.size.width,height: Util.pixel*180}}>
                    {
                        this.state.banner ? <Banner /> : null
                    }
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl onRefresh={this._onRefresh.bind(this)} refreshing={this.state.isRefreshing}  />}
                    >
                    <View>
                        {
                            <TouchableOpacityUpgrade
                                style={homeStyles.button}
                                activeOpacity={0.8}
                                onPress={this.toPage.bind(this,'pageOne',{})}
                                >
                                <View><Text>Welcome to Home !!!!!</Text></View>
                            </TouchableOpacityUpgrade>
                        }
                        <TouchableOpacity style={homeStyles.button} activeOpacity={0.8} onPress={this.toPage.bind(this,'pageOne',{})}>
                            <View><Text>Welcome to Home</Text></View>
                        </TouchableOpacity>
                        <View style={homeStyles.qrcode}>
                            <TextInput
                                ref={ref => this.input=ref}
                                style={homeStyles.input}
                                value={this.state.value}
                                placeholder='请输入...'
                                underlineColorAndroid='transparent'
                                onFocus={this._onFocus.bind(this)}
                                maxLength={16}
                            />
                        </View>
                        <View style={homeStyles.qrcode}>
                            <QRCode
                                value={'https://www.baidu.com'}
                                size={150}
                                bgColor='#fff'
                                fgColor='#000'
                                />
                        </View>
                    </View>
                </ScrollView>
                <KeyboardPanel ref={ref => this.keyboardPanel=ref} root={this} />
            </View>
        )
    }
};
const homeStyles = StyleSheet.create({
    container: {flex: 1,paddingTop: Util.pixel*20},
    button: {
        height: Util.pixel*50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrcode: {
        paddingTop: Util.pixel*15,
        paddingTop: Util.pixel*15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: Util.pixel*200,
        height: Util.pixel*30,
        padding: 0,
    }
});

