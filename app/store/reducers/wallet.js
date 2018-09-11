/**
 * Created by Administrator on 2018/4/24.
 */
import update from 'immutability-helper';

const UPDATE_WALLET_ADDRESS = 'dbc/wallet/UPDATE_WALLET_ADDRESS';
const UPDATE_WALLET_NAME = 'dbc/wallet/UPDATE_WALLET_NAME';
// const UPDATE_WALLET_FAIL = 'dbc/wallet/UPDATE_WALLET_FAIL';
// const UPDATE_WALLET_ADDRESS = 'wallet/UPDATE_WALLET_ADDRESS'


// ---------reducer---------
const initialState = {
  address: '',
  walletName: '',
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






