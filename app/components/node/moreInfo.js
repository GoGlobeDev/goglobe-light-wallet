import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
class moreInfo extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('node.moreInfo._title')
	};
	constructor(props) {
		super(props);
		this.state = {
			phone: ''
		}
	}
	componentDidMount() {
		const info = this.props.navigation.state.params.info;
		console.log(info)
	}
	render() {
		const info = this.props.navigation.state.params.info;
		const friend = this.props.navigation.state.params.friend;
		return (
			<View style={styles.container}>
			<View style={[styles.content, styles.shadow]}>
				<View style={{position: 'relative'}}>
					<Image style={styles.deviceImg} source={require('../../assets/images/node/more-top.png')} />
					<Text style={styles.deviceName}>{this.props.navigation.state.params.title}</Text>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
					<View style={styles.sm_view}>
						<Text style={styles.sm_content}>{info.deposit}</Text>
						<Text style={styles.sm_title}>可用算力</Text>
					</View>
					<View style={styles.sm_view}>
						<Text style={styles.sm_content}>{info.extraDeposit}</Text>
						<Text style={styles.sm_title}>初始奖励金额</Text>
					</View>
				</View>
			</View>
			<View style={[styles.shadow, styles.deposit]}>
				<View style={styles.bg_view}>
					<Text style={styles.bg_title}>算力来源构成</Text>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
						<Text style={{ color: '#EA7E25', fontSize: 14, fontWeight: 'bold', marginRight: scaleSize(12)}}>共</Text>
						<Text style={styles.bg_content}>{info.deposit}</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View style={styles.sm_view}>
						<Text style={styles.sm_content}>{info.deposit}</Text>
						{friend ? <Text style={styles.sm_title}>来自好友</Text> : <Text style={styles.sm_title}>自身算力</Text>}
					</View>
					<View style={styles.sm_view}>
						<Text style={styles.sm_content}>0</Text>
						<Text style={styles.sm_title}>系统奖励</Text>
					</View>
				</View>
			</View>
			<View style={[styles.shadow, styles.deposit]}>
				<View style={styles.bg_view}>
					<Text style={styles.bg_title}>每日产出构成</Text>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
						<Text style={{ color: '#EA7E25', fontSize: 14, fontWeight: 'bold', marginRight: scaleSize(12)}}>共</Text>
						<Text style={styles.bg_content}>{info.dailyProduce}</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View style={styles.sm_view}>
						<Text style={styles.sm_content}>{info.dailyProduce}</Text>
						{friend ? <Text style={styles.sm_title}>来自好友</Text> : <Text style={styles.sm_title}>自身产出</Text>}
					</View>
					<View style={styles.sm_view}>
						<Text style={styles.sm_content}>0</Text>
						<Text style={styles.sm_title}>系统奖励</Text>
					</View>
				</View>
			</View>
			</View>
		);
	}
}

export default moreInfo;

const styles = StyleSheet.create({
	container: {
        flex: 1,
        // padding: scaleSize(32),
		backgroundColor: '#fff'
	},
	shadow: {
		backgroundColor: '#fff',
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'rgb(34, 34, 34)',
		shadowOpacity: 0.18,
		shadowRadius: scaleSize(27),
	},
	content: {
		width: scaleSize(686),
		height: scaleSize(436),
		borderBottomLeftRadius: scaleSize(20),
		borderBottomRightRadius: scaleSize(20),
		margin: scaleSize(32),
		// marginTop: scaleSize(-28)
	},
    deviceImg: {
		width: scaleSize(686),
		height: scaleSize(192),
	},
	deviceName: {
		position: 'absolute',
		top: scaleSize(64),
		width: scaleSize(686),
		fontSize: 24,
		color: '#fff',
		opacity: 0.9,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	deposit: {
		width: scaleSize(686),
		height: scaleSize(362),
		borderRadius: scaleSize(20),
		margin: scaleSize(32),
		marginTop: scaleSize(0),
		// padding: scaleSize(32)
	},
	bg_view: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: scaleSize(32)
	},
	bg_title: {
		fontSize: 22,
		color: '#384265',
		fontWeight: 'bold'
	},
	bg_content: {
		fontWeight: 'bold',
		color: '#EA7E25',
		fontSize: 20
	},
	sm_view: {
		width: scaleSize(343),
		alignItems: 'center',
		marginTop: scaleSize(64)
	},
	sm_title: {
		fontSize: 14,
		color: '#384265',
		opacity: 0.6,
		marginTop: scaleSize(30)
	},
	sm_content: {
		fontSize: 14,
		color: '#384265',
		fontWeight: 'bold'
	}
});
