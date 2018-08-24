import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
class InvitationCode extends React.Component {
	static navigationOptions = {
		headerTitle: '邀请码'
	};

	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<Text>邀请码</Text>
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
