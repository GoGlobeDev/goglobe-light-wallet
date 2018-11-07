import React, { Component } from 'react';
import {    
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    NetInfo
} from 'react-native';
import { scaleSize } from '../../utils/ScreenUtil';
import { I18n } from '../../../language/i18n';
const Web3 = require('web3');

export default class noMainNet extends Component {
    static navigationOptions = {
        header: null
    }
    _clickToRetry= () => {
        const webProvider = new Web3.providers.HttpProvider(host);
        const web3 = new Web3(webProvider);
        global.web3 = web3;
        // if(webProvider.connected){
        //     const web3 = new Web3(webProvider);
        //     global.web3 = web3;
        // } else {
        //     const web3 = new Web3(webProvider);
        //     global.web3 = web3;
        // }
        // this.props.navigation.goBack();
        this.props.navigation.navigate('Splash')
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.noNetImage} source={require('../../assets/images/common/noNet.png')} />
                <Text style={styles.text}>
                    当前未连接到以太坊主网
                </Text>
                <TouchableOpacity style={styles.button} onPress={this._clickToRetry}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.noNetButton')}</Text>
				</TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
		backgroundColor: '#fff',
		flex: 1
	},
    noNetImage: {
        width: scaleSize(398),
        height: scaleSize(430),
        marginLeft: scaleSize(168),
        marginTop: scaleSize(252),
        marginBottom: scaleSize(48)
    },
    text: {
        fontSize: 15,
        color: '#000',
        opacity: 0.6,
        textAlign: 'center'
    },
    button: {
		width: scaleSize(360),
		height: scaleSize(100),
		borderRadius: scaleSize(52),
		justifyContent: 'center',
		marginLeft: scaleSize(196),
        marginTop: scaleSize(97),
        backgroundColor: '#EA7828'
	},
})