import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
// import { Button, Input } from 'react-native-elements';
// import { } from 'native-base';
import { Input, Button } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import getBalance from '../../utils/addTokens';
import abi from '../../utils/abi';
import { withdraw } from '../../api/bind';
import { TextInput } from 'react-native-vector-icons/lib/react-native';
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
    show(num) {
		num += '';
		num = num.replace(/[^0-9|\.]/g, '');
		if (/^0+/) {
			num = num.replace(/^0+/, '');
		}
		if (!/\./.test(num)) {
			num += '.00000';
		}
		if (/^\./.test(num)) {
			num = '0' + num;
		}
		num += '00000';
		num = num.match(/\d+\.\d{5}/)[0];
		return num;
	}
    getAllBalance() {
		getBalance(
			abi,
			this.state.walletAddress,
			store.getState().contractAddr.GOGContractAddr,
			(gog_banlance) => {
				gog_banlance = this.show(gog_banlance);
                this.setState({ gog_banlance });
			}
		);
	}
	componentDidMount() {
		storage
			.load({
				key: 'walletInfo'
			})
			.then((walletInfo) => {
				let walletAddress = walletInfo.walletAddress;
				this.setState(
					{
						walletAddress: walletAddress
					},
					() => {
						this.getAllBalance();
					}
				);
			})
			.catch((x) => {
				console.log(x);
            });
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
        this.setState({
            number: this.state.gog_banlance,
            banlance: this.state.gog_banlance - (this.state.gog_banlance * 0.01)
        })
    }
    _changeBalance = (number) => {
        this.setState({
            number: number,
            banlance: number- (number * 0.01)
        })
    }
    _clickTocomfirm = () => {
        // withdraw(userId, password, this.state.banlance)
        if(Number(this.state.gog_banlance) < Number(this.state.number)){
            Alert.alert(null, '您当前输入的数量大于最大可提的数量，请重新输入')
        } else if(Number(this.state.number) < 5000){
            Alert.alert(null, '每次提现不能少于5000GOG,您当前输入的数额不可提现')
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
                this.props.navigation.navigate('Node', { userId: this.state.userId, passwordExists: true})
            } else {
                Alert.alert(null, res.data.message)
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
                    <Text style={styles.text14}>{I18n.t('node.withdraw.withdrawAmount')}{I18n.t('node.withdraw.withdrawFee')}</Text>
                    <View style={[styles.rows, { paddingBottom: scaleSize(12), borderBottomColor: '#E7E7E7', borderBottomWidth: scaleSize(1)}]}>
                        <Text style={styles.text17}>GOG</Text>
                        <Input
                            inputContainerStyle={styles.input}
                            keyboardType='numeric'
                            value={this.state.number}
                            onChangeText={(number) => this._changeBalance(number)}/>
                        />
                    </View>
                    <View style={[styles.rows, { justifyContent: 'space-between', marginTop: scaleSize(25)}]}>
                        <Text style={[styles.text14, { opacity: 0.5 }]}>{I18n.t('node.withdraw.availableBalance')}：{this.state.gog_banlance}GOG</Text>
                        <TouchableOpacity onPress={() => this.clickToAllWithdraw()}>
                            <Text style={[styles.text14, { color: '#486495'} ]}>{I18n.t('node.withdraw.withdrawAll')}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text17}>{I18n.t('node.withdraw.receivedAmount')}：{this.state.banlance}</Text>
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
        height: scaleSize(598),
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
