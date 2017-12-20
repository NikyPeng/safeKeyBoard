/**
 * Created by glzc on 2017/7/24.
 */
import {
    View,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabBarOptions from './tabBarOptions';
import PageOne from './../../home/component/pageOne';
import PageTwo from './../../home/component/pageTwo';
import {Util} from './../util';
const MainScreenNavigator = StackNavigator({
    tab: {screen: TabBarOptions},
    pageOne: {screen: PageOne},
    pageTwo: {screen: PageTwo},
},{
    mode: 'card',
    headerModel: 'screen',
});
Util.getStateForAction(MainScreenNavigator);
module.exports = MainScreenNavigator;