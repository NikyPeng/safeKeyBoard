/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Easing,
  NativeModules,
} from 'react-native';
import MainScreenNavigator from './app/commons/navigator/mainScreenNavigator';
const {width,height} = Dimensions.get('window');
export default class demo extends Component {
  constructor(props){
    super(props);
    this.state={
      fadeAnim: new Animated.Value(0),
      a: new Animated.Value(0),
      b: new Animated.Value(0)
    }
  };
  componentWillMount(){
    NativeModules.GrowingIO.init('ad9fa4c11b15dff8','',(msg) => {console.log('1pc23',msg)});
  };
  componentDidMount(){
    /*Animated.sequence([
      Animated.timing(this.state.fadeAnim,{toValue: 1,easing: Easing.linear,duration: 500}),
      Animated.timing(this.state.a,{toValue: 1,easing: Easing.linear,duration: 500}),
      Animated.timing(this.state.b,{toValue: 1,easing: Easing.linear,duration: 500})
    ]).start();*/
    /*Animated.parallel([
      Animated.timing(this.state.fadeAnim,{toValue: 1,easing: Easing.linear,duration: 1000}),
      Animated.timing(this.state.a,{toValue: 1,easing: Easing.linear,duration: 1000,delay: 600}),
      Animated.timing(this.state.b,{toValue: 1,easing: Easing.linear,duration: 1000,delay: 1000})
    ]).start();*/
    /*Animated.loop(
        Animated.parallel([
          Animated.timing(this.state.fadeAnim,{toValue: 1,easing: Easing.linear,duration: 1000}),
          Animated.sequence([Animated.delay(600),Animated.timing(this.state.a,{toValue: 1,easing: Easing.linear,duration: 1000})]),
          Animated.sequence([Animated.delay(1000),Animated.timing(this.state.b,{toValue: 1,easing: Easing.linear,duration: 1000,delay: 1000})])
        ])
    ).start();*/
    /*[
      Animated.timing(this.state.fadeAnim,{toValue: 1,duration: 1000,easing: Easing.linear}),
      Animated.timing(this.state.a,{toValue: 1,duration: 1000,easing: Easing.linear}),
      Animated.timing(this.state.b,{toValue: 1,duration: 1000,easing: Easing.linear})
    ]
    Animated.parallel(
        ['fadeAnim','a','b'].map(v => Animated.timing(this.state[v],{
          toValue: 1,
          duration: 1000,
          easing: Easing.linear
        }))
    ).start();
     */
  };
  /*
  render() {
    return (
            <Animated.View style={[styles.container,{
              opacity: this.state.fadeAnim,
              transform:[{rotateZ: this.state.a.interpolate({inputRange: [0,1],outputRange: ['0deg','360deg']})}]
            }]}>
              <View style={[styles.container,]}>
                <Animated.Text style={[styles.welcome,{fontSize: this.state.b.interpolate({inputRange:[0,1],outputRange:[12,26]})}]}>
                  Welcome to React Native!
                </Animated.Text>{
                /*<Animated.Text style={[styles.instructions,{opacity: this.state.a}]}>
                  To get started, edit index.ios.js
                </Animated.Text>
                <Animated.Text style={[styles.instructions,{opacity: this.state.b}]}>
                  Press Cmd+R to reload,{'\n'}
                  Cmd+D or shake for dev menu
                </Animated.Text>}
              </View>
            </Animated.View>
    );
  }*/
  render(){
    return (
        <MainScreenNavigator />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo', () => demo);
