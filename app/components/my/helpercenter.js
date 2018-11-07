import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { I18n } from '../../../language/i18n';
import { withNavigation } from 'react-navigation';
export class HelperCenter extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
	}

	// componentDidMount() {
	// 	this.props.navigation.setParams({
	// 		headerRightPress: this.goToContactUs
	// 	});
	// }

	_keyExtractor = (item, index) => item;

	render() {
		return (
			<ScrollView style={styles.helperPage}>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.GoGlobe'),
							content: I18n.t('public.GoGlobe'),
							ps: I18n.t('public.GoGlobe_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.GoGlobe')}
								{/* 什么是自游俱乐部？ */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.mnemonic'),
							content: I18n.t('public.mnemonic'),
							ps: I18n.t('public.mnemonic_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.mnemonic')}
								{/* 什么是助记词 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.keystore'),
							content: I18n.t('public.keystore'),
							ps: I18n.t('public.keystore_ps')
						})}
				>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>{I18n.t('my.home.helpCenter.keystore')}</Text>
							{/* 什么是keystore */}
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.privateKey'),
							content: I18n.t('public.privateKey'),
							ps: I18n.t('public.privateKey_ps')
						})}
				>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>{I18n.t('my.home.helpCenter.privateKey')}</Text>
							{/* 什么是私钥 */}
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.walletAddress'),
							content: I18n.t('public.walletAddress'),
							ps: I18n.t('public.walletAddress_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.walletAddress')}
								{/* 什么是钱包地址 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.gogWallet'),
							content: I18n.t('public.gogWallet'),
							ps: I18n.t('public.gogWallet_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.gogWallet')}
								{/* 什么是自游设备 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.download'),
							content: I18n.t('public.download'),
							ps: I18n.t('public.download_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.download')}
								{/* 如何下载自游俱乐部 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.createWallet'),
							content: I18n.t('public.createWallet'),
							ps: I18n.t('public.createWallet_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.createWallet')}
								{/* 如何创建钱包 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.importWallet'),
							content: I18n.t('public.importWallet'),
							ps: I18n.t('public.importWallet_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.importWallet')}
								{/* 如何导入钱包 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.backupMnemonic'),
							content: I18n.t('public.backupMnemonic'),
							ps: I18n.t('public.backupMnemonic_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.backupMnemonic')}
								{/* 如何备份助记词 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.transfer'),
							content: I18n.t('public.transfer'),
							ps: I18n.t('public.transfer_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.transfer')}
								{/* 如何进行转账 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.receipt'),
							content: I18n.t('public.receipt'),
							ps: I18n.t('public.receipt_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.receipt')}
								{/* 如何进行收款 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.minersFees'),
							content: I18n.t('public.minersFees'),
							ps: I18n.t('public.minersFees_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.minersFees')}
								{/* 转账时如何设定矿工费 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.withdrawCash'),
							content: I18n.t('public.withdrawCash'),
							ps: I18n.t('public.withdrawCash_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.withdrawCash')}
								{/* 如何进行提币 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.changePwd'),
							content: I18n.t('public.changePwd'),
							ps: I18n.t('public.changePwd_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.changePwd')}
								{/* 如何修改交易密码 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.deleteWallet'),
							content: I18n.t('public.deleteWallet'),
							ps: I18n.t('public.deleteWallet_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.deleteWallet')}
								{/* 如何删除钱包 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.receiptFail'),
							content: I18n.t('public.receiptFail'),
							ps: I18n.t('public.receiptFail_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.receiptFail')}
								{/* 收款一直没到账怎么办 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.AddressFail'),
							content: I18n.t('public.AddressFail'),
							ps: I18n.t('public.AddressFail_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.AddressFail')}
								{/* 转账时填错地址怎么办 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.deleteWalletSucc'),
							content: I18n.t('public.deleteWalletSucc'),
							ps: I18n.t('public.deleteWalletSucc_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.deleteWalletSucc')}
								{/* 删除钱包怎么办 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.lostPwd'),
							content: I18n.t('public.lostPwd'),
							ps: I18n.t('public.lostPwd_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.lostPwd')}
								{/* 纸密码（助记词）丢失怎么办 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.ForgetPwd'),
							content: I18n.t('public.ForgetPwd'),
							ps: I18n.t('public.ForgetPwd_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.ForgetPwd')}
								{/* 忘记密码怎么办 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'#ddd'}
					activeOpacity={0.5}
					onPress={() =>
						this.navigate('KnowledgePoint', {
							title: I18n.t('my.home.helpCenter.uninstall'),
							content: I18n.t('public.uninstall'),
							ps: I18n.t('public.uninstall_ps')
						})}
					>
					<View style={styles.row}>
						<View style={styles.rowLf}>
							<Text style={styles.rowLfText}>
								{I18n.t('my.home.helpCenter.uninstall')}
								{/* APP卸载怎么办 */}
							</Text>
						</View>
						<View style={styles.rowRi}>
							<Image
								resizeMode={Image.resizeMode.stretch}
								source={require('../../assets/images/common/arr2ri.png')}
								style={styles.iconArr2R}
							/>
						</View>
					</View>
				</TouchableHighlight>
			</ScrollView>
		);
	}
}

export default withNavigation(HelperCenter);

const styles = StyleSheet.create({
	helperPage: {
		flex: 1,
		backgroundColor: 'white',
		paddingLeft: 15
	},
	row: {
		height: 60,
		borderBottomWidth: 1,
		borderColor: '#eee',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 15
	},
	rowText: {
		fontSize: 15,
		lineHeight: 50,
		color: '#555'
	},
	iconArr2R: {
		width: 8,
		height: 14
	}
});
