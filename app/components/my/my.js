import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TouchableHighlight, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import { I18n } from '../../../language/i18n';
const screen = Dimensions.get('window');
import Icon from '../../pages/iconSets';
import { scaleSize, ifIphoneX } from '../../utils/ScreenUtil';
import Toast from 'react-native-easy-toast';
const minHeight = ifIphoneX(0, 20, StatusBar.currentHeight);

class My extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
	}
	// componentDidMount() {
    //     BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    // }
    // onBackPress = () => {
	// 	console.log(this.props.navigation);
	// 	const { dispatch, nav } = this.props;
	// 	console.log(nav)
	// 	console.log('ddd')
	// 	if(nav.index ===0){
	// 		return false;
	// 	}
	// 	dispatch(NavigationActions.back());
	// 	return true;
    //    };
	render() {
		return (
			<View style={styles.myPage}>
				<Toast ref="toast" position="center" />
				<View style={{ backgroundColor: "#fff"}}>
					<Text style={styles.title}>{I18n.t('my._title')}</Text>
				</View>
				<View style={styles.myTopBan}>
					<View style={styles.myTopBanCon}>
						<TouchableHighlight
							style={styles.myTopBanConItem}
							underlayColor={'transparent'}
							onPress={() => {
								this.navigate('WalletInfo');
							}}
							>
							<View style={styles.center}>
								{/* <Icon name="icon-qianbao-" size={40} color="#fff" /> */}
								<Image style={styles.myTopBanConItemIcon} source={require('../../assets/images/my/icon-qianbao.png')} />
								<Text style={styles.myTopBanConItemText}>{I18n.t('my.home.walletManagement')}</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.myTopBanConItem}
							underlayColor={'transparent'}
							onPress={() => {
								this.navigate('TransactionRecord');
							}}
							>
							<View style={styles.center}>
								{/* <Icon name="icon-jiaoyijilu" size={40} color="#fff" /> */}
								<Image style={styles.myTopBanConItemIcon} source={require('../../assets/images/my/icon-jiaoyijilu.png')} />
								<Text style={styles.myTopBanConItemText}>{I18n.t('my.home.transactionRecord')}</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.myColsCon}>
					{/* 邀请码和绑定手机 */}
					<View style={styles.myColsConPart}>
						<TouchableHighlight
							onPress={() => this.props.navigation.navigate('InvitationCode')}
							underlayColor={'#ddd'}
							activeOpacity={0.5}
							>
							<View style={styles.myColsConPartRow}>
								<View style={styles.myColsConPartRowLf}>
								<Image style={styles.icon36} source={require('../../assets/images/my/icon_invitation_code.png')} />
								</View>
								<View style={[ styles.myColsConPartRowRi, styles.bottomLine ]}>
									<Text>{I18n.t('my.home.invitationCode._title')}</Text>
									<View style={styles.myColsConPartRowRi2R}>
										<Icon name="icon-right" size={15} color="#000" />
									</View>
								</View>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => this.props.navigation.navigate('BindingPhone')}
							underlayColor={'#ddd'}
							activeOpacity={0.5}
							>
							<View style={styles.myColsConPartRow}>
								<View style={styles.myColsConPartRowLf}>
								<Image style={styles.icon36} source={require('../../assets/images/my/icon_phone.png')} />
								</View>
								<View style={[ styles.myColsConPartRowRi, styles.bottomLine ]}>
									<Text>{I18n.t('my.home.bindPhone._title')}</Text>
									<View style={styles.myColsConPartRowRi2R}>
										<Icon name="icon-right" size={15} color="#000" />
									</View>
								</View>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => this.props.navigation.navigate('changePwd')}
							underlayColor={'#ddd'}
							activeOpacity={0.5}
							>
							<View style={styles.myColsConPartRow}>
								<View style={styles.myColsConPartRowLf}>
								<Image style={styles.icon36} source={require('../../assets/images/my/icon_pwd.png')} />
								</View>
								<View style={[ styles.myColsConPartRowRi, styles.bottomLine ]}>
									<Text>{I18n.t('my.home.changePwd._title')}</Text>
									<View style={styles.myColsConPartRowRi2R}>
										<Icon name="icon-right" size={15} color="#000" />
									</View>
								</View>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => this.props.navigation.navigate('effect')}
							underlayColor={'#ddd'}
							activeOpacity={0.5}
							>
							<View style={styles.myColsConPartRow}>
								<View style={styles.myColsConPartRowLf}>
								<Image style={styles.icon36} source={require('../../assets/images/my/icon_effect.png')} />
								</View>
								<View style={[ styles.myColsConPartRowRi, styles.noSplitLine ]}>
									<Text>{I18n.t('my.home.effect._title')}</Text>
									<View style={styles.myColsConPartRowRi2R}>
										<Icon name="icon-right" size={15} color="#000" />
									</View>
								</View>
							</View>
						</TouchableHighlight>
					</View>
					{/* 系统中心 */}
					<View style={styles.myColsConPart}>
						<TouchableHighlight
							onPress={() => {
								this.props.navigation.navigate('SysSet');
							}}
							underlayColor={'#ddd'}
							activeOpacity={0.5}
						>
							<View style={styles.myColsConPartRow}>
								<View style={styles.myColsConPartRowLf}>
									<Image style={styles.icon36} source={require('../../assets/images/my/icon_setting.png')} />
								</View>
								<View style={[ styles.myColsConPartRowRi, styles.noSplitLine ]}>
									<Text>{I18n.t('my.home.systemSetting')}</Text>
									<View style={styles.myColsConPartRowRi2R}>
										<Icon name="icon-right" size={15} color="#000" />
									</View>
								</View>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.myColsConPart}>
						<TouchableHighlight
							onPress={() => this.props.navigation.navigate('HelperCenter')}
							underlayColor={'#ddd'}
							activeOpacity={0.5}
						>
							<View style={styles.myColsConPartRow}>
								<View style={styles.myColsConPartRowLf}>
									<Image style={styles.icon36} source={require('../../assets/images/my/icon_help.png')} />
								</View>
								<View style={[ styles.myColsConPartRowRi, styles.bottomLine ]}>
									<Text>{I18n.t('my.home.helpCenter._title')}</Text>
									<View style={styles.myColsConPartRowRi2R}>
										<Icon name="icon-right" size={15} color="#000" />
									</View>
								</View>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => this.props.navigation.navigate('AboutUs')}
							underlayColor={'#ddd'}
							activeOpacity={0.5}
						>
							<View style={styles.myColsConPartRow}>
								<View style={styles.myColsConPartRowLf}>
								<Image style={styles.icon36} source={require('../../assets/images/my/icon_about_me.png')} />
								</View>
								<View style={[ styles.myColsConPartRowRi, styles.noSplitLine ]}>
									<Text>{I18n.t('my.home.aboutUs._title')}</Text>
									<View style={styles.myColsConPartRowRi2R}>
										<Icon name="icon-right" size={15} color="#000" />
									</View>
								</View>
							</View>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}

export default withNavigation(My);

const styles = StyleSheet.create({
	myPage: {
		flex: 1,
		backgroundColor: '#f3f3f3'
	},
	title: {
		color: '#0D0E15',
		fontSize: 34,
		marginTop: scaleSize(114) - minHeight,
		marginLeft: scaleSize(32)
	},
	myTopBan: {
		padding: 8,
		height: screen.height * 0.2,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: scaleSize(15)
	},
	myTopBanCon: {
		flexDirection: 'row',
		width: screen.width,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	myTopBanConItem: {
		width: scaleSize(312),
		height: scaleSize(176),
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: scaleSize(20),
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'rgb(34, 34, 34)',
		shadowOpacity: 0.18,
		shadowRadius: scaleSize(27),
		elevation: 5,
	},
	myTopBanConItemText: {
		color: '#0D0E15',
		// marginTop: 5,
		// textAlign: 'center',
		fontSize: 15
	},
	myTopBanConItemIcon: {
		width: scaleSize(40),
		height: scaleSize(40),
	},
	myColsCon: {},
	myColsConPart: {
		marginBottom: 10,
		backgroundColor: 'white'
	},
	myColsConPartRow: {
		flexDirection: 'row',
		alignItems: 'stretch',
		height: scaleSize(110)
	},
	myColsConPartRowLf: {
		marginLeft: scaleSize(30),
		width: 40,
		alignItems: 'center',
		justifyContent: 'center'
	},
	myColsConPartRowRi: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 10
	},
	bottomLine: {
		borderBottomWidth: 1,
		borderColor: '#eee'
	},
	myColsConPartRowRi2R: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	iconMsg: {
		width: 20,
		height: 17
	},
	iconLinkman: {
		width: 20,
		height: 20,
		resizeMode: 'stretch'
	},
	iconSettings: {
		width: 22,
		height: 21,
		resizeMode: 'stretch'
	},
	iconArr2R: {
		width: 8,
		height: 14
	},
	icon22: {
		width: 35,
		height: 28
	},
	iconHelper: {
		width: 22,
		height: 22
	},
	iconAbout: {
		width: 22,
		height: 22
	},
	newMsgFlag: {
		borderRadius: 10,
		height: 20,
		width: 30,
		textAlign: 'center',
		backgroundColor: 'red',
		fontSize: 13,
		color: 'white',
		lineHeight: 20,
		marginRight: 6
	},
	noSplitLine: {
		borderWidth: 0
	},
	center: {
		// justifyContent: 'center',
		alignItems: 'center',
		// width: screen.width * 0.35,
		height: scaleSize(176),
		justifyContent: 'space-between',
		paddingBottom: scaleSize(35),
		paddingTop: scaleSize(42)
	},
	icon36: {
		width: scaleSize(36),
		height: scaleSize(36)
	}
});
