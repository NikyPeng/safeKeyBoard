/**
 * Created by glzc on 2017/8/15.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewPagerAndroid,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Util} from './../../commons/util';
export default class Banner extends Component{
    constructor(props){
        super(props);
        this.state={
            banners: ['图片一','图片二','图片三']
        };
    };
    /*render(){
        return (
            <View style={bannerStyles.container}>
                <ViewPagerAndroid style={bannerStyles.page}>
                    <View style={bannerStyles.flexRowCenter}>
                        <Text style={bannerStyles.text}>图片一</Text>
                    </View>
                    <View style={bannerStyles.flexRowCenter}>
                        <Text style={bannerStyles.text}>图片二</Text>
                    </View>
                    <View style={bannerStyles.flexRowCenter}>
                        <Text style={bannerStyles.text}>图片三</Text>
                    </View>
                </ViewPagerAndroid>
            </View>
        )
    }*/
    render(){
        return (
            <Swiper
                width={Util.size.width}
                height={Util.pixel*180}
                loop={true}
                autoplay={true}
                index={0}
            >
                <View style={[bannerStyles.page,bannerStyles.flexRowCenter]}>
                    <Image style={{width: Util.size.width,height: Util.pixel*180}} source={{uri: 'http://test2.etongdai.com/u/cms/www/201709/201626302154.jpg'}} />
                </View>
                <View style={[bannerStyles.page,bannerStyles.flexRowCenter]}>
                    <Image style={{width: Util.size.width,height: Util.pixel*180}} source={{uri :'http://test2.etongdai.com/u/cms/www/201709/201626532yku.png'}} />
                </View>
                <View style={[bannerStyles.page,bannerStyles.flexRowCenter]}>
                    <Image style={{width: Util.size.width,height: Util.pixel*180}} source={{uri:'http://test2.etongdai.com/u/cms/www/201709/11101114d193.jpg'}} />
                </View>
            </Swiper>
        )
    }
};

const bannerStyles=StyleSheet.create({
    container: {
        width: Util.size.width,
        height: Util.pixel*180,
        backgroundColor: '#9d9d9d',
        position: 'relative',
    },
    page: {
        flex: 1,
        backgroundColor: '#f00',
    },
    flexRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: Util.commonFontSize(20),
    }
});