/**
 * Created by glzc on 2017/7/24.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    WebView,
} from 'react-native';

export default class Product extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return (
            <View style={{flex: 1}}>
                <Text>Welcome to Product</Text>
                <WebView source={{uri: 'http://live.polyv.cn/watch/132481'}} />
            </View>
        )
    }
}