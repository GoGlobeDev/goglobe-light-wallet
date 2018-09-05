// 导航页面跳转用：加延时，防止多次重复点击，渲染多个同个页面
// 从react-native-touch-once拷贝源码过来的
import  React,{ Component,PropTypes } from 'react';
import {
  TouchableOpacity,
} from 'react-native';

{/**按钮防重复提交组件*/}
export default class Touch extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isDisable:false,//是否被禁用
    };
  }

  componentWillUnMount() {
    this.timer && clearTimeout(this.timer)
  }

  ToPress = async ()=>{
    const {onPress, time} = this.props;
    onPress&&onPress();
    await this.setState({isDisable:true}); //防重复点击
    this.timer = setTimeout(async()=>{
      await this.setState({isDisable:false}); //X秒后可点击
    }, time !== undefined ? time : 2000);
  }

  render(){
    const {style} = this.props;
    return(
      <TouchableOpacity
        disabled={this.state.isDisable}
        activeOpacity={this.props.activeOpacity?this.props.activeOpacity:0.5}
        style={style?style:{}}
        onPress={this.ToPress}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
