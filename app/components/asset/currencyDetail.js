import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { getTransactionRecord, getERC20TransactionRecord } from '../../api/index';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { scaleSize } from '../../utils/ScreenUtil';
import { ImageBackground } from 'react-native-vector-icons/lib/react-native';

class Recording extends Component {
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

	render() {
		return (
			<View style={styles.recordDetail_item}>
				<Text>{this.props.to.replace(this.props.to.slice('8', '32'), '......')}</Text>
				<Text>{this.show(this.props.value / 1e18)}</Text>
			</View>
		);
	}
}

class TransactionRecord extends Component {
	render() {
		return (
			<View>
				{this.props.data.item.from === store.getState().walletInfo.wallet_address ? (
					<View style={styles.recordDetail}>
						<View>
							<Icon name="icon-zhichusel" size={50} color="#34ccbf" />
						</View>
						<Recording to={this.props.data.item.to} value={this.props.data.item.value} />
					</View>
				) : (
					<View style={styles.recordDetail}>
						<View>
							<Icon name="icon-shourusel" size={50} color="#528bf7" />
						</View>
						<Recording to={this.props.data.item.to} value={this.props.data.item.value} />
					</View>
				)}
			</View>
		);
	}
}

class currencyDetail extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
		this.state = {
			title: null,
			recordData: [{to: '0xB6191e8EC7A01ddc8dE117A38E3a9297e719008B', from: '0xB6191e8EC7A01ddc8dE117A38E3a9297e719008B', value: '3333333'},{to: '0xB6191e8EC7A01ddc8dE117A38E3a9297e719008B', from: '0xB6191e8EC7A01ddc8dE117A38E3a9297e719008B', value: '3333333'}],
			ContractAddr: null
		};
	}

	static navigationOptions = ({ navigation }) => ({
		// headerTitle: navigation.state.params.title
		headerTitle: null
	});

	componentDidMount() {
		const { params } = this.props.navigation.state;
		this.state.currencyName = params.title;
		this.state.banlance = params.banlance;
		let ContractAddr = params.title + 'ContractAddr';
		this.setState(
			{
				ContractAddr: store.getState().contractAddr[ContractAddr]
			},
			() => {
				// if (params.title === 'ETH') {
				// 	getTransactionRecord(store.getState().walletInfo.wallet_address).then((res) => {
				// 		this.setState({
				// 			recordData: res.data.result
				// 		});
				// 	});
				// } else {
				// 	getERC20TransactionRecord(
				// 		store.getState().walletInfo.wallet_address,
				// 		this.state.ContractAddr
				// 	).then((res) => {
				// 		this.setState({
				// 			recordData: res.data.result
				// 		});
				// 	});
				// }
				this.setState({
					recordData: this.state.recordData
				});
			}
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={{ width: scaleSize(750), height: scaleSize(315), backgroundColor: '#fff', marginTop: scaleSize(32) }} source={require('../../assets/images/asset/currency_detail.png')}>
					<View style={styles.balance}>
						{this.state.currencyName === 'GOG' && <Image style={styles.logo} source={require(`../../assets/images/currency_logo/gog_logo.png`)} />}
						{this.state.currencyName === 'ETH' && <Image style={styles.logo} source={require(`../../assets/images/currency_logo/eth_logo.png`)} />}
						<Text style={[ styles.color_white, styles.balance_text_title ]}>{this.state.currencyName}</Text>
						<Text style={[ styles.color_white, styles.balance_text_big ]}>{this.state.banlance}</Text>
						{/* <Text style={[ styles.color_white, styles.marginTop_20 ]}>市值：*****</Text> */}
					</View>

				</ImageBackground>
				<View style={{ marginLeft: scaleSize(32), marginTop: scaleSize(50) }}>
					<Text style={{ fontSize: 17, color: '#0D0E15', fontWeight: 'bold'}}>{I18n.t('assets.currency.recentTradeRecord')}</Text>
				</View>
				<View style={styles.record}>
					{this.state.recordData.length >= 1 ? (
						<FlatList
							style={styles.marginTop_20}
							data={this.state.recordData}
							renderItem={(item, index) => <TransactionRecord data={item} key={index} />}
							keyExtractor={(item, index) => index.toString()}
						/>
					) : (
						<Text style={styles.textAlign}>~</Text>
					)}
				</View>
				<View style={styles.bottom_fun}>
					<View style={[ styles.bottom_fun_item, styles.bottom_fun_item_transfer ]}>
						<Text style={styles.bottom_fun_text}
							onPress={() => {
								this.navigate('Transfer', {
									navigate: this.navigate,
									currencyName: this.state.currencyName
								});
							}}
						>
							{I18n.t('assets.currency.transfer')} {/* 转账 */}
						</Text>
					</View>
					<View style={[ styles.bottom_fun_item, styles.bottom_fun_item_receipt ]}>
						<Text
							style={styles.bottom_fun_text}
							onPress={() => {
								this.navigate('Receipt');
							}}
						>
							{I18n.t('assets.currency.receipt')} {/*  收款 */}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default withNavigation(currencyDetail);

const styles = StyleSheet.create({
	textAlign: {
		textAlign: 'center'
	},
	color_white: {
		color: '#fff'
	},
	marginTop_20: {
		marginTop: 20
	},
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	balance: {
		height: scaleSize(315),
		alignItems: 'center',
		// justifyContent: 'center',
		// backgroundColor: '#528bf7'
	},
	logo: {
		width: scaleSize(72),
		height: scaleSize(72),
		borderRadius: scaleSize(36),
		borderWidth: 1,
		borderColor: '#ccc',
		marginTop: scaleSize(-12),
		marginLeft: scaleSize(2),
		marginBottom: scaleSize(16)
	},
	balance_text_title: {
		fontSize: 17,
		opacity: 0.8,
		marginBottom: scaleSize(32),
		fontWeight: 'bold'
	},
	balance_text_big: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	record: {
		padding: scaleSize(32),
		paddingTop: 0,
		// position: 'absolute',
		// top: 150,
		// bottom: 50,
		// left: 0,
		// right: 0
	},
	recordDetail: {
		height: 75,
		flexDirection: 'row',
		alignItems: 'center'
	},
	record_icon: {
		width: 50,
		height: 50
	},
	recordDetail_item: {
		flex: 1,
		height: 75,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bottom_fun: {
		position: 'absolute',
		bottom: scaleSize(88),
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'transparent'
	},
	bottom_fun_item: {
		width: scaleSize(318),
		height: scaleSize(88),
		borderRadius: scaleSize(44),
		justifyContent: 'center'
		// width: Dimensions.get('window').width / 2
	},
	bottom_fun_text: {
		color: '#fff',
		textAlign: 'center',
	},
	bottom_fun_item_transfer: {
		backgroundColor: '#405696',
		marginRight: scaleSize(30),
	},
	bottom_fun_item_receipt: {
		backgroundColor: '#FF8725'
	}
});

// <View style={styles.balance}>
// 	<Text style={[styles.color_white, styles.balance_text_big]}>{this.state.banlance}</Text>
// 	{/* <Text style={[ styles.color_white, styles.marginTop_20 ]}>市值：*****</Text> */}
// </View>
// 	<View style={styles.record}>
// 		<Text>{I18n.t('assets.currency.recentTradeRecord')}</Text> {/* 近期交易记录 */}
// 		{this.state.recordData.length > 1 ? (
// 			<FlatList
// 				style={styles.marginTop_20}
// 				data={this.state.recordData}
// 				renderItem={(item) => <TransactionRecord data={item} />}
// 			/>
// 		) : (
// 				<Text style={styles.textAlign}>~</Text>
// 			)}
// 	</View>
// 	<View style={styles.bottom_fun}>
// 		<Text
// 			style={[styles.bottom_fun_item, styles.bottom_fun_item_transfer]}
// 			onPress={() => {
// 				this.navigate('Transfer', {
// 					navigate: this.navigate,
// 					currencyName: this.state.currencyName
// 				});
// 			}}
// 		>
// 			{I18n.t('assets.currency.transfer')} {/*转账 */}
// 		</Text>
// 		<Text
// 			style={[styles.bottom_fun_item, styles.bottom_fun_item_receipt]}
// 			onPress={() => {
// 				this.navigate('Receipt');
// 			}}
// 		>
// 			{I18n.t('assets.currency.receipt')} {/* 收款 */}
// 		</Text>
// 	</View>
