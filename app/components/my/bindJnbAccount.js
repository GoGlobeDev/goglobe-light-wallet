import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { bindJnbAccout } from '../../api/bind';
import Touch from '../public/touch';
class BindJnbAccount extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('my.sysSetting.jnb._title')
	};
	constructor(props) {
		super(props);
		this.state = {
			email: '',
		}
    }
    
	componentDidMount() {
        // console.log(this.props.navigation.state.params.userId)
		// if(this.props.navigation.state.params.page === 'node'){
		// 	this.setState({
		// 		tip: true
		// 	})
		// }
	}
	_changeText = (email) => {
		this.setState({
			email: email
		})
    }
    _clickToBindJnb = () => {
        // console.log(this.state.password)
        bindJnbAccout(this.props.navigation.state.params.userId, this.state.email, this.state.password).then((res) => {
            if(res.data.status === 'success') {
                // storage.save({ key: 'user', data: { jnbAccount: this.state.email}, expires: null })
                this.props.navigation.navigate('JnbSetting', { jnbAccount: this.state.email });
            } else {
                Alert.alert(null, I18n.t('error.' + res.data.status)); // 提示 错误原因
            }
        }).catch((e) => {
            const message = e.message;
            if(message.indexOf('Network') !== -1){
                this.props.navigation.navigate('noNetWork')
            } else {
                console.log(e.message)
            }
        })
    }
	_clickTocomfirm = () => {
		const email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		// this.props.navigation.navigate('VCode')
		if(!this.state.email){
			Alert.alert(null, '请输入Jnb交易所账号'); // 提示 请输入Jnb交易所账号
		} else if(!email.test(this.state.email)){
			Alert.alert(null, '您当前输入的账号格式有误，请重新输入'); // 提示 您当前输入的账号格式有误，请重新输入
		} else {
            this.refs.codePwd.open();
		}

	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('my.sysSetting.jnb._title')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder="请输入JNB 交易所账号"
						onChangeText={(email) => this._changeText(email)}
					/>
				</View>
				<Touch style={[styles.button, this.state.email === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.define')}</Text>
				</Touch>
                <Modal
                    style={[styles.modal, styles.modalPwd]}
                    coverScreen={true}
                    position={'center'}
                    ref={'codePwd'}
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
                                                // this.refs.loading.close();
                                                setTimeout(() => {
                                                    // Alert.alert(null, '请输入密码');
                                                    Alert.alert(null, I18n.t('public.inputPwd'));
                                                }, 100);
                                            } else {
                                                setTimeout(() => {
                                                    this._clickToBindJnb()
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

export default BindJnbAccount;

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
    modal_child: {
        height: scaleSize(256)
	},
    bottom_child: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bottom_child_item: {
        height: scaleSize(100),
        lineHeight: scaleSize(100),
        color: '#fff',
        textAlign: 'center',
    },
    bottom_child_item_done: {
        width: scaleSize(300),
        borderRadius: scaleSize(44),
        marginLeft: scaleSize(10),
        backgroundColor: '#FF8725'
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
