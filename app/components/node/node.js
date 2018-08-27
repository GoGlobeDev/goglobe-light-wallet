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
import { Button } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';

const screen = Dimensions.get('window');

class Node extends Component {
	// 初始化组件节点状态
	constructor(props) {
		super(props);
		this.state = {
			machineNumber: 0
		};
		// this.navigate = this.props.navigation.navigate;
	}

	// 组件初始渲染挂载界面完成后 异步加载数据
	componentDidMount() {

	}
	_clickToBindingPhone = () => {
		this.props.navigation.navigate('BindMachine')
	}
	render() {
		let arr = this.state.fullNodeData;
		return (
			<View style={styles.container}>
				<View>
					<Text>当前持有：1123232GOG</Text>
					<Text>万分之五</Text>
					<Text>矿机数：{this.state.machineNumber}</Text>
					<Text>总算力：10000</Text>
					<Text>每日产出：135.33</Text>
				</View>
				<View>
					<View>
						<Image src="" />
					</View>
					<View>
						<Text>矿机1 代码：ASCII1</Text>
						<Text>算力：1000</Text>
						<Text>日产出：1000{this.state.machineNumber}</Text>
						<Text>地点：美国圣地亚哥金坷垃广场</Text>
					</View>
					
				</View>
				{
					this.state.machineNumber !== 2 && <Button title={'绑定矿机'} onPress={this._clickToBindingPhone}/>
				}
			</View>
		);
	}
}
export default withNavigation(Node);

const styles = StyleSheet.create({

});
