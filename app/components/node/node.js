import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Dimensions,
	StyleSheet,
	ScrollView,
	RefreshControl,
	TouchableOpacity,
	TouchableHighlight,
	ActivityIndicator
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { getNodeRank, getMemberStatus, getTeamAddress } from '../../api/loged';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';

const screen = Dimensions.get('window');

class Node extends Component {
	// 初始化组件节点状态
	constructor(props) {
		super(props);
		this.state = {
			isRefreshing: false,
			standardNodeData: [],
			fullNodeData: [],
			teamAddress: null,
			standPageIndex: 0,
			fullPageIndex: 0
		};
		// this.navigate = this.props.navigation.navigate;
	}

	// 组件初始渲染挂载界面完成后 异步加载数据
	componentDidMount() {

	}
	render() {
		let arr = this.state.fullNodeData;
		return (
			<View style={styles.container}>
				<Text>挖矿</Text>
			</View>
		);
	}
}
export default withNavigation(Node);

const styles = StyleSheet.create({
	font_12: {
		fontSize: 12
	},
	color_white: {
		color: '#fff'
	},
	container: {
		flex: 1
	},
	header: {
		padding: 8,
		height: screen.height * 0.2,
		backgroundColor: '#528bf7',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	header_title: {
		fontSize: 18
	},
	header_item: {
		flexDirection: 'row',
		width: screen.width,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	fun: {
		width: screen.width * 0.35,
		height: 80,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	fun_icon: {
		width: 35,
		height: 28
	},
	// scrollview: {
	//     borderWidth: 1,
	//     borderColor: 'red',
	// },
	//排行
	nodeItem: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 15,
		paddingRight: 15,
		justifyContent: 'space-between'
	},
	iconSort: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 25,
		height: 33
	},
	iconPersonal: {
		width: 20,
		height: 10
	},
	nickName: {
		marginLeft: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: screen.width * 0.35
	},
	lockNum: {
		width: screen.width * 0.25
	},
	tickets: {
		width: screen.width * 0.25
	},
	node_text: {
		color: '#528bf7'
	}
});
