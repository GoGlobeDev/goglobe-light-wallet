import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../containers/app';
// import { Navigator } from 'react-native';

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init());

// ---------reducer---------

export default function nav(state = initialState, action) {
  let nextState;
  if (action && action.type.indexOf('Navigation/') === 0) {
    nextState = RootNavigator.router.getStateForAction(action, state);
  }
  return nextState || state;
}