/**
 * Created by glzc on 2017/7/24.
 */
import React,{Component} from 'react';
import {
    Image,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './../../home/home';
import Product from './../../products/product';
import Mine from './../../mine/mine';
import More from './../../more/more';


const TabBarOptions = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: '首页',
            header: null,
            tabBarIcon: (options) => {
                let url = options.focused ? require('./../../img/home/active_home_icon.png') : require('./../../img/home/home_icon.png');
                return (
                    <Image source={url} />
                )
            },
        }
    },
    Product: {
        screen: Product,
        navigationOptions: {
            title: '项目列表',
            header: null,
            tabBarIcon: (options) => {
                let url = options.focused ? require('./../../img/products/active_projectList_icon.png') : require('./../../img/products/projectList_icon.png');
                return (
                    <Image source={url} />
                )
            }
        },
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            title: '我的账户',
            header: null,
            tabBarIcon: (options) => {
                let url = options.focused ? require('./../../img/mine/active_mine_icon.png') : require('./../../img/mine/mine_icon.png');
                return (
                    <Image source={url} />
                )
            }
        }
    },
    More: {
        screen: More,
        navigationOptions: {
            title: '更多',
            header: null,
            tabBarIcon: (options) => {
                let url = options.focused ? require('./../../img/more/active_more_icon.png') : require('./../../img/more/more_icon.png');
                return (
                    <Image source={url} />
                )
            }
        }
    }
},{
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    lazy: true,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: '#2EA7E0',
        inactiveTintColor: '#9d9d9d',
        activeBackgroundColor: '#fff',
        showIcon: true,
        backBehavior: false,
        scrollEnabled: false,
        indicatorStyle: {
            height: 0,
        },
        style: {
            backgroundColor: '#ffffff',
            paddingBottom: 2,
        },  //tab bar 样式
        labelStyle: {
            fontSize: 12,
            marginTop: 3,
        }, //tab label 样式
        tabStyle: {
            padding: 0,
        } //tab 样式
    },

});
module.exports = TabBarOptions;