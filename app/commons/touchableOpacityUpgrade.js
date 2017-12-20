/**
 * Created by glzc on 2017/9/29.
 */
import React,{Component} from 'react';
import {
    TouchableOpacity,
} from 'react-native';

export default class TouchableOpacityUpgrade extends Component{
    constructor(props){
        super(props);
        this.state={
            clickNum: 0,
        };
    };
    componentWillMount(){
        console.log('componentWillMount',this.props.children);
    };
    componentDidMount(){
        console.log('componentDidMount',this.props.children);
    };
    _onPress(){
        if(this.state.clickNum > 0){
            return;
        };
        this.setState({
            clickNum: this.state.clickNum + 1,
        });
        this.props.onPress && this.props.onPress();
        setTimeout(() => {
            this.setState({
                clickNum: 0,
            })
        },800);
    };
    render(){
        return (
            <TouchableOpacity {...this.props} onPress={this._onPress.bind(this)}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
};