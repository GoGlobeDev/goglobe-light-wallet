import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Clipboard } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import Toast from 'react-native-easy-toast';
class InvitationCode extends React.Component {
	static navigationOptions = {
		headerTitle: '邀请码'
	};
	constructor(props) {
		super(props);
		this.state = {
			code: '12324332'
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
		console.log(this.state.code)
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View>
					<Text>我的邀请码</Text>
					<Button title={'去复制'} 
						onPress={this._setClipboardContent}/>
					<Text>{this.state.code}</Text>
				</View>
				<Toast ref="toast" position="center" />
				<View>
					<Text>我绑定的邀请码</Text>
					<Button title={'去绑定'} 
						onPress={this._setBindingPhone}/>
					<Text>121931928989</Text>
				</View>
			</View>
		);
	}
}

export default InvitationCode;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff'
	}
});
