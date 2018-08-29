import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
export default class SetPwd extends React.Component {
	constructor(){
		super();
		this.state = {
            pwd: '',
            pwd1: ''
		}
	}
	static navigationOptions = {
		headerTitle: '设置交易密码'
	};
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
		this.props.navigation.navigate('Node')

	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
            	<View style={styles.tip}>
					<Text style={styles.tipText}>1.交易密码必须有大写字母、小写字母、数字，禁止使 用符号</Text>
					<Text style={styles.tipText}>2.交易密码限定在12位之内</Text>
				</View>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>设置交易密码</Text>
					<TextInput
						style={styles.inputText}
						placeholder="字母、数字组合 12位以内"
						onChangeText={(pwd) => this._changePwd(pwd)}
					/>
				</View>
                <View style={styles.inputbox}>
					<Text style={styles.inputTitle}>确认交易密码</Text>
					<TextInput
						style={styles.inputText}
						placeholder="请重复输入交易密码"
						onChangeText={(pwd1) => this._changePwd1(pwd1)}
					/>
				</View>
				<TouchableOpacity style={[styles.button, this.state.pwd === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>确定</Text>
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
