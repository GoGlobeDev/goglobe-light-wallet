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

//获取矿机
const getDevice = (userId) => {
	return axios.post('/wallet/get/device', {
		userId
	});
};

//绑定矿机
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
    bindRCodeChild
}
