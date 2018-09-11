import { combineReducers } from 'redux';
import walletInfo from './walletInfo';
import contractAddr from './contractAddr';
import wallet from './wallet';
const reducers = combineReducers({
	walletInfo,
	contractAddr,
	wallet
});

export default reducers;
