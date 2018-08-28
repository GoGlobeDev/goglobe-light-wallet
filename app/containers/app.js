import React from 'react';
import { I18n } from '../../language/i18n'; // 多国语言支持
import { StyleSheet, Text, AsyncStorage } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation'; // 页面切换 路由导航组件
// import { host } from '../utils/config';

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
import InvitationCode from '../components/my/invitationCode'; //我的 -> 邀请码

import QRscanner from '../components/public/QRscanner'; //转账 -> 扫描二维码

//rely
import Storage from 'react-native-storage';
import Icon from '../pages/iconSets';

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
		console.log('storage')
		console.log(res)
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
	});

const Web3 = require('web3');

function check(host) {
	console.log(host)
	store.dispatch({
		type: 'CONTRACTADDR',
		GOGContractAddr: '0x41c11ee289fdaf498500314ab719a64673f72a40'
	});
	// if (host.includes('ropsten')) {
	// 	store.dispatch({
	// 		type: 'CONTRACTADDR',
	// 		GOGContractAddr: '0x41c11ee289fdaf498500314ab719a64673f72a40'
	// 	});
	// } else {
	// 	store.dispatch({
	// 		type: 'CONTRACTADDR',
	// 		GOGContractAddr: '0x41c11ee289fdaf498500314ab719a64673f72a40'
	// 	});
	// }
	global.host = host;
	const web3 = new Web3(new Web3.providers.HttpProvider(host));
	global.web3 = web3;
}

storage
	.load({
		key: 'webHost'
	})
	.then(({ webHost }) => {
		console.log(webHost)
		check(webHost);
	})
	.catch((e) => {
		check('http://52.82.4.208:8545/');
	});

const Node = createStackNavigator({
	Node: {
		screen: Node_item,
		navigationOptions: () => ({
			title: I18n.t('tab.node'),
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: '#528bf7',
				borderBottomWidth: 0
			},
			headerTitleStyle: {
				color: '#fff',
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
			headerStyle: {
				backgroundColor: '#528bf7',
				borderBottomWidth: 0
			},
			headerTitleStyle: {
				color: '#fff',
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
					<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}>{I18n.t('tab.assets')}</Text>
				),
				tabBarIcon: ({ focused, tintColor }) => <Icon name="icon-zichan" size={30} color={tintColor} />
			}
		},
		Node: {
			screen: Node,
			navigationOptions: {
				tabBarLabel: ({ tintColor, focused }) => (
					<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}>{I18n.t('tab.node')}</Text>
				),
				tabBarIcon: ({ focused, tintColor }) => (
					<Icon name="icon-xiajiantouxialakuang-" size={20} color={tintColor} />
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
					<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}>{I18n.t('tab.my')}</Text>
				),
				tabBarIcon: ({ focused, tintColor }) => <Icon name="icon-geren" size={30} color={tintColor} />
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
				backgroundColor: '#fff'
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

const App = createStackNavigator(
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
		Receipt: {
			screen: Receipt,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('assets.currency.receipt')}</Text>
			}
		},
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
		WalletInfo: {
			screen: WalletInfo,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('assets.walletInfo.title')}</Text>
			}
		},
		ExportMnemonic: {
			screen: ExportMnemonic,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('assets.walletInfo.exportMnemonic')}</Text>
			}
		},
		ExportKeystore: {
			screen: ExportKeystore,
			navigationOptions: {
				headerTitle: () => <Text>{I18n.t('assets.walletInfo.exportKeystore')}</Text>
			}
		},
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
		BindingPhone,
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
		QRscanner: {
			screen: QRscanner,
			navigationOptions: {
				headerTitle: () => <Text>扫描</Text>
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

export default App;
