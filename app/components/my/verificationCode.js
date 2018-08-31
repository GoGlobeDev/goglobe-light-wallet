{I18n.t('assets.notUpdate')}{I18n.t('assets.notUpdate')}import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
// import { Timer } from '../../utils/Timer.js';

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

class VCode extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('my.home.verificationCode._title')
	};
	constructor(props) {
		super(props);
		this.state = {
            phone: null,
            count: 60,
            state: false,
		}
	}
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
	_setBindingPhone = () => {
		console.log(this.state.phone);
		this.props.navigation.navigate('GoBindPhone');
    }
    _changeText0 = () => {
        this.refs.code1._root.focus();
    }
    _changeText1 = () => {
        this.refs.code2._root.focus();
    }
    _changeText2 = () => {
        this.refs.code3._root.focus();
    }
    _changeText3 = () => {
        this.refs.code4._root.focus();
    }
    _changeText4 = () => {
        this.refs.code5._root.focus();
    }
    _changeText5 = () => {
        // this.setState({
        //     focus: 'focus1'
        // })
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
      _clickToSendCode = () => {
          this.setState({
              state: false,
              count: 60,
          })
      }
	render() {
        // const { params } = this.props.navigation.state;
        const vCodeStateText = !this.state.state ?
            <Text style={styles.sendcode}>{this.state.count}s后重新获取</Text>
            : <TouchableOpacity onPress={this._clickToSendCode}>
                <Text style={[styles.sendcode, { color: '#486495'} ]}>重新获取</Text>
            </TouchableOpacity>;
        // const vcode = this.state.count
		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<Text style={styles.title}>短信验证码已发送至18901569182</Text>
                </View>
                <View style={styles.inputbox}>
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        ref='code0'
                        onChangeText={(txt) => this._changeText0(txt)}/>
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        ref='code1'
                        onChangeText={(txt) => this._changeText1(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        ref='code2'
                        onChangeText={(txt) => this._changeText2(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        ref='code3'
                        onChangeText={(txt) => this._changeText3(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        ref='code4'
                        onChangeText={(txt) => this._changeText4(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        ref='code5'
                        onChangeText={(txt) => this._changeText5(txt)}
                        />
                </View>
                {/* <TouchableOpacity onPress={this.clickToSendCode}>
                    <Text style={{paddingLeft: scaleSize(30), borderColor: 'rgba(154, 154, 154, 1)', borderLeftWidth: scaleSize(1), color: 'rgba(245, 166, 0, 1)', fontSize: scaleSize(30)}}>
                        {vCodeStateText}
                    </Text>
                </TouchableOpacity> */}
				<View>
                    <Timer interval={1000} onTimer={this.onTimer}/>
                    {/* <Text>重新获取</Text> */}
                    {vCodeStateText}
                </View>
			</View>
		);
	}
}

export default VCode;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#fff'
	},
	view:{
		backgroundColor: '#fff',
		padding: scaleSize(48),
		paddingBottom: 0,
		marginBottom: scaleSize(16)
	},
	title: {
		fontSize: 14,
		color: '#0D0E15'
    },
    inputbox: {
        height: scaleSize(84),
        flexDirection: 'row',
        marginLeft: scaleSize(130),
        marginRight: scaleSize(114),
        marginTop: scaleSize(192)
    },
    numberbox: {
        width: scaleSize(62),
        height: scaleSize(84),
        borderWidth: scaleSize(2),
        borderColor: '#D8D8D8',
        borderRadius: scaleSize(6),
        marginRight: scaleSize(24),
        padding: 0,
        textAlign: 'center'
        // paddingLeft: scaleSize(4)
        // marginLeft: scaleSize(14)
    },
    sendcode: {
        fontSize: 15,
        color: '#86868A',
        textAlign: 'center',
        marginTop: scaleSize(64)
    }
});
