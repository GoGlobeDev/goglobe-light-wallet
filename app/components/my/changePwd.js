import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { sendCode, checkCode } from '../../api/bind';
import { checkPassword, checkTwoPwd } from '../../utils/valiServices';
import Touch from '../public/touch';

class Timer extends Component {
    componentWillMount() {
      const {interval} = this.props;
      this.timer = setInterval(this.onEvent, interval);
    }
    componentWillReceiveProps(newProps) {
      if (newProps.interval !== this.props.interval) {
        clearInterval(this.timer);
        this.timer = setInterval(this.onEvent, newProps.interval);
      }
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }
    onEvent = ev => {
      const { onTimer } = this.props;
      onTimer(ev);
    };
    render(){
      return this.props.children || null;
    }
}

export default class ChangePwd extends React.Component {
	constructor(){
		super();
		this.state = {
            pwd: '',
			phone: '',
			count: 60,
            state: true,
			first: true
		}
	}
	static navigationOptions = {
		// header: null
		headerTitle: I18n.t('my.home.changePwd._title')
	};
	componentDidMount() {
		storage
			.load({
				key: 'user'
			})
			.then((user) => {
				this.setState({
                    userId: user.userId,
                    phone: user.phone
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}
	onTimer =() => {
        if (!this.state.state) {
          if (this.state.count > 0) {
            this.setState({
              count: this.state.count - 1,
            });
            if(this.state.count === 0){
              this.setState({ state: true });
            }
          }
        }
      }
	_sendCode = () => {
		sendCode(this.state.phone, 'reset').then((res) => {
			if(res.data.status === 'success'){
				this.setState({
					state: false,
					count: 60,
					first: false
				})
			} else {
				Alert.alert(null, I18n.t('my.home.changePwd.getCodeWrong'));
			}
		}).catch((e) => {
			console.log(e)
		})
	}
	_changePwd = (pwd) => {
		this.setState({
			pwd: pwd
        })
    }
	_clickTocomfirm = () => {
		// this.props.navigation.navigate('setNewPwd',{ userId: this.state.userId})
		checkCode(this.state.phone, this.state.pwd).then((res) => {
			console.log(res)
			if(res.data.status === 'success'){
				this.props.navigation.navigate('setNewPwd',{ userId: res.data.message})
			} else {
				Alert.alert(null, I18n.t('my.home.changePwd.' + res.data.message))
			}	
		}).catch((e) => {
			console.log(e);
		})
	}
	render() {
		const { params } = this.props.navigation.state;
		const vCodeStateText = !this.state.state ?
            <Text style={{ color: '#fff' }}>{this.state.count}s后重新获取</Text>
            : <Touch onPress={this._sendCode} >
                <Text style={{ color: '#fff'}}>重新获取</Text>
            </Touch>;
		return (
			<ScrollView style={styles.container}>
                <View style={styles.inputbox}>
					
                    {this.state.phone
						? <View style={styles.lineView}>
							<View>
								<Text style={styles.inputTitle}>{I18n.t('my.home.changePwd.bindPhoneNumber')}</Text>
								<Text style={styles.content}>{this.state.phone}</Text>
							</View>
                            {this.state.first ? <Touch style={styles.sm_button} onPress={this._sendCode}>
								<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.getMobileCode')}</Text>
							</Touch >
							: <View style={[styles.sm_button, !this.state.state ? { backgroundColor: '#AFB4C2'}: { backgroundColor: '#EA6228' }]}>
								<Timer interval={1000} onTimer={this.onTimer}/>
								{/* <Text>重新获取</Text> */}
								{vCodeStateText}
							</View>
							}
						</View>
						: <View style={[styles.lineView, { paddingBottom: scaleSize(80)}]}>
							<Text style={styles.inputTitle}>{I18n.t('my.home.changePwd.bindPhoneNumber')}</Text>
							<Text style={styles.content}>{this.state.phone}</Text>
						</View>
					}
				</View>
				<View style={styles.inputbox}>
					<Text style={styles.inputTitle}>{I18n.t('my.home.changePwd.enterPassword')}</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.inputText}
						placeholder={I18n.t('my.home.changePwd.pwdIsNull')}
						onChangeText={(pwd) => this._changePwd(pwd)}
					/>
				</View>
				{this.state.phone && <TouchableOpacity style={[styles.button, this.state.pwd === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
					<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.next')}</Text>
				</TouchableOpacity>}
			</ScrollView>
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
	content: {
		fontSize: 17,
		fontWeight: 'bold',
		marginTop: scaleSize(20)
	},
	button: {
		width: scaleSize(654),
		height: scaleSize(100),
		borderRadius: scaleSize(52),
		justifyContent: 'center',
		marginLeft: scaleSize(48),
		marginTop: scaleSize(97)
    },
    lineView: {
		flexDirection: 'row',
		alignItems: 'center',
		height: scaleSize(132),
		paddingBottom: scaleSize(18),
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		borderBottomWidth: scaleSize(1),
		borderBottomColor: '#E7E7E7',
	},
    sm_button: {
		padding: scaleSize(20),
		height: scaleSize(72),
		borderRadius: scaleSize(52),
		backgroundColor: '#EA6228',
		justifyContent: 'center',
	},
	sendCode: {
		
	}
});
