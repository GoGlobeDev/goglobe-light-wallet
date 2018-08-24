import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
class BindingPhone extends React.Component {
	static navigationOptions = {
		headerTitle: '绑定手机号'
	};

	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<Text>绑定手机号</Text>
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
	}
});
