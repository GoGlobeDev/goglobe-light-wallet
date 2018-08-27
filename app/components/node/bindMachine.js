import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
class BindMachine extends React.Component {
	static navigationOptions = {
		headerTitle: '绑定矿机'
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
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View>
					<Text>输入矿机编号</Text>
					<Input placeholder="输入矿机编号"/>
				</View>

			</View>
		);
	}
}

export default BindMachine;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff'
	}
});
