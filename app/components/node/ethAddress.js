import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { sendCode } from '../../api/bind';
import Touch from '../public/touch';
class EthAddress extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('node.ethAddress._title')
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
			Alert.alert(null, I18n.t('node.ethAddress.addressError'),[
                {text: '确定', onPress: () => this.setState({ address: '' })}
              ])
			// Alert.alert(null, I18n.t('node.ethAddress.addressError'));
			
		} else {
			this.props.navigation.goBack();
			storage.save({ key: 'ethAddress', data: this.state.address, expires: null})
		}
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.tipbox}>
					<Text style={styles.tip}>{I18n.t('node.ethAddress.tip')}</Text>
				</View>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('node.ethAddress.title')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder={I18n.t('node.ethAddress.pleaseInputAddress')}
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
