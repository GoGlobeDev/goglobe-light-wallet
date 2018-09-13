/**
 * Created by Administrator on 2018/4/24.
 */
import update from 'immutability-helper';

const UPDATE_WALLET_ADDRESS = 'dbc/wallet/UPDATE_WALLET_ADDRESS';
const UPDATE_WALLET_NAME = 'dbc/wallet/UPDATE_WALLET_NAME';
const UPDATE_WALLET_USERID = 'dbc/wallet/UPDATE_WALLET_USERID';
// const UPDATE_WALLET_ADDRESS = 'wallet/UPDATE_WALLET_ADDRESS'


// ---------reducer---------
const initialState = {
  address: '',
  walletName: '',
  userId: ''
};

export default function wallet(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_WALLET_ADDRESS: {
      return update(state, {
        address: { $set: action.payload.address },
      });
    }
    case UPDATE_WALLET_NAME: {
      return update(state, {
        walletName: { $set: action.payload.walletName },
      });
    }
    case UPDATE_WALLET_USERID: {
      return update(state, {
        userId: { $set: action.payload.userId },
      });
    }
    default: return state;
  }
}

// ---------action---------

export function updateWalletAddress(address) {
  return {
    type: UPDATE_WALLET_ADDRESS,
    payload: {
        address
    }
  };
}

export function updateWalletName(walletName) {
  return {
    type: UPDATE_WALLET_NAME,
    payload: {
      walletName
    }
  };
}

export function updateUserId(userId){
  return {
    type: UPDATE_WALLET_USERID,
    payload: {
      userId
    }
  };
}





