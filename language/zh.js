export default {
	guide: {
		welcome: '欢迎来到自游俱乐部',
		importWallet: '导入钱包',
		createWallet: '创建钱包',
		importInstructions: '在已有钱包中导出助记词，点击“导入钱包”，输入导出的助记词；导入钱包后请立即备份助记词。',
		createInstructions: '没有钱包，请点击“创建钱包”，创建钱包时，请牢记您的密码；创建钱包后请立即备份助记词。'
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
			ContactUs: {
				_title: '联系我们'
			},
			//新加的
			invitationCode: {
				_title: '绑定邀请码',
                myInvitationCode: '我的邀请码',
                myBoundCode: '我绑定的邀请码',
                myBoundMember: '邀请我的用户',
                notBind: '还未绑定',
                button: '去绑定',
                myBinders: '我邀请的用户',
				noBinders: '还没有人使用',
				notUsed: '还未使用',
				noUser: '暂无推荐用户',
				codeNotExists: '推荐码不存在',
				circle:'您当前输入的邀请码不可用',
                userWrong: '请确保您已经绑定设备',
                hasBound: '您已经绑定过推荐码',
                passwordWrong: '交易密码错误',
                numberLimited: '该推荐码已使用两次，您可以选择相关的推荐人：'
			},
			//兑换码
			exchangeCode: {
				_title: '兑换码',
				inputCode: '输入兑换码',
				pleaseInputCode: '请输入兑换码',
				record: '兑换记录',
				notExists: '兑换码不存在',
				paramWrong: '参数错误',
				binded: '兑换码已被兑换过，请重新输入',
				passwordWrong: '交易密码错误,请重新输入',
				message0: '兑换成功！请注意查收。若24小时内未到账，请联系我们',
				message1: '兑换成功！兑换的GOG将每个月分次发至您的账户内，请注意查收'
			},
            verificationCode: {
                _title: '短信验证码'
            },
			bindPhone: {
				_title: '绑定手机',
				title: '手机号',
                bindPhoneNumber: '绑定的手机号',
                notBind: '还未绑定',
				button: '去绑定',
				enterMobile: '请输入正确的手机号',
				pleaseInputPhone: '请输入手机号',
				tip1: '1.在未绑定手机号情况下，无法绑定设备',
				tip2: '2.完成绑定手机号后，即可开始每日获取系统奖励'
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
			effect: {
				_title: '我的影响力',
			},
			effectRule: {
				_title: '影响力规则',
				rule1: '1、当用户绑定下一个用户的邀请码的时候，会自动将其绑定的矿机的算力计入到此用户的影响力中。用户下面的用户越多，下面用户绑定的邀请码越多，本用户的影响力越大。',
				rule2: '2、影响力之后可以用于兑换优惠券、打折券、实体奖品等其它事务。',
				rule3: '3、后续解释权归属自游俱乐部®所有。',
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
				GoGlobe:'什么是自游俱乐部？',
				mnemonic: '什么是助记词',
				keystore: '什么是keystore',
				privateKey: '什么是私钥',
				walletAddress: '什么是钱包地址？',
				gogWallet: '什么是自游设备？',
				download:'如何下载自游俱乐部？',
				createWallet: '如何创建钱包？',
				importWallet: '如何导入钱包？',
				backupMnemonic: '如何备份助记词？',
				transfer: '如何进行转账？',
				receipt: '如何进行收款？',
				minersFees: '转账时如何设定矿工费？',
				withdrawCash: '如何进行提币？',
				changePwd: '如何修改交易密码？',
				deleteWallet: '如何删除钱包？',
				receiptFail: '收款一直没到账怎么办？',
				AddressFail: '转账时填错地址怎么办？',
				deleteWalletSucc: '删除钱包怎么办？',
				lostPwd: '纸密码（助记词）丢失怎么办？',
				ForgetPwd: '忘记密码怎么办？',
				uninstall: 'APP卸载怎么办？',
			},
			aboutUs: {
				_title: '关于我们',
				currentVersion: '当前版本',
				introduction: '自游俱乐部是一款移动端轻钱包APP,它旨在为普通用户提供一款安全放心，简单好用，功能强大的数字资产钱包应用。',
				useAgreement: '用户协议',
				privacyPolicy: '隐私条款',
				versionLog: '版本日志',
				checkVersion: '检测新版',
				contactus: '联系我们'
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
                _title: 'JNB 交易所账号',
                alert: '请等待交易所上币后开启'
            }
		},
		version: {
			_number: '1.1.3',
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
			backUpMnemonic: '备份助记词',
			confirmMnemonic: '确认助记词',
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
			mnemonicWring: '助记词可以看做是传统业务中的银行卡号和银行卡密码的集合，每一个钱包，都有且仅有一串12个英文单词的助记词。任何人在得到了您的助记词后，均可以将您的账户下的资产转移走，且资产不可找回。',
			mnemonicWring1: '请务必使用物理介质备份，如手抄在纸上，尽量不要存在微信、QQ等工具内。请尽量多次验证助记词的正确性，一旦丢失，不可找回。',
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
		dailyRate: '日利率',
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
            rule1: '1、每次提币时，可用余额不得少于20GOG的单次提币手续费。当提现数额小于2000GOG的时候，每次收20个GOG的手续费。当提现数额大于2000的时候，每次收取1%的手续费。',
            rule2: '2、如果您输入了错误的提币地址，由于区块链的技术特性，交易不可回滚，且不受任何中心化机构的操控，自游俱乐部也无法替您追回资产。所以，请在提币时确认提币钱包是否正确，确认无误之后，再进行提币操作。',
            rule3: '3、网络转账费用及时间是不固定的，取决于转账时合约执行需要消耗的算力。当前支付的Gas limit为90000，用于执行转账或合约执行。如果此次转账消耗超过90000gas，将导致转账失败，资产将退回到GOG。',
            rule4: '4、请务必确认电脑及手机安全，防止信息被泄露或篡改 ',
            rule5: '5、每24小时申请只可提交一次，若未成功到账，请24小时后再重新提交一次。',
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
		},
		// 以太坊地址
		ethAddress: {
			tip: '注意:当输入其他地址的时候，请再三确认地址是否正确。若输入地址有误，交易无法回滚，自游俱乐部也无法为您找回数字资产，请务必确认地址正确。',
			link: '提现到其他地址',
			_title: '输入地址',
			title: '地址',
			pleaseInputAddress: '请输入其他提币地址',
			addressError: '以太坊地址格式错误，请重新输入'
		}
	},
	public: {
		noNetButton: '点我重试',
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
		walletName: '设置钱包账户昵称',
		setPassword: '设置您的本地安全密码',
		nickName: '昵称',
		personaNickName: '个人昵称',
		personalSign: '个人信息',
		scan: '扫描',
		refuse: '拒绝',
		agree: '同意',
		mnemonic:
		{
			content1: '助记词是明文私钥的一种体现，每一个钱包，都有且仅有一串12个英文单词的助记词。助记词可以看做是传统业务中的银行卡号和银行卡密码的集合，任何人在得到了您的助记词后，均可以将您的账户下的资产转移走，且资产不可找回。',
			content2: '请您注意：',
			content3: '1. 尽可能采用物理介质备份，例如用笔抄在纸上等，尽可能不要采用截屏或者拍照之后放在联网的设备里，以防被黑客窃取；',
			content4: '2. 多次验证备份的助记词是否正确，一旦抄错一两个单词，那么将对后续找回正确的助记词带来巨大的困难；',
			content5: '3. 将备份后的助记词妥善保管，做好防盗防丢措施。',
		},
		mnemonic_ps: 'PS: 用户可以使用备份的助记词, 重新导入自游俱乐部钱包 , 用新的密码生成一个新的 Keystore, 用这种方法来修改钱包密码。',
		keystore:
			'Keystore 文件是以太坊钱包存储私钥的一种文件格式(JSON) 。它使用用户自定义密码加密，以起到一定程度上的保护作用, 而保护的程度取决于用户加密该钱包的密码强度, 如果类似于 123456 这样的密码, 是极为不安全的。 在使用 Keystore 时有两点需要注意: 1. 使用不常用, 并且尽可能复杂的密码加密 Keystore文件; 2. 一定要记住加密 Keystore 的密码, 一旦忘记密码, 那么你就失去了 Keystore 的使用权, 并且自游俱乐部钱包 无法帮你找回密码, 所以一定要妥善保管好 Keystore 以及密码。 下面是 keystore 的样式: { "version": 3, "id": "b7467fcb-3c8b-41be-bccf-73d43a08c1b7", "address": "540f18196da5a533fa36577a81de55f0a2f4e751", "Crypto": { "ciphertext": "78ed11b8b6bf29b00f52b42b8542df0e4a6ac078e626af7edcf885c3b68154a4", "cipherparams": { "iv": "4516579601d96695fe30ace985a9066f" }, "cipher": "aes-128-ctr", "kdf": "scrypt", "kdfparams": { "dklen": 32, "salt": "6276cfda7d40872352c801db5871e5a3368a8d0994cea39ed936760db78d1cdc", "n": 1024, "r": 8, "p": 1 }, "mac": "d889a5dc609c3f312a41394cc47640676d2612501a6f8c837ed55598158336db" } }。',
		keystore_ps: ' PS: Keystore 的密码是唯一、不可更改的, 如果想更改钱包密码需要使用助记词或明文私钥重新导入钱包, 并使用新密码加密, 生成新的 Keystore。',
		privateKey:
			'我们常说，你对钱包中资金的控制取决于相应私钥的所有权和控制权。在区块链交易中, 私钥用于生成支付货币所必须的签名，以证明资金的所有权。私钥必须始终保持机密，因为一旦泄露给第三方，相当于该私钥保护下的资产也拱手相让了。它不同于 Keystore，Keystore 是加密过后的私钥文件，只要密码强度足够强，即使黑客得到 Keystore，破解难度也足够大。 私钥实际上并不是存储在网络中，而是由用户生成并存储在一个文件或者简单的数据库中，称为钱包。存储在用户钱包中的私钥完全独立，可由用户的钱包软件生成并管理，无需区块链或者网络连接。用户的钱包地址就是由私钥通过椭圆曲线加密生成公钥，进而生成以 0x 开头的 42 位地址。私钥的样式为 64 位 16 进制的哈希值字符串，例如: 56f759ece75f0ab1b783893cbe390288978d4d 4ff24dd233245b4285fcc31cf6。',
		privateKey_ps: 'PS: 用户可以使用明文私钥导入自游俱乐部，用新的密码生成一个新的 Keystore (记得要将旧的 Keystore 删除)，用这种方法来修改钱包密码。',
		GoGlobe:{
			content1: '自游俱乐部是一款基于以太坊网络的，移动端轻钱包APP。旨在为所有用户提供一款安全放心、简单易用、功能强大的数字资产钱包应用。',
			content2: '您可以在自游俱乐部上进行数字资产的管理、转账、收款，也可以进行对自游设备的投资，进行有效的资产管理配置。',
		},
		GoGlobe_ps: '',
		walletAddress: {
			content1: '地址由公钥（公钥是私钥通过非对称加密算法生成）生成，以 Ox开头的42位16进制哈希值字符串。例如： 0XC2d5ef1b5e6234C6bCbCe87bb05d579C8e9d5',
			content2: '如果将钱包比作银行卡，那么钱包地址就是银行卡号。',
			content3: '每一个基于以太坊的钱包都有且仅有一个唯一的钱包地址，对于数字资产的转账和收款，都是基于钱包地址而来。请收藏好自己的钱包地址。'
		},
		walletAddress_ps: '',
		gogWallet: '自游设备是由自游俱乐部提供的设备，用户在购买自游设备之后，可将自游设备与自游俱乐部APP将绑定，绑定后，用户将每天收到由自游设备产出的GOG，且可享受一定份额的增值利率。',
		gogWallet_ps: '',
		download:  {
			content1: '用户可以自行将如下网址复制到浏览器中进行下载：',
			down: true,
			content3: '或者扫描如下二维码：',
			image: true
		},
		download_ps:'',
		createWallet: {
			content1: '1.进入自游俱乐部后，在首页点击“创建钱包”',
			content2: '2.设置一个钱包名称，之后设定由字母和数字组成的密码',
			content3: '3.准备纸笔抄写助记词（助记词非常重要，请妥善保存）',
			content4: '4.抄写好验证助记词，妥善保存好',
			content5: '5.完成新钱包的创建，进入自游俱乐部，开启自游之旅',
		},
		createWallet_ps: '',
		importWallet: {
			content1: '1.在进入自游俱乐部APP后，在首页点击“导入钱包”',
			content2: '2.输入已有钱包的助记词，每个单词之间一定要空格分开。或者进行扫描二维码。或者导入保存的keystore文件。',
			content3: '3.验证正确后，导入之前的钱包，并且恢复钱包内的资产控制权',
			content4: '4.继续使用自游俱乐部，进行数字资产管理',
		},
		importWallet_ps: '',
		backupMnemonic:  {
			content1: '1.在“我的”模块里点击“管理钱包”',
			content2: '2.选择导出助记词',
			content3: '3.验证自游俱乐部APP密码',
			content4: '4.验证成功进入纸密码（助记词）的抄写页面，切记抄写清晰、妥善保存，纸密码（助记词）关乎你个人全部数字资产的控制权。若助记词泄露，任何组织或个人均可以轻松转移走您账户的所有数字资产，且不可找回，不可恢复',
		},
		backupMnemonic_ps: '',
		transfer: {
			content1: '1.进入到APP的“资产”功能下',
			content2: '2.选择ETH或者是GOG',
			content3: '3.填写转账信息（收款人钱包地址、转账金额、备注）和矿工费',
			content4: '4.验证钱包密码',
			content5: '5.等待矿工打包这笔交易，经过若干区块确认；即可完成相应币种的转账操作。',
		},
		transfer_ps: '',
		receipt: {
			content1: '有两种收款方式',
			content2: '1.资产界面点击头像旁边的二维码，可以让对方扫码，也可以复制收款地址发送给对方（可以自定义收款金额），等待对方支付后矿工打包这笔交易—经过若干区块确认；即可收到相应币种的转账。',
			content3: '2.在资产界面内选择某个币种—进入该币种的信息页面—点击页面上方“收款”按钮—进入收款页面将收款地址或者地址二维码交给支付人即可，其余流程同上'
		},
		receipt_ps: '',
		minersFees:  {
			content1: '用户可以自己在填写转账信息时，通过APP提供的选择矿工费功能，左滑或右滑滑动控件选择矿工费的高低。',
			content2: '矿工费低相应的打包速度就会慢，矿工费高打包速度就会快；用户可以选择推荐的矿工费，确保打包成功前提下保证矿工费最少。'
		},
		minersFees_ps: '',
		withdrawCash: {
			content1: '在您购买了自游设备后，每个自游设备每天都会固定产出一定量的GOG，您所需要的只是将产出的GOG提到您的个人钱包地址内即可进行GOG的管理与交易。',
			content2: '在自游设备界面，选择橙色的提币按钮后，进入提币界面，输入所需要提的数目后，提交提币申请，等待自游俱乐部的后台审核。当等待审核完毕后，GOG即可被提至到您的个人账户内。'
		},
		withdrawCash_ps: '',
		changePwd:  {
			content1: '1.点击“我的”，进入到“系统设置”功能内',
			content2: '2.选择“修改交易密码”',
			content3: '3.发送验证码到您绑定的手机号上，校验验证码正确后，可以重新设置交易密码'
		},
		changePwd_ps: '请注意：交易密码与您的自游设备和提币等功能相绑定，请务必保存好您的交易密码，以防资产丢失',
		deleteWallet:  {
			content1: '1.点击“我的”，进入到“钱包管理”功能内',
			content2: '2.选择“删除钱包”',
			content3: '3.校验您的钱包密码'
		},
		deleteWallet_ps: '请注意：删除钱包后，您再登录自游俱乐部的时候，需要导入之前的钱包或者创建新钱包，否则无法继续使用自游俱乐部。自游设备仍旧会为您每天产出GOG',
		receiptFail:  {
			content1: '1.交易需要等待矿工打包，经过多个区块确认才认定为成功交易',
			content2: '2.如果时间过长，可以在https://etherscan.io/上通过您的明文公钥（钱包地址）查询交易状态，若 Etherscan 能查到交易已经成功的信息，APP内仍然显示未到账，请联系我们。',
		},
		receiptFail_ps: '',
		AddressFail:  {
			content1: '1.很明确，将无法找回已支付的资产。由于区块链的技术特性，交易是不可回滚，不受任何中心化机构的操控，自游俱乐部也无法替您追回资产。',
			content2: '2.所以，请进行转账支付时确认支付地址是否正确，确认无误之后，再进行转账操作',
		},
		AddressFail_ps: '',
		deleteWalletSucc: {
			content1: '1.删除前备份并保存好钱包的纸密码（助记词）',
			content2: '2.有备份的纸密码（助记词），即使删除钱包，也可以通过导入钱包，导入纸密码（助记词）恢复钱包内资产',
			content3: '3.如果不幸删除钱包且丢失备份的纸密码（助记词），将永远失去钱包内资产控制权',
			content4: '4.自游俱乐部的设计方式是去中心化钱包，不保存且没有权力、没有能力保存用户纸密码（助记词），无法帮助用户找回纸密码（助记词）或钱包内资产'
		},
		deleteWalletSucc_ps: '',
		lostPwd: {
			content1: '1.如果用户记得登录密码，可以参考“如何备份钱包纸密码”的教程，重新备份一次纸密码',
			content2: '2.如果用户丢失纸密码（助记词），并且同时遗忘登录密码，将永久遗失该钱包内资产。由于纸密码（助记词）必须通过原先登录密码才能重新导出备份，故，遗忘当前登录密码将无法导出纸密码（助记词）。',
			content3: '3.建议，如果纸密码（助记词）丢失请尽快新建钱包，并将丢失了纸密码（助记词）的钱包内资产转移到新建的钱包，重新获得控制权，以免被其他人偷偷转移。'
		},
		lostPwd_ps: '',
		ForgetPwd: {
			content1: '当前版本下：',
			content2: '1.如果保存了正确的纸密码（助记词），用户可以卸载自游俱乐部后，重新安装打开，选择导入钱包，恢复钱包内的资产',
			content3: '2.如果遗失了纸密码（助记词），参照“纸密码（助记词）丢失怎么办”',
			content4: '后续版本中：',
			content5: '1.新增重置登录密码功能',
			content6: '2.用户拥有正确的纸密码（助记词），可以重置自己的登录密码，恢复钱包资产'
		},
		ForgetPwd_ps: '',
		uninstall: {
			content1: '1.卸载前备份并保存好钱包的纸密码（助记词）',
			content2: '2.有备份的纸密码（助记词），即使卸载APP，也可以通过重新安装自游俱乐部，导入纸密码（助记词）恢复钱包内资产',
			content3: '3.如果不幸卸载APP且丢失备份的纸密码（助记词），将永远失去钱包内资产控制权',
			content4: '4.自游俱乐部是去中心化钱包，不保存且没有权力、没有能力保存用户纸密码（助记词），无法帮助用户找回纸密码（助记词）或钱包内资产'
		},
		uninstall_ps: '',
	},
    error: {
        passwordWrong: '密码错误',
        codeWrong: '验证码错误',
        deviceNotExists: '设备不存在',
		deviceCodeWrong: '设备code错误',
		deviceBound: '您输入的设备号已被绑定',
		codeNumberLimited: '您当前发送的短信已超过本时效限制，请稍后再试',
		sendCodeWrong: '手机号错误'
    }
};
