import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { getUser } from '../../api/bind';
class BindingPhone extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('my.home.bindPhone._title')
	};
	constructor(props) {
		super(props);
		this.state = {
			phone: ''
		}
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			phone: newProps.navigation.state.params.phone
		})
	}
	componentDidMount() {
		storage.load({ key: 'user' }).then((user) => {
			this.setState({
				phone: user.phone
			})
		})
	}
	_setBindingPhone = () => {
		this.props.navigation.navigate('GoBindPhone', {page: 'my'});
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
			</View>
		);
	}
}

export default BindingPhone;

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
