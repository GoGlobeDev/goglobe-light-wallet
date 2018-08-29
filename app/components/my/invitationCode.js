import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Clipboard, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import Toast from 'react-native-easy-toast';
import { scaleSize } from '../../utils/ScreenUtil';
class InvitationCode extends React.Component {
	static navigationOptions = {
		headerTitle: '我的邀请码'
	};
	constructor(props) {
		super(props);
		this.state = {
			code: '12324332',
			bindCode: ''
		};
	}
	_setClipboardContent = async () => {
		Clipboard.setString(this.state.code);
		try {
			var content = await Clipboard.getString();
			console.log(content)
			this.refs.toast.show(I18n.t('public.copySuccess'));
		} catch (e) {
			console.log(e)
			this.refs.toast.show(I18n.t('public.copyFailed'));
		}
		console.log(this.state.code)
	}
	_setBindingPhone = () => {
		console.log(this.state.code);
		this.props.navigation.navigate('BindInCode');
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<Text style={styles.title}>我的邀请码</Text>
					<View style={styles.lineView}>
						<Text style={styles.content}>{this.state.code}</Text>
						<TouchableOpacity style={styles.button} onPress={this._setClipboardContent}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>复制</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.view}>
					<Text style={styles.title}>我绑定的邀请码</Text>
					<View style={styles.lineView}>
						{this.state.bindCode
							? <Text style={styles.content}>{this.state.bindCode}</Text>
							: <Text style={[styles.content, { color: '#CFCFD0' }]}>还未绑定</Text>
						}
						
						<TouchableOpacity style={[styles.button, { width: scaleSize(160) }]} onPress={this._setBindingPhone}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>去绑定</Text>
						</TouchableOpacity>
					</View>
					
					
				</View>
				<Toast ref="toast" position="center" />

			</View>
		);
	}
}

export default InvitationCode;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#f3f3f3'
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
