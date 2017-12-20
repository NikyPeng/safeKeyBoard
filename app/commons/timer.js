/**
 * Created by glzc on 2017/9/30.
 */
import React,{Component} from 'react';
import {observer} from 'mobx-react/native';
import {Util} from './util';

import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';

import TimerModel from './mobx/timerModel';

@observer
export default class Timer extends Component{
    static propTypes = {
        timerModel: React.PropTypes.instanceOf(TimerModel),
    };

    render(){
        const {timerModel} = this.props;
        const isRunning = timerModel.isRunning;

        return (
            <View style={timerStyles.container}>
                <Text style={timerStyles.text}>{timerModel.label}</Text>
                <TextInput
                    style={timerStyles.input}
                    placeHolder='请输入···'
                    onChangeText={(t) => {timerModel.getInputText(t)}}
                    />
                <Text style={[timerStyles.text,{color: '#f00',fontSize: Util.commonFontSize(12)}]}>{timerModel.textValue}</Text>
                <Button
                    title={isRunning ? 'Stop' : 'Start'}
                    color={isRunning ? '#d9534f' : '#337ab7'}
                    onPress={
                        () => isRunning ? timerModel.stop() : timerModel.start()
                    }
                    ></Button>
            </View>
        )
    }
};

const timerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: Util.pixel*10,
    },
    text: {
        fontSize: Util.commonFontSize(20),
        //width: Util.pixel*100,
        color: '#222',
    },
    input: {
        width: Util.pixel*100,
        height: Util.pixel*35,
        borderWidth: Util.pixel*0.5,
        borderColor: '#9d9d9d',
    }
})