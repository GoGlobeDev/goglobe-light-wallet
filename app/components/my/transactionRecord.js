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
				<Text>{this.props.to.replace(this.props.to.slice('8', '32'), '......')}</Text>
				<Text style={{ color: '#FF8018', fontSize: 20}}>{show(this.props.value / this.props.dime)}</Text>
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
						<View style={{ width: scaleSize(100)}}>
							<Icon name="icon-zhichusel" size={40} color="#34ccbf" />
						</View>
						<View style={{ width: scaleSize(600)}}>
							<Recording to={this.props.data.item.to} value={this.props.data.item.value} dime={this.props.dime}/>
							<Text>{getTime(this.props.data.item.timeStamp)}</Text>
						</View>
					</View>
				) : (
					<View style={styles.recordDetail}>
						<View style={{ width: scaleSize(100)}}>
							<Icon name="icon-shourusel" size={40} color="#528bf7" />
						</View>
						<View style={{ width: scaleSize(600)}}>
							<Recording to={this.props.data.item.to} value={this.props.data.item.value} time={this.props.data.item.timeStamp} dime={this.props.dime}/>
							<Text>{getTime(this.props.data.item.timeStamp)}</Text>
						</View>
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
		paddingLeft: scaleSize(32),
		paddingRight: scaleSize(32)
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
		padding: scaleSize(32),
		paddingTop: 0,
	},
	recordDetail: {
		height: scaleSize(120),
		marginTop: scaleSize(36),
		paddingBottom: scaleSize(32),
		flexDirection: 'row',
		borderBottomColor: '#E7E7E7',
		borderBottomWidth: scaleSize(1)
		// alignItems: 'center'
	},
	record_icon: {
		width: 50,
		height: 50
	},
	recordDetail_item: {
		// flex: 1,
		// height: 75,
		paddingRight: scaleSize(32),
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	line: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	}
});
