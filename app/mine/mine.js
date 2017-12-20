/**
 * Created by glzc on 2017/7/24.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';
import Timer from './../commons/timer';
import TimerStore from './../commons/mobx/timerStore';
import {enableLogging} from 'mobx-logger';
import {Util} from './../commons/util';
import {observable} from 'mobx';

/*useStrict(true);
enableLogging({
    predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
    action: true,
    reaction: false,
    compute: false,
});*/

@observer
export default class Mine extends Component{
    static defaultProps = {
        store: new TimerStore(),
    }
    constructor(props){
        super(props);
    };
    componentWillMount(){

    };
    render(){
        const {store} = this.props;
        return (
            <View style={mineStyles.container}>
                <View style={mineStyles.header}>
                    <Text style={mineStyles.headline}>MoBX TimerExample</Text>
                </View>
                <View style={mineStyles.content}>
                    {
                        store.timers.map((timer,i) => (
                            <Timer timerModel={timer} key={i} />
                        ))
                    }
                </View>
            </View>
        )
    };
};

const mineStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontSize: Util.commonFontSize(30),
    },
    content: {
        flex: 5,
    }
})