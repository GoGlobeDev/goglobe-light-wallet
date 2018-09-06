import axios from 'axios';
import { serverUrl } from '../utils/config';
axios.defaults.baseURL = serverUrl;

//绑定手机号
const bindPhone = async (phone, code, ethAddress) => {
	return axios.post('/wallet/phone', {
        phone,
        code,
        ethAddress,
	});
};

//发送验证码
const sendCode = (phone) => {
	return axios.post('/wallet/send/code', {
		phone,
	});
};

//设置交易密码
const bindPwd = (userId, password) => {
	return axios.post('/wallet/password', {
		userId,
		password
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
	return axios.post('/wallet/referralcode', {
        userId,
		bindedreferralCode,
		password
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
	return axios.post('/wallet/device', {
        userId,
        deviceNo,
		code,
		password
	});
};

//提现
const withdraw = async (userId, password, withdrawAmount) => {
	return axios.post('/wallet/withdraw', {
		userId,
		password,
		withdrawAmount
	})
}

export {
    getUser,
	bindPhone,
	bindPwd,
    sendCode,
    getRCode,
    bindRCode,
    getDevice,
	bindDevice,
	withdraw
}