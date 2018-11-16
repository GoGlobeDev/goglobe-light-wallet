import axios from 'axios';
import { serverUrl } from '../utils/config';
axios.defaults.baseURL = serverUrl;
let forge = require('node-forge');

//绑定手机号
const bindPhone = async (phone, code, ethAddress) => {
	return axios.post('/wallet/phone', {
        phone,
        code,
        ethAddress,
	});
};

//发送验证码
const sendCode = (phone, type) => {
	return axios.post('/wallet/send/code', {
		phone,
		type
	});
};

//验证验证码
const checkCode = (phone, code) => {
	return axios.post('/wallet/reset/password', {
		phone,
		code
	});
};


//设置交易密码
const bindPwd = (userId, password) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/password', {
		userId,
		password: password1
	});
};

//获取用户
const getUser = (ethAddress) => {
	return axios.post('/wallet/user/eth', {
		ethAddress
	});
};

//获取邀请码
const getRCode = (userId) => {
	return axios.post('/wallet/get/referralcode', {
		userId
	});
};

//绑定邀请码
const bindRCode = async (userId, bindedreferralCode, password) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/referralcode', {
        userId,
		bindedreferralCode,
		password: password1
	});
};

//绑定邀请码
const bindRCodeChild = async (userId, bindedreferralCode, password, child) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/referralcode/child', {
        userId,
		bindedreferralCode,
		password: password1,
        child
	});
};

//获取设备
const getDevice = (userId) => {
	return axios.post('/wallet/get/device', {
		userId
	});
};

//绑定设备
const bindDevice = async (userId, deviceNo, code, password) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/device', {
        userId,
        deviceNo,
		code,
		password: password1
	});
};

//提现
const withdraw = async (userId, password, withdrawAmount) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/withdraw', {
		userId,
		password: password1,
		withdrawAmount
	})
}

//分解算力
const decompose = async (userId, password, deposit, devicedId) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/decompose', {
		userId,
		password: password1,
		deposit,
		devicedId
	})
}

//获取影响力
const getEffect = async (userId) => {
	return axios.post('/wallet/sub/referralcode', {
		userId,
	})
}

//获取操作记录
const record = async (userId, start, rows) => {
	return axios.post('/wallet/record', {
		userId,
		start,
		rows
	})
}

//绑定jnb账号
const bindJnbAccout = async (userId, jnbAccount, password) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/jnbaccount', {
        userId,
		jnbAccount,
		password: password1,
	});
};

const addStatistic = async (ethAddress) => {
	return axios.post('/wallet/statistic', {
		ethAddress
	})
}

//绑定兑换码
const bindExCode = async (userId, exchangeCode, password) => {
	var md = forge.md.md5.create();
	md.update(password);
	password1 = md.digest().toHex();
	return axios.post('/wallet/exchangecode', {
        userId,
		exchangeCode,
		password: password1
	});
};

//查询兑换码
const exchangeList = async (userId) => {
	return axios.post('/wallet/exchangecode/select', {
		userId,
	})
}

export {
    getUser,
	bindPhone,
	bindPwd,
	sendCode,
	checkCode,
    getRCode,
    bindRCode,
    getDevice,
	bindDevice,
	withdraw,
	decompose,
	bindRCodeChild,
	record,
	getEffect,
	bindJnbAccout,
	addStatistic,
	bindExCode,
	exchangeList
}
