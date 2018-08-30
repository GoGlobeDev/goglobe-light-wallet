import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Button,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { getNodeRank, getMemberStatus, getTeamAddress } from '../../api/loged';
// import { Button } from 'react-native-elements';
import { scaleSize } from '../../utils/ScreenUtil';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';

const screen = Dimensions.get('window');

class MachineList extends Component {
	render() {
		return (
			<View style={styles.machineList}>
				<View>
					<Image style={styles.listLeft} source={require('../../assets/images/node/machine-left.png')} />
				</View>
				<View>
					<Text style={styles.listTitle}>{this.props.item.title}</Text>
					<Text style={styles.listContent}>算力：1000</Text>
					<Text style={styles.listContent}>日产出：1000</Text>
					<Text style={styles.listContent}>地点：美国圣地亚哥金坷垃广场</Text>
				</View>
			</View>
		)
	}
}

class Node extends Component {
	// 初始化组件节点状态
	constructor(props) {
		super(props);
		this.state = {
			machineNumber: 1,
			MachineList: [
				{title: '矿机1 代码：ASCII1'}
			]
		};
		// this.navigate = this.props.navigation.navigate;
	}

	// 组件初始渲染挂载界面完成后 异步加载数据
	componentDidMount() {

	}
	_clickToBindMachine = () => {
		this.props.navigation.navigate('BindMachine')
	}
	_clickToWithdrawCash = () => {
		this.props.navigation.navigate('WithdrawCash')
	}
	render() {
		return (
			<View style={styles.container}>
				{
					this.state.machineNumber === 0 ? <View>
						<Text style={[styles.title, {color: '#0D0E15', marginTop: scaleSize(114), marginLeft: scaleSize(32)}]}>矿机</Text>
						<Image style={styles.machineIcon} source={require('../../assets/images/node/machine.png')}/>
						<TouchableOpacity style={styles.button} onPress={this._clickToBindMachine}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>绑定矿机</Text>
						</TouchableOpacity>
					</View>
					: <View>
						<ImageBackground style={{ width: scaleSize(750), height: scaleSize(568)}} source={require('../../assets/images/node/node-top.png')}>
							<View style={styles.top}>
								<Text style={styles.title}>矿机</Text>
								<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
									<View>
										<Text style={styles.sm_title}>当前持有(GOG)</Text>
										<Text style={styles.sm_content}>10000</Text>
									</View>
									<TouchableOpacity style={[styles.button, { width: scaleSize(128), height: scaleSize(72) }]} onPress={this._clickToWithdrawCash}>
										<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>提现</Text>
									</TouchableOpacity>
								</View>
								
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<View>
										<Text style={styles.sm_title}>矿机数</Text>
										<Text style={styles.sm_content}>1</Text>
									</View>
									<View>
										<Text style={styles.sm_title}>总算力</Text>
										<Text style={styles.sm_content}>10000</Text>
									</View>
									<View>
										<Text style={styles.sm_title}>每日产出</Text>
										<Text style={styles.sm_content}>121.56</Text>
									</View>
								</View>
							</View>
						</ImageBackground>
						<View>
							{this.state.MachineList.map((item, index) => {
								return <MachineList item={item} key={index}/>
							})}
						</View>
						{this.state.MachineList.length < 2 && <TouchableOpacity style={styles.button} onPress={this._clickToBindMachine}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>绑定矿机</Text>
						</TouchableOpacity>}
						
					</View>
				}
				

			</View>
		);
	}
}
export default withNavigation(Node);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: screen.height
	},
	top: {
		padding: scaleSize(30),
		marginTop: scaleSize(114),
	},
	title: {
		fontSize: 34,
		color: '#ffffff'
	},
	sm_title: {
		fontSize: 13,
		fontFamily: 'PingFangSC-Regular',
		color: 'rgba(255,255,255,1)',
		marginTop: scaleSize(46),
		marginBottom: scaleSize(20),
	},
	sm_content: {
		fontSize: 17,
		fontFamily: 'PingFangSC-Medium',
		color: 'rgba(255,255,255,1)',
	},
	machineIcon: {
		width: scaleSize(446),
		height: scaleSize(400),
		margin: scaleSize(152),
		marginBottom: scaleSize(88),
	},
	button: {
		width: scaleSize(360),
		height: scaleSize(100),
		borderRadius: scaleSize(52),
		backgroundColor: '#EA6228',
		justifyContent: 'center',
		marginLeft: scaleSize(196),
		marginTop: scaleSize(79)
	},
	machineList: {
		flexDirection: 'row',
		marginLeft: scaleSize(32),
		marginRight: scaleSize(32),
		paddingTop: scaleSize(42),
		paddingBottom: scaleSize(42),
		borderBottomWidth: scaleSize(1),
		borderBottomColor: '#E7E7E7'
	},
	listLeft: {
		width: scaleSize(144),
		height: scaleSize(192),
		marginRight: scaleSize(16)
	},
	listTitle: {
		fontSize: 17,
		color: 'rgba(13,14,21,1)',
		marginBottom: scaleSize(5)
	},
	listContent: {
		fontSize: 13,
		color: 'rgba(13,14,21,1)',
		marginTop: scaleSize(11)
	}
});
