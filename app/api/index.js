import axios from 'axios';
import { serverUrl, etherscanApiKey, hostMode } from '../utils/config';
axios.defaults.baseURL = serverUrl;

//获取eth交易记录
const getTransactionRecord = (walletAddress, contractaddress) => {
	if (hostMode === 'ropsten') {
		return axios.get(
			'http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=' +
				walletAddress +
				'&sort=desc&apikey=' +
                etherscanApiKey
		);
	} else {
		return axios.get(
			'http://api.etherscan.io/api?module=account&action=txlist&address=' +
				walletAddress +
				'&sort=desc&apikey=' +
                etherscanApiKey
		);
	}
};

//获取ERC20交易记录
const getERC20TransactionRecord = (walletAddress, contractaddress) => {
	if (hostMode === 'ropsten') {
		return axios.get(
			'https://api-ropsten.etherscan.io/api?module=account&action=tokentx&contractaddress=' +
				contractaddress +
				'&address=' +
				walletAddress +
				'&sort=desc&apikey=' +
                etherscanApiKey
		);
	} else {
		return axios.get(
			'https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=' +
				contractaddress +
				'&address=' +
				walletAddress +
				'&sort=desc&apikey=' +
                etherscanApiKey
		);
	}
};

//获取版本信息
const checkUpdate = async (type) => {
	return axios.post('/wallet/checkupdate', {
        type
	});
};

export { getTransactionRecord, getERC20TransactionRecord, checkUpdate };
