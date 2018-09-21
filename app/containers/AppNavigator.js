
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation'; // 页面切换 路由导航组件
import { AppWithNavigationState } from './app';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class App extends Component {
	componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
		const { dispatch, nav } = this.props;
		if(nav.index === 0){
			return false;
		}
		dispatch(NavigationActions.back());
		return true;
       };
	render() {
		// const { dispatch, nav } = this.props;
        // const navigation = addNavigationHelpers();
		return <AppWithNavigationState />
	}
}
App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };
  const mapStateToProps = state => ({
	state: state.nav
});
export default connect(mapStateToProps)(App)
