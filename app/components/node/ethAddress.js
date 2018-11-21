import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { sendCode } from '../../api/bind';
import Touch from '../public/touch';
class EthAddress extends React.Component {
	static navigationOptions = {
		headerTitle: '输入地址'
	};
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			tip: true,
		}
	}
	componentDidMount() {
		storage
		.load({
			key: 'ethAddress'
		}).then((ethAddress) => {
			this.setState({
				address: ethAddress
			})
		})
	}
	_changeText = (address) => {
		this.setState({
			address: address
		})
	}
	_clickTocomfirm = () => {
		if(!this.state.address) {
			this.props.navigation.goBack();
			storage.save({ key: 'ethAddress', data: this.state.address, expires: null})
		}else if (!web3.utils.isAddress(this.state.address)) {
			Alert.alert(null, I18n.t('assets.transfer.checkAddress'));
		} else {
			this.props.navigation.goBack();
			storage.save({ key: 'ethAddress', data: this.state.address, expires: null})
		}
		// this.props.navigation.navigate('VCode')
		// if(!this.state.address){
		// 	Alert.alert(null, '请输入手机号'); // 提示 请输入手机号
		// } else if(!address.test(this.state.address)){
		// 	Alert.alert(null, '请输入正确的手机号'); // 提示 请输入正确的手机号
		// } else {
		// 	sendCode(this.state.address).then((res) => {
		// 		if(res.data.status === 'success'){
		// 			this.props.navigation.navigate('VCode', { address: this.state.address, page: this.state.page })
		// 		} else if(!res.data.status){
		// 			Alert.alert(null, I18n.t('error.sendCodeWrong'));
		// 		} else{
		// 			Alert.alert(null, I18n.t('error.' + res.data.status ));
		// 		}
		// 	}).catch((e) => {
		// 		const message = e.message;
		// 		if(message.indexOf('Network') !== -1){
		// 			this.props.navigation.navigate('noNetWork')
		// 		} else {
		// 			console.log(e.message)
		// 		}
		// 	})
		// }

	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.tipbox}>
					<Text style={styles.tip}>注意:当输入其他地址的时候，请再三确认地址是否正确。若输入地址有误，交易无法回滚，自游俱乐部也无法为您找回数字资产，请务必确认地址正确。</Text>
				</View>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>地址</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder="请输入其他提币地址"
						value={this.state.address}
						onChangeText={(address) => this._changeText(address)}
					/>
				</View>
				<Touch style={[styles.button, this.state.address === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>确定</Text>
				</Touch>
			</View>
		);
	}
}

export default EthAddress;

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
