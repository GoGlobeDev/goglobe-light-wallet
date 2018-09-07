import { Dimensions, PixelRatio, Platform } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();
const defaultPixel = 2;
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);   //获取缩放比例

const X_WIDTH = 375;
const X_HEIGHT = 812;

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
// export function setSpText(size: number) {
//   size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
//   return size / defaultPixel;
// }
export function scaleSize(size: number) {
  size = Math.round(size * scale + 0.5);
  return size / defaultPixel;
}

export function isIphoneX() {
  return (
    Platform.OS === 'ios' && 
    ((SCREEN_WIDTH === X_WIDTH && SCREEN_HEIGHT === X_HEIGHT) ||
    (SCREEN_WIDTH === X_HEIGHT && SCREEN_HEIGHT === X_WIDTH))
  )
}

export function ifIphoneX(iphoneXStyle, iphoneStyle, androidStyle) {
  if(isIphoneX()){
    return iphoneXStyle;
  } else if (Platform.OS === 'ios') {
    return iphoneStyle;
  } else {
    return androidStyle;
  }
}

//保留4位小数
export function show(num) {
  num += '';
  num = num.replace(/[^0-9|\.]/g, '');
  if (/^0+/) {
    num = num.replace(/^0+/, '');
  }
  if (!/\./.test(num)) {
    num += '.00000';
  }
  if (/^\./.test(num)) {
    num = '0' + num;
  }
  num += '00000';
  num = num.match(/\d+\.\d{4}/)[0];
  return num;
}