import { combineReducers } from 'redux';
import walletInfo from './walletInfo';
import contractAddr from './contractAddr';
import wallet from './wallet';
import nav from './nav';
const reducers = combineReducers({
	walletInfo,
	contractAddr,
	wallet,
	nav
});

export default reducers;
