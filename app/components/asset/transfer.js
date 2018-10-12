import React, { Component } from 'react';
import { View, Text, Image, Alert, StyleSheet, Dimensions, NetInfo, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';
import { Input, Slider, Button } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { withNavigation } from 'react-navigation';
import sendEth from '../../utils/sendEth';
import sendTokens from '../../utils/sendTokens';
import abi from '../../utils/trueabi';
import { I18n } from '../../../language/i18n';
import Loading from 'react-native-whc-loading';
import { scaleSize } from '../../utils/ScreenUtil';

const screen = Dimensions.get('window');

class Detail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.paymentDetails_item}>
				<Text style={styles.paymentDetails_item_key}>{this.props.key_k}</Text>
				<Text style={[ styles.paymentDetails_item_val, this.props.style ]}>{this.props.val}</Text>
			</View>
		);
	}
}

class Transfer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fromAddr: '',
			toAddress: '',
			amount: 0,
			remarks: null,
			cost: 0.0004284,
			disabledNext: true,
			toAddressFlag: false,
			keystoreV3: null,
			password: null,
			ContractAddr: null,
			gas: 25200,
			gasPrice: 17000000000
		};
	}

	static navigationOptions = ({ navigation }) => ({
		headerTitle: I18n.t('assets.currency.transfer'), // 转账
		headerRight: (
			<TouchableHighlight
				underlayColor={'transparent'}
				onPress={() => {
					navigation.state.params.navigate('QRscanner');
				}}
			>
				<Image
					style={{
						width: 20,
						height: 20,
						marginRight: 10
					}}
					source={require('../../assets/images/common/ercodeicon.png')}
				/>
			</TouchableHighlight>
		)
	});

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
		num = num.match(/\d+\.\d{8}/)[0];
		return num;
	}

	componentDidMount() {
		storage.load({ key: 'walletInfo' }).then((res) => {
			this.setState({
				fromAddr: res.walletAddress,
				keystoreV3: res.keystoreV3
			});
		});
		const { params } = this.props.navigation.state;
		NetInfo.isConnected.fetch().then(isConnected => {
			if(isConnected){
				if (params.currencyName == 'ETH') {
					this._sendTokens = () =>
						sendEth(
							this.state.fromAddr,
							this.state.toAddress,
							this.state.amount,
							this.state.password,
							this.state.keystoreV3,
							this.state.gas.toString(),
							web3.utils.toWei(this.state.gasPrice.toString(), 'Gwei'),
							(err, tx) => {
								if (err) {
									this.refs.loading.close();
									setTimeout(() => {
										Alert.alert(null, I18n.t('public.transactionFailed'));
										// Alert.alert(null, '发布交易失败，请稍后重试！');
									}, 100);
									console.log(err);
								} else {
									this.refs.loading.close();
									setTimeout(() => {
										// 发布交易成功！
										Alert.alert(null, I18n.t('public.transactionSuccess'), [
											{
												text: 'OK',
												onPress: () => {
													let resetAction = StackActions.reset({
														index: 0,
														actions: [
															NavigationActions.navigate({
																routeName: 'Home'
															})
														]
													});
													this.props.navigation.dispatch(resetAction);
													// this.props.navigation.navigate('Home');
												}
											}
										]);
									}, 100);
									console.log(tx, '=======');
								}
							}
						);
					this.setState({
						gas: 25200
					});
				} else {
					this._sendTokens = () =>
						sendTokens(
							abi,
							this.state.fromAddr,
							this.state.toAddress,
							this.state.amount,
							this.state.password,
							this.state.keystoreV3,
							this.state.ContractAddr,
							this.state.gas.toString(),
							web3.utils.toWei(this.state.gasPrice.toString(), 'Gwei'),
							(err, tx) => {
								if (err) {
									this.refs.loading.close();
									setTimeout(() => {
										Alert.alert(null, I18n.t('public.transactionFailed'));
										// Alert.alert(null, '发布交易失败，请稍后重试！');
									}, 100);
									console.log(err);
								} else {
									this.refs.loading.close();
									setTimeout(() => {
										// 发布交易成功！
										Alert.alert(null, I18n.t('public.transactionSuccess'), [
											{
												text: 'OK',
												onPress: () => {
													let resetAction = StackActions.reset({
														index: 0,
														actions: [
															NavigationActions.navigate({
																routeName: 'Home'
															})
														]
													});
													this.props.navigation.dispatch(resetAction);
													// this.props.navigation.navigate('Home');
												}
											}
										]);
									}, 100);
									console.log(tx, '=======');
								}
							}
						);
					this.setState({
						gas: 80000
					});
					let ContractAddr = params.currencyName + 'ContractAddr';
					this.setState({
						ContractAddr: store.getState().contractAddr[ContractAddr]
					});
				}
			} else {
				this.props.navigation.navigate('noNetWork')
			}
		})

	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			toAddress: nextProps.navigation.state.params.res,
		},() => {
			if (!web3.utils.isAddress(nextProps.navigation.state.params.res)) {
				this.setState({
					toAddressFlag: false,
					disabledNext: true
				});
				Alert.alert(null, I18n.t('assets.transfer.checkAddress'));
				// Alert.alert(null, '地址无效，请仔细检查！');
			} else {
				this.setState(
					{
						toAddressFlag: true
					},
					() => {
						if (this.state.toAddressFlag && this.state.amountFlag) {
							this.setState({
								disabledNext: false
							});
						}
					}
				);
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputbox}>
					<Text style={styles.title_sm}>{I18n.t('assets.currency.receiptAddr')}</Text>
					<Input
						placeholder={I18n.t('assets.currency.receiptAddr')}
						//"收款人钱包地址"
						//     <Icon
						//         name='user'
						//         size={25}
						//         onPress={() => {
						//             alert('联系人')
						//         }}
						//     />
						// }
						value={this.state.toAddress.length > 0 ? this.state.toAddress : null}
						onChangeText={(toAddress) => {
							this.setState({ toAddress })
						}}
						onEndEditing={(event) => {
							if (!web3.utils.isAddress(event.nativeEvent.text)) {
								this.setState({
									toAddressFlag: false,
									disabledNext: true
								});
								Alert.alert(null, I18n.t('assets.transfer.checkAddress'));
								// Alert.alert(null, '地址无效，请仔细检查！');
							} else {
								this.setState(
									{
										toAddressFlag: true
									},
									() => {
										if (this.state.toAddressFlag && this.state.amountFlag) {
											this.setState({
												disabledNext: false
											});
										}
									}
								);
							}
						}}
						inputContainerStyle={styles.inputContainerStyle}
					/>
				</View>

				<View style={styles.inputbox}>
					<Text style={styles.title_sm}>{I18n.t('assets.currency.transferCount')}</Text>
					<Input
						placeholder={I18n.t('assets.currency.transferCount')}
						// "转账金额"
						onChangeText={(amount) => {
							this.setState({ amount });
							if (Number(amount)) {
								this.setState(
									{
										amountFlag: true
									},
									() => {
										if (this.state.toAddressFlag && this.state.amountFlag) {
											this.setState({
												disabledNext: false
											});
										}
									}
								);
							} else {
								this.setState({
									amountFlag: false,
									disabledNext: true
								});
							}
						}}
						inputContainerStyle={styles.inputContainerStyle}
					/>
				</View>
				<View style={styles.inputbox}>
					<Text style={styles.title_sm}>{I18n.t('assets.currency.transferRemarks')}</Text>
					<Input
						placeholder={I18n.t('assets.currency.transferRemarks')}
						// "备注"
						onChangeText={(remarks) => this.setState({ remarks })}
						inputContainerStyle={styles.inputContainerStyle}
					/>
				</View>


				<Text style={styles.title_sm}>
					{I18n.t('assets.currency.transferFee')}
					{/* 矿工费用 */}
				</Text>
				<Slider
					value={this.state.cost}
					onValueChange={(cost) => {
						this.setState({ cost }, () => {
							this.setState({
								gasPrice:
									Math.round(
										this.state.cost / web3.utils.fromWei(this.state.gas.toString(), 'Gwei') * 100
									) / 100
							});
						});
					}}
					minimumTrackTintColor="#FF8018"
					thumbTintColor="#FF8018"
					minimumValue={0.00022932}
					step={0.0000001}
					maximumValue={0.00251999}
				/>
				<View style={styles.gasPrice}>
					<Text>
						{I18n.t('assets.currency.transferSpeedSlow')}
						{/* 慢 */}
					</Text>
					<Text style={styles.textAlign}>{this.show(this.state.cost)}ether</Text>
					<Text>
						{I18n.t('assets.currency.transferSpeedFast')}
						{/* 快 */}
					</Text>
				</View>
				<View style={styles.next}>
					<Button
						title={I18n.t('assets.currency.nextStep')}
						// "下一步"
						buttonStyle={styles.buttonStyle}
						disabledStyle={styles.disabledStyle}
						disabled={this.state.disabledNext}
						onPress={() => {
							this.refs.transferDetail.open();
							this.setState({
								gasPrice:
									Math.round(
										this.state.cost / web3.utils.fromWei(this.state.gas.toString(), 'Gwei') * 100
									) / 100
							});
						}}
					/>
					<Loading ref="loading" />
				</View>
				<Modal
					style={styles.modal}
					position={'center'}
					coverScreen={true}
					ref={'transferDetail'}
					swipeArea={20}
					>
					<ScrollView>
						<View style={styles.paymentDetails_title}>
							{/* <Text>支付详情</Text> */}
							<Text>{I18n.t('public.payDetail')}</Text>
						</View>
						{/* 订单信息 */}
						<Detail
							key_k={I18n.t('assets.currency.orderInformation')}
							val={I18n.t('assets.currency.transfer')}
							style={styles.marginLeft_20}
						/>
						<Detail
							key_k={I18n.t('assets.transfer.transferInAddress')} //"转入地址"
							val={this.state.fromAddr.replace(this.state.fromAddr.slice('10', '25'), '......')}
							style={styles.marginLeft_20}
						/>
						<Detail
							key_k={I18n.t('assets.transfer.transferOutAddress')} //"转出地址"
							val={this.state.toAddress.replace(this.state.toAddress.slice('10', '25'), '......')}
							style={styles.marginLeft_20}
						/>
						<Detail
							key_k={I18n.t('assets.currency.transferFee')} //"矿工费用"
							gasPrice="666"
							val={'≈ Gas(' + this.state.gas + ') * Gas Price(' + this.state.gasPrice + 'gwei)'}
							style={styles.paymentDetails_item_gasPOramount}
						/>
						{/* 金额 */}
						<Detail
							key_k={I18n.t('assets.currency.transferCount')}
							val={this.state.amount}
							style={styles.paymentDetails_item_gasPOramount}
						/>
						<View style={styles.next}>
							<Button
								title={I18n.t('public.next')}
								// title="下一步"
								buttonStyle={styles.buttonStyle}
								onPress={() => {
									this.refs.transferPwd.open();
									// this.refs.transferDetail.close();
								}}
							/>
						</View>
						<Modal
							style={[styles.modal, styles.modalPwd]}
							coverScreen={true}
							position={'center'}
							ref={'transferPwd'}
							isOpen={this.state.huhu}
							swipeArea={20}
							>
							<View>
								<View style={styles.paymentDetails_title}>
									<Text>{I18n.t('public.verifyPwd')}</Text>
								</View>
								<Input
									placeholder={I18n.t('public.inputPwd')} //"请输入你的密码"
									secureTextEntry={true}
									onChangeText={(password) => this.setState({ password })}
									inputContainerStyle={[styles.pwdStyle ]}
								/>
								<View style={styles.pwdNext}>
									<Button
										title={I18n.t('public.next')} //"下一步"
										buttonStyle={styles.buttonStyle}
										onPress={() => {
											this.refs.transferDetail.close();
											this.refs.transferPwd.close();
											setTimeout(() => {
												this.refs.loading.show();
												if (!this.state.password) {
													this.refs.loading.close();
													setTimeout(() => {
														// Alert.alert(null, '请输入密码');
														Alert.alert(null, I18n.t('public.inputPwd'));
													}, 100);
												} else {
													setTimeout(() => {
														try {
															web3.eth.accounts.decrypt(
																this.state.keystoreV3,
																this.state.password
															);
															this._sendTokens();
															this.setState({
																password: null
															});
														} catch (error) {
															this.refs.loading.close();
															setTimeout(() => {
																this.setState(
																	{
																		password: null
																	},
																	() => {
																		Alert.alert(null, I18n.t('public.wrongPwd'));
																		// Alert.alert(null, '密码错误,请重新输入');
																	}
																);
															}, 100);
														}
													}, 100);
												}
											}, 1000);
										}}
									/>
								</View>
							</View>
						</Modal>
					</ScrollView>
				</Modal>
			</View>
		);
	}
}

export default withNavigation(Transfer);

const styles = StyleSheet.create({
	textAlign: {
		textAlign: 'center'
	},
	textRight: {
		flex: 1,
		textAlign: 'right'
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// paddingLeft: 10,
		// paddingRight: 10,
		// paddingTop: 30
		padding: scaleSize(32)
	},
	inputbox: {
		height: scaleSize(160)
	},
	title_sm: {
		fontSize: 13,
		color: '#0D0E15',
		fontWeight: 'bold',
		marginBottom: scaleSize(16)
	},
	inputContainerStyle: {
		width: screen.width - scaleSize(64),
		borderColor: '#e6e6e6',
	},
	minerCosts_text: {
		marginTop: 15,
		marginLeft: 10,
		color: '#999',
		fontSize: 16
	},
	gasPrice: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	next: {
		marginTop: 30,
		alignItems: 'center'
	},
	disabledStyle: {
		width: scaleSize(654),
		backgroundColor: '#F7C9A9',
		height: scaleSize(100),
		borderRadius: scaleSize(52)
	},
	buttonStyle: {
		backgroundColor: '#EA7F28',
		width: scaleSize(654),
		height: scaleSize(100),
		borderRadius: scaleSize(52)
	},
	modal: {
		alignItems: 'center',
		width: scaleSize(686),
		height: scaleSize(782),
		borderRadius: scaleSize(8)
	},
	modalPwd: {
		height: scaleSize(406)
	},
	paymentDetails_title: {
		width: scaleSize(686),
		height: scaleSize(108),
		justifyContent: 'center',
		alignItems: 'center',
		// borderBottomWidth: 1,
		// borderBottomColor: '#c8c7cc' //  支付详情分割线
	},
	marginLeft_20: {
		marginLeft: 20
	},
	paymentDetails_item: {
		marginLeft: scaleSize(32),
		marginRight: scaleSize(32),
		height: scaleSize(94),
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#E7E7E7'
	},
	borderRadius: {
		borderRadius: 50
	},
	paymentDetails_item_key: {
		color: '#959595',
		fontSize: 14
	},
	paymentDetails_item_val: {
		color: '#424559',
		fontSize: 14
	},
	paymentDetails_item_gasPOramount: {
		flex: 1,
		color: '#FF8018',
		textAlign: 'right',
		fontSize: 15,
		fontWeight: 'bold'
	},
	pwdStyle: {
		// marginTop: 30,
		marginLeft: scaleSize(32),
		width: scaleSize(622),
		height: scaleSize(96),
		borderBottomWidth: 1,
		borderBottomColor: '#E7E7E7'
	},
	pwdNext: {
		alignItems: 'center',
		marginTop: scaleSize(50)
	}
});
