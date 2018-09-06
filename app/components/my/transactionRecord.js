import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { getTransactionRecord, getERC20TransactionRecord } from '../../api/index';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';

class Recording extends Component {
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
		num = num.match(/\d+\.\d{4}/)[0];
		return num;
	}

	render() {
		return (
			<View style={styles.recordDetail_item}>
				<Text>{this.props.to.replace(this.props.to.slice('8', '32'), '......')}</Text>
				<Text>{this.show(this.props.value / this.props.dime)}</Text>
			</View>
		);
	}
}

class TransactionRecordCard extends Component {
	render() {
		return (
			<View>
				{this.props.data.item.from === store.getState().walletInfo.wallet_address ? (
					<View style={styles.recordDetail}>
						<View>
							<Icon name="icon-zhichusel" size={50} color="#34ccbf" />
						</View>
						<Recording to={this.props.data.item.to} value={this.props.data.item.value} dime={this.props.dime}/>
					</View>
				) : (
					<View style={styles.recordDetail}>
						<View>
							<Icon name="icon-shourusel" size={50} color="#528bf7" />
						</View>
						<Recording to={this.props.data.item.to} value={this.props.data.item.value} dime={this.props.dime}/>
					</View>
				)}
			</View>
		);
	}
}

class TransactionRecord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recordData: null
		};
	}

	componentDidMount() {
        ContractAddr = 'GOGContractAddr';
        getERC20TransactionRecord(
            store.getState().walletInfo.wallet_address,
            store.getState().contractAddr[ContractAddr]
        ).then((res) => {
            this.setState(
                {
                    ContractAddr: store.getState().contractAddr[ContractAddr],
                    recordData: res.data.result,
                    dime: 1000000
                }
            );
        });
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.recordData ? this.state.recordData.length >= 1 ? (
					<FlatList data={this.state.recordData} renderItem={(item) => <TransactionRecordCard data={item} dime={this.state.dime}/>} />
				) : (
					<Text style={styles.textAlign}>~</Text>
				) : (
					<ActivityIndicator />
				)}
			</View>
		);
	}
}

export default withNavigation(TransactionRecord);

const styles = StyleSheet.create({
	textAlign: {
		textAlign: 'center'
	},
	color_white: {
		color: '#fff'
	},
	marginTop_20: {
		marginTop: 20
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingLeft: 20,
		paddingRight: 20
	},
	balance: {
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#528bf7'
	},
	balance_text_big: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	record: {
		padding: 20,
		position: 'absolute',
		top: 150,
		bottom: 50,
		left: 0,
		right: 0
	},
	recordDetail: {
		height: 75,
		flexDirection: 'row',
		alignItems: 'center'
	},
	record_icon: {
		width: 50,
		height: 50
	},
	recordDetail_item: {
		flex: 1,
		height: 75,
		padding: 10,
		// flexDirection: 'row',
		justifyContent: 'space-around',
	},
	line: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	}
});
