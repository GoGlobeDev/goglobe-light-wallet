import React, { Component } from 'react';
import { I18n } from '../../language/i18n'; // 多国语言支持
import { StyleSheet, Text, AsyncStorage, Image, Alert, BackHandler } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, NavigationActions, StackNavigator, addNavigationHelpers } from 'react-navigation'; // 页面切换 路由导航组件
import { hostMode } from '../utils/config';
import { scaleSize, ifIphoneX } from '../utils/ScreenUtil';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

//TabBar 底部栏位页面
import Splash from '../pages/Splash'; // app开屏画面
import Assets from '../components/asset/asset'; // 底部：资产
import Node_item from '../components/node/node'; //底部：节点
import My_item from '../components/my/my'; //底部： 我的

//Router
import Guide from '../guide/guide'; //没有本地存储的钱包时进入的引导页：引导用户去选择创建钱包或导入钱包
import CreateWallet from '../components/my/wallet/createWallet'; // 创建钱包：新建1个本地钱包
import ImportWallet from '../components/my/wallet/importWallet'; // 导入钱包
import CurrencyDetail from '../components/asset/currencyDetail'; //  资产 -> 币种详情页
import Transfer from '../components/asset/transfer'; // 资产 -> 币种详情 -> 转账页
import Receipt from '../components/asset/receipt'; // 资产 -> 币种详情 -> 收款页
import WalletInfo from '../components/asset/walletInfo'; // 资产/我的 -> 钱包管理（账户信息页）
import ExportMnemonic from '../components/asset/exportMnemonic'; // 资产/我的 -> 钱包管理（导出助记页）
import ExportKeystore from '../components/asset/exportKeystore'; // 资产/我的 -> 钱包管理（导出Keystore页）
import TransactionRecord from '../components/my/transactionRecord'; //我的 -> 交易记录
import SysSet from '../components/my/sysset'; //我的 -> 系统设置
import SysLanguage from '../components/my/sysLanguage'; //我的 -> 系统设置 -> 语言
// import SetGesturePassword from '../components/my/setgesturepassword'; // 我的 -> 系统设置 -> 设置手势密码 未用到
// import WebSetting from '../components/my/webSetting'; //我的 -> 系统设置 -> web3设置
import HelperCenter from '../components/my/helpercenter'; // 我的 -> 帮助中心
import KnowledgePoint from '../components/my/knowledgePoint'; // 我的 -> 帮助中心 -> 内容详情页
import AboutUs from '../components/my/aboutus'; //我的 -> 关于我们
import UserPolicy from '../components/my/userpolicy'; //我的 -> 关于我们 -> 用户协议
import Versions from '../components/my/versions'; //我的 -> 关于我们 -> 版本日志

import BindingPhone from '../components/my/bindingPhone'; // 我的 -> 绑定手机
import GoBindPhone from '../components/my/goBindPhone'; //我的 -> 去绑定手机号
import VCode from '../components/my/verificationCode'; //我的 -> 验证码
import InvitationCode from '../components/my/invitationCode'; //我的 -> 邀请码
import BindInCode from '../components/my/bindInCode'; //我的 -> 绑定邀请码

import changePwd from '../components/my/changePwd'; //我的 -> 修改交易密码
import setNewPwd from '../components/my/setNewPwd'; //我的 -> 修改交易密码 -> 设置新交易密码

import effect from '../components/my/effect'; //我的 -> 影响力
import effectRule from '../components/my/effectRule'; //影响力规则

import BindMachine from '../components/node/bindMachine'; //设备 -> 绑定设备
import SetPwd from '../components/node/setPwd'; // 设备 -> 设置交易密码
import decomposePower from '../components/node/decomposePower'; //分解算力
import WithdrawCash from '../components/node/withdrawCash'; //设备 -> 提现
import CurrencyRule from '../components/node/currencyRule'; //设备 -> 提现规则
import powerRule from '../components/node/powerRule';
import QRscanner from '../components/public/QRscanner'; //转账 -> 扫描二维码
import moreInfo from '../components/node/moreInfo'; //设备信息

import noNetWork from '../components/public/noNetWork'; //没有网络
import noMainNet from '../components/public/noMainNet'; //没有以太坊主网
//rely
import Storage from 'react-native-storage';
import Icon from '../pages/iconSets';

const minHeight = ifIphoneX(0, 0, scaleSize(10));

const storage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: null,
	enableCache: true
});
global.storage = storage;
storage
	.load({
		key: 'token'
	})
	.then((res) => {
		store.dispatch({
			type: 'TOKEN',
			token: res.token
		});
	})
	.catch((e) => {
		console.log(e);
	});

storage
	.load({
		key: 'localLanguage'
	})
	.then((res) => {
		I18n.locale = res.localLanguage;
	})
	.catch((e) => {
		console.log(e, '首次获取系统语言');
		storage.save({
			key: 'localLanguage',
			data: {
				localLanguage: 'zh'
			},
			expires: null
		});
	});

const Web3 = require('web3');

function check(host) {
	if (hostMode === 'privateNet') {
		store.dispatch({
			type: 'CONTRACTADDR',
			GOGContractAddr: '0x5a429abdfcd04986a8ce60c8d6788fe22af92ebd'
		});
	} else if(hostMode === 'ropsten') {
		store.dispatch({
			type: 'CONTRACTADDR',
			GOGContractAddr: '0x8c191f956a287096bb306c422536cd1151fc4a3c'
		});
	} else {
		store.dispatch({
			type: 'CONTRACTADDR',
			GOGContractAddr: '0x7ad38d200cffa2b1606931c104cde833872ebb7f'
		});
	}
	global.host = host;
	const webProvider = new Web3.providers.HttpProvider(host);
	const web3 = new Web3(webProvider);
	global.web3 = web3;
}

storage
	.load({
		key: 'webHost'
	})
	.then(({ webHost }) => {
		check(webHost);
	})
	.catch((e) => {
		if (hostMode === 'privateNet') {
			check('http://52.82.4.208:8545');
		} else if(hostMode === 'ropsten' ){
			check('https://ropsten.infura.io:443/v3/e5a89d7eb503409c85747dfb4c863e69');
		} else {
			check('https://mainnet.infura.io:443/v3/e5a89d7eb503409c85747dfb4c863e69');
		}
		
	});

const Node = createStackNavigator({
	Node: {
		screen: Node_item,
		navigationOptions: () => ({
			title: I18n.t('tab.node'),
			headerBackTitle: null,
			header: null,
			headerStyle: {
				backgroundColor: '#ffffff',
				borderBottomWidth: 0
			},
			headerTitleStyle: {
				color: 'rgba(13,14,21,1)',
				fontSize: 18
			},
			headerTintColor: '#000',
			borderWidth: 0
		})
	}
});

const My = createStackNavigator({
	My: {
		screen: My_item,
		navigationOptions: () => ({
			title: I18n.t('tab.my'),
			headerBackTitle: null,
			header: null,
			headerStyle: {
				backgroundColor: '#ffffff',
				borderBottomWidth: 0
			},
			headerTitleStyle: {
				color: 'rgba(13,14,21,1)',
				fontSize: 18
			},
			headerTintColor: '#000'
		})
	}
});

const TabBarPage = createBottomTabNavigator(
	{
		Assets: {
			screen: Assets,
			navigationOptions: {
				tabBarLabel: ({ tintColor, focused }) => (
					<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}></Text>
				),
				tabBarIcon: ({ focused }) => (
					<Image style={{ width: scaleSize(70), height: scaleSize(70), marginTop: scaleSize(16) }} source={focused ? require('../assets/images/common/asset_selected.png') : require('../assets/images/common/asset.png')} />
				  ),
				// tabBarIcon: ({ focused, tintColor }) => <Icon name="icon-zichan" size={30} color={tintColor} />
			}
		},
		Node: {
			screen: Node,
			navigationOptions: {
				tabBarLabel: ({ tintColor, focused }) => (
					<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}></Text>
				),
				tabBarIcon: ({ focused }) => (
					<Image style={{ width: scaleSize(70), height: scaleSize(70), marginTop: scaleSize(16) }} source={focused ? require('../assets/images/common/node_selected.png') : require('../assets/images/common/node.png')} />
				  ),
				// tabBarOnPress: ({ navigation, defaultHandler }) => {
				// 	storage
				// 		.load({
				// 			key: 'token'
				// 		})
				// 		.then((res) => {
				// 			navigation.navigate('Node');
				// 		})
				// 		.catch((e) => {
				// 			navigation.navigate('Login');
				// 		});
				// }
			}
		},
		My: {
			screen: My,
			navigationOptions: {
				tabBarLabel: ({ tintColor, focused }) => (
					<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}></Text>
				),
				tabBarIcon: ({ focused }) => (
					<Image style={{ width: scaleSize(70), height: scaleSize(70), marginTop: scaleSize(16) }} source={focused ? require('../assets/images/common/user_selected.png') : require('../assets/images/common/user.png')} />
				  ),
			}
		}
	},
	{
		lazy: true,
		animationEnabled: true,
		backBehavior: true,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: '#3e9ce9',
			inactiveTintColor: '#999999',
			showIcon: true,
			style: {
				backgroundColor: '#fff',
				height: scaleSize(98) + minHeight
			},
			indicatorStyle: {
				opacity: 0
			},
			tabStyle: {
				padding: 0
			}
		}
	}
);

const RootNavigator = createStackNavigator(
	{
		Splash: { screen: Splash },
		Home: {
			screen: TabBarPage,
			navigationOptions: {
				header: null,
				gesturesEnabled: false
			}
		},
		Guide: {
			screen: Guide,
			navigationOptions: {
				header: null,
				gesturesEnabled: false
			}
		},
		CurrencyDetail: CurrencyDetail,
		Transfer: Transfer,
		Receipt,
		// Receipt: {
		// 	screen: Receipt,
		// 	navigationOptions: {
		// 		headerTitle: () => <Text>{I18n.t('assets.currency.receipt')}</Text>
		// 	}
		// },
		CreateWallet: {
			screen: CreateWallet,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('wallet.creatWallet')}</Text>
			}
		},
		ImportWallet: {
			screen: ImportWallet,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('guide.importWallet')}</Text>
			}
		},
		WalletInfo,
		// WalletInfo: {
		// 	screen: WalletInfo,
		// 	navigationOptions: {
		// 		headerTitle: () => <Text>{I18n.t('assets.walletInfo.title')}</Text>
		// 	}
		// },
		ExportMnemonic: {
			screen: ExportMnemonic,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('assets.walletInfo.exportMnemonic')}</Text>
			}
		},
		ExportKeystore,
		// ExportKeystore: {
		// 	screen: ExportKeystore,
		// 	navigationOptions: {
		// 		headerTitle: () => <Text>{I18n.t('assets.walletInfo.exportKeystore')}</Text>
		// 	}
		// },
		AboutUs: {
			screen: AboutUs,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('my.home.aboutUs._title')}</Text>
			}
		},
		UserPolicy: {
			screen: UserPolicy,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('my.home.aboutUs.useAgreement')}</Text>
			}
		},
		Versions:{
			screen: Versions,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('my.home.Versions._title')}</Text>
			}
		},
		HelperCenter: {
			screen: HelperCenter,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('my.home.helpCenter._title')}</Text>
			}
		},
		InvitationCode,
		BindInCode,
		BindingPhone,
		VCode,
		GoBindPhone,
		changePwd,
		setNewPwd,
		effect,
		effectRule,
		SysSet: {
			screen: SysSet,
			navigationOptions: {
				headerTitle: () => <Text> {I18n.t('my.sysSetting._title')}</Text>
			}
		},
		// SetGesturePassword,
		SysLanguage: {
			screen: SysLanguage,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('my.sysSetting.language.multi_language')} </Text>
			}
		},
		TransactionRecord: {
			screen: TransactionRecord,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('my.home.transactionRecord')} </Text>
			}
		},
		KnowledgePoint,
		// WebSetting: {
		// 	screen: WebSetting,
		// 	navigationOptions: {
		// 		headerTitle: () => <Text>{I18n.t('my.webHost')} </Text>
		// 	}
		// },
		BindMachine,
		SetPwd,
		WithdrawCash,
		decomposePower,
		CurrencyRule,
		powerRule,
		moreInfo,
		noNetWork,
		noMainNet,
		QRscanner: {
			screen: QRscanner,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('public.scan')}</Text>
			}
		}
	},
	{
		// initialRouteName: 'Guide',
		headerMode: 'screen',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#fff'
			},
			headerTitleStyle: {
				color: '#000',
				fontSize: 18
			},
			headerTintColor: '#000'
		}
	}
);
const middleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav
)



const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
const mapStateToProps = state => ({
	state: state.nav
});
const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);
export { RootNavigator, middleware }

class App extends Component {
	componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
		const { dispatch, state } = this.props;
		if(state.index === 0){
			if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
				Alert.alert('提示','您确定要退出吗？',[
					{text: '取消', onPress: () => {return false }},
					{text: '确定', onPress: () => { BackHandler.exitApp() }}
				  ])
			}
			this.lastBackPressed = Date.now();
			return true
			// return false;
		}
		dispatch(NavigationActions.back());
		return true;
       };
	render() {
		const { dispatch, nav } = this.props;
        // const navigation = addNavigationHelpers();
		return <AppNavigator navigation={{
			dispatch,
			state: nav
		}} />
	}
}
// App.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     nav: PropTypes.object.isRequired,
//   };
export default connect(mapStateToProps)(App)