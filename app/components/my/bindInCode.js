import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { bindRCode } from '../../api/bind';

export default class BindInCode extends React.Component {
	constructor(){
		super();
		this.state = {
			bindCode: '',
			modalVisible: false,
			failModal: false
		}
	}
	static navigationOptions = {
		headerTitle: I18n.t('my.home.invitationCode._title')
	};
	componentDidMount() {
		storage.load({ key: 'user' }).then((user) => {
			this.setState({
				userId: user.userId,
				rcode: user.rcode
			})
		})
	}
	_changeText = (text) => {
		this.setState({
			bindCode: text
		})
	}
	_clickTocomfirm = () => {
		// this.setState({
        //     modalVisible: true
		// })
		if(!this.state.bindCode){
			Alert.alert(null, '绑定的邀请码不能为空，请重新输入')
		} else {
			this.refs.codePwd.open()
		}
	}
	_clickToBindCode = () => {
		bindRCode(this.state.userId, this.state.bindCode, this.state.password).then((res) => {
			if(res.data.status === 'success') {
				this.props.navigation.navigate('InvitationCode', { boundNumber: res.data.boundNumber });
			} else if (res.data.status === 'fail' && res.data.message === 'numberLimited') {
                Alert.alert(null, I18n.t('my.home.invitationCode.' + res.data.message));
            } else {
				Alert.alert(null, I18n.t('my.home.invitationCode.' + res.data.message));
			}
		}).catch((e) => {
			console.log(e)
		})
	}
	clickToClose = () => {
        // this.props.navigation.navigate('SetPwd')
        this.setState({
            failModal: false
        })
    }
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('my.home.bindingCode.inputCode')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder={I18n.t('my.home.bindingCode.pleaseInputCode')}
						onChangeText={(text) => this._changeText(text)}
					/>
				</View>
				<TouchableOpacity style={[styles.button, this.state.text === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.OK')}</Text>
				</TouchableOpacity>
				<Modal
                    style={[styles.modal, styles.modalPwd]}
                    coverScreen={true}
                    position={'center'}
                    ref={'codePwd'}
                    isOpen={this.state.huhu}
                    swipeArea={20}
                    >
                    <View>
                        <View style={styles.paymentDetails_title}>
                            <Text>输入交易密码</Text>
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
                                        this.refs.codePwd.close();
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
                                                    this._clickToBindCode()
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
				{/* <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false })}
                    >
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onPress={this.clickToClose}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>输入交易密码</Text>
                            <Input
                                style={styles.input}
                                />
                            <View style={styles.modalBottom}>
                                <TouchableOpacity style={{ width: scaleSize(249), justifyContent: 'center', borderRightWidth: scaleSize(2), borderRightColor: '#DFDFDF'}} onPress={() => this.clickToClose()}>
                                    <Text style={[styles.btn, { color: '#999999'}]}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: scaleSize(249), justifyContent: 'center' }} onPress={this.clickToClose}>
                                    <Text style={styles.btn}>确定</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal> */}
				{/* <Modal
					animationType={'slide'}
                    transparent={true}
                    visible={this.state.failModal}
                    onRequestClose={() => this.setState({ failModal: false })}
                    >
					<View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={[styles.modalView, { height: scaleSize(250) }]}>
                            <Text style={styles.modalText}>{I18n.t('my.home.bindingCode.codeUsed')}</Text>
                            <TouchableOpacity style={[styles.modalBottom, { justifyContent: 'center', alignItems: 'center' }]}  onPress={this.clickToClose}>
                                <Text style={styles.btn}>{I18n.t('my.home.bindingCode.getIt')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
				</Modal> */}
				{/* <Modal
					animationType={'slide'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false })}
                    >
					<View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={[styles.modalView, { height: scaleSize(250) }]}>
                            <Text style={styles.modalText}>{I18n.t('my.home.bindingCode.codeUsed')}</Text>
                            <TouchableOpacity style={[styles.modalBottom, { justifyContent: 'center', alignItems: 'center' }]}  onPress={this.clickToClose}>
                                <Text style={styles.btn}>{I18n.t('my.home.bindingCode.getIt')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
				</Modal> */}
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#fff'
	},
	inputbox: {
		padding: scaleSize(48)
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
	// modalView: {
    //     backgroundColor: '#fff',
    //     width: scaleSize(500),
    //     height: scaleSize(310),
    //     borderRadius: scaleSize(8),
    //     position: 'absolute',
    //     top: scaleSize(512),
    //     left: scaleSize(128),
    // },
    // modalTitle: {
    //     fontSize: 15,
    //     color: '#0D0E15',
    //     textAlign: 'center',
	// 	padding: scaleSize(34),
	// 	// height: scaleSize(72),
	// 	// lineHeight: scaleSize(36)
	// },
	// modalText: {
	// 	fontSize: 13,
	// 	lineHeight: scaleSize(44),
	// 	color: '#0D0E15',
	// 	height: scaleSize(160),
	// 	padding: scaleSize(34),
	// // 	marginBottom: scaleSize(12)
	// },
    // input: {
    //     width: scaleSize(398),
    //     height: scaleSize(72),
    //     borderRadius: scaleSize(20),
    //     borderColor: '#D8D8D8',
    //     borderWidth: scaleSize(2),
	// 	marginLeft: scaleSize(50),
	// 	marginBottom: scaleSize(34)
	// },
	// modalBottom: {
	// 	flexDirection: 'row',
	// 	height: scaleSize(90),
	// 	borderTopColor: '#DFDFDF',
	// 	borderTopWidth: scaleSize(2)
	// },
	// btn: {
	// 	textAlign: 'center',
	// 	fontSize: 15,
	// 	color: '#EA7E25'
	// }
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
