import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
class CurrencyRule extends React.Component {
	static navigationOptions = {
		headerTitle: '提币规则'
	};
	constructor(props) {
		super(props);
		this.state = {
			phone: ''
		}
	}
	componentDidMount() {
	}
	render() {
		const { params } = this.props.navigation.state;
		console.log(params)
		return (
			<View style={styles.container}>
				<Text style={styles.txt}>1、每次提现不可少于5000GOG。</Text>
                <Text style={styles.txt}>2、每次提币的手续费为1%提现数额。 </Text>
                <Text style={styles.txt}>3、请不要直接提现到ICO的众筹地址，这会导致您无法收取众筹到的数字资产。</Text>
                <Text style={styles.txt}>4、提币到合约地址可能会导致交易失败，将导致转账失败，资产将退回到GOG。GOG会人工处理将币转回到原账户。 </Text>
                <Text style={styles.txt}>5、网络转账费用及时间是不固定的，取决于转账时合约执行需要消耗的算力。当前支付的Gas limit为90000，用于执行转账或合约执行。如果此次转账消耗超过90000gas，将导致转账失败，资产将退回到GOG。</Text>
                <Text style={styles.txt}>6、请务必确认电脑及手机安全，防止信息被泄露或篡改。</Text>
			</View>
		);
	}
}

export default CurrencyRule;

const styles = StyleSheet.create({
	container: {
        flex: 1,
        padding: scaleSize(32),
		backgroundColor: '#fff'
	},
    txt: {
        fontSize: 15,
        color: '#0D0E15',
        lineHeight: scaleSize(48)
    }
});
