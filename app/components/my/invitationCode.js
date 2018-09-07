import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Clipboard, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
import Toast from 'react-native-easy-toast';
import { scaleSize } from '../../utils/ScreenUtil';
import { getRCode, bindRCode, getBinders } from '../../api/bind';
class InvitationCode extends React.Component {
	static navigationOptions = {
		headerTitle: I18n.t('my.home.invitationCode._title')
	};
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			bindCode: '',
            boundMember: '',
            binders: []
		};
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			boundNumber: newProps.navigation.state.params.boundNumber
		})
	}
	componentDidMount() {
		storage.load({ key: 'user' }).then((user) => {
			this.setState({
				code: user.rcode,
				userId: user.userId
			})
		}).then(async (res) => {
			if(this.state.userId) {
				getRCode(this.state.userId).then((res) => {
					const rcode = res.data.referralCode;
                    const boundMember = res.data.boundMember;
					const binders = res.data.binders;
					this.setState({
						code: rcode,
						boundMember,
                        binders
					})
				})
			}
		})
	}
	_setClipboardContent = async () => {
		Clipboard.setString(this.state.code);
		try {
			var content = await Clipboard.getString();
			this.refs.toast.show(I18n.t('public.copySuccess'));
		} catch (e) {
			console.log(e)
			this.refs.toast.show(I18n.t('public.copyFailed'));
		}
	}
	_setBindInCode = () => {
		this.props.navigation.navigate('BindInCode');
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<Text style={styles.title}>{I18n.t('my.home.invitationCode.myInvitationCode')}</Text>
					<View style={styles.lineView}>
						<Text style={styles.content}>{this.state.code}</Text>
						{!!this.state.code && <TouchableOpacity style={styles.button} onPress={this._setClipboardContent}>
							<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('public.copy')}</Text>
						</TouchableOpacity>}
					</View>
				</View>
				<View style={styles.view}>
					<Text style={styles.title}>{I18n.t('my.home.invitationCode.myBoundMember')}</Text>
					{!!this.state.boundMember
						? <View style={styles.lineView}>
							<Text style={styles.content}>{this.state.boundMember}</Text>
						</View>
						: <View style={styles.lineView}>
							<Text style={[styles.content, { color: '#CFCFD0' }]}>{I18n.t('my.home.invitationCode.notBind')}</Text>
							{!!this.state.code && <TouchableOpacity style={[styles.button, { width: scaleSize(160) }]} onPress={this._setBindInCode}>
								<Text style={{color: 'rgba(255,255,255,1)', fontSize: 17, textAlign: 'center'}}>{I18n.t('my.home.invitationCode.button')}</Text>
							</TouchableOpacity>}
						</View>
					}
				</View>
                <View style={styles.view}>
                    <Text style={styles.title}>{I18n.t('my.home.invitationCode.myBinders')}</Text>
                    { this.state.binders && this.state.binders.length > 0
                        ? <View style={styles.listView}>
                            <Text style={styles.content}>{this.state.binders[0]}</Text>
                            { this.state.binders.length > 1
                                ? <Text style={styles.content}>{this.state.binders[1]}</Text>
                                : <Text style={[styles.content, { color: '#CFCFD0' }]}>{I18n.t('my.home.invitationCode.notUsed')}</Text>
                            }
                        </View>
                        : <View style={styles.lineView}>
                            <Text style={[styles.content, { color: '#CFCFD0' }]}>{I18n.t('my.home.invitationCode.noBinders')}</Text>
                        </View>
                    }
                </View>
				<Toast ref="toast" position="center" />

			</View>
		);
	}
}

export default InvitationCode;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#f3f3f3'
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
	lineView: {
		flexDirection: 'row',
		alignItems: 'center',
		height: scaleSize(150),
		justifyContent: 'space-between'
	},
    listView: {

    },
	content: {
		fontSize: 34,
		color: '#0D0E15',
		fontWeight: 'bold'
	},
	button: {
		width: scaleSize(128),
		height: scaleSize(72),
		borderRadius: scaleSize(52),
		backgroundColor: '#EA6228',
		justifyContent: 'center',
	},
});
