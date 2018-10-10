import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
class effectRule extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('my.home.effectRule._title')
	};
	constructor(props) {
		super(props);
		this.state = {
			phone: ''
		}
	}
	componentDidMount() {
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<Text style={styles.txt}>{I18n.t('my.home.effectRule.rule1')}</Text>
                <Text style={styles.txt}>{I18n.t('my.home.effectRule.rule2')}</Text>
                <Text style={styles.txt}>{I18n.t('my.home.effectRule.rule3')}</Text>
			</View>
		);
	}
}

export default effectRule;

const styles = StyleSheet.create({
	container: {
        flex: 1,
        padding: scaleSize(32),
		backgroundColor: '#fff'
	},
    txt: {
        fontSize: 15,
        color: '#0D0E15',
        lineHeight: scaleSize(48)
    }
});
