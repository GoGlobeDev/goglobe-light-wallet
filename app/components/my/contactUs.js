import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableHighlight, Alert } from 'react-native';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { scaleSize } from '../../utils/ScreenUtil';

export default class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row'}}>
                    <Image style={styles.icon} source={require('../../assets/images/my/address.png')} />
                    <Text style={styles.title}>地址</Text>
                </View>
                <Text style={styles.text}>皇后街502/190，墨尔本，澳大利亚</Text>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={styles.icon} source={require('../../assets/images/my/email.png')} />
                    <Text style={styles.title}>邮箱</Text>
                </View>
                <Text style={styles.text}>info@goglobechain.com</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: scaleSize(38)
    },
    icon: {
        width: scaleSize(40),
        height: scaleSize(40),
        marginRight: scaleSize(18)
    },
    title: {
        fontSize: 15,
        color: '#384265',
    },
    text: {
        fontSize: 15,
        color: '#0D0E15',
        opacity: 0.7,
        marginBottom: scaleSize(52)
    }
});
