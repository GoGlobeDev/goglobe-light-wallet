import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
class GoBindPhone extends React.Component {
	static navigationOptions = {
		headerTitle: '绑定手机号'
	};
	constructor(props) {
		super(props);
		this.state = {
			
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
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View >
					
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
				</View>
			</View>
		);
	}
}

export default GoBindPhone;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff'
	}
});
