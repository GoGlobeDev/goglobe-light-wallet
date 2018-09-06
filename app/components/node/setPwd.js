import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { bindPwd } from '../../api/bind';
export default class SetPwd extends React.Component {
	constructor(){
		super();
		this.state = {
            pwd: '',
            pwd1: ''
		}
	}
	static navigationOptions = {
		header: null
		// headerTitle: 
	};
	componentDidMount() {
		storage
			.load({
				key: 'user'
			})
			.then((user) => {
				this.setState({
					userId: user.userId
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}
	_changePwd = (pwd) => {
		this.setState({
			pwd: pwd
		})
    }
    _changePwd1 = (pwd1) => {
		this.setState({
			pwd1: pwd1
		})
	}
	_clickTocomfirm = () => {
		if(!this.state.pwd){
			Alert.alert(null, I18n.t('wallet.enterPwd'));
		} else if(this.state.pwd !== this.state.pwd1 ) {
			Alert.alert(null, I18n.t('wallet.pwdIsWrong')); 
		} else {
			bindPwd(this.props.navigation.state.params.userId, this.state.pwd).then((res) => {
				if(res.data.status === 'success'){
					if(this.props.navigation.state.params.page === 'node') {
						this.props.navigation.navigate('Node', { userId: this.props.navigation.state.params.userId, passwordExists: true})
					} else {
						this.props.navigation.navigate('BindingPhone', {phone: this.props.navigation.state.params.phone})
					}
				} else {
					Alert.alert(null, res.data.status)
				}
			}).catch((e) => {
				console.log(e)
			})
		}
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View>
					<Text style={[styles.title, {color: '#0D0E15', marginTop: scaleSize(114), marginLeft: scaleSize(32)}]} >{I18n.t('node.setPassword._title')}</Text>
				</View>
            	<View style={styles.tip}>
					<Text style={styles.tipText}>{I18n.t('node.setPassword.tip1')}</Text>
					<Text style={styles.tipText}>{I18n.t('node.setPassword.tip2')}</Text>
				</View>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('node.setPassword.setPassword')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						secureTextEntry={true}
						style={styles.inputText}
						placeholder={I18n.t('node.setPassword.placehoder1')}
						onChangeText={(pwd) => this._changePwd(pwd)}
					/>
				</View>
                <View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('node.setPassword.confirmPassword')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						secureTextEntry={true}
						style={styles.inputText}
						placeholder={I18n.t('node.setPassword.placehoder2')}
						onChangeText={(pwd1) => this._changePwd1(pwd1)}
					/>
				</View>
				<TouchableOpacity style={[styles.button, this.state.pwd === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.OK')}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 34,
		color: '#ffffff'
	},
    tip: {
        padding: scaleSize(48)
    },
    tipText: {
		fontSize: 13,
		color: '#EA7E25'
	},
	inputbox: {
		padding: scaleSize(48)
	},
	inputTitle: {
		fontSize: 13,
		color: '#0D0E15'
	},
	inputText: {
		padding: 0,
		marginTop: scaleSize(20),
		height: scaleSize(58),
		borderBottomWidth: scaleSize(1),
		borderBottomColor: '#E7E7E7',
		fontSize: 17
		// backgroundColor: '#faa'
	},
	button: {
		width: scaleSize(654),
		height: scaleSize(100),
		borderRadius: scaleSize(52),
		justifyContent: 'center',
		marginLeft: scaleSize(48),
		marginTop: scaleSize(97)
	},
});
