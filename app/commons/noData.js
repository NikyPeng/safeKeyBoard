/**
 * Created by glzc on 2017/9/19.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Util} from './util';
export default class NoData extends Component{
    constructor(props){
        super(props);
        this.state={}
    };
    render(){
        return (
            <View style={noDataStyles.container}>
                <Text style={noDataStyles.text}>暂无数据～</Text>
            </View>
        )
    };
};

const noDataStyles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Util.pixel*150,
    },
    text: {
        fontSize: Util.commonFontSize(15),
        color: '#9d9d9d',
        alignSelf: 'center',
    },
});