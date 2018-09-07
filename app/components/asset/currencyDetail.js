import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import { getTransactionRecord, getERC20TransactionRecord } from '../../api/index';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { scaleSize, ifIphoneX, show } from '../../utils/ScreenUtil';
import { ImageBackground } from 'react-native-vector-icons/lib/react-native';
import { getTime } from '../../utils/getTime';

const minHeight = ifIphoneX(scaleSize(62), 0, 0);
class Recording extends Component {
	render() {
		return (
			<View style={styles.recordDetail_item}>
				<Text>{this.props.to.replace(this.props.to.slice('8', '32'), '......')}</Text>
				<Text style={{ color: '#FF8018', fontSize: 20}}>{show(this.props.value / this.props.dime)}</Text>
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
						<View style={{ width: scaleSize(100)}}>
							<Icon name="icon-zhichusel" size={40} color="#34ccbf" />
						</View>
						<View style={{ width: scaleSize(600)}}>
							<Recording to={this.props.data.item.to} value={this.props.data.item.value} dime={this.props.dime}/>
							<Text>{getTime(this.props.data.item.timeStamp)}</Text>
						</View>
					</View>
				) : (
					<View style={styles.recordDetail}>
						<View style={{ width: scaleSize(100)}}>
							<Icon name="icon-shourusel" size={40} color="#528bf7" />
						</View>
						<View style={{ width: scaleSize(600)}}>
							<Recording to={this.props.data.item.to} value={this.props.data.item.value} time={this.props.data.item.timeStamp} dime={this.props.dime}/>
							<Text>{getTime(this.props.data.item.timeStamp)}</Text>
						</View>
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
			recordData: [],
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
        if (params.title === 'ETH') {
            getTransactionRecord(store.getState().walletInfo.wallet_address).then((res) => {
				console.log('res')
				console.log(res)
                this.setState(
                    {
                        ContractAddr: store.getState().contractAddr[ContractAddr],
                        recordData: res.data.result,
                        dime: 1e18
                    }
                );
            });
        } else {
            getERC20TransactionRecord(
                store.getState().walletInfo.wallet_address,
                store.getState().contractAddr[ContractAddr]
            ).then((res) => {
				console.log('res')
				console.log(res)
                this.setState(
                    {
                        ContractAddr: store.getState().contractAddr[ContractAddr],
                        recordData: res.data.result,
                        dime: 1000000
                    }
                );
            });
        }
	}

	render() {
		return (
			<View style={styles.container}>
					{this.state.currencyName === 'GOG' && <Image style={styles.logo} source={require(`../../assets/images/currency_logo/gog_logo.png`)} />}
					{this.state.currencyName === 'ETH' && <Image style={styles.logo} source={require(`../../assets/images/currency_logo/eth_logo.png`)} />}
				<ImageBackground style={{ width: scaleSize(750), height: scaleSize(315), backgroundColor: '#fff' }} source={require('../../assets/images/asset/currency_detail.png')}>
					<View style={styles.balance}>

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
							style={[styles.marginTop_20, { marginBottom: 280 + minHeight }]}
							data={this.state.recordData}
							renderItem={(item, index) => <TransactionRecord data={item} key={index} dime={this.state.dime}/>}
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
		// height: scaleSize(315),
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
		position: 'relative',
		zIndex: 100,
		top: scaleSize(62),
		left: scaleSize(340)
		// marginTop: scaleSize(-12),
		// marginLeft: scaleSize(2),
		// marginBottom: scaleSize(16)
	},
	balance_text_title: {
		fontSize: 17,
		opacity: 0.8,
		marginTop: scaleSize(82),
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
		height: scaleSize(150),
		flexDirection: 'row',
		// alignItems: 'center'
	},
	record_icon: {
		width: 50,
		height: 50
	},
	recordDetail_item: {
		// flex: 1,
		// height: 75,
		paddingRight: scaleSize(32),
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bottom_fun: {
		position: 'absolute',
		bottom: scaleSize(0),
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'transparent',
		backgroundColor: '#fff'
	},
	bottom_fun_item: {
		width: scaleSize(318),
		height: scaleSize(88),
		marginTop: scaleSize(26),
		marginBottom: scaleSize(26) + minHeight,
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
