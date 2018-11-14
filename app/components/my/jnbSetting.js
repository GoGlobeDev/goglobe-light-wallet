import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { getUser } from '../../api/bind';
import Touch from '../public/touch';
class JnbSetting extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('my.sysSetting.jnb._title')
	};
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	componentWillReceiveProps(newProps) {
		// console.log(newProps)
		this.setState({
			jnbAccount: newProps.navigation.state.params.jnbAccount
		})
	}
	_getUser = () => {
		storage.load({ key: 'walletInfo' }).then((walletInfo) => {
			getUser(walletInfo.walletAddress).then((res) => {
				// console.log(res)
				if(res.data && res.data.userId){
					storage.save({
						key: 'user',
						data: {
							userId: res.data.userId,
							phone: res.data.phone,
							rcode: res.data.referralCode,
							passwordExists: res.data.passwordExists,
							jnbAccount: res.data.jnbAccount
						},
						expires: null
					});
					this.setState({
						jnbAccount: res.data.jnbAccount,
						userId: res.data.userId
					})
				} else {
					this.setState({
						jnbAccount: '',
						userId: ''
					})
				}
			}).catch((e) => {
				const message = e.message;
				if(message.indexOf('Network') !== -1){
					this.props.navigation.navigate('noNetWork')
				} else {
					console.log(e.message)
				}
			})
		})
	}
	componentDidMount() {
		storage.load({ key: 'user' }).then((user) => {
			if(user.jnbAccount){
				this.setState({
					jnbAccount: user.jnbAccount,
					userId: user.userId
				})
			} else {
				this._getUser();
			}
		})
	}
	_setJnbAccount = () => {
		this.props.navigation.navigate('BindJnbAccount', {userId: this.state.userId});
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.view}>
                <Text style={styles.title}>{I18n.t('my.sysSetting.jnb._title')}</Text>
                {this.state.jnbAccount
                    ? <View style={styles.lineView}>
                        <Text style={styles.content}>{this.state.jnbAccount}</Text>
                    </View>
                    : <View>
						{!this.state.userId && <View style={[styles.lineView, { height: scaleSize(180)}]}>
							<Text style={[styles.content, { color: '#CFCFD0' }]}>绑定JNB账号之前请先绑定手机号</Text>
						</View>}
						{!!this.state.userId && <View style={styles.lineView}>
							<Text style={[styles.content, { color: '#CFCFD0' }]}>{I18n.t('my.home.bindPhone.notBind')}</Text>
							<TouchableOpacity style={[styles.button, { width: scaleSize(160) }]} onPress={this._setJnbAccount}>
								<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('my.home.bindPhone.button')}</Text>
							</TouchableOpacity>
						</View>}
					</View>
					
                }
            </View>
			</View>
		);
	}
}

export default JnbSetting;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#fff'
	},
	view:{
		backgroundColor: '#fff',
		padding: scaleSize(48),
		paddingBottom: 0,
		marginBottom: scaleSize(16)
	},
	title: {
		fontSize: 14,
		color: '#0D0E15'
	},
	lineView: {
		flexDirection: 'row',
		alignItems: 'center',
		height: scaleSize(150),
		justifyContent: 'space-between'
	},
	content: {
		fontSize: 34,
		color: '#0D0E15',
		fontWeight: 'bold'
	},
	button: {
		width: scaleSize(128),
		height: scaleSize(72),
		borderRadius: scaleSize(52),
		backgroundColor: '#EA6228',
		justifyContent: 'center',
	},
});
