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
			helpCenter: {
				_title: 'Help Center',
				mnemonic: 'What is a mnemonic?',
				keystore: 'What is a keystore?',
				privateKey: 'What is a privateKey?'
			},
			aboutUs: {
				_title: 'About Us',
				currentVersion: 'Current version',
				introduction:
					'GoglobleChain is a mobile light wallet APP designed to provide ordinary users with a secure, easy-to-use, powerful digital asset wallet application.',
				useAgreement: 'Use Agreement',
				privacyPolicy: 'Privacy Policy',
				versionLog: 'Version Log',
				checkVersion: 'Detect new version'
			},
            invitationCode: {
                _title: 'Invitation Code',
                myInvitationCode: 'My Inviation Code',
                myBoundCode: 'My Bound Code',
                myBoundMember: 'My Bound Member',
                notBind: 'Not Bound',
                button: 'Bind',
                noBinders: 'Not Used',
                myBinders: 'My refered members',
                notUsed: 'Not Used'
            },
            bindPhone: {
                _title: 'Bind Phone',
                bindPhoneNumber: 'Bound Phone Number',
                notBind: 'Not Bound',
                button: 'Bind'
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
		totalAssets: 'TotalAssets',
		walletInfo: {
			title: 'Account Infomation',
			walletName: 'Wallet Name',
			enterWalletName: 'Enter your wallet name',
			exportPrivateKey: 'Export PrivateKey',
			exportKeystore: 'Export Keystore',
			exportMnemonic: 'Export Mnemonic',
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
        withdrawRule: {
            _title: 'Rule',
            rule1: '1、每次提现不可少于5000GOG。',
            rule2: '2、每次提币的手续费为1%提现数额。',
            rule3: '3、请不要直接提现到ICO的众筹地址，这会导致您无法收取众筹到的数字资产。',
            rule4: '4、提币到合约地址可能会导致交易失败，将导致转账失败，资产将退回到GOG。GOG会人工处理将币转回到原账户。 ',
            rule5: '5、网络转账费用及时间是不固定的，取决于转账时合约执行需要消耗的算力。当前支付的Gas limit为90000，用于执行转账或合约执行。如果此次转账消耗超过90000gas，将导致转账失败，资产将退回到GOG。',
            rule6: '6、请务必确认电脑及手机安全，防止信息被泄露或篡改。'
        },
        setPassword: {
            _title: 'Set Trading Password',
            tip1: '1.交易密码必须有大写字母、小写字母、数字，禁止使 用符号',
            tip2: '2.交易密码限定在12位之内',
            setPassword: 'Set Password',
            confirmPassword: 'Confirm Password',
            placehoder1: '字母、数字组合 12位以内',
            placehoder2: 'Please repeat trading password'
        },
        withdraw: {
            _title: 'Withdraw',
            withdrawRule: 'Withdraw Rules',
            withdrawAmount: 'Amount',
            withdrawFee: '(1% Fee)',
            availableBalance: 'Available Balance',
            withdrawAll: 'Withdraw All',
            receivedAmount: 'Received Amount',
            withdrawToken: 'Withdraw'
        }
	},
	public: {
        OK: 'OK',
		second: 'Second',
		next: 'Next',
		back: 'Back',
		save: 'Save',
		payDetail: 'Payment details',
		enterPassword: 'Enter password',
		transferOutPrompt: 'No rollout is available during the voting period of the priority node.',
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
		signSuccess: 'Successful registration',
		signSuccess_info: 'Congratulations on your successful registration',
		joinTeam: 'JoinTeam',
		enterMobile: 'Please enter phone number',
		enterCaptcha: 'Enter image verification code',
		enterMobileCode: 'Enter your phone verification code',
		getMobileCode: 'Get verification code',
		captchaError: 'Graphic verification code is wrong, please re-verify!',
		hasBind: 'The phone number is bound to the wallet address',
		verificationCodeError: 'Verification code error',
		enter_the_legal_mobile_number: 'Please enter a legal mobile number',
		walletName: 'Wallet name',
		electoralManifesto: 'electoral manifesto',
		nickName: 'Nick name',
		personaNickName: 'Personal Nickname',
		personalSign: 'Personal info',
		scan: 'Scan',
		refuse: 'Refuse',
		agree: 'Agree',
		mnemonic:
			'Mnemonic is another form of plain text private keys. It was first come up with in BIP 39 proposal. Its purpose is to help the users to memorize the complicated private keys (64 digits of hash value). Mnemonic usually consists of 12, 15, 18, 21 words. These words are from a fixed pool of vocabulary. The order of the words is generated according to certain algorithm. So there’s no need for the users to worry that an address of wallet would be generated by randomly entering 12 words. Although mnemonic and keystore can both be used as plain text form, compared to keystore, mnemonic is unencrypted private keys with no guarantee of security. Anyone who accidentally acquires your mnemonic can take away your asset effortlessly. So when backing up the mnemonic, the users should keep the following three in mind: 1. It’s the best to use physical backup device, such as writing down on the paper. Try not to use screen shots or take photos and put them in the online device in order to prevent the data from being acquired by the hackers. 2. Verify mnemonic multiple times to ensure the correctness of the backup. The misrecord of one or two words, will bring great difficulty to restoring mnemonic. 3. Keep the backup of mnemonic properly to prevent it from being lost or stolen.',
		mnemonic_ps:
			'PS: Users can use the backup of mnemonic to import imToken, and then generate a new Keystore with new password.',
		keystore:
			'The Keystore is a text file (JSON) that stores the private key of encrypted digital wallet. It uses user-defined password encryption to provide a degree of protection, and the degree of protection depends on the strength of the password the user encrypts the wallet. Password such as 123456, is extremely insecure. There are two things to keep in mind when using Keystore: 1. Encrypt keystore files with passwords that are not commonly used and as complex as possible. 2. Be sure to remember the keystore password. Once you forget your password, you lose access to the keystore, and GoGlobeChain wallet can not help you retrieve the password, so be sure to keep the Keystore and password. Here is the style of the keystore:{ "version": 3, "id": "b7467fcb-3c8b-41be-bccf-73d43a08c1b7", "address": "540f18196da5a533fa36577a81de55f0a2f4e751", "Crypto": { "ciphertext": "78ed11b8b6bf29b00f52b42b8542df0e4a6ac078e626af7edcf885c3b68154a4", "cipherparams": { "iv": "4516579601d96695fe30ace985a9066f" }, "cipher": "aes-128-ctr", "kdf": "scrypt", "kdfparams": { "dklen": 32, "salt": "6276cfda7d40872352c801db5871e5a3368a8d0994cea39ed936760db78d1cdc", "n": 1024, "r": 8, "p": 1 }, "mac": "d889a5dc609c3f312a41394cc47640676d2612501a6f8c837ed55598158336db" } }。',
		keystore_ps:
			' PS: The keystore password is unique and cannot be changed. If you want to change the wallet password, you need to re-import the wallet using the mnemonic or plain text private key, and use the new password to encrypt, to generate a new Keystore.',
		privateKey:
			"We often say that your control of asset in your wallet depends on the ownership and control of the corresponding private key. In blockchain transactions, the private key is used to generate the  necessary signature to pay the currency to prove the ownership of the funds. The private key must always be kept confidential, because once leaked to a third party, the equivalent of the assets under the protection of the private key also surrendered. It is different from Keystore, which is an encrypted private key file. As long as the password strength is strong enough, even if the hackers get the Keystore, the cracking is difficult. The private key is not actually stored in the network, but is generated by the user and stored in a file or a simple database called a wallet. The private key stored in the user's wallet is completely independent and can be generated and managed by the user's wallet software without blockchain or network connection. The user's wallet address is generated by the private key using elliptic curve encryption to generate a public key, which in turn generates a 42-bit address starting with 0x.The private key is styled as a 64 - bit hexadecimal hash string, for example: 56f759ece75f0ab1b783893cbe390288978d4d 4ff24dd233245b4285fcc31cf6。",
		privateKey_ps:
			'PS: The user can use the plaintext private key to import GoGlobe Chain Wallet, generate a new Keystore with a new password (remember to delete the old Keystore), and use this method to modify the wallet password.'
	}
};
