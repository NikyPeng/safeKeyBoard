/**
 * Created by glzc on 2017/9/19.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {Util} from './util';
export default class HeaderBar extends Component{
    constructor(props){
        super(props);
        this.state={}
    };
    back(){
        (this.props.navigation.state.params && this.props.navigation.state.params.back && this.props.navigation.state.params.back()) || this.props.navigation.goBack();
    };
    rightFn(){
        this.props.navigation.state.params && this.props.navigation.state.params.rightFn && this.props.navigation.state.params.rightFn()
    };
    render(){
        return (
            <View style={[headerBarStyles.container,this.props.headerBarStyle]}>
                <View style={headerBarStyles.flexRow}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.back.bind(this)}>
                        <View style={[headerBarStyles.flexRow,headerBarStyles.button,{justifyContent: 'flex-start'}]}>
                            <View style={[headerBarStyles.arrow,this.props.color && {backgroundColor: this.props.color}]}></View>
                            <Text style={[headerBarStyles.text,this.props.color && {color: this.props.color}]}>{this.props.leftTitle}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={headerBarStyles.flexRow}>
                        <Text style={[headerBarStyles.headerTitle,this.props.color && {color: this.props.color}]} numberOfLines={1}>{this.props.title}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.rightFn.bind(this)}>
                        <View style={[headerBarStyles.flexRow,headerBarStyles.button,{justifyContent: 'flex-end',paddingLeft: 0,paddingRight: Util.pixel*12,}]}>
                            <Text style={[headerBarStyles.text,this.props.color && {color: this.props.color}]}>{this.props.rightTitle}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const headerBarStyles=StyleSheet.create({
    container: {
        width: Util.size.width,
        height: Util.isIOS ? Util.pixel*64 : Util.pixel*44,
        paddingTop: Util.isIOS ? Util.pixel*20 : 0,
        backgroundColor: '#2EA7E0'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        width: Util.pixel*80,
        height: Util.pixel*44,
        paddingLeft: Util.pixel*12,
    },
    arrow: {
        width: Util.pixel*15,
        height: Util.pixel*15,
        borderTopWidth: Util.pixel*2,
        borderLeftWidth: Util.pixel*2,
        borderColor: '#fff',
        transform: [{rotateZ: '-45deg'}]
    },
    text: {
        fontSize: Util.commonFontSize(15),
        color: '#fff',
    },
    headerTitle: {
        width: Util.size.width - Util.pixel*200,
        color: '#fff',
        textAlign: 'center',
        fontSize: Util.commonFontSize(18),
    }
});