import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { I18n } from '../../language/i18n';
import { withNavigation } from 'react-navigation';
import { scaleSize } from '../utils/ScreenUtil';

class Guide extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.LogoOrWel}>
					<Image style={styles.logo} source={require('../assets/images/logo.png')} />
					<Text style={styles.welcome}>{I18n.t('guide.welcome')}</Text>
				</View>
				<View style={styles.fun}>
					<View style={[ styles.funItem, styles.import ]}>
						<Text style={styles.tipText}>{I18n.t('guide.importInstructions')}</Text>
						<TouchableHighlight
							underlayColor={'#405696'}
							style={[ styles.funRadius, styles.funImport ]}
							onPress={() => this.props.navigation.navigate('ImportWallet')}
						>
							<Text style={styles.funText}>{I18n.t('guide.importWallet')}</Text>
						</TouchableHighlight>
					</View>
					<View style={[ styles.funItem, styles.create ]}>
						<Text style={styles.tipText}>{I18n.t('guide.createInstructions')}</Text>
						<TouchableHighlight
							underlayColor={'#FF8725'}
							style={[ styles.funRadius, styles.funCreate ]}
							onPress={() => this.props.navigation.navigate('CreateWallet')}
						>
							<Text style={styles.funText}>{I18n.t('guide.createWallet')}</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}
export default withNavigation(Guide);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	LogoOrWel: {
		alignItems: 'center'
	},
	logo: {
		width: 80,
		height: 80,
		borderRadius: 20
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 20,
		letterSpacing: 1
	},
	fun: {
		borderColor: 'red',
		padding: 20
	},
	funItem: {
		marginTop: 20
	},
	funRadius: {
		borderRadius: 50,
		marginTop: 20,
		padding: 15
	},
	tipText: {
		fontSize: 13,
		color: '#959595',
		lineHeight: scaleSize(36)
	},
	funImport: {
		backgroundColor: '#405696'
	},
	funCreate: {
		backgroundColor: '#FF8725'
	},
	funText: {
		color: '#fff',
		textAlign: 'center'
	}
});
