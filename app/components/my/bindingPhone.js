import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
class BindingPhone extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('my.home.bindPhone._title')
	};
	constructor(props) {
		super(props);
		this.state = {
			phone: null
		}
	}
	componentDidMount() {

		// storage
		// 	.load({
		// 		key: 'webHost'
		// 	})
		// 	.then(({ webHost }) => {
		// 		this.setState({
		// 			url: webHost
		// 		});
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 	});
	}
	_setBindingPhone = () => {
		console.log(this.state.phone);
		this.props.navigation.navigate('GoBindPhone');
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<Text style={styles.title}>{I18n.t('my.home.bindPhone.bindPhoneNumber')}</Text>
					{this.state.phone
						? <View style={styles.lineView}>
							<Text style={styles.content}>{this.state.phone}</Text>
						</View>
						: <View style={styles.lineView}>
							<Text style={[styles.content, { color: '#CFCFD0' }]}>{I18n.t('my.home.bindPhone.notBind')}</Text>
							<TouchableOpacity style={[styles.button, { width: scaleSize(160) }]} onPress={this._setBindingPhone}>
								<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>去绑定</Text>
							</TouchableOpacity>
						</View>
					}
				</View>
				{/* <View >
					<Text>当前未绑定手机号</Text><Button title={I18n.t('my.home.bindPhone.button')}/>
					<View>
						<Text>输入手机号</Text>
						<Input placeholder="输入手机号"/>
						<Text>输入验证码</Text>
						<Input placeholder="输入验证码"/>
					</View>
					<View>
						<Text>在未绑定手机号到情况下，无法绑定矿机</Text>
						<Text>完成绑定手机号后，即可绑定矿机，开始挖矿获取代币</Text>
					</View>
				</View> */}


			</View>
		);
	}
}

export default BindingPhone;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
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
