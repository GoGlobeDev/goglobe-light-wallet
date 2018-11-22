export default {
	guide: {
		welcome: 'Welcome To Go Globe',
		importWallet: 'Import Wallet',
		createWallet: 'Create Wallet',
		importInstructions:
			'Export the mnemonics of your old  wallet, click "Import Wallet", and enter the exported mnemonics; back up the mnemonics immediately after importing the wallet.',
		createInstructions:
			'If you do not have a wallet, click "Create Wallet". Keep your password in mind when you create your wallet. Back up your mnemonic immediately after creating your wallet.'
	},
	wallet: {
		mnemonic: 'Mnemonic',
		mnemonicPlaceholder: 'Mnemonic words, separated by spaces',
		officialWallet: 'Official wallet',
		privateKey: 'Private key',
		path: 'Path',
		enterPwd: 'Enter your password',
		confirmPwd: 'Confirm your password',
		creatWallet: 'Create wallet',
		createWalletTip: 'Enter your wallet name',
		pwdSuggest: 'Recommended password be no less than 8 characters',
		pwdIsWrong: 'The passwords should be consistant',
		agreeTerm: 'Agree to the terms of service',
		createWalletTipOfPwd: 'Strong password is needed to encrypt private key！',
		createWalletTipOfNoStore:
			'Do remember your password! GoGlobe wallet will not store and cannot find back your password！',
		iAgreeTerm: 'I have read carefully and agree to the above agreement',
		term: 'Service and privacy terms',
		mnemonicTip: 'No blank is allowed at the beginning or end of the mnemonic tip, please enter again',
		mnemonicIsWrong: 'Wrong mnemonic tip, please enter again',
		mnemonicIsNull: 'Mnemonic words cannot be empty',
		privateKeyIsNull: 'Private key cannot be empty',
		privateKeyIsWrong: 'Wrong private key, please enter again',
		keystoreIsNull: 'Please enter keystore information ',
		wrongByKeystoreOrPwd: 'Failed to import wallet, please check private keystore or password  is correct',
		copyKeystoreTip: 'Please paste the content of Ethereum (ETH) wallet keystore file to input box'
	},
	tab: {
		assets: 'Assets',
		node: 'Mining',
		my: 'My'
	},
	my: {
        _title: 'My',
		home: {
			walletManagement: 'Wallet Management',
			transactionRecord: 'Transaction Record',
			systemSetting: 'System Setting',
			Versions: {
				_title: 'Version log'
			},
			ContactUs: {
				_title: 'Contact Us'
			},
			//新加的
			invitationCode: {
                _title: 'Invitation Code',
                myInvitationCode: 'My Inviation Code',
                myBoundCode: 'My Bound Code',
                myBoundMember: 'My Bound Member',
                notBind: 'Not Bound',
                button: 'Bind',
                noBinders: 'Not Used',
                myBinders: 'My refered members',
				notUsed: 'Not Used',
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
				_title: 'Bind Phone',
				title: 'Phone Number',
                bindPhoneNumber: 'Bound Phone Number',
                notBind: 'Not Bound',
				button: 'Bind',
				enterMobile: '请输入正确的手机号',
				pleaseInputPhone: 'please Input Phone Number',
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
				_title: 'Help Center',
				GoGlobe:'什么是自游俱乐部？',
				mnemonic: 'What is a mnemonic?',
				keystore: 'What is a keystore?',
				privateKey: 'What is a privateKey?',
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
				_title: 'About Us',
				currentVersion: 'Current version',
				introduction:
					'GoglobleChain is a mobile light wallet APP designed to provide ordinary users with a secure, easy-to-use, powerful digital asset wallet application.',
				useAgreement: 'Use Agreement',
				privacyPolicy: 'Privacy Policy',
				versionLog: 'Version Log',
				checkVersion: 'Detect new version',
				contactus: 'contact us'
			}
		},
		sysSetting: {
			_title: 'System Settings',
			language: {
				_title: 'Language Setting',
				multi_language: 'Multi language',
				changeToChinese: '简体中文',
				changeToEnglish: 'English'
			},
            jnb: {
                _title: 'JNB Exchange Setting',
                alert: 'Please wait for listing on JNB'
            }
		},
		version: {
			_number: '1.1.3',
			_newVersion: 'Find GoGlobe',
			_version: 'version',
			upgradeNow: 'Upgrade Now',
			noEscalation: 'No upgrade',
			noUpdate: "Now it's the latest version, no need to update"
		},
		webHost: 'Web3 Settings'
	},
	assets: {
		_title: 'My Wallet',
		findNewVersion: 'FindNewVersion',
		totalAssets: 'TotalAssets',
		notUpdate: 'NotUpdate',
        update: 'Update',
		walletInfo: {
			title: 'Account Infomation',
			walletName: 'Wallet Name',
			enterWalletName: 'Enter your wallet name',
			exportPrivateKey: 'Export PrivateKey',
			exportKeystore: 'Export Keystore',
			exportMnemonic: 'Export Mnemonic',
			backUpMnemonic: 'backUp Mnemonic',
			confirmMnemonic: 'confirm Mnemonic',
			deleteWallet: 'Delete Wallet',
			keystoreFile: 'Keystore File',
			qrcode: 'QR code',
			privateKeyWarning:
				'Safety Warning: Private keys are exposed to risks when exporting without encryption. It is strongly suggested to use mnemonic and keystore for backup.',
			copyPrivaateKey: 'Copy PrivaateKey',
			copyKeystore: 'Copy keystore',
			keystore_save: 'Save offline',
			keystore_save_item:
				'Please copy and paste keystore files to a safe place offline for saving. Please do not save the files in the mail box, notebook, cloud storage or other online chatting tools, it’s very risky.',
			keystore_network: 'Do not use Internet for transmission',
			keystore_network_item:
				'Do not use online tools to transmit keystore files. Once the files acquired by hackers, irreversible loss may happen to your assets. It is suggested to transmit files offline using QR code.',
			keystore_pwdsave: 'Password Safe Saving',
			keystore_pwdsave_item:
				'If online saving is needed, it is suggested to use password saving software with higher level of security to keep the files',
			keystore_scanning: 'Only for Direct Scanning',
			keystore_scanning_item:
				'It is forbidden to save, take screenshots or take pictures of the following QR code. The QR code should be used for direct scanning in a safe environment to import wallet. ',
			keystore_surround: 'Using in a Safe Environment',
			keystore_surround_item:
				'Please make sure to use the QR code when there are no people or camera around you. Once the QR code is acquired by other people, irreversible loss may happen to your assets. '
		},
		mnemonic: {
			backUpMnemonic: 'Please backup your mnemonic',
			mnemonicSuccess: 'The mnemonic is correct, please keep your mnemonic properly!',
			mnemonicError: 'The mnemonic is incorrect. Please re-enter',
			copyYourMnemonic: 'Copy your mnemonic',
			confirmMnemonic: 'Confirm your wallet mnemonic',
			mnemonicWring:
				'The mnemonic is used to restore the wallet or reset the wallet password, copy it to paper accurately, and store it in a safe place that only you know.',
			mnemonicWring1: '请务必使用物理介质备份，如手抄在纸上，尽量不要存在微信、QQ等工具内。请尽量多次验证助记词的正确性，一旦丢失，不可找回。',
			confirmMnemonicWring:
				'Please click on the mnemonic in order to confirm that your backup mnemonic is correct.'
		},
		currency: {
			transfer: 'Transfer',
			orderInformation:'Order Information',
			recentTradeRecord: 'Recent Transactions',
			receipt: 'Receipt',
			receiptAddr: 'Receipt Address',
			transferCount: 'Transfer Count',
			transferRemarks: 'Remarks',
			transferFee: 'Transfer Fee',
			transferSpeedSlow: 'Slow',
			transferSpeedFast: 'Fast',
			nextStep: 'Next',
			copyReceiptAddr: 'Copy Receipt Address'
		},
		transfer: {
			checkAddress: 'Invalid address, please check carefully',
			transferInAddress: 'In Address',
			transferOutAddress: 'To Address'
		}
	},
	node: {
        miner: 'Miner',
        minerCount: 'Miner #',
        totalPower: 'Total Power',
        dailyProducts: 'Daily Earnings',
        withdrawCash: 'Withdraw',
        balance: 'Balance(GOG)',
        power: 'Power',
        id: 'ID',
        status: 'Status',
        active: 'Active',
        inactive: 'Inactive',
		dailyProduct: 'Daily Earning',
		dailyRate: '日利率',
        address: 'Address',
        registerMiner: {
            _title: 'Register Miner',
			inputMinerNumber: 'Input Miner Number',
			inputMinerCode: 'Input Miner Code',
            emptyNoError: 'Miner No. is empty!',
            emptyCodeError: 'Miner code is empty!',
            failedError: 'Failed, bind again!',
            inputTradingPwd: 'Enter your trading password'
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
            _title: 'Set Trading Password',
            tip1: '1.交易密码必须有大写字母、小写字母、数字，禁止使 用符号',
            tip2: '2.交易密码限定在12位之内',
			setPassword: 'Set Password',
			setNewPassword: 'Set New Password',
            confirmPassword: 'Confirm Password',
            placehoder1: '字母、数字组合 12位以内',
            placehoder2: 'Please repeat trading password'
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
            _title: 'Withdraw',
            withdrawRule: 'Withdraw Rules',
            withdrawAmount: 'Amount',
            withdrawFee: '(1% Fee)',
            availableBalance: 'Available Balance',
            withdrawAll: 'Withdraw All',
            receivedAmount: 'Required Amount',
            withdrawToken: 'Withdraw'
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
        OK: 'OK',
		second: 'Second',
		next: 'Next',
		back: 'Back',
		save: 'Save',
		payDetail: 'Payment details',
		enterPassword: 'Enter password',
		lockedWarehouse: 'Lock warehouse',
		lockedWarehouseAddr: 'Lock warehouse address',
		transferIn: 'Transfer In',
		transferOut: 'Transfer Out',
		verifyPwd: 'verify your password',
		inputPwd: 'Enter your password',
		PwdIsNull: 'Please enter your password',
		define: 'OK',
		cancel: 'Cancel',
        copy: 'Copy',
		copySuccess: 'Successful copy',
		copyFailed: 'Replication failed',
		wrongPwd: 'Password error, please retype',
		transactionSuccess: 'Publish the transaction successfully!',
		transactionFailed: 'The posting transaction failed. Please try again later!',
		score: 'Score',
		tickets: 'Votes',
		enterMobile: 'Please enter phone number',
		enterCaptcha: 'Enter image verification code',
		enterMobileCode: 'Enter your phone verification code',
		getMobileCode: 'Get verification code',
		captchaError: 'Graphic verification code is wrong, please re-verify!',
		hasBind: 'The phone number is bound to the wallet address',
		verificationCodeError: 'Verification code error',
		enter_the_legal_mobile_number: 'Please enter a legal mobile number',
		walletName: 'Wallet name',
		setPassword: 'set Password',
		nickName: 'Nick name',
		personaNickName: 'Personal Nickname',
		personalSign: 'Personal info',
		scan: 'Scan',
		refuse: 'Refuse',
		agree: 'Agree',
		mnemonic:
		{
			content1: '助记词是明文私钥的一种体现，每一个钱包，都有且仅有一串12个英文单词的助记词。助记词可以看做是传统业务中的银行卡号和银行卡密码的集合，任何人在得到了您的助记词后，均可以将您的账户下的资产转移走，且资产不可找回。',
			content2: '请您注意：',
			content3: '1. 尽可能采用物理介质备份，例如用笔抄在纸上等，尽可能不要采用截屏或者拍照之后放在联网的设备里，以防被黑客窃取；',
			content4: '2. 多次验证备份的助记词是否正确，一旦抄错一两个单词，那么将对后续找回正确的助记词带来巨大的困难；',
			content5: '3. 将备份后的助记词妥善保管，做好防盗防丢措施。',
		},
		mnemonic_ps:
			'PS: Users can use the backup of mnemonic to import imToken, and then generate a new Keystore with new password.',
		keystore:
			'The Keystore is a text file (JSON) that stores the private key of encrypted digital wallet. It uses user-defined password encryption to provide a degree of protection, and the degree of protection depends on the strength of the password the user encrypts the wallet. Password such as 123456, is extremely insecure. There are two things to keep in mind when using Keystore: 1. Encrypt keystore files with passwords that are not commonly used and as complex as possible. 2. Be sure to remember the keystore password. Once you forget your password, you lose access to the keystore, and GoGlobeChain wallet can not help you retrieve the password, so be sure to keep the Keystore and password. Here is the style of the keystore:{ "version": 3, "id": "b7467fcb-3c8b-41be-bccf-73d43a08c1b7", "address": "540f18196da5a533fa36577a81de55f0a2f4e751", "Crypto": { "ciphertext": "78ed11b8b6bf29b00f52b42b8542df0e4a6ac078e626af7edcf885c3b68154a4", "cipherparams": { "iv": "4516579601d96695fe30ace985a9066f" }, "cipher": "aes-128-ctr", "kdf": "scrypt", "kdfparams": { "dklen": 32, "salt": "6276cfda7d40872352c801db5871e5a3368a8d0994cea39ed936760db78d1cdc", "n": 1024, "r": 8, "p": 1 }, "mac": "d889a5dc609c3f312a41394cc47640676d2612501a6f8c837ed55598158336db" } }。',
		keystore_ps:
			' PS: The keystore password is unique and cannot be changed. If you want to change the wallet password, you need to re-import the wallet using the mnemonic or plain text private key, and use the new password to encrypt, to generate a new Keystore.',
		privateKey:
			"We often say that your control of asset in your wallet depends on the ownership and control of the corresponding private key. In blockchain transactions, the private key is used to generate the  necessary signature to pay the currency to prove the ownership of the funds. The private key must always be kept confidential, because once leaked to a third party, the equivalent of the assets under the protection of the private key also surrendered. It is different from Keystore, which is an encrypted private key file. As long as the password strength is strong enough, even if the hackers get the Keystore, the cracking is difficult. The private key is not actually stored in the network, but is generated by the user and stored in a file or a simple database called a wallet. The private key stored in the user's wallet is completely independent and can be generated and managed by the user's wallet software without blockchain or network connection. The user's wallet address is generated by the private key using elliptic curve encryption to generate a public key, which in turn generates a 42-bit address starting with 0x.The private key is styled as a 64 - bit hexadecimal hash string, for example: 56f759ece75f0ab1b783893cbe390288978d4d 4ff24dd233245b4285fcc31cf6。",
		privateKey_ps:
			'PS: The user can use the plaintext private key to import GoGlobe Chain Wallet, generate a new Keystore with a new password (remember to delete the old Keystore), and use this method to modify the wallet password.',
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
        passwordWrong: 'Wrong Password',
        codeWrong: 'Wrong Code',
        deviceNotExists: 'Miner not exists',
		deviceCodeWrong: 'Device code wrong',
		deviceBound: '您输入的设备号已被绑定',
		codeNumberLimited: '您当前发送的短信已超过本时效限制，请稍后再试',
		sendCodeWrong: '手机号错误'
    }
};
