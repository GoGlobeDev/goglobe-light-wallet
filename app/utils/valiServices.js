import { I18n } from '../../language/i18n';
// 验证手机号、邮箱 
export function checkAccount(account) {
  const phone = /^1\d{10}$/;
  const email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return new Promise(function(resolve, reject) {
    if (account.length > 0 && ( phone.test(account) || email.test(account))) {
      resolve(account);
    } else if (account.length === 0) {
      reject('手机不能为空');
    } else {
      reject('手机格式错误');
    }
  });
}

// 验证钱包
export function checkWalletName(walletName) {
  return new Promise(function(resolve, reject) {
    walletName = walletName.trim();
    if (walletName.length === 0) {
      reject(I18n.t('wallet.createWalletTip'));
    } else if (walletName.length > 15) {
      reject('钱包名称不能为超过15个字符');
    } else {
      resolve(walletName);
    }
  });
}

// ---------验证密码----------

export function checkPwd(pwd) {
  return new Promise(function(resolve, reject) {
    pwd = pwd.trim();
    const regExp = /\s/;
    if (pwd.length >= 8 && !regExp.test(pwd)) {
      resolve(pwd);
    } else if (pwd.length === 0) {
      reject(I18n.t('wallet.enterPwd'));
    } else if (pwd.length < 8) {
      reject('密码不能小于八位,请重新输入');
    } else if (pwd.length > 12) {
      reject('密码不能大于十二位,请重新输入');
    } else if (regExp.test(pwd)) {
      reject('密码不能有空格');
    }
  });
}

export function checkTwoPwd(pwd, pwd2) {
  return new Promise(function(resolve, reject) {
    if (pwd !== pwd2) {
      reject(I18n.t('wallet.pwdIsWrong'));
    } else {
      resolve();
    }
  });
}

//验证是否同意协议
export function checkisAgress(isAgress) {
  return new Promise(function(resolve, reject) {
    if (!isAgress) {
      reject(I18n.t('wallet.agreeTerm'));
    } else {
      resolve();
    }
  });
}

//验证交易密码
export function checkPassword(pwd) {
  return new Promise(function(resolve, reject) {
    pwd = pwd.trim();
    const regExp = /^(?!\s)((?=.*[a-zA-Z])(?=.*[a-z])(?=.*[A-Z])(?=.*[\d]).\S{7,})$/;
    const noRegExp = /[~!@#$%^&*?;:,.'"/]+/;
    if (pwd.length >= 8 && regExp.test(pwd) && !noRegExp.test(pwd)) {
      resolve(pwd);
    } else if (pwd.length === 0) {
      reject(I18n.t('wallet.enterPwd'));
    } else if (pwd.length < 8) {
      reject('密码不能小于八位,请重新输入');
    } else if (pwd.length > 12) {
      reject('密码不能大于十二位,请重新输入');
    } else {
      reject('您当前输入的交易密码不符合规则，请重新输入');
    }
  });
}

// 验证验证码
export function checkCode(code) {
  return new Promise(function (resolve, reject) {
    code = code.trim();
    if (code.length === 0) {
      reject('验证码不能为空');
    } else if (code.length === 6) {
      resolve();
    } else {
      reject('验证码是六位数');
    }
  })
}

// 验证昵称，昵称仅仅支持中英文、数字
export function checkNickName(str) {
  const nickName = /^[a-z0-9\u4e00-\u9fa5]+$/igm;
  return new Promise(function (resolve, reject) {
    if (str.length < 2) {
      reject('昵称不能小于两个字');
    } else if (str.length > 8) {
      reject('昵称不能大于八个字');
    } else if (!nickName.test(str)) {
      reject('昵称仅支持中英文、数字');
    } else {
      resolve();
    }
  })
}
