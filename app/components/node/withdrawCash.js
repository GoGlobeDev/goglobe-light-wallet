import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import { Button, Input } from 'react-native-elements';
import { Input } from 'native-base';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
class WithdrawCash extends React.Component {
	static navigationOptions = ({navigation}) => ({
        headerTitle: <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: scaleSize(523), paddingLeft: 0 }}>
          <Text style={{ fontSize: scaleSize(34), color: 'rgba(50, 50, 50, 1)', marginLeft: 0 }}>提现</Text>
        </View>,
        headerRight: <TouchableOpacity onPress={() => navigation.state.params.currencyRule()}>
          <Text style={{ paddingRight: scaleSize(33), fontSize: 16, color: '#486495' }}>提币规则</Text>
        </TouchableOpacity>,
      })
	constructor(props) {
		super(props);
		this.state = {
            number: ''
		}
	}
	componentDidMount() {
        this.props.navigation.setParams({
            currencyRule: () => {
                this.props.navigation.navigate('CurrencyRule')
            }
        })
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.shadowView}>
                    <Text style={styles.text14}>提币数量（收取1%手续费）</Text>
                    <View style={[styles.rows, { paddingBottom: scaleSize(32), borderBottomColor: '#E7E7E7', borderBottomWidth: scaleSize(1)}]}>
                        <Text style={styles.text17}>GOG</Text>
                        <Input
                            style={styles.input}
                        />
                    </View>
                    <View style={[styles.rows, { justifyContent: 'space-between', marginTop: scaleSize(25)}]}>
                        <Text style={[styles.text14, { opacity: 0.5 }]}>可用余额：1000GOG</Text>
                        <TouchableOpacity>
                            <Text style={[styles.text14, { color: '#486495'} ]}>全部提现</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text17}>实际到账数量：</Text>
                    <TouchableOpacity style={[styles.button, this.state.number === '' ? { backgroundColor: '#F7C9A9' } : {  backgroundColor: '#EA7828' }]} onPress={this._clickTocomfirm}>
                        <Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>提币</Text>
                    </TouchableOpacity>
                </View>
				
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
});
