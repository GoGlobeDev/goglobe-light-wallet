import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight, Alert, Image } from 'react-native';
import { Input } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { I18n } from '../../../language/i18n';
import { scaleSize, show } from '../../utils/ScreenUtil';
import getBalance from '../../utils/addTokens';
import abi from '../../utils/abi';
import { withdraw } from '../../api/bind';
import Loading from 'react-native-whc-loading';

class WithdrawCash extends React.Component {
	static navigationOptions = ({navigation}) => ({
        headerTitle: <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: scaleSize(523), paddingLeft: 0 }}>
          <Text style={{ fontSize: scaleSize(34), color: 'rgba(50, 50, 50, 1)', marginLeft: 0 }}>{I18n.t('node.withdraw._title')}</Text>
        </View>,
        headerRight: <TouchableOpacity onPress={() => navigation.state.params.currencyRule()}>
          <Text style={{ paddingRight: scaleSize(33), fontSize: 16, color: '#486495' }}>{I18n.t('node.withdraw.withdrawRule')}</Text>
        </TouchableOpacity>,
      })
	constructor(props) {
		super(props);
		this.state = {
            number: '',
            banlance: 0,
            gog_banlance: 0
		}
    }
	componentDidMount() {
        this.setState({
            gog_banlance: this.props.navigation.state.params.gog_banlance
        })
        storage.load({ key: 'user'}).then((user) => {
            this.setState({
                userId: user.userId
            })
        }).catch((e) => {
            console.log(e)
        })
        this.props.navigation.setParams({
            currencyRule: () => {
                this.props.navigation.navigate('CurrencyRule')
            }
        })
    }
    clickToAllWithdraw = () => {
        var banlance = Number(this.state.gog_banlance) > 2000 ? this.state.gog_banlance / 1.01 : this.state.gog_banlance - 20
        this.setState({
            number: String(show(banlance)),
            banlance: this.state.gog_banlance
        })
    }
    _changeBalance = (number) => {
        var number = Number(number);
        var banlance = number > 2000 ? number * 1.01 : number + 20
        this.setState({
            number: String(number),
            banlance: banlance
        })
    }
    _clickTocomfirm = () => {
        if(Number(this.state.gog_banlance) < Number(this.state.banlance)){
            Alert.alert(null, '您当前输入的数量大于最大可提的数量，请重新输入')
        } else if(this.state.number.indexOf('.') > 0 && this.state.number.length - this.state.number.indexOf('.') > 5){
            Alert.alert(null, '每次提现金额不能超过四位小数，请重新输入')
        }else if(Number(this.state.number) < 20){
            Alert.alert(null, '每次提现不能少于20GOG,您当前输入的数额不可提现')
        } else {
            Alert.alert('提示','您确定要提币吗？这样做回导致您无法获得后续利息',[
                {text: '取消', onPress: () => console.log('Ask me later pressed'), style: 'cancel'},
                {text: '确定', onPress: () => this.refs.withdrawPwd.open()}
              ])
            // this.refs.tipModal.open();
        }
    }
    _clickToWidthdraw = () => {
        withdraw(this.state.userId, this.state.password, this.state.number).then((res) => {
            if(res.data.status === 'success'){
                Alert.alert(null, '提币请求已经成功提交，等待审批')
                this.props.navigation.navigate('Node', { userId: this.state.userId, passwordExists: true})
            } else {
                Alert.alert(null, I18n.t('error.' + res.data.message))
            }
        }).catch((e) => {
            console.log(e)
        })
    }
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.shadowView}>
                    <Text style={styles.text14}>{I18n.t('node.withdraw.withdrawFee')}</Text>
                    <View style={[styles.rows, { paddingBottom: scaleSize(12), borderBottomColor: '#E7E7E7', borderBottomWidth: scaleSize(1)}]}>
                        <Text style={styles.text17}>GOG</Text>
                        <Input
                            inputContainerStyle={styles.input}
                            keyboardType='numeric'
                            value={this.state.number}
                            onChangeText={(number) => this._changeBalance(number)}
                        />
                    </View>
                    <View style={[styles.rows, { justifyContent: 'space-between', marginTop: scaleSize(25)}]}>
                        <Text style={[styles.text14, { opacity: 0.5 }]}>{I18n.t('node.withdraw.availableBalance')}：{show(this.state.gog_banlance)}GOG</Text>
                        <TouchableOpacity onPress={() => this.clickToAllWithdraw()}>
                            <Text style={[styles.text14, { color: '#486495'} ]}>{I18n.t('node.withdraw.withdrawAll')}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text17}>{I18n.t('node.withdraw.receivedAmount')}：{show(this.state.banlance)}</Text>
                    <TouchableOpacity style={[styles.button, this.state.number === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
                        <Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('node.withdraw.withdrawToken')}</Text>
                    </TouchableOpacity>
                </View>
                <Loading ref="loading" />
                <Modal
                    style={[styles.modal, styles.modalPwd]}
                    coverScreen={true}
                    position={'center'}
                    ref={'withdrawPwd'}
                    isOpen={this.state.huhu}
                    swipeArea={20}
                    >
                    <View>
                        <View style={[styles.paymentDetails_title, { position: 'relative'}]}>
                            <TouchableHighlight style={{ width: scaleSize(44), height: scaleSize(44), position: 'absolute', left: scaleSize(30), top: scaleSize(30)}} underlayColor={'transparent'} onPress={() => this.refs.withdrawPwd.close()}>
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
                                        this.refs.withdrawPwd.close();
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
                                                    this._clickToWidthdraw()
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

export default WithdrawCash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#fff'
	},
	shadowView:{
        margin: scaleSize(32),
        width: scaleSize(686),
        height: scaleSize(628),
        backgroundColor: '#fff',
		borderRadius: scaleSize(20),
        shadowOffset: { width: 0, height: 0 },
		shadowColor: 'rgb(34, 34, 34)',
		shadowOpacity: 0.18,
		shadowRadius: scaleSize(27),
        elevation: 5,
        padding: scaleSize(32)
    },
    rows: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text14: {
        fontSize: 14,
        color: '#0D0E15',
        marginBottom: scaleSize(32)
    },
    text17: {
        fontSize: 17,
        color: '#0D0E15'
    },
    input: {
        borderLeftColor: '#0D0E15',
        borderLeftWidth: scaleSize(2),
        borderBottomWidth: 0,
        marginLeft: scaleSize(15),
        height: scaleSize(64),
        marginTop: scaleSize(8),
        marginBottom: scaleSize(8)
    },
    button: {
		width: scaleSize(622),
		height: scaleSize(100),
		borderRadius: scaleSize(52),
		justifyContent: 'center',
		// marginLeft: scaleSize(32),
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
