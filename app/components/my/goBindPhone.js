import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { sendCode } from '../../api/bind';
import Touch from '../public/touch';
class GoBindPhone extends React.Component {
	static navigationOptions = {
		headerTitle: '绑定手机号'
	};
	constructor(props) {
		super(props);
		this.state = {
			phone: '',
			tip: false,
		}
	}
	componentDidMount() {
		if(this.props.navigation.state.params.page === 'node'){
			this.setState({
				tip: true
			})
		}
	}
	_changeText = (phone) => {
		this.setState({
			phone: phone
		})
	}
	_clickTocomfirm = () => {
		const phone = /^1\d{10}$/;
		// this.props.navigation.navigate('VCode')
		if(!this.state.phone){
			Alert.alert(null, '请输入手机号'); // 提示 请输入手机号
		} else if(!phone.test(this.state.phone)){
			Alert.alert(null, '请输入正确的手机号'); // 提示 请输入正确的手机号
		} else {
			sendCode(this.state.phone).then((res) => {
				if(res.data.status === 'success'){
					this.props.navigation.navigate('VCode', { phone: this.state.phone, tip: this.state.tip })
				} else {
					Alert.alert(null, I18n.t('error.' + res.data.status ));
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
				{this.state.tip && <View style={styles.tipbox}>
					<Text style={styles.tip}>1.在未绑定手机号情况下，无法绑定设备</Text>
					<Text style={styles.tip}>2.完成绑定手机号后，即可开始每日获取系统奖励</Text>
				</View>}
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>手机号</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder="请输入手机号"
						onChangeText={(phone) => this._changeText(phone)}
					/>
				</View>
				<Touch style={[styles.button, this.state.phone === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>获取验证码</Text>
				</Touch>
			</View>
		);
	}
}

export default GoBindPhone;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	tipbox: {
		padding: scaleSize(48)
	},
	tip: {
		color: '#EA7E25',
		fontSize: 13,
		lineHeight: scaleSize(42)
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
