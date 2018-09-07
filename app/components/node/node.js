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
	StatusBar
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
// import { Button } from 'react-native-elements';
import { scaleSize, ifIphoneX } from '../../utils/ScreenUtil';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { getDevice, getUser} from '../../api/bind';

const screen = Dimensions.get('window');
const minHeight = ifIphoneX(0, 20, StatusBar.currentHeight);

class MachineList extends Component {
	render() {
		return (
			<View style={styles.machineList}>
				<View>
					<Image style={styles.listLeft} source={require('../../assets/images/node/machine-left.png')} />
				</View>
				<View>
					<Text style={styles.listTitle}>GoGlobe挖矿手机</Text>
					<Text style={styles.listContent}>编号：{this.props.item.id}</Text> 
					<Text style={styles.listContent}>{I18n.t('node.power')}：{this.props.item.deposit}</Text>
					<Text style={styles.listContent}>状态：{this.props.item.status === 2 ? '已激活': '未激活' } </Text>
					{/* <Text style={styles.listContent}>{I18n.t('node.dailyProduct')}：1000</Text> */}
					{/* <Text style={styles.listContent}>{I18n.t('node.address')}：{this.props.item.description}</Text> */}
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
			device: {},
		};
		// this.navigate = this.props.navigation.navigate;
	}
	componentWillReceiveProps(newProps) {
		getDevice(newProps.navigation.state.params.userId).then((res) => {
			this.setState({
				device: res.data,
				userId: newProps.navigation.state.params.userId,
				passwordExists: newProps.navigation.state.params.passwordExists
			})
		}).catch((e) => {
			console.log(e)
		})
	}
	getuser = (userId) => {
		storage
		.load({
			key: 'walletInfo'
		})
		.then((walletInfo) => {
			let walletAddress = walletInfo.walletAddress;
			getUser(walletAddress).then((res) => {
				if(res.data && res.data.userId){
					this.setState({
						userId: res.data.userId,
						phone: res.data.phone,
						rcode: res.data.referralCode,
						passwordExists: res.data.passwordExists
					})
				} else {
					this.setState({
						userId: '',
						phone: '',
						rcode: '',
						passwordExists: false
					})
				}
			}).catch((e) => {
				console.log(e)
			})
		})
		.catch((x) => {
			console.log(x);
		});
	}
	show(num) {
		num += '';
		num = num.replace(/[^0-9|\.]/g, '');
		if (/^0+/) {
			num = num.replace(/^0+/, '');
		}
		if (!/\./.test(num)) {
			num += '.00000';
		}
		if (/^\./.test(num)) {
			num = '0' + num;
		}
		num += '00000';
		num = num.match(/\d+\.\d{4}/)[0];
		return num;
	}
	// 组件初始渲染挂载界面完成后 异步加载数据
	componentDidMount() {
		storage
		.load({ key: 'user'})
		.then((user) => {
			// console.log(user)
			if(user.userId && user.passwordExists){
				getDevice(user.userId).then((res) => {
					console.log(res.data)
					const balance = this.show(String(res.data.balance));
					// balance = String(balance).replace(/^(.*\..{4}).*$/,"$1");
					console.log(balance);
					this.setState({
						device: res.data,
						userId: res.data.userId,
						balance: balance,
						phone: user.phone,
						passwordExists: user.passwordExists
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
						this.props.navigation.navigate('SetPwd', { page: 'node', userId: this.state.userId, phone: this.state.phone})
					} else {
						this.props.navigation.navigate('BindMachine', {userId: this.state.userId})
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
				{
					!device.deviceSum || device.deviceSum === 0 ? <View>
						<Text style={[styles.title, {color: '#0D0E15', marginTop: scaleSize(114) - minHeight, marginLeft: scaleSize(32)}]}>{I18n.t('node.miner')}</Text>
						<Image style={styles.machineIcon} source={require('../../assets/images/node/machine.png')}/>
						<TouchableOpacity style={styles.button} onPress={this._clickToBindMachine}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('node.registerMiner._title')}</Text>
						</TouchableOpacity>
					</View>
					: <ScrollView style={{ marginBottom: scaleSize(98)}}>
						<ImageBackground style={{ width: scaleSize(750), height: scaleSize(568)}} source={require('../../assets/images/node/node-top.png')}>
							<View style={styles.top}>
								<Text style={styles.title}>{I18n.t('node.miner')}</Text>
								<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.balance')}</Text>
										<Text style={styles.sm_content}>{this.state.balance}</Text>
									</View>
									<TouchableOpacity style={[styles.button, { width: scaleSize(128), height: scaleSize(72) }]} onPress={this._clickToWithdrawCash}>
										<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('node.withdrawCash')}</Text>
									</TouchableOpacity>
								</View>

								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.minerCount')}</Text>
										<Text style={styles.sm_content}>{device.deviceSum}</Text>
									</View>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.totalPower')}</Text>
										<Text style={styles.sm_content}>{device.totalDeposit}</Text>
									</View>
									<View>
										<Text style={styles.sm_title}>{I18n.t('node.dailyProducts')}</Text>
										<Text style={styles.sm_content}>{device.dailyProduce}</Text>
									</View>
								</View>
							</View>
						</ImageBackground>
						<View>
							{device.deviceSum > 0 && device.deviceList.map((item, index) => {
								return <MachineList item={item} key={index}/>
							})}
						</View>
						{device.deviceSum < 2 && <TouchableOpacity style={styles.button} onPress={this._clickToBindMachine}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('node.registerMiner._title')}</Text>
						</TouchableOpacity>}

					</ScrollView>
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
		marginTop: scaleSize(46),
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
