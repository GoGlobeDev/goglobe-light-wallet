import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import { I18n } from '../../../language/i18n';
import { scaleSize } from '../../utils/ScreenUtil';
import { getEffect } from '../../api/bind';
import { V4MAPPED } from 'dns';

export default class Effect extends React.Component {
	static navigationOptions = ({navigation}) => ({
        headerTitle: <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: scaleSize(523), paddingLeft: 0 }}>
          <Text style={{ fontSize: scaleSize(34), color: 'rgba(50, 50, 50, 1)', marginLeft: 0 }}>{I18n.t('my.home.effect._title')}</Text>
        </View>,
        headerRight: <TouchableOpacity onPress={() => navigation.state.params.currencyRule()}>
          <Text style={{ paddingRight: scaleSize(33), fontSize: 16, color: '#486495' }}>{I18n.t('my.home.effectRule._title')}</Text>
        </TouchableOpacity>,
      })
	constructor(props) {
		super(props);
		this.state = {
            effect: 0, //输入的金额
            IsBoundMember: false,
            list: []
		}
    }
    _setBindInCode = () => {
		this.props.navigation.navigate('BindInCode');
	}
	componentDidMount() {
        this.props.navigation.setParams({
            currencyRule: () => {
                this.props.navigation.navigate('effectRule')
            }
        })
        storage.load({ key: 'user' }).then((user) => {
            getEffect(user.userId).then((res) => {
                if(res.data.status === 'success'){
                    if(res.data.list){
                        const effect = res.data.list.reduce(function(prev, next){ return prev + Number(next.referralCode)}, 0);
                        this.setState({
                            IsBoundMember: true,
                            list: res.data.list,
                            effect: effect
                        })
                    } else {
                        this.setState({
                            IsBoundMember: false,
                            list: []
                        })
                    }
                    
                }
            }).catch((e) => {
                console.log(e.message);
                console.log(e.response)
            })
		})
    }
	render() {
        const { params } = this.props.navigation.state;
        const { list } = this.state;
		return (
			<View style={styles.container}>
                <ImageBackground style={{ width: scaleSize(750), height: scaleSize(282), paddingTop: scaleSize(90)}} source={require('../../assets/images/my/effect_top.png')}>
					<Text style={styles.md_content}>{this.state.effect}</Text>
                    <Text style={styles.md_title}>我的影响力</Text>
				</ImageBackground>
                <View style={{ padding: scaleSize(48) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.sm_title}>{I18n.t('my.home.invitationCode.myBinders')}</Text>
                        <Text style={styles.sm_title}>影响力</Text>
                    </View>
                    { this.state.IsBoundMember ? list.map((item, index) => {
                        return (<View key={item.phone} style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.sm_content}>{item.phone}</Text>
                            <Text style={[styles.sm_content, { color: '#EA7A28'}]}>{item.referralCode}</Text>
                    </View>) })
                    :   <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.content}>{I18n.t('my.home.invitationCode.noUser')}</Text>
                            <Text style={[styles.sm_content, { color: '#EA7A28'}]}>0</Text>
                        </View>
                    }
                    
                </View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
        backgroundColor: '#fff',
        paddingTop: scaleSize(26)
    },
    md_title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        opacity: 0.6,
       
    },
    md_content: {
        color: '#fff',
        fontSize: 34,
        lineHeight: scaleSize(96),
        textAlign: 'center',
        fontWeight: 'bold'
    },
    sm_title: {
        fontSize: 14,
        color: '#000',
        opacity: 0.6,
    },
    sm_content: {
        fontSize: 28,
        color: '#000',
        marginTop: scaleSize(32),
        fontWeight: 'bold'
    },
    content: {
		fontSize: 34,
		color: '#CFCFD0',
        fontWeight: 'bold',
        marginTop: scaleSize(32),
    },
});
