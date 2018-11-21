import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, Alert, Linking, Platform } from 'react-native';
import { I18n } from '../../../language/i18n';
import { withNavigation } from 'react-navigation';
import Icon from '../../pages/iconSets';

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
				res.localLanguage.includes('zh')
					? this.setState({
							service_source: {
								uri: 'https://www.goglobe.io/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_zh.pdf',
								cache: true
							}
						})
					: this.setState({
							service_source: {
								uri: 'https://www.goglobe.io/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_en.pdf',
								cache: true
							}
						});
			})
			.catch((e) => {
				DeviceInfo.getDeviceLocale().includes('zh')
					? this.setState({
							service_source: {
								uri: 'https://www.goglobe.io/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_zh.pdf',
								cache: true
							}
						})
					: this.setState({
							service_source: {
								uri: 'https://www.goglobe.io/whitepaper/GoGlobe_Chain_Wallet_Terms_of_Service_en.pdf',
								cache: true
							}
						});
			});
	}


	render() {
		return (
			<View style={styles.aboutusPage}>
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
					{/*检测新版*/}
					{/* <TouchableHighlight
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
									
								</Text>
							</View>
							<View style={styles.rowRi}>
								<Icon name="icon-right" size={15} color="#000" />
							</View>
						</View>
					</TouchableHighlight> */}
					<TouchableHighlight
						underlayColor={'#ddd'}
						activeOpacity={0.5}
						onPress={() => this.props.navigation.navigate('ContactUs')}
					>
						<View style={styles.row}>
							<View style={styles.rowLf}>
								<Text style={styles.rowLfText}>
									{I18n.t('my.home.aboutUs.contactus')}
									{/*联系我们*/}
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
		marginTop: 50,
		marginBottom: 30
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
	
});
