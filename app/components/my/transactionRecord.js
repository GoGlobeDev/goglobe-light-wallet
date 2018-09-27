import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { getTransactionRecord, getERC20TransactionRecord } from '../../api/index';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { show, scaleSize } from '../../utils/ScreenUtil';
import { getTime } from '../../utils/getTime';

class Recording extends Component {
	render() {
		return (
			<View style={styles.recordDetail_item}>
				{this.props.data.status === 1 && <Text style={styles.status}>提币至{this.props.data.address.replace(this.props.data.address.slice('8', '32'), '......')}</Text>}
				{this.props.data.status === 2 && <Text style={styles.status}>向账户内充值</Text>}
				{this.props.data.status === 3 && <Text style={styles.status}>系统奖励算力 至 手机</Text>}
				{this.props.data.status === 4 && <Text style={styles.status}>挖矿</Text>}
				{this.props.data.status === 5 && <Text style={styles.status}>向账户内充值</Text>}
			</View>
		);
	}
}

class TransactionRecordCard extends Component {
	render() {
		return (
			<View style={{ paddingTop: scaleSize(32), paddingBottom: scaleSize(32), borderBottomColor: '#E7E7E7', borderBottomWidth: scaleSize(1) }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
					<Recording data={this.props.data.item} />
					<View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
						<Text style={styles.balance}>{show(this.props.data.item.balance)}</Text>
						{this.props.data.item.status !==2 && <Text style={styles.gog}>GOG</Text>}
					</View>
					
				</View>
				<Text style={styles.time}>{this.props.data.item.time}</Text>
			</View>
		);
	}
}

class TransactionRecord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recordData: [
				{ status: 1, balance: 3000, time: '2012-12-42', address: '0x34324defadfefefefe324334234343444' },
				{ status: 2, balance: 3000, time: '2012-12-42', address: '0x34324324334234343444' },
				{ status: 3, balance: 3000, time: '2012-12-42', address: '0x34324324334234343444' },
				{ status: 4, balance: 3000, time: '2012-12-42', address: '0x34324324334234343444' },
				{ status: 5, balance: 3000, time: '2012-12-42', address: '0x34324324334234343444' },
				{ status: 1, balance: 3000, time: '2012-12-42', address: '0x34324324334234343444' }
			]
		};
	}

	componentDidMount() {
        // ContractAddr = 'GOGContractAddr';
        // getERC20TransactionRecord(
        //     store.getState().walletInfo.wallet_address,
        //     store.getState().contractAddr[ContractAddr]
        // ).then((res) => {
        //     this.setState(
        //         {
        //             ContractAddr: store.getState().contractAddr[ContractAddr],
        //             recordData: res.data.result,
        //             dime: 1000000
        //         }
        //     );
        // });
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.recordData ? this.state.recordData.length >= 1 ? (
					<FlatList data={this.state.recordData} renderItem={(item) => <TransactionRecordCard data={item} />} />
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
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: scaleSize(32),
		paddingTop: 0
	},
	textAlign: {
		textAlign: 'center'
	},
	status: {
		fontSize: 15,
		color: '#424559',
		// fontWeight: 'bold'
	},
	balance: {
		fontSize: 17,
		color: '#FF8018',
		fontWeight: 'bold'
	},
	gog: {
		fontSize: 14,
		color: '#CDCDCD',
		fontWeight: 'bold',
		marginLeft: scaleSize(6)
	},
	time: {
		fontSize: 12,
		color: '#CDCDCD',
		marginTop: scaleSize(12)
	}
});
