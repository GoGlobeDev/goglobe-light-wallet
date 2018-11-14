import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, Modal, Alert, Linking } from 'react-native';
import { withNavigation } from 'react-navigation';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { checkUpdate } from '../../api/index';
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

class SysSet extends Component {
	constructor(props) {
		super(props);
		this.state = { modalVisible: false, newVersion: '--' };
		this.navigate = this.props.navigation.navigate;
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
			<View style={styles.container}>
				{/* <ListFun
					fun_name="手势密码"
					onPress={() => {
						this.navigate('SetGesturePassword');
					}}
				/> */}
				{/* <ListFun
					fun_name={I18n.t('my.webHost')}
					onPress={() => {
						this.navigate('WebSetting');
					}}
				/> */}
				<ListFun
					fun_name={I18n.t('my.sysSetting.language._title')}
					onPress={() => {
						this.navigate('SysLanguage');
					}}
				/>
                <ListFun
                    fun_name={I18n.t('my.sysSetting.jnb._title')}
                    onPress={() => {
                        this.navigate('JnbSetting');
                    }}
                />
				<ListFun
                    fun_name={I18n.t('my.home.changePwd._title')}
                    onPress={() => {
                        this.navigate('changePwd');
                    }}
                />
				<ListFun
                    fun_name={I18n.t('my.home.aboutUs.checkVersion')}
                    onPress={() => {
                        this._checkVersion();
                    }}
                />
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
			</View>
		);
	}
}

export default withNavigation(SysSet);

const styles = StyleSheet.create({
	color_bbb: {
		color: '#bbb'
	},
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff'
	},
	walletAvatar: {
		width: 60,
		height: 60
	},
	fun: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#e6e0df'
	},
	fun_text: {
		color: '#000'
	},
	buttonStyle: {
		backgroundColor: '#bbb',
		height: 45,
		borderRadius: 50,
		marginTop: 30
	},
	textInput: {
		borderBottomWidth: 1,
		borderColor: '#e6e6e6',
		height: 45,
		padding: 5
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
