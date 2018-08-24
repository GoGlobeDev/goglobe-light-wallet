import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	ScrollView,
	RefreshControl,
	TouchableHighlight,
	Modal,
	Linking
} from 'react-native';
import { connect } from 'react-redux';
import actions from '../../store/action/walletInfo';
import getBalance from '../../utils/addTokens';
import abi from '../../utils/abi';
import { I18n } from '../../../language/i18n';
import { checkVersion } from '../../api/index';
var DeviceInfo = require('react-native-device-info');

class CurrencyList extends Component {
	currencyDetail(title, banlance) {
		this.props.navigate('CurrencyDetail', {
			title: title,
			banlance: banlance
		});
	}

	render() {
		return (
			<TouchableHighlight
				underlayColor={'transparent'}
				onPress={() => this.currencyDetail(this.props.item.currency_name, this.props.item.balance)}
			>
				<View style={styles.currency_list}>
					<View style={styles.currency_left}>
						<View>
							<TouchableHighlight style={styles.currency_logo}>
								<Image style={styles.currency_logo_item} source={this.props.item.logo_url} />
							</TouchableHighlight>
						</View>
						<View style={styles.marginLeft}>
							<Text>{this.props.item.currency_name}</Text>
						</View>
					</View>
					<View>
						<Text style={styles.alignRight}>{this.props.item.balance}</Text>
						<Text style={[ styles.alignRight, styles.currency ]} />
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}

class Assets extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
		this.state = {
			walletName: ' ',
			walletAddress: ' ',
			eth_banlance: 0,
			gog_banlance: 0,
			lock_num: 0,
			newVersion: '--',
			modalVisible: false,
			currentVersion: null,
			isRefreshing: true
		};
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
		num = num.match(/\d+\.\d{5}/)[0];
		return num;
	}

	getAllBalance() {
		this.setState({
			isRefreshing: true
		});

		web3.eth.getBalance(this.state.walletAddress).then((res) => {
			let eth_banlance = this.show(web3.utils.fromWei(res, 'ether'));
			this.setState({ eth_banlance });
		});
		getBalance(
			abi,
			this.state.walletAddress,
			store.getState().contractAddr.GOGContractAddr,
			(gog_banlance) => {
				gog_banlance = this.show(gog_banlance);
				this.setState({ gog_banlance });
			}
		);
		this.updataWalletName();

		setTimeout(() => {
			this.setState({
				isRefreshing: false
			});
		}, 1000);
	}

	componentDidMount() {
		storage
			.load({
				key: 'walletInfo'
			})
			.then((walletInfo) => {
				let walletAddress = walletInfo.walletAddress;
				this.setState(
					{
						walletAddress: walletAddress
					},
					() => {
						this.getAllBalance();
					}
				);
			})
			.catch((x) => {
				console.log(x);
			});
		this.updataWalletName();

		// this.setState({
		// 	currentVersion: DeviceInfo.getVersion().replace(/\./g, '')
		// });

		// checkVersion()
		// 	.then((result) => {
		// 		return result.data.data;
		// 	})
		// 	.then((res) => {
		// 		this.setState({
		// 			newVersion: res.version,
		// 			modalVisible: true
		// 		});
		// 		let ver_new = res.version.replace(/\./g, '');
		// 		if (ver_new > this.state.currentVersion) {
		// 			this.setState({ modalVisible: true });
		// 		}
		// 	});
	}

	updataWalletName() {
		storage
			.load({
				key: 'walletName'
			})
			.then((res) => {
				let walletName = res.walletName;
				this.setState({
					walletName: walletName
				});
			})
			.catch((x) => {
				console.log('没有发现钱包名称');
			});
	}

	componentWillUpdate() {
		this.props.walletInfo({
			wallet_address: this.state.walletAddress,
			eth_banlance: this.state.eth_banlance,
			gog_banlance: this.state.gog_banlance
		});
	}

	render() {
		const currencyData = [
			{
				currency_name: 'ETH',
				balance: this.state.eth_banlance,
				logo_url: require('../../assets/images/currency_logo/eth_logo.png')
			},
			{
				currency_name: 'GOG',
				balance: this.state.gog_banlance,
				logo_url: require('../../assets/images/currency_logo/gog_logo.png')
			}
		];

		return (
			<View style={styles.container}>
				<View style={styles.walletInfo}>
					<View style={styles.walletInfo_item}>
						<TouchableHighlight
							underlayColor={'transparent'}
							onPress={() => this.props.navigation.navigate('WalletInfo')}
						>
							<Image style={styles.avatar} source={require('../../assets/images/asset/head_2x.png')} />
						</TouchableHighlight>
						<Text style={styles.walletName}>{this.state.walletName}</Text>
						<TouchableHighlight
							underlayColor={'transparent'}
							onPress={() => this.props.navigation.navigate('Receipt')}
						>
							<View style={styles.walletAddress}>
								<Text style={styles.walletAddress_item}>
									{this.state.walletAddress.replace(
										this.state.walletAddress.slice('9', '35'),
										'......'
									)}
								</Text>
								<Image
									style={styles.addressErcode}
									source={require('../../assets/images/asset/ercode_2x.png')}
								/>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				{/* <View style={styles.addCurrency}>
					<View style={styles.addCurrency_item}>
						<View>
							<Text style={styles.currency_text}>{I18n.t('assets.totalAssets')}</Text>
							<Text>{this.state.gog_banlance}</Text>
						</View>

					</View>
				</View> */}

				<ScrollView
					style={styles.scrollview}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={() => {
								this.getAllBalance();
							}}
							tintColor="#BABEBA"
							title="Loading..."
							titleColor="#9FA3A0"
						/>
					}
				>
					{currencyData.map((item, index) => {
						return <CurrencyList item={item} index={index} key={index} navigate={this.navigate} />;
					})}
				</ScrollView>

				<Modal
					animationType={'fade'}
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setState({ modalVisible: false });
					}}
				>
					<View style={styles.modalCon}>
						<View style={styles.modal}>
							<Text style={styles.modalTitle}>发现True {this.state.newVersion}版本</Text>
							<View style={styles.modalBottomBtn}>
								<View>
									<Text
										style={styles.modalBottomBtnNoText}
										onPress={() => {
											this.setState({
												modalVisible: false
											});
										}}
									>
										暂不升级
									</Text>
								</View>
								<View>
									<Text
										style={styles.modalBottomBtnYesText}
										onPress={() => {
											Linking.openURL('http://wapxk.com/wapindex-1000-6635.html').catch((err) =>
												console.error('An error occurred', err)
											);
										}}
									>
										立即升级
									</Text>
								</View>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

export default connect((state) => state.walletInfo, actions)(Assets);

const styles = StyleSheet.create({
	marginLeft: {
		marginLeft: 20
	},
	alignRight: {
		textAlign: 'right'
	},
	container: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height - 50,
		backgroundColor: '#fff'
	},
	walletInfo: {
		height: 230,
		backgroundColor: '#528bf7'
		// borderBottomLeftRadius: 10,
		// borderBottomRightRadius: 10
	},
	walletInfo_item: {
		flex: 1,
		marginTop: 20,
		height: 210,
		alignItems: 'center',
		justifyContent: 'center'
	},
	avatar: {
		width: 70,
		height: 70,
		marginBottom: 10
	},
	walletName: {
		color: '#fff',
		fontSize: 18,
		marginBottom: 10
	},
	walletAddress: {
		flexDirection: 'row'
	},
	addressErcode: {
		width: 15,
		height: 15,
		marginLeft: 5
	},
	walletAddress_item: {
		color: '#fff',
		fontSize: 12
	},
	//新增币种
	addCurrency: {
		alignItems: 'center',
		marginTop: -30
	},
	addCurrency_item: {
		borderRadius: 8,
		height: 80,
		padding: 30,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		width: Dimensions.get('window').width * 0.85,
		shadowColor: '#938670',
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 0,
			height: 2
		}
	},
	currency_text: {
		color: '#ccc',
		fontSize: 12
	},
	currency_item: {
		width: 80,
		height: 30,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#528bf7'
	},
	currency_item_text: {
		color: '#fff'
	},
	//币种列表
	currency_list: {
		height: 80,
		marginTop: 5,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	currency_left: {
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	currency_logo: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 50,
		padding: 8
	},
	currency_logo_item: {
		width: 40,
		height: 40
	},
	currency: {
		color: '#ccc'
	},
	// version
	modalCon: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modal: {
		backgroundColor: 'white',
		width: 260,
		borderRadius: 10
	},
	modalTitle: {
		fontSize: 16,
		color: '#222',
		lineHeight: 50,
		height: 50,
		textAlign: 'center',
		paddingLeft: 15,
		paddingRight: 15
	},
	versionText: {
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 20
	},
	modalBottomBtn: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderTopWidth: 1,
		borderColor: '#eee',
		alignItems: 'center',
		height: 50
	},
	modalBottomBtnNoText: {
		color: 'rgb(0,118,255)',
		fontSize: 16,
		textAlign: 'center'
	},
	modalBottomBtnYesText: {
		color: 'rgb(254,56,36)',
		fontSize: 16,
		textAlign: 'center'
	}
});
