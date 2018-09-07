import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, TouchableHighlight, Alert, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { bindDevice } from '../../api/bind';
import Loading from 'react-native-whc-loading';
class BindMachine extends React.Component {
	constructor(){
		super();
		this.state = {
			deviceNo: '',
			code: ''
		}
	}
	static navigationOptions = {
		headerTitle: I18n.t('node.registerMiner._title')
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
	_changeMinerNumber = (text) => {
		this.setState({
			deviceNo: text
		})
	}
	_changeMinerCode = (code) => {
		this.setState({
			code: code
		})
	}
	_clickTocomfirm = () => {
		if(!this.state.deviceNo){
			Alert.alert(null, I18n.t('node.registerMiner.emptyNoError'))
		} else if (!this.state.code) {
			Alert.alert(null, I18n.t('node.registerMiner.emptyCodeError'))
		} else {
			this.refs.devicePwd.open()
		}
	}
	_clickToBindDevice = () => {
        bindDevice(this.props.navigation.state.params.userId, Number(this.state.deviceNo), this.state.code, this.state.password).then((res) => {
			if(res.data.status === 'success') {
				this.props.navigation.navigate('Node', {userId: this.props.navigation.state.params.userId, passwordExists: true})
			} else {
				Alert.alert(null, res.data.message)
			}
		}).catch((e) => {
			Alert.alert(null, I18n.t('node.registerMiner.failedError'))
		})
    }
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('node.registerMiner.inputMinerNumber')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder={I18n.t('node.registerMiner.inputMinerNumber')}
						onChangeText={(text) => this._changeMinerNumber(text)}
					/>
				</View>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('node.registerMiner.inputMinerCode')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder={I18n.t('node.registerMiner.inputMinerCode')}
						onChangeText={(text) => this._changeMinerCode(text)}
					/>
				</View>
				<TouchableOpacity style={[styles.button, this.state.text === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.OK')}</Text>
				</TouchableOpacity>
				<Loading ref="loading" />
				<Modal
                    style={[styles.modal, styles.modalPwd]}
                    coverScreen={true}
                    position={'center'}
                    ref={'devicePwd'}
                    isOpen={this.state.huhu}
                    swipeArea={20}
                    >
                    <View>
                        <View style={[styles.paymentDetails_title, { position: 'relative'}]}>
							<TouchableHighlight style={{ width: scaleSize(44), height: scaleSize(44), position: 'absolute', left: scaleSize(30), top: scaleSize(30)}} underlayColor={'transparent'} onPress={() => this.refs.devicePwd.close()}>
								<Image style={{ width: scaleSize(44), height: scaleSize(44) }} source={require('../../assets/images/common/close.png')} />
							</TouchableHighlight>
                            <Text>{I18n.t('node.registerMiner.inputTradingPwd')}</Text>
                        </View>
                        <Input
                            placeholder={I18n.t('public.inputPwd')} //"请输入你的密码"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                            inputContainerStyle={[styles.pwdStyle ]}
                        />
                        <View style={styles.bottom_fun}>
                            <TouchableHighlight style={styles.bottom_fun_item_done}>
                                <Text
                                    style={styles.bottom_fun_item}
                                    onPress={() => {
                                        this.refs.devicePwd.close();
                                        setTimeout(() => {
                                            // this.refs.loading.show();
                                            if (!this.state.password) {
                                                this.refs.loading.close();
                                                setTimeout(() => {
                                                    // Alert.alert(null, '请输入密码');
                                                    Alert.alert(null, I18n.t('public.inputPwd'));
                                                }, 100);
                                            } else {
                                                setTimeout(() => {
                                                    this._clickToBindDevice()
                                                }, 100);
                                            }
                                        }, 1000);
                                    }}
                                >
                                    {I18n.t('public.define')}
                                    {/* 确定 */}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
			</View>
		);
	}
}

export default BindMachine;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#fff'
	},
	inputbox: {
		padding: scaleSize(48),
		paddingBottom: 0
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
	modal: {
		alignItems: 'center',
		width: scaleSize(686),
		height: scaleSize(782),
		borderRadius: scaleSize(8)
	},
	modalPwd: {
		height: scaleSize(406)
    },
    paymentDetails_title: {
		width: scaleSize(686),
		height: scaleSize(108),
		justifyContent: 'center',
		alignItems: 'center',
    },
    pwdStyle: {
        marginLeft: scaleSize(32),
        marginBottom: scaleSize(50),
		width: scaleSize(622),
		height: scaleSize(96),
		borderBottomWidth: 1,
		borderBottomColor: '#E7E7E7'
    },
    bottom_fun: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	bottom_fun_item: {
		height: scaleSize(100),
		lineHeight: scaleSize(100),
		color: '#fff',
		textAlign: 'center',
	},
	bottom_fun_item_done: {
		width: scaleSize(654),
		borderRadius: scaleSize(44),
		backgroundColor: '#FF8725'
	}
});
