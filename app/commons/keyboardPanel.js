/**
 * Created by glzc on 2017/9/21.
 */
import React,{Component} from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
} from 'react-native';
import {Util} from './util';
export default class KeyboardPanel extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisible: false,
            a: [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['z','x','c','v','b','n','m']],
            symbolStr: [['!','@','#','$','%','^','&','*','(',')'],["'",'"','=','_',':',';','?','~','|','.'],['+','-','\\','/','[',']','{','}'],[',','·','<','>','`','£','¥']],
            n: [[1,2,3],[4,5,6],[7,8,9]],
            activeSymbol: [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['z','x','c','v','b','n','m']],
            isSymbol: false,
            isUpcase: false,
            isNum: false,
        }
    };
    componentDidpoundMount(){

    };
    showModal(){
        Keyboard.dismiss();
        this.setState({
            modalVisible: true,
        })
    };
    hideModal(){
        this.setState({
            modalVisible: false,
        })
    };
    setValue(v){
        this.props.root.setValue(v);
    };
    deleteValue(){
        this.props.root.deleteValue();
    };
    changeState(type){
        switch (type){
            case 'toUpcase':
                this.setState({
                    isUpcase: !this.state.isUpcase,
                });
                break;
            case 'toNum':
                this.setState({
                    isNum: true,
                    activeSymbol: this.state.n,
                    isSymbol: false,
                });
                break;
            case 'toABC':
                this.setState({
                    isNum: false,
                    activeSymbol: this.state.a,
                    isSymbol: false,
                });
                break;
            case 'toSymbol':
                this.setState({
                    isNum: false,
                    activeSymbol: this.state.symbolStr,
                    isSymbol: true,
                });
                break;
            default :
                break;
        }
    };
    render(){
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {}}
            >
                <TouchableOpacity
                    style={keyboardPanelStyles.container}
                    activeOpacity={0.8}
                    onPress={this.hideModal.bind(this)}>
                    <View style={[keyboardPanelStyles.content]}>
                        <View></View>
                        <View>
                            <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.backGauge,this.state.isNum && keyboardPanelStyles.numView]}>
                                {
                                    this.state.activeSymbol[0].map(
                                        (v,i) => <TouchableOpacity
                                                    key={i}
                                                    activeOpacity={0.7}
                                                    onPress={this.setValue.bind(this,v)}
                                                    >
                                                    <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.textBox,this.state.isNum && {width: (Util.size.width - Util.pixel*1)/3,height: Util.pixel*45,borderWidth: 0,borderRadius: 0},this.state.isNum && this.state.activeSymbol[0].length > (i+1) && {borderRightWidth: Util.pixel*0.5}]}>
                                                        <Text style={[keyboardPanelStyles.text]}>{this.state.isUpcase ? v.toLocaleUpperCase() : v}</Text>
                                                    </View>
                                                 </TouchableOpacity>
                                    )
                                }
                            </View>
                            {
                                this.state.isNum ? <View style={keyboardPanelStyles.line}></View> : null
                            }
                            <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.backGauge,this.state.isNum && keyboardPanelStyles.numView]}>
                                {
                                    this.state.activeSymbol[1].map(
                                        (v,i) => <TouchableOpacity
                                                    key={i}
                                                    activeOpacity={0.7}
                                                    onPress={this.setValue.bind(this,v)}
                                                    >
                                                    <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.textBox,this.state.isNum && {width: (Util.size.width - Util.pixel*1)/3,height: Util.pixel*45,borderWidth: 0,borderRadius: 0},this.state.isNum && this.state.activeSymbol[0].length > (i+1) && {borderRightWidth: Util.pixel*0.5}]}>
                                                        <Text style={[keyboardPanelStyles.text]}>{this.state.isUpcase ? v.toLocaleUpperCase() : v}</Text>
                                                    </View>
                                                 </TouchableOpacity>
                                    )
                                }
                            </View>
                            {
                                this.state.isNum ? <View style={keyboardPanelStyles.line}></View> : null
                            }
                            <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.backGauge,this.state.isNum && keyboardPanelStyles.numView]}>
                                {
                                    !this.state.isSymbol && !this.state.isNum ?
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={this.changeState.bind(this,'toUpcase')}
                                        >
                                        <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.state]}>
                                            <Text style={keyboardPanelStyles.stateText}>{this.state.isUpcase ? '小' : '大'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    this.state.isNum ?
                                        null
                                        :
                                        <View style={{width: Util.pixel*15}}></View>
                                }
                                {
                                    this.state.activeSymbol[2].map(
                                        (v,i) => <TouchableOpacity
                                                    key={i}
                                                    activeOpacity={0.7}
                                                    onPress={this.setValue.bind(this,v)}
                                                    >
                                                    <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.textBox,this.state.isNum && {width: (Util.size.width - Util.pixel*1)/3,height: Util.pixel*45,borderWidth: 0,borderRadius: 0},this.state.isNum && this.state.activeSymbol[0].length > (i+1) && {borderRightWidth: Util.pixel*0.5}]}>
                                                        <Text style={[keyboardPanelStyles.text]}>{this.state.isUpcase ? v.toLocaleUpperCase() : v}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                    )
                                }
                                {
                                    this.state.isNum ?
                                        null
                                    :
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={this.deleteValue.bind(this)}
                                            >
                                            <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.state]}>
                                                <Text style={keyboardPanelStyles.stateText}>{'delete'}</Text>
                                            </View>
                                        </TouchableOpacity>
                                }
                            </View>
                            {
                                this.state.isNum ? <View style={keyboardPanelStyles.line}></View> : null
                            }
                            <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.backGauge,this.state.isNum && keyboardPanelStyles.numView]}>
                                {
                                    this.state.isNum ?
                                    <TouchableOpacity activeOpacity={0.8} onPress={this.changeState.bind(this,'toABC')}>
                                        <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.numBox,{backgroundColor: '#999',borderRightWidth: Util.pixel*0.5,borderColor: '#aaa'}]}>
                                            <Text style={[keyboardPanelStyles.text]}>ABC</Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity activeOpacity={0.8} onPress={this.changeState.bind(this,'toNum')}>
                                        <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.state,!this.state.isSymbol && {width: Util.pixel*70}]}>
                                            <Text style={[keyboardPanelStyles.text]}>123</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                                {
                                    this.state.isSymbol ? this.state.activeSymbol[3].map(
                                    (v,i) => <TouchableOpacity
                                                key={i}
                                                activeOpacity={0.7}
                                                onPress={this.setValue.bind(this,v)}
                                                >
                                                <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.textBox]}>
                                                    <Text style={[keyboardPanelStyles.text]}>{v}</Text>
                                                </View>
                                            </TouchableOpacity>
                                    )
                                    :
                                    this.state.isNum ?
                                        <TouchableOpacity activeOpacity={0.8} onPress={this.setValue.bind(this,' ')}>
                                            <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.numBox,{borderRightWidth: Util.pixel*0.5,borderColor: '#aaa'}]}>
                                                <Text style={keyboardPanelStyles.text}>0</Text>
                                            </View>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity activeOpacity={0.8} onPress={this.setValue.bind(this,' ')}>
                                            <View style={keyboardPanelStyles.spacekey}></View>
                                        </TouchableOpacity>
                                }
                                {
                                    this.state.isNum ?
                                    <TouchableOpacity activeOpacity={0.8} onPress={this.deleteValue.bind(this)}>
                                        <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.numBox]}>
                                            <Text style={keyboardPanelStyles.text}>{'delete'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity activeOpacity={0.8} onPress={this.changeState.bind(this,this.state.isSymbol ? 'toABC' : 'toSymbol')}>
                                        <View style={[keyboardPanelStyles.flexRow,keyboardPanelStyles.state,!this.state.isSymbol && {width: Util.pixel*70}]}>
                                            <Text style={keyboardPanelStyles.text}>{this.state.isSymbol ? 'ABC' : '#+='}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
};

const keyboardPanelStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: Util.size.width,
        backgroundColor: '#e8e8e8',
        position: 'absolute',
        bottom: 0,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backGauge: {
        justifyContent: 'space-between',
        paddingTop: Util.pixel*5,
        paddingBottom: Util.pixel*5,
        paddingLeft: Util.pixel*5,
        paddingRight: Util.pixel*5,
    },
    textBox: {
        width: Util.pixel*25,
        height: Util.pixel*35,
        backgroundColor: '#fff',
        borderRadius: Util.pixel*5,
        borderWidth: Util.pixel*0.5,
        borderColor: '#aaa'
    },
    text: {
        fontSize: Util.commonFontSize(15),
        color: '#4a4a4a',
        textAlign: 'center',
    },
    state: {
        width: Util.pixel*55,
        height: Util.pixel*35,
        backgroundColor: '#eee',
        borderRadius: Util.pixel*5,
        borderWidth: Util.pixel*0.5,
        borderColor: '#aaa'
    },
    stateText: {
        fontSize: Util.commonFontSize(14),
        color: '#4a4a4a',
        textAlign: 'center',
    },
    numBox: {
        width: Util.size.width/3,
        height: Util.pixel*45,
        backgroundColor: '#fff',
    },
    spacekey: {
        width: Util.size.width - Util.pixel*180,
        height: Util.pixel*35,
        borderWidth: Util.pixel*0.5,
        borderColor: '#aaa',
        backgroundColor: '#fff',
        borderRadius: Util.pixel*5,
    },
    numView: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        height: Util.pixel*45,
    },
    line: {
        width: Util.size.width,
        height: Util.pixel*1,
        backgroundColor: '#aaa',
    },
});
