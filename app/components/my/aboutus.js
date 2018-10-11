import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, Modal, Alert, Linking } from 'react-native';
import { I18n } from '../../../language/i18n';
import { withNavigation } from 'react-navigation';
import Icon from '../../pages/iconSets';
import { checkUpdate } from '../../api/index';
import { scaleSize } from '../../utils/ScreenUtil';
var DeviceInfo = require('react-native-device-info');

export class AboutUs extends Component {
	constructor(props) {
		super(props);
		this.state = { modalVisible: false, service_source: null, currentVersion: null, newVersion: '--' };
	}

	componentDidMount() {
		// this.setState({
		// 	currentVersion: DeviceInfo.getVersion().replace(/\./g, '')
		// });
		// console.log(DeviceInfo.getVersion())
		storage
			.load({
				key: 'localLanguage'
			})
			.then((res) => {
				console.log(res)
				res.localLanguage.includes('zh')
					? this.setState({
							service_source: {
								uri: 'http://goglobechain.com/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_zh.pdf',
								cache: true
							}
						})
					: this.setState({
							service_source: {
								uri: 'http://goglobechain.com/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_en.pdf',
								cache: true
							}
						});
			})
			.catch((e) => {
				console.log(e)
				DeviceInfo.getDeviceLocale().includes('zh')
					? this.setState({
							service_source: {
								uri: 'http://goglobechain.com/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_zh.pdf',
								cache: true
							}
						})
					: this.setState({
							service_source: {
								uri: 'http://goglobechain.com/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_en.pdf',
								cache: true
							}
						});
			});
	}

	_checkVersion() {
		checkUpdate('android')
		.then((res) => {
			if(I18n.t('my.version._number') == res.data.androidVersion){
				Alert.alert(I18n.t('my.version.noUpdate'));
			} else {
				this.setState({
					newVersion: res.data.androidVersion,
					modalVisible: true
				});
			}
		}).catch((e) => {
			const message = e.message;
			if(message.indexOf('Network') !== -1){
				this.props.navigation.navigate('noNetWork')
			} else {
				console.log(e.message)
			}
		});
	}

	render() {
		return (
			<View style={styles.aboutusPage}>
				<Modal
					animationType={'slide'}
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setState({ modalVisible: false });
					}}
					>
					<View style={styles.modalCon}>
						<View style={styles.modal}>
							<Text style={styles.modalTitle}>
								{I18n.t('my.version._newVersion')} {this.state.newVersion}
								{I18n.t('my.version._version')}
							</Text>
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
										{I18n.t('my.version.noEscalation')}
										{/* 暂不升级 */}
									</Text>
								</View>
								<View>
									<Text
										style={styles.modalBottomBtnYesText}
										onPress={() => {
											Linking.openURL('http://goglobechain.com/download').catch((err) =>
												console.error('An error occurred', err)
											);
										}}
									>
										{I18n.t('my.version.upgradeNow')}
										{/* 立即升级 */}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</Modal>
				<View style={styles.topCon}>
					<Image
						resizeMode={Image.resizeMode.stretch}
						source={require('../../assets/images/logo.png')}
						style={styles.logo}
					/>
					{/* <View>
						<Text style={styles.version}>
							{' '}
							{I18n.t('my.home.aboutUs.currentVersion')}：{DeviceInfo.getVersion()}
						</Text>
					</View> */}
					<View>
						<Text style={[ styles.txtCen, styles.descr ]}>
							{I18n.t('my.home.aboutUs.introduction')}
							{/* GoGlobe是一款移动端轻钱包APP,它旨在为普通用户提供一款安全放心，简单好用，功能强大的数字资产钱包应用。 */}
						</Text>
					</View>
				</View>
				<View style={styles.rowsCon}>
					<TouchableHighlight
						underlayColor={'#ddd'}
						activeOpacity={0.5}
						onPress={() =>
							this.props.navigation.navigate('UserPolicy', {
								service_source: this.state.service_source
							})}
					>
						<View style={styles.row}>
							<View style={styles.rowLf}>
								<Text style={styles.rowLfText}>
									{I18n.t('my.home.aboutUs.useAgreement')}
									{/*用户协议*/}
								</Text>
							</View>
							<View style={styles.rowRi}>
								<Icon name="icon-right" size={15} color="#000" />
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={'#ddd'}
						activeOpacity={0.5}
						onPress={() =>
							this.props.navigation.navigate('UserPolicy', {
								service_source: this.state.service_source
							})}
					>
						<View style={styles.row}>
							<View style={styles.rowLf}>
								<Text style={styles.rowLfText}>
									{I18n.t('my.home.aboutUs.privacyPolicy')}
									{/*隐私条款*/}
								</Text>
							</View>
							<View style={styles.rowRi}>
								<Icon name="icon-right" size={15} color="#000" />
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={'#ddd'}
						activeOpacity={0.5}
						onPress={() => this.props.navigation.navigate('Versions')}
					>
						<View style={styles.row}>
							<View style={styles.rowLf}>
								<Text style={styles.rowLfText}>
									{I18n.t('my.home.aboutUs.versionLog')}
									{/*版本日志*/}
								</Text>
							</View>
							<View style={styles.rowRi}>
								<Icon name="icon-right" size={15} color="#000" />
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={'#ddd'}
						activeOpacity={0.5}
						onPress={() => {
							this._checkVersion();
						}}
					>
						<View style={styles.row}>
							<View style={styles.rowLf}>
								<Text style={styles.rowLfText}>
									{I18n.t('my.home.aboutUs.checkVersion')}
									{/*检测新版*/}
								</Text>
							</View>
							<View style={styles.rowRi}>
								<Icon name="icon-right" size={15} color="#000" />
							</View>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

export default withNavigation(AboutUs);

const styles = StyleSheet.create({
	aboutusPage: {
		flex: 1,
		backgroundColor: 'white'
	},
	topCon: {
		alignItems: 'center',
		borderColor: '#eee',
		borderBottomWidth: 1,
		maxHeight: 250
	},
	logo: {
		width: 90,
		height: 90,
		borderRadius: 45,
		marginTop: 50
	},
	version: {
		marginTop: 10,
		marginBottom: 10,
		fontSize: 12,
		color: '#ccc'
	},
	txtCen: {
		textAlign: 'center',
		flex: 1
	},
	descr: {
		fontSize: 12,
		lineHeight: 24,
		color: '#555',
		paddingLeft: 30,
		paddingRight: 30,
		paddingBottom: 50
	},
	iconArr2R: {
		width: 8,
		height: 14
	},
	rowsCon: {
		paddingLeft: 15
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#eee',
		paddingRight: 15,
		height: 55
	},
	rowLfText: {
		fontSize: 15,
		color: '#222'
	},
	modalCon: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modal: {
		backgroundColor: 'white',
		width: 260,
		height: 120,
		borderRadius: 10
	},
	modalTitle: {
		fontSize: 17,
		color: '#222',
		lineHeight: 80,
		height: 70,
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
		color: '#999',
		fontSize: 16,
		textAlign: 'center'
	},
	modalBottomBtnYesText: {
		color: '#EA7E25',
		fontSize: 16,
		textAlign: 'center'
	}
});
