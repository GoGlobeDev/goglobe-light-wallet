import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { I18n } from '../../../language/i18n';
import Icon from '../../pages/iconSets';
import { show, scaleSize } from '../../utils/ScreenUtil';
import { getTime } from '../../utils/getTime';
import { exchangeList } from '../../api/bind';


class ExchangeRecord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recordData: null,
		};
	}
	static navigationOptions = ({navigation}) => ({
        headerTitle: <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: scaleSize(523), paddingLeft: 0 }}>
          <Text style={{ fontSize: scaleSize(34), color: 'rgba(50, 50, 50, 1)', marginLeft: 0 }}>{I18n.t('my.home.exchangeCode.record')}</Text>
        </View>,
      })
	componentDidMount() {
		storage
		.load({
			key: 'user'
		}).then((user) => {
			if(user.userId) {
				exchangeList(user.userId).then((res) => {
					this.setState({
						recordData: res.data.list,
						userId: user.userId,
						// rows: this.state.rows + 10,
						// number: res.data.number
					})
				}).catch((e) => {
					const message = e.message;
					if(message.indexOf('Network') !== -1){
						this.props.navigation.navigate('noNetWork')
					} else {
						console.log(e.message)
					}
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
			<ScrollView style={styles.container}>
				{/* <Text>aaa</Text> */}
				{this.state.recordData ? this.state.recordData.length >= 1 ? (
					 this.state.recordData.map((res) => {
						 return <View key={res.id} style={{ paddingTop: scaleSize(32), paddingBottom: scaleSize(32), marginRight: scaleSize(32), borderBottomColor: '#E7E7E7', borderBottomWidth: scaleSize(1) }}>
						 <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
							 <Text>使用兑换码</Text>
							 <Text style={styles.time}>{getTime(res.createTime/1000)}</Text>
							 
						 </View>
						 <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: scaleSize(10)}}>
								 <Text style={styles.balance}>{res.exchangeCode}12333333333333</Text>
								 <Text style={styles.gog}></Text>
							 </View>
						 
					 </View>
					 })
				) : (
					<Text style={styles.textAlign}>~</Text>
				) : (
					<ActivityIndicator />
				)}
			</ScrollView>
		);
	}
}

export default withNavigation(ExchangeRecord);

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
		color: '#0D0E15',
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
