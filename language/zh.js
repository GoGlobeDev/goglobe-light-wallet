export default {
	guide: {
		welcome: '欢迎来到自游俱乐部',
		importWallet: '导入钱包',
		createWallet: '创建钱包',
		importInstructions: '在已有钱包中导出助记词，点击“导入钱包”，输入导出的助记词；导入钱包后请立即备份助记词。',
		createInstructions: '没有钱包，请点击“创建钱包”，创建钱包时，请牢记您的密码；创建钱包后轻立即备份助记词。'
	},
	wallet: {
		mnemonic: '助记词',
		mnemonicPlaceholder: '助记词,按空格分隔',
		officialWallet: '官方钱包',
		privateKey: '私钥',
		path: '路径',
		enterPwd: '输入您的密码',
		confirmPwd: '确认您的密码',
		creatWallet: '创建钱包',
		createWalletTip: '请输入钱包名称',
		pwdSuggest: '建议密码不少于8位字符',
		pwdIsWrong: '两次密码不一致',
		agreeTerm: '请同意服务及隐私条款',
		createWalletTipOfPwd: '密码用于加密私钥，强度非常重要！',
		createWalletTipOfNoStore: '自游链钱包不会储存密码，也无法帮您找回，请务必牢记！',
		iAgreeTerm: '我已仔细阅读并同意',
		term: '服务及隐私条款',
		mnemonicTip: '助记词首尾不能有空格,请重新输入',
		mnemonicIsWrong: '助记词有误，请重新输入',
		mnemonicIsNull: '助记词不能为空',
		privateKeyIsNull: '私钥不能为空',
		privateKeyIsWrong: '私钥有误，请重新输入',
		keystoreIsNull: '请输入keystore信息',
		wrongByKeystoreOrPwd: '导入钱包失败, 请检查keystore或者密码是否正确',
		copyKeystoreTip: '直接复制粘贴以太坊官方钱包keystore文件内容至输入框。'
	},
	tab: {
		assets: '资产',
		node: '系统奖励',
		my: '我的'
	},
	my: {
        _title: '我的',
		home: {
			walletManagement: '钱包管理',
			transactionRecord: '我的操作',
			systemSetting: '系统设置',
			Versions: {
				_title: '版本日志'
			},
			//新加的
			invitationCode: {
				_title: '绑定邀请码',
                myInvitationCode: '我的邀请码',
                myBoundCode: '我绑定的邀请码',
                myBoundMember: '我绑定的用户',
                notBind: '还未绑定',
                button: '去绑定',
                myBinders: '我推荐的用户',
                noBinders: '还没有人使用',
                notUsed: '还未使用',
				codeNotExists: '推荐码不存在',
				circle:'您当前输入的邀请码不可用',
                userWrong: '请确保您已经绑定设备',
                hasBound: '您已经绑定过推荐码',
                passwordWrong: '交易密码错误',
                numberLimited: '该推荐码已使用两次，您可以选择相关的推荐人：'
			},
            verificationCode: {
                _title: '短信验证码'
            },
			bindPhone: {
				_title: '绑定手机',
                bindPhoneNumber: '绑定的手机号',
                notBind: '还未绑定',
				button: '去绑定'
			},
			changePwd: {
				_title: '修改交易密码',
				bindPhoneNumber: '当前绑定的手机号',
				enterPassword: '输入验证码',
				pwdIsNull: '请输入验证码',
				getCodeWrong: '获取验证码失败',
				codeWrong: '验证码失败',
				userNotExists: '用户不存在'
			},
            bindingCode: {
                _title: '绑定邀请码',
                inputCode: '输入邀请码',
                pleaseInputCode: '请输入邀请码',
                codeUsed: '您当前输入的邀请码已被使用，请重新输入',
                getIt: '知道了'
            },
			helpCenter: {
				_title: '帮助中心',
				mnemonic: '什么是助记词',
				keystore: '什么是keystore',
				privateKey: '什么是私钥'
			},
			aboutUs: {
				_title: '关于我们',
				currentVersion: '当前版本',
				introduction: '自游俱乐部是一款移动端轻钱包APP,它旨在为普通用户提供一款安全放心，简单好用，功能强大的数字资产钱包应用。',
				useAgreement: '用户协议',
				privacyPolicy: '隐私条款',
				versionLog: '版本日志',
				checkVersion: '检测新版'
			}
		},
		sysSetting: {
			_title: '系统设置',
			language: {
				_title: '语言设置',
				multi_language: '多语言',
				changeToChinese: '简体中文',
				changeToEnglish: 'English'
			},
            jnb: {
                _title: 'JNB 交易所设置',
                alert: '请等待交易所上币后开启'
            }
		},
		version: {
			_number: '1.1.0',
			_newVersion: '发现GoGlobe',
			_version: '版本',
			upgradeNow: '立即升级',
			noEscalation: '暂不升级',
			noUpdate: '当前已是最新版本，无需更新'
		},
		webHost: 'Web3 设置'
	},
	assets: {
        _title: '我的钱包',
        findNewVersion: '发现新版本',
		totalAssets: '账户总资产',
        notUpdate: '暂不升级',
        update: '立即升级',
		walletInfo: {
			title: '账户信息',
			walletName: '钱包名称',
			enterWalletName: '请输入新的钱包名称',
			exportPrivateKey: '导出私钥',
			exportKeystore: '导出keystore',
			exportMnemonic: '导出助记词',
			deleteWallet: '删除钱包',
			keystoreFile: 'keystore文件',
			qrcode: '二维码',
			privateKeyWarning: '安全警告:私钥未经加密，导出存在风险，建议使用助记词和keystore进行备份',
			copyPrivaateKey: '复制私钥',
			copyKeystore: '复制keystore',
			keystore_save: '离线保存',
			keystore_save_item: '请复制粘贴keystore文件到安全、离线的地方进行保存。切勿保存至邮箱、记事本、网盘、聊天工具等，非常危险',
			keystore_network: '请勿使用网络传输',
			keystore_network_item: '请勿通过网络工具传输 keystore 文件，一但被黑客获取将造成不可挽回的资产损失。建议离线设备通过二维码方式传输。',
			keystore_pwdsave: '密码保险箱保存',
			keystore_pwdsave_item: '如需在线保存，则建议使用安全等级更高的 1Password 等密码保管软件保存 keystore。',
			keystore_scanning: '仅供直接扫描',
			keystore_scanning_item: '二维码禁止保存、截图以及拍照。仅供用户在安全环境下直接扫描来方便的导入钱包。',
			keystore_surround: '在安全的环境下使用',
			keystore_surround_item: '请在确保四周无人及无摄像头的情况下使用。二维码一旦被他人获取讲造成不可挽回的资产损失。'
		},
		mnemonic: {
			backUpMnemonic: '请备份您的助记词',
			mnemonicSuccess: '助记词正确,请妥善保管您的助记词！',
			mnemonicError: '助记词有误，请重新输入',
			copyYourMnemonic: '抄写下你的助记词',
			confirmMnemonic: '确认你的钱包助记词',
			mnemonicWring: '助记词用于恢复钱包或重置钱包密码，将它准确的抄写到纸上，并存放在只有你知道的安全地方。',
			confirmMnemonicWring: '请按顺序点击助记词，以确认你备份的助记词正确。'
		},
		currency: {
			transfer: '转账',
			orderInformation: '订单信息',
			recentTradeRecord: '近期交易记录',
			receipt: '收款',
			receiptAddr: '收款人钱包地址',
			transferCount: '转账金额',
			transferRemarks: '备注',
			transferFee: '矿工费用',
			transferSpeedSlow: '慢',
			transferSpeedFast: '快',
			nextStep: '下一步',
			copyReceiptAddr: '复制收款地址'
		},
		transfer: {
			checkAddress: '地址无效，请仔细检查！',
			transferInAddress: '转入地址',
			transferOutAddress: '转出地址'
		},
	},
	node: {
        miner: '自游设备',
        minerCount: '设备数',
        totalPower: '总算力',
        dailyProducts: '每日产出',
        withdrawCash: '提现',
        balance: '当前持有(GOG)',
        power: '算力',
        id: '编号',
        status: '状态',
        active: '激活',
        inactive: '未激活',
        dailyProduct: '日产出',
        address: '地点',
        registerMiner: {
            _title: '绑定设备',
			inputMinerNumber: '输入设备编号',
			inputMinerCode: '输入设备code',
            emptyNoError: '设备编号不能为空，请重新输入',
            emptyCodeError: '设备code不能为空，请重新输入',
            failedError: '绑定失败，请重新输入',
            inputTradingPwd: '输入交易密码'
		},
		powerRule: {
            _title: '算力规则',
            rule1: '1、算力分解后不可充值，请谨慎操作。 ',
            rule2: '2、每次提币的手续费为1%提现数额。 ',
            rule3: '3、请不要直接提现到ICO的众筹地址，这会导致您无法收取众筹到的数字资产。',
            rule4: '4、提币到合约地址可能会导致交易失败，将导致转账失败，资产将退回到GOG。GOG会人工处理将币转回到原账户。 ',
            rule5: '5、网络转账费用及时间是不固定的，取决于转账时合约执行需要消耗的算力。当前支付的Gas limit为90000，用于执行转账或合约执行。如果此次转账消耗超过90000gas，将导致转账失败，资产将退回到GOG。',
            rule6: '6、请务必确认电脑及手机安全，防止信息被泄露或篡改。'
        },
        withdrawRule: {
            _title: '提币规则',
            rule1: '1、每次提币余额不得少于20GOG的单次提币手续费。当小于2000GOG的时候，每次收20个GOG的手续费。当提现数额大于2000的时候，每次收取1%的手续费。',
            rule2: '2、请不要直接提现到ICO的众筹地址，这会导致您无法收取众筹到的数字资产。',
            rule3: '3、提币到合约地址可能会导致交易失败，将导致转账失败，资产将退回到GOG。GOG会人工处理将币转回到原账户。',
            rule4: '4、网络转账费用及时间是不固定的，取决于转账时合约执行需要消耗的算力。当前支付的Gas limit为90000，用于执行转账或合约执行。如果此次转账消耗超过90000gas，将导致转账失败，资产将退回到GOG。 ',
            rule5: '5、请务必确认电脑及手机安全，防止信息被泄露或篡改。',
            rule6: '6、每24小时申请只可提交一次，若未成功到账，请24小时后再重新提交一次。'
        },
        setPassword: {
            _title: '设置交易密码',
            tip1: '1.交易密码必须有大写字母、小写字母、数字，禁止使 用符号',
            tip2: '2.交易密码限定在8-12位之间',
			setPassword: '设置交易密码',
			setNewPassword: '设置新交易密码',
            confirmPassword: '确认交易密码',
            placehoder1: '字母、数字组合 8-12位之间',
            placehoder2: '请重复输入交易密码'
		},
		powers: {
			_title: '分解算力',
			powerRule: '算力规则',
			powerAmount: '算力数量',
			powerFee: '收取1%手续费',
			availableBalance: '手续费',
			powerAll: '全部',
			receivedAmount: '实际到账数量',
			powerToken: '分解'
		},
        withdraw: {
            _title: '提现',
            withdrawRule: '提币规则',
            withdrawAmount: '提币数量',
            withdrawFee: '当提币数量小于2000GOG的时候，每次收20个GOG的手续费。当提现数额大于2000的时候，每次收取1%的手续费。',
            availableBalance: '可用余额',
            withdrawAll: '全部提现',
            receivedAmount: '实际所需数额',
            withdrawToken: '提币'
		},
		moreInfo: {
			_title: '设备信息'
		}
	},
	public: {
		second: '秒',
		next: '下一步',
		back: '返回',
		save: '保存',
		payDetail: '确认交易详情',
		enterPassword: '输入密码',
		lockedWarehouse: '锁仓',
		lockedWarehouseAddr: '锁仓地址',
		transferIn: '转入',
		transferOut: '转出',
		verifyPwd: '验证密码',
		inputPwd: '输入您的密码',
		PwdIsNull: '请输入密码',
		OK: '确定',
		define: '确定',
		cancel: '取消',
        copy: '复制',
		copySuccess: '复制成功',
		copyFailed: '复制失败',
		wrongPwd: '密码错误,请重新输入',
		transactionSuccess: '发布交易成功！',
		transactionFailed: '发布交易失败，请稍后重试！',
		score: '分',
		tickets: '票',
		enterMobile: '请输入手机号',
		enterCaptcha: '输入图片验证码',
		enterMobileCode: '输入手机验证码',
		getMobileCode: '获取验证码',
		captchaError: '图形验证码错误,请重新验证!',
		hasBind: '该手机号已绑定地址',
		verificationCodeError: '手机验证码错误',
		enter_the_legal_mobile_number: '请输入合法手机号',
		walletName: '钱包名称',
		nickName: '昵称',
		personaNickName: '个人昵称',
		personalSign: '个人信息',
		scan: '扫描',
		refuse: '拒绝',
		agree: '同意',
		mnemonic:
			'助记词是明文私钥的另一种表现形式, 最早是由 BIP39 提案提出, 其目的是为了帮助用户记忆复杂的私钥 (64位的哈希值)。助记词一般由12、15、18、21个单词构成, 这些单词都取自一个固定词库, 其生成顺序也是按照一定算法而来, 所以用户没必要担心随便输入 12 个单词就会生成一个地址。虽然助记词和 Keystore 都可以作为私钥的另一种表现形式, 但与 Keystore 不同的是, 助记词是未经加密的私钥, 没有任何安全性可言, 任何人得到了你的助记词, 可以不费吹灰之力的夺走你的资产。所以在用户在备份助记词之后, 一定要注意三点:1. 尽可能采用物理介质备份, 例如用笔抄在纸上等, 尽可能不要采用截屏或者拍照之后放在联网的设备里, 以防被黑客窃取 2. 多次验证备份的助记词是否正确, 一旦抄错一两个单词, 那么将对后续找回正确的助记词带来巨大的困难; 3. 将备份后的助记词妥善保管, 做好防盗防丢措施。',
		mnemonic_ps: 'PS: 用户可以使用备份的助记词, 重新导入自游俱乐部钱包 , 用新的密码生成一个新的 Keystore, 用这种方法来修改钱包密码。',
		keystore:
			'Keystore 文件是以太坊钱包存储私钥的一种文件格式(JSON) 。它使用用户自定义密码加密，以起到一定程度上的保护作用, 而保护的程度取决于用户加密该钱包的密码强度, 如果类似于 123456 这样的密码, 是极为不安全的。 在使用 Keystore 时有两点需要注意: 1. 使用不常用, 并且尽可能复杂的密码加密 Keystore文件; 2. 一定要记住加密 Keystore 的密码, 一旦忘记密码, 那么你就失去了 Keystore 的使用权, 并且自游俱乐部钱包 无法帮你找回密码, 所以一定要妥善保管好 Keystore 以及密码。 下面是 keystore 的样式: { "version": 3, "id": "b7467fcb-3c8b-41be-bccf-73d43a08c1b7", "address": "540f18196da5a533fa36577a81de55f0a2f4e751", "Crypto": { "ciphertext": "78ed11b8b6bf29b00f52b42b8542df0e4a6ac078e626af7edcf885c3b68154a4", "cipherparams": { "iv": "4516579601d96695fe30ace985a9066f" }, "cipher": "aes-128-ctr", "kdf": "scrypt", "kdfparams": { "dklen": 32, "salt": "6276cfda7d40872352c801db5871e5a3368a8d0994cea39ed936760db78d1cdc", "n": 1024, "r": 8, "p": 1 }, "mac": "d889a5dc609c3f312a41394cc47640676d2612501a6f8c837ed55598158336db" } }。',
		keystore_ps: ' PS: Keystore 的密码是唯一、不可更改的, 如果想更改钱包密码需要使用助记词或明文私钥重新导入钱包, 并使用新密码加密, 生成新的 Keystore。',
		privateKey:
			'我们常说，你对钱包中资金的控制取决于相应私钥的所有权和控制权。在区块链交易中, 私钥用于生成支付货币所必须的签名，以证明资金的所有权。私钥必须始终保持机密，因为一旦泄露给第三方，相当于该私钥保护下的资产也拱手相让了。它不同于 Keystore，Keystore 是加密过后的私钥文件，只要密码强度足够强，即使黑客得到 Keystore，破解难度也足够大。 私钥实际上并不是存储在网络中，而是由用户生成并存储在一个文件或者简单的数据库中，称为钱包。存储在用户钱包中的私钥完全独立，可由用户的钱包软件生成并管理，无需区块链或者网络连接。用户的钱包地址就是由私钥通过椭圆曲线加密生成公钥，进而生成以 0x 开头的 42 位地址。私钥的样式为 64 位 16 进制的哈希值字符串，例如: 56f759ece75f0ab1b783893cbe390288978d4d 4ff24dd233245b4285fcc31cf6。',
		privateKey_ps: 'PS: 用户可以使用明文私钥导入自游俱乐部，用新的密码生成一个新的 Keystore (记得要将旧的 Keystore 删除)，用这种方法来修改钱包密码。'
	},
    error: {
        passwordWrong: '密码错误',
        codeWrong: '验证码错误',
        deviceNotExists: '设备不存在',
		deviceCodeWrong: '设备code错误',
		deviceBound: '您输入的设备号已被绑定',
		codeNumberLimited: '您当前发送的短信已超过本时效限制，请稍后再试'
    }
};
