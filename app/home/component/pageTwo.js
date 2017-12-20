/**
 * Created by glzc on 2017/8/9.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Util} from './../../commons/util';
import HeaderBar from './../../commons/headerBar';
export default class PageTwo extends Component{
    static navigationOptions=({navigation}) => ({
        header: () => <HeaderBar navigation={navigation} title='第二页'  />
    });
    constructor(props){
        super(props);
    };
    test(){
        let obj = {},
            arr=[{
                time: 1345234678987,
                name: 'a'
            },{
                time: 1345234678987,
                name: 'b'
            },{
                time: 1325234678384,
                name: 'c'
            },{
                time: 1245234673987,
                name: 'd'
            },{
                time: 1245234673987,
                name: 'e'
            },{
                time: 1145234618987,
                name: 'f'
            }];
        arr.map((v,i)=>{
            let t = new Date(arr[i].time),
            year = t.getFullYear(),
            m = t.getMonth()+ 1,
            d = t.getDate();
            let str = year+'-'+(m<10 ? '0'+m : m)+'-'+(d<10 ? '0'+d : d);
            obj[str] = [];
            obj[str].push(arr[i]);
            if(i > arr.length - 2){
                return;
            }
            for(let y=i+1;y<arr.length;y++){
                if(arr[y].time && arr[y].time == v.time){
                    obj[str].push(arr[y]);
                    arr.splice(y,1);
                    y--;
                }else{
                    break;
                }
            }
        });
        return obj;
    };
    componentWillMount(){console.log('componentWillMount pageTwo')};
    componentDidMount(){console.log('componentDidMount pageTwo')};
    componentWillUnmount(){console.log('componentWillUnmount pageTwo')};
    componentDidUpdate(){}
    toMine(){
        let action;
        /*action = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'tab'}),
                NavigationActions.navigate({routeName: 'pageTwo'})
            ]
        });*/
        /*action = NavigationActions.navigate({
            routeName: 'tab',
            params: {resetState: true},
            action: NavigationActions.navigate({routeName: 'Mine'})
        });*/
        action = NavigationActions.init({
            routeName: 'tab',
            params: {}
        });
        this.props.navigation.dispatch(action);
    };
    render(){
        return (
            <View style={[pageTwoStyles.container,pageTwoStyles.flexRow]}>
                <TouchableOpacity style={pageTwoStyles.button} activeOpacity={0.8} onPress={this.toMine.bind(this)}>
                    <Text>Go to Mine</Text>
                </TouchableOpacity>
                <TouchableOpacity style={pageTwoStyles.button} activeOpacity={0.8} onPress={() => {console.log(this.test())}}>
                    <Text>Go to e</Text>
                </TouchableOpacity>
            </View>
        )
    };
};
const pageTwoStyles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: Util.pixel*50
    },
    text: {
        fontSize: Util.commonFontSize(20),
        color: '#3e3e3e'
    }
});