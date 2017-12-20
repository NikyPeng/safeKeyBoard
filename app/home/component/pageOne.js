/**
 * Created by glzc on 2017/8/9.
 */
import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	FlatList,
	BackHandler,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Util} from './../../commons/util';
import Banner from './banner';
import HeaderBar from './../../commons/headerBar';
import NoData from './../../commons/noData';
export default class PageOne extends Component{
	static navigationOptions=({navigation}) => ({
		header: () => <HeaderBar navigation={navigation} title='第一页'  />
	});
	constructor(props){
		super(props);
		this.state={
			data: [
				{title: '标题一',desc: '这是第一部分',t: new Date().getTime()},
				{title: '标题二',desc: '这是第二部分',t: new Date().getTime()},
				{title: '标题三',desc: '这是第三部分',t: new Date().getTime()},
				{title: '标题四',desc: '这是第四部分',t: new Date().getTime()},
				{title: '标题五',desc: '这是第五部分',t: new Date().getTime()},
			],
			empty: null,
		}
	};
	componentWillMount(){
		this.backHandler = BackHandler.addEventListener('back',this.back.bind(this));
		console.log('componentWillMount pageOne')
	};
	componentDidMount(){console.log('componentDidMount pageOne')};
	componentWillUnmount(){
		console.log('componentWillUnmount pageOne');
		this.backHandler.remove();
	};
	toPage(routeName,params){
		this.props.navigation.navigate(routeName,params);
	};
	back(){
		console.log('789',this.state.data[0].title);
		return false;
	};
	_keyExtractor(item,idx){
		return idx
	};
    _renderItems({item}){
		return (
			<TouchableOpacity activeOpacity={0.7} onPress={this.toPage.bind(this,'pageTwo',{})}>
				<View style={[pageOneStyles.flexColumn,pageOneStyles.item]}>
					<View style={[pageOneStyles.flexRow,pageOneStyles.title]}>
						<Text style={[pageOneStyles.textStyle,{fontSize: Util.commonFontSize(18)}]}>{item.title}</Text>
						<Text style={[pageOneStyles.textStyle]}>{Util.dateFormat(item.t,true)}</Text>
					</View>
					<View style={pageOneStyles.line} />
					<View>
						<Text style={[pageOneStyles.textStyle,{color: '#9d9d9d'}]}>{item.desc}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	};
	_separatorComponent(){
		return (
			<View style={pageOneStyles.separator}></View>
		)
	};
	_listEmptyComponent(){
		return <NoData />
	};
	_footerComponent(){
		 return (
			 <View>
				 <Text>底部</Text>
			 </View>
		 )
	};
	_headerComponent(){
		return (
			<View>
				<Text>头部</Text>
			</View>
		)
	};
	render(){
		return (
			<View style={[pageOneStyles.container,]}>
				<FlatList
						data={this.state.data}
						//horizontal={false}
						//numColumns={2}
						renderItem={this._renderItems.bind(this)}
						keyExtractor={this._keyExtractor}
						ItemSeparatorComponent={this._separatorComponent.bind(this)}
						ListEmptyComponent={this._listEmptyComponent.bind(this)}
						//ListFooterComponent={this._footerComponent.bind(this)}    //底部
						//ListHeaderComponent={this._headerComponent.bind(this)}    //头部
						/>
			</View>
		)
	};/*
	render(){
		return (
			<View style={pageOneStyles.container}>
				<Banner />
			</View>
		)
	};*/
};

const pageOneStyles=StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Util.pixel*10,
	},
	flexRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	flexColumn: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	button: {
		height: Util.pixel*50
	},
	text: {
		fontSize: Util.commonFontSize(20),
		color: '#3e3e3e'
	},
	line: {
		width: Util.size.width - Util.pixel*28,
		height: Util.pixel*0.5,
		backgroundColor: '#e8e8e8',
		marginTop: Util.pixel*10,
		marginBottom: Util.pixel*10,
	},
	input: {
		width: Util.pixel*200,
		height: Util.pixel*30,
		padding: 0,
	},
	item: {
		height: Util.pixel*90,
		paddingLeft: Util.pixel*14,
		paddingRight: Util.pixel*14,
	},
	textStyle: {
		fontSize: Util.commonFontSize(14),
		color: '#4a4a4a',
	},
	title: {
		width: Util.size.width - Util.pixel*28,
		paddingTop: Util.pixel*10,
		justifyContent: 'space-between',
	},
	separator: {
		height: Util.pixel*5,
		width: Util.size.width,
		backgroundColor: '#f8f8f8',
	}
});