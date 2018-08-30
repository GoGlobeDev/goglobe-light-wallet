import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
class VCode extends React.Component {
	static navigationOptions = {
		headerTitle: '短信验证码'
	};
	constructor(props) {
		super(props);
		this.state = {
            phone: null,
            focus: 'focus0'
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
    _onBlur = () => {
        this.setState({focus: focus1})
    }
    _changeText0 = () => {
        this.setState({
            focus: 'focus1'
        })
        this._onBlur()
        console.log(this.state.focus)
    }
    _changeText1 = () => {
        this.setState({
            focus: 'focus2'
        })
        console.log(this.state.focus)
    }
    _changeText2 = () => {
        this.setState({
            focus: 'focus3'
        })
        console.log(this.state.focus)
    }
    _changeText3 = () => {
        this.setState({
            focus: 'focus4'
        })
        console.log(this.state.focus)
    }
    _changeText4 = () => {
        this.setState({
            focus: 'focus5'
        })
        console.log(this.state.focus)
    }
    _changeText5 = () => {
        // this.setState({
        //     focus: 'focus1'
        // })
    }
	render() {
		const { params } = this.props.navigation.state;
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
                        autoFocus={this.state.focus === 'focus0'}
                        onBlur={()=> this._onBlur}
                        onChangeText={(txt) => this._changeText0(txt)}/>
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        autoFocus={this.state.focus === 'focus1'}
                        onChangeText={(txt) => this._changeText1(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        autoFocus={this.state.focus === 'focus2'}
                        onChangeText={(txt) => this._changeText2(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        autoFocus={this.state.focus === 'focus3'}
                        onChangeText={(txt) => this._changeText3(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        autoFocus={this.state.focus === 'focus4'}
                        onChangeText={(txt) => this._changeText4(txt)}
                        />
                    <Input
                        style={styles.numberbox}
                        maxLength={1}
                        keyboardType='numeric'
                        autoFocus={this.state.focus === 'focus5'}
                        onChangeText={(txt) => this._changeText5(txt)}
                        />
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
        marginRight: scaleSize(114)
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
    }
});
