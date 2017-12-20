/**
 * Created by glzc on 2017/8/15.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import {Util} from './../../commons/util';
export default class Notices extends Component{
    constructor(props){
        super(props);
        this.state={
            opacity: new Animated.Value(0),
            right: new Animated.Value(0),
        };
    };
    componentDidMount(){
        Animated.sequence([
            Animated.timing(this.state.opacity,{toValue: 1,easing: Easing.linear,duration: 100}),
            Animated.timing(this.state.right,{toValue: 50,easing: Easing.linear,duration: 1000})
        ]).start();
    }
    render(){
        return (
            <View style={noticeStyles.container}>
                <Animated.View style={[noticeStyles.animatedView,{opacity: this.state.opacity,right: this.state.right}]}>
                    <View style={noticeStyles.textContent}>
                        <Text style={noticeStyles.text}>你好好的卡哒哒哒哒收到啦大家拉屎</Text>
                    </View>
                </Animated.View>
            </View>
        )
    }
};

const noticeStyles=StyleSheet.create({
    container:{
        height: Util.pixel*40,
        position: 'relative',
    },
    animatedView:{
        height: Util.pixel*40,
        position: 'absolute',
        top: 0
    },
    textContent:{
        height: Util.pixel*30,
        borderRadius: Util.pixel*5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text:{
        color: '#fff',
        fontSize: Util.commonFontSize(14),
    }
});