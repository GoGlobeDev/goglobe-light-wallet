import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Clipboard, TouchableHighlight, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Modal from 'react-native-modalbox';
import Loading from 'react-native-whc-loading';
import Toast from 'react-native-easy-toast';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { scaleSize } from '../../utils/ScreenUtil';
import { checkWalletName } from '../../utils/valiServices';

const screen = Dimensions.get('window');

class ListFun extends Component {
	render() {
		return (
			<TouchableHighlight underlayColor={'transparent'} onPress={this.props.onPress}>
				<View style={styles.fun}>
					<Text style={styles.fun_text}>{this.props.fun_name}</Text>
					<Icon name="icon-right" size={15} color="#000" />
				</View>
			</TouchableHighlight>
		);
	}
}

class WalletInfo extends Component {
	static navigationOptions = {
		headerTitle: '账户详情'
	};
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
		this.state = {
			walletAddress: ' ',
			walletPassword: null,
			keystoreV3: ' ',
			onPress: null,
			modalTitle: null,
			deleteBtnshow: true,
			selectExportMnemonic: false,
			newWalletName: ''
		};
		this.verifyPwd = this.verifyPwd.bind(this);
	}

	componentDidMount() {
		storage
			.load({
				key: 'walletInfo'
			})
			.then((walletInfo) => {
				if (walletInfo.ks) {
					this.setState({
						selectExportMnemonic: true
					});
				} else {
					this.setState({
						selectExportMnemonic: false
					});
				}

				let walletAddress = walletInfo.walletAddress,
					keystoreV3 = walletInfo.keystoreV3;
				this.setState({
					walletAddress: walletAddress,
					keystoreV3: keystoreV3,
					PrivateKey: null
				});
			});

		storage
			.load({
				key: 'walletName'
			})
			.then((res) => {
				let walletName = res.walletName;
				this.setState({
					walletName: walletName
				});
			});
	}
	pwd = {
		placeholder: I18n.t('public.inputPwd'),
		inputContainerStyle: styles.textInput,
		secureTextEntry: true,
		onChangeText: (walletPassword) => {
			this.setState({
				walletPassword: walletPassword
			});
		},
		ref: 'pwdInput'
	};
	walletName = {
		placeholder: I18n.t('assets.walletInfo.enterWalletName'), //'输入您的钱包名称',
		inputContainerStyle: styles.walletNameStyle,
		onChangeText: (walletName) => {
			this.setState({
				newWalletName: walletName
			});
		}
	};
	clickToWalletName = () => {
		console.log(this.state.newWalletName);
		checkWalletName(this.state.newWalletName).then(() => {
			this.setState({
				walletName: this.state.newWalletName
			})
			storage.save({
				key: 'walletName',
				data: {
					walletName: this.state.newWalletName
				},
				expires: null
			});
			this.refs.changeWalletName.close();
		}).catch((e) => {
			Alert.alert(null, e)
		})
		// storage.save({
		// 	key: 'walletName',
		// 	data: {
		// 		walletName: this.state.walletName
		// 	},
		// 	expires: null
		// });
		// this.refs.changeWalletName.close();
	}
	verifyPwd() {
		try {
			web3.eth.accounts.decrypt(this.state.keystoreV3, this.state.walletPassword);
			this.refs.codeInput.close();
			this.navigate('ExportMnemonic');
		} catch (e) {
			Alert.alert(null, I18n.t('wallet.wrongPwd')); //'密码错误,请重新输入');
			this.setState({
				walletPassword: null
			});
			this.refs.pwdInput.clear();
		}
	}

	_setClipboardContent = async () => {
		Clipboard.setString(this.state.PrivateKey);
		try {
			var content = await Clipboard.getString();
			Alert.alert(null, I18n.t('public.copySuccess'))
			// this.refs.toast.show(I18n.t('public.copySuccess'));
		} catch (e) {
			this.refs.toast.show(I18n.t('public.copyFailed'));
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Toast ref="toast" position="center" />
				<View style={styles.walletInfo}>
					<Image style={styles.walletAvatar} source={require('../../assets/images/asset/head_2x.png')} />
					<View style={styles.walletInfo_item}>
						<Text numberOfLines={1} style={styles.walletName}>{this.state.walletName}</Text>
						<Text style={styles.walletAddress}>
							{this.state.walletAddress.replace(this.state.walletAddress.slice('9', '35'), '......')}
						</Text>
					</View>
				</View>
				<ListFun
					fun_name={I18n.t('assets.walletInfo.walletName')}
					onPress={() => {
						this.setState(
							{
								modalTitle: I18n.t('assets.walletInfo.walletName') //'钱包名称'
							},
							() => {
								this.refs.changeWalletName.open();
							}
						);
					}}
				/>
				<ListFun
					fun_name={I18n.t('assets.walletInfo.exportPrivateKey')}
					onPress={() => {
						this.setState(
							{
								modalTitle: I18n.t('assets.walletInfo.exportPrivateKey')
							},
							() => {
								this.refs.codeInput.open();
								this.setState({
									onPress: () => {
										this.refs.codeInput.close();
										setTimeout(() => {
											if (!this.state.walletPassword) {
												alert('输入密码');
											} else {
												this.refs.loading.show();
												setTimeout(() => {
													try {
														web3.eth.accounts.decrypt(
															this.state.keystoreV3,
															this.state.walletPassword
														);
														storage.load({ key: 'walletInfo' }).then((res) => {
															let PrivateKey = web3.eth.accounts.decrypt(
																JSON.stringify(res.keystoreV3),
																this.state.walletPassword
															).privateKey;
															this.setState({
																walletPassword: '',
																PrivateKey
															});
														});
														this.refs.privateKey.open();
														this.refs.loading.close();
													} catch (error) {
														this.refs.loading.close();
														setTimeout(() => {
															Alert.alert(null, I18n.t('public.wrongPwd'));
														}, 100);
													}
												}, 100);
											}
										}, 1000);
									}
								});
							}
						);
					}}
				/>
				<ListFun
					fun_name={I18n.t('assets.walletInfo.exportKeystore')}
					onPress={() => {
						this.setState(
							{
								modalTitle: I18n.t('assets.walletInfo.exportKeystore')
							},
							() => {
								this.refs.codeInput.open();
								this.setState({
									onPress: () => {
										this.refs.codeInput.close();
										setTimeout(() => {
											if (!this.state.walletPassword) {
												alert('输入密码');
											} else {
												this.refs.loading.show();
												setTimeout(() => {
													try {
														web3.eth.accounts.decrypt(
															this.state.keystoreV3,
															this.state.walletPassword
														);
														this.setState({
															walletPassword: null
														});
														this.refs.loading.close();
														this.navigate('ExportKeystore', {
															keystoreV3: this.state.keystoreV3
														});
													} catch (error) {
														this.refs.loading.close();
														setTimeout(() => {
															Alert.alert(null, I18n.t('public.wrongPwd'));
														}, 100);
													}
												}, 100);
											}
										}, 1000);
									}
								});
							}
						);
					}}
				/>

				{this.state.selectExportMnemonic ? (
					<ListFun
						fun_name={I18n.t('assets.walletInfo.exportMnemonic')}
						onPress={() => {
							this.setState(
								{
									modalTitle: I18n.t('assets.walletInfo.exportMnemonic')
								},
								() => {
									this.refs.codeInput.open();
									this.setState({
										onPress: () => {
											this.refs.codeInput.close();
											setTimeout(() => {
												if (!this.state.walletPassword) {
													alert('输入密码');
												} else {
													this.refs.loading.show();
													setTimeout(() => {
														try {
															web3.eth.accounts.decrypt(
																this.state.keystoreV3,
																this.state.walletPassword
															);
															this.navigate('ExportMnemonic', {
																walletPassword: this.state.walletPassword
															});
															this.setState({
																walletPassword: null
															});
															this.refs.loading.close();
														} catch (error) {
															this.refs.loading.close();
															setTimeout(() => {
																Alert.alert(null, I18n.t('public.wrongPwd'));
															}, 100);
														}
													}, 100);
												}
											}, 1000);
										}
									});
								}
							);
						}}
					/>
				) : null}
				<Loading ref="loading" />
				{/* <ActivityIndicator animating={this.state.huhu} /> */}
				<Button
					titleStyle={{ color: '#424559'}}
					title={I18n.t('assets.walletInfo.deleteWallet')}
					buttonStyle={styles.buttonStyle}
					onPress={() => {
						this.setState(
							{
								modalTitle: I18n.t('public.verifyPwd')
							},
							() => {
								this.refs.codeInput.open();
								this.setState({
									onPress: () => {
										this.refs.codeInput.close();
										setTimeout(() => {
											if (!this.state.walletPassword) {
												alert('输入密码');
											} else {
												this.refs.loading.show();
												setTimeout(() => {
													try {
														web3.eth.accounts.decrypt(
															this.state.keystoreV3,
															this.state.walletPassword
														);
														storage.remove({
															key: 'walletInfo'
														});
														storage.remove({
															key: 'user'
														});
														storage.remove({
															key: 'token'
														});
														storage.remove({
															key: 'walletName'
														});
														this.refs.loading.close();
														this.navigate('Guide');
													} catch (error) {
														this.refs.loading.close();
														setTimeout(() => {
															Alert.alert(null, I18n.t('public.wrongPwd'));
														}, 100);
													}
												}, 100);
											}
										}, 1000);
									}
								});
							}
						);
					}}
				/>

				
				<Modal
					style={styles.modalCode}
					position={'center'}
					ref={'codeInput'}
					coverScreen={true}
					swipeArea={20}
					onClosed={() => {
						this.setState({ deleteBtnshow: true });
					}}
					onOpened={() => {
						this.setState({ deleteBtnshow: false });
					}}
					>
					<View style={styles.InputPwd_title}>
						<Text style={styles.modalTitle}>{this.state.modalTitle}</Text>
					</View>
					<Input {...this.pwd} />
					<View style={styles.confirm}>
						<Button
							title={I18n.t('public.define')} //"确定"
							buttonStyle={styles.confirmButtonStyle}
							onPress={this.state.onPress}
						/>
					</View>
				</Modal>
				<Modal
					style={styles.modalCode}
					position={'center'}
					coverScreen={true}
					ref={'changeWalletName'}
					swipeArea={20}
					>
					<View style={styles.InputPwd_title}>
						<Text style={styles.modalTitle}>{this.state.modalTitle}</Text>
					</View>
					<Input {...this.walletName} />

					<View style={styles.bottom_fun}>
						<TouchableHighlight style={styles.bottom_fun_item_cancel}>
							<Text
								style={styles.bottom_fun_item}
								onPress={() => {
									this.refs.changeWalletName.close();
								}}
							>
								{I18n.t('public.cancel')}
								{/* 取消 */}
							</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.bottom_fun_item_done}>
							<Text
								style={styles.bottom_fun_item}
								onPress={() => {
									this.clickToWalletName()
								}}
							>
								{I18n.t('public.define')}
								{/* 确定 */}
							</Text>
						</TouchableHighlight>
					</View>
				</Modal>

				<Modal
					style={styles.privateKey}
					position={'center'}
					coverScreen={true}
					ref={'privateKey'}
					swipeArea={20}
					>
					<View style={styles.privateKeyTitle}>
						<Text style={styles.modalTitle}>{I18n.t('assets.walletInfo.exportPrivateKey')}</Text>
					</View>
					<TouchableHighlight style={[ styles.spacing, styles.privateKeyWarning ]}>
						<View>
							<Text style={styles.warining_text}>{I18n.t('assets.walletInfo.privateKeyWarning')}</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight style={[ styles.spacing, styles.privateKeyArea ]}>
						<View>
							<Text>{this.state.PrivateKey}</Text>
						</View>
					</TouchableHighlight>

					<View style={styles.copy}>
						<Button
							title={I18n.t('assets.walletInfo.copyPrivaateKey')}
							buttonStyle={styles.copyButtonStyle}
							onPress={this._setClipboardContent.bind(this)}
						/>
					</View>
				</Modal>
			</View>
		);
	}
}

export default withNavigation(WalletInfo);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 10,
		backgroundColor: '#fff'
	},
	walletInfo: {
		height: scaleSize(176),
		flexDirection: 'row',
		alignItems: 'center',
		padding: scaleSize(32)
	},
	walletAvatar: {
		width: scaleSize(104),
		height: scaleSize(104),
		// marginLeft: scaleSize(28)
	},
	walletName: {
		fontSize: 15,
		color: '#424559',
		fontWeight: 'bold'
	},
	walletAddress: {
		fontSize: 13,
		color: '#424559',
		opacity: 0.9
	},
	walletInfo_item: {
		width: screen.width - scaleSize(216),
		marginLeft: scaleSize(22),
		height: scaleSize(104),
		justifyContent: 'space-around'
	},
	fun: {
		height: scaleSize(128),
		margin: scaleSize(32),
		borderRadius: scaleSize(20),
		marginTop: scaleSize(12),
		marginBottom: scaleSize(12),
		paddingLeft: scaleSize(32),
		paddingRight: scaleSize(32),
		backgroundColor: '#fff',
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'rgb(34, 34, 34)',
		shadowOpacity: 0.18,
		shadowRadius: scaleSize(27),
		elevation: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// borderBottomWidth: 1,
		// borderBottomColor: '#e6e0df'
	},
	fun_text: {
		color: '#000',
		fontSize: 15,
		color: '#424559',
		fontWeight: 'bold'
	},
	buttonStyle: {
		backgroundColor: '#fff',
		borderWidth: scaleSize(4),
		borderColor: '#56586A',
		height: scaleSize(100),
		borderRadius: scaleSize(52),
		marginTop: scaleSize(100),
		width: scaleSize(654),
		marginLeft: scaleSize(48)
	},
	modalCode: {
		alignItems: 'center',
		width: scaleSize(686),
		height: scaleSize(384),
		borderRadius: scaleSize(8)
	},
	InputPwd_title: {
		width: scaleSize(686),
		height: scaleSize(112),
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: 17,
		color: '#0D0E15',
		fontWeight: 'bold'
	},
	textInput: {
		borderBottomWidth: 1,
		borderColor: '#e6e6e6',
		// height: 45,
		padding: 0,
		margin: 0
	},
	confirm: {
		alignItems: 'center',
		marginTop: scaleSize(50)
	},
	confirmButtonStyle: {
		backgroundColor: '#FF8725',
		width: scaleSize(654),
		height: scaleSize(100),
		borderRadius: scaleSize(52)
	},
	//导出私钥
	privateKey: {
		width: scaleSize(686),
		height: scaleSize(582),
		borderRadius: scaleSize(8),
		padding: scaleSize(32),
		justifyContent: 'space-between'
	},
	privateKeyTitle: {
		alignItems: 'center'
	},
	spacing: {
		borderRadius: 8,
		paddingTop: 15,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 15
	},
	privateKeyWarning: {
		backgroundColor: '#FFEFE7',
		alignItems: 'center'
	},
	warining_text: {
		color: '#F06D27',
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: scaleSize(40)
	},
	privateKeyArea: {
		// backgroundColor: '#ebebeb'
	},
	copy: {
		alignItems: 'center'
	},
	copyButtonStyle: {
		backgroundColor: '#FF8725',
		width: scaleSize(654),
		height: scaleSize(100),
		borderRadius: scaleSize(52)
	},
	walletNameStyle: {
		// borderRadius: 5,
		// borderWidth: 1,
		// borderColor: '#ccc',
		height: scaleSize(96),
		borderBottomColor: '#E7E7E7',
		borderBottomWidth: scaleSize(1),
		marginBottom: scaleSize(50),
		paddingTop: scaleSize(10)
		// backgroundColor: '#fafafa'
	},
	bottom_fun: {
		// position: 'absolute',
		// bottom: 50,
		// left: 0,
		// right: 0,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	bottom_fun_item: {
		height: scaleSize(88),
		lineHeight: scaleSize(88),
		color: '#fff',
		textAlign: 'center',
	},
	bottom_fun_item_cancel: {
		width: scaleSize(296),
		borderRadius: scaleSize(44),
		backgroundColor: '#405696',
		marginRight: scaleSize(30)
	},
	bottom_fun_item_done: {
		width: scaleSize(296),
		borderRadius: scaleSize(44),
		backgroundColor: '#FF8725'
	}
});
