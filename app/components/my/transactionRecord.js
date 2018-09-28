import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { getTransactionRecord, getERC20TransactionRecord } from '../../api/index';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { show, scaleSize } from '../../utils/ScreenUtil';
import { getTime } from '../../utils/getTime';
import { record } from '../../api/bind';

class Recording extends Component {
	render() {
		return (
			<View style={styles.recordDetail_item}>
				{this.props.data.opCode === 0 && <Text style={styles.status}>来自系统的每日利息</Text>}
				{this.props.data.opCode === 1 && <Text style={styles.status}>系统奖励，获得</Text>}
				{this.props.data.opCode === 2 && this.props.data.ethAddress && <Text style={styles.status}>提币至 {this.props.data.ethAddress.replace(this.props.data.ethAddress.slice('8', '32'), '......')}</Text>}
				{this.props.data.opCode === 3 && this.props.data.ethAddress && <Text style={styles.status}>分解算力，至{this.props.data.ethAddress.replace(this.props.data.ethAddress.slice('8', '32'), '......')}</Text>}
				{this.props.data.opCode === 4 && <Text style={styles.status}>提币失败，返回GOG至账户内</Text>}
				{this.props.data.opCode === 5 && <Text style={styles.status}>接受到来自系统的空投</Text>}
			</View>
		);
	}
}

class TransactionRecordCard extends Component {
	render() {
		return (
			<View style={{ paddingTop: scaleSize(32), paddingBottom: scaleSize(32), marginRight: scaleSize(32), borderBottomColor: '#E7E7E7', borderBottomWidth: scaleSize(1) }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
					<Recording data={this.props.data.item} />
					<View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
						<Text style={styles.balance}>{show(this.props.data.item.amount)}</Text>
						<Text style={styles.gog}>GOG</Text>
					</View>
					
				</View>
				<Text style={styles.time}>{getTime(this.props.data.item.dateTime)}</Text>
			</View>
		);
	}
}

class TransactionRecord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recordData: null,
			start: 0,
			rows: 10,
		};
	}
	pullLoading: Function = () => {
		if(this.state.rows <= this.state.number + 10) {
			record(this.state.userId, this.state.start, this.state.rows).then((res) => {
				this.setState({
					recordData: res.data.list,
					rows: this.state.rows + 10
				})
				// console.log(res)
			})
		}
	}
	renderListFooter: Function = () => {
		if (this.state.rows <= this.state.number + 10) {
		  return (<View style={{ backgroundColor: '#ffffff', paddingTop:scaleSize(30), paddingBottom: scaleSize(30) }}>
			<Text style={{ textAlign: 'center', fontSize: 13, color: '#323232', opacity: 0.6}}>正在加载</Text>
		  </View>);
		} else {
			return (<View style={{ backgroundColor: '#ffffff', paddingTop:scaleSize(30), paddingBottom: scaleSize(30) }}>
			<Text style={{ textAlign: 'center', fontSize: 13, color: '#323232', opacity: 0.6 }}>已经到底了</Text>
		  </View>)
		}
	  }
	componentDidMount() {
		storage
		.load({
			key: 'user'
		}).then((user) => {
			if(user.userId) {
				record(user.userId, this.state.start, this.state.rows).then((res) => {
					this.setState({
						recordData: res.data.list,
						userId: user.userId,
						rows: this.state.rows + 10,
						number: res.data.number
					})
					console.log(res)
				})
			}else {
				this.setState({
					recordData: []
				})
			}
		})
        
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.recordData ? this.state.recordData.length >= 1 ? (
					<FlatList
						onEndReachedThreshold={0.3}
						onEndReached={this.pullLoading}
						data={this.state.recordData}
						ListFooterComponent={this.renderListFooter()}
						renderItem={(item) => <TransactionRecordCard data={item} />} />
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
		paddingTop: 0,
		paddingRight: 0
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
