import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Text,
	Image,
	Button,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	StatusBar,
	BackHandler,
	Alert,
	Linking
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
// import { Button } from 'react-native-elements';
import { scaleSize, ifIphoneX, show } from '../../utils/ScreenUtil';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { getDevice, getUser} from '../../api/bind';
import { connect } from 'react-redux';
import Toast from 'react-native-easy-toast';
const screen = Dimensions.get('window');
const minHeight = ifIphoneX(0, 20, StatusBar.currentHeight);

class MachineList extends Component {
	_clickToPower = () => {
		this.props.navigate('decomposePower');
	}
	_clickToMore = (item) => {
		this.props.navigate('moreInfo', {info: item, title: 'GoGlobe魔方手机', friend: false });
	}
	render() {
		return (
			<View style={[styles.machineList, { position: 'relative'}]}>
				<View>
					<Image style={styles.listLeft} source={require('../../assets/images/node/machine-left.png')} />
				</View>
				<View>
					<Text style={styles.listTitle}>GoGlobe魔方手机</Text>
					<Text style={styles.listContent}>{I18n.t('node.id')}：{this.props.item.deviceId}</Text>
					<Text style={styles.listContent}>{I18n.t('node.power')}：{this.props.item.deposit}</Text>
					<Text style={styles.listContent}>{I18n.t('node.status')}：{this.props.item.status === 2 ? I18n.t('node.active'): I18n.t('node.inactive') } </Text>
					{/* <Text style={styles.listContent}>{I18n.t('node.dailyProduct')}：1000</Text> */}
					{/* <Text style={styles.listContent}>{I18n.t('node.address')}：{this.props.item.description}</Text> */}
				</View>
				<TouchableOpacity onPress={() => this._clickToMore(this.props.item)} style={{ position: 'absolute', right: 0, top: scaleSize(40),  padding: scaleSize(16), borderRadius: scaleSize(52), height: scaleSize(72)}}>
					<Image style={{ width: scaleSize(34), height: scaleSize(10)}} source={require("../../assets/images/node/more.png")}/>
				</TouchableOpacity>
				{/* <TouchableOpacity onPress={this._clickToPower} style={{ marginLeft: scaleSize(84), marginTop: scaleSize(60), borderColor: '#EA7E25', borderWidth: scaleSize(2), padding: scaleSize(16), borderRadius: scaleSize(52), height: scaleSize(72)}}>
					<Text style={{ color: '#EA7E25', fontSize: 14 }}>分解算力</Text>
				</TouchableOpacity> */}
			</View>
		)
	}
}

class DeviceList extends Component {
	_clickToMore = (item) => {
		this.props.navigate('moreInfo', {info: item, title: 'GoGlobe魔方(来自好友)', friend: true});
	}
	render() {
		return (
			<View style={styles.machineList}>
				<View>
					<Image style={styles.listLeft} source={require('../../assets/images/node/machine-left.png')} />
				</View>
				<View>
					<Text style={styles.listTitle}>GoGlobe魔方(来自好友)</Text>
					<Text style={styles.listContent}>{I18n.t('node.id')}：{this.props.item.id}</Text>
					<Text style={styles.listContent}>{I18n.t('node.power')}：{this.props.item.deposit}</Text>
					<Text style={styles.listContent}>{I18n.t('node.status')}：{this.props.item.status === 2 ? I18n.t('node.active'): I18n.t('node.inactive') } </Text>
					{/* <Text style={styles.listContent}>{I18n.t('node.dailyProduct')}：1000</Text> */}
					{/* <Text style={styles.listContent}>{I18n.t('node.address')}：{this.props.item.description}</Text> */}
				</View>
				<TouchableOpacity onPress={() => this._clickToMore(this.props.item)} style={{ position: 'absolute', right: 0, top: scaleSize(40),  padding: scaleSize(16), borderRadius: scaleSize(52), height: scaleSize(72)}}>
					<Image style={{ width: scaleSize(34), height: scaleSize(10)}} source={require("../../assets/images/node/more.png")}/>
				</TouchableOpacity>
			</View>
		)
	}
}

class NodeItem extends Component {
	// 初始化组件节点状态
	constructor(props) {
		super(props);
		this.state = {
			device: {},
			sum: 0
		};
		// this.navigate = this.props.navigation.navigate;
	}
	componentWillReceiveProps(newProps) {
		console.log(this.props.wallet)
		console.log(newProps)
		let userId = '';
		if(newProps.navigation.state.params && newProps.navigation.state.params.userId){
			userId = newProps.navigation.state.params.userId
		}else {
			userId = newProps.wallet.userId
		}
		getDevice(userId).then((res) => {
			const sum = Number(res.data.bindDeviceList.length) + res.data.deviceSum
			this.setState({
				sum: sum,
				device: res.data,
				balance: res.data.balance,
				userId: newProps.navigation.state.params.userId,
				passwordExists: newProps.navigation.state.params.passwordExists
			})
		}).catch((e) => {
			console.log(e)
		})
	}
	// 组件初始渲染挂载界面完成后 异步加载数据
	componentDidMount() {
		// BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
		// console.log(this.props.wallet)
		storage
		.load({ key: 'user'})
		.then((user) => {
			if(user.userId && user.passwordExists){
				getDevice(this.props.wallet.userId || user.userId).then((res) => {
					const sum = Number(res.data.bindDeviceList.length) + res.data.deviceSum
					const balance = res.data.balance;
					this.setState({
						device: res.data,
						userId: res.data.userId,
						balance: balance,
						phone: user.phone,
						passwordExists: user.passwordExists,
						sum: sum
					})
				}).catch((e) => {
					this.setState({
						userId: user.userId,
						passwordExists: user.passwordExists
					})
				})
			}
		}).catch((e) => {
			console.log(e)
		})
	}
	_clickToBindMachine = () => {
		storage
		.load({
			key: 'walletInfo'
		})
		.then((walletInfo) => {
			let walletAddress = walletInfo.walletAddress;
			getUser(walletAddress).then((res) => {
				if(res.data){
					if(!res.data.userId) {
						this.props.navigation.navigate('GoBindPhone', { page: 'node'});
					} else if (!res.data.passwordExists) {
						this.props.navigation.navigate('SetPwd', { page: 'node', userId: res.data.userId, phone: this.state.phone})
					} else {
						this.props.navigation.navigate('BindMachine', {userId: res.data.userId })
					}
				}
			}).catch((e) => {
				console.log(e)
			})
		})
		.catch((x) => {
			console.log(x);
		});

	}
	_clickToWithdrawCash = () => {
		this.props.navigation.navigate('WithdrawCash', { gog_banlance: this.state.device.balance})
		// this.props.navigation.navigate('SetPwd', { page: 'node', userId: this.state.userId, phone: this.state.phone})
	}
	render() {
		const { device } = this.state
		return (
			<View style={styles.container}>
				<Toast ref="toast" position="center" />
					<ScrollView style={{ marginBottom: scaleSize(106) + 30}}>
						<ImageBackground style={{ width: scaleSize(750), height: scaleSize(568)}} source={require('../../assets/images/node/node-top.png')}>
							<View style={styles.top}>
								<Text style={styles.title}>{I18n.t('node.miner')}</Text>
								<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.balance')}</Text>
										<Text style={styles.sm_content}>{show(String(this.state.balance))}</Text>
									</View>
									<TouchableOpacity style={[styles.button, { width: scaleSize(150), height: scaleSize(72) }]} onPress={this._clickToWithdrawCash}>
										<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('node.withdrawCash')}</Text>
									</TouchableOpacity>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleSize(10)}}>
									<Text style={{ fontSize: 13, fontFamily: 'PingFangSC-Regular', color: 'rgba(255,255,255,1)' }}>日利率</Text><Text style={{ color: '#FF8018', fontSize: 12, marginLeft: scaleSize(4) }}>+{show(device.dailyInterest)}</Text>
								</View>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.minerCount')}</Text>
										<Text style={styles.sm_content}>{device.deviceSum || 0}</Text>
									</View>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.totalPower')}</Text>
										<Text style={styles.sm_content}>{device.totalDeposit || 0}</Text>
									</View>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.dailyProducts')}</Text>
										<Text style={styles.sm_content}>{show(device.dailyProduce)}</Text>
									</View>
								</View>
							</View>
						</ImageBackground>
						<View>
							{device.deviceSum > 0 && device.deviceList.map((item, index) => {
								return <MachineList item={item} key={index} navigate={this.props.navigation.navigate}/>
							})}
						</View>
						<View>
							{device.bindDeviceList && device.bindDeviceList.length > 0 && device.bindDeviceList.map((item, index) => {
								return <DeviceList item={item} key={index} navigate={this.props.navigation.navigate}/>
							})}
						</View>
						{(!this.state.sum || device.deviceSum < 2) && <TouchableOpacity style={styles.button} onPress={this._clickToBindMachine}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('node.registerMiner._title')}</Text>
						</TouchableOpacity>}
					</ScrollView>
				


			</View>
		);
	}
}

export default connect(
	state => ({
		wallet: state.wallet
	}),{

	}
)(NodeItem);
// export default withNavigation(NodeItem);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: screen.height
	},
	top: {
		padding: scaleSize(30),
		marginTop: scaleSize(114) - minHeight,
	},
	title: {
		fontSize: 34,
		color: '#ffffff'
	},
	sm_title: {
		fontSize: 13,
		fontFamily: 'PingFangSC-Regular',
		color: 'rgba(255,255,255,1)',
		marginTop: scaleSize(36),
		marginBottom: scaleSize(20),
	},
	sm_content: {
		fontSize: 17,
		fontFamily: 'PingFangSC-Medium',
		color: 'rgba(255,255,255,1)',
	},
	machineIcon: {
		width: scaleSize(750),
		height: scaleSize(442),
		marginTop: scaleSize(152),
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
