import React from 'react';
import { Dimensions, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import { I18n } from '../../language/i18n';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../../splash.png');

class Splash extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			isWallet: false,
			mnemonic: false
		};
	}

	componentDidMount() {
		storage.load({ key: 'mnemonic'}).then((res) => {
			this.setState({
				mnemonic: res.mnemonic
			})
		}).catch(() => {
			this.setState({
				mnemonic: false
			})
		})
		setTimeout(() => {
			storage
				.load({
					key: 'walletInfo'
				})
				.then((res) => {
					if(this.state.mnemonic) {
						this.props.navigation.navigate('Guide');
					} else {
						this.props.navigation.navigate('Home');
					}
				})
				.catch((err) => {
					this.props.navigation.navigate('Guide');
				});
		}, 1500);
	}

	render() {
		return (
			<Animated.Image
				style={{
					width: maxWidth,
					height: maxHeight
				}}
				source={splashImg}
			/>
		);
	}
}

export default withNavigation(Splash);
