/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';
import {NativeModules} from 'react-native';
const AppDelegate = NativeModules.AppDelegate;

type Props = {};

const widthScreen = Dimensions.get('window').width;
const rotateXDeg = 90.0 //x轴最终旋转的角度为90度
const offsetX = (widthScreen -80)/2.0 //为 终点坐标左上角X轴坐标位置
const offsetY = 50 //200 为终点左上角Y轴坐标位置
const offsetUnitX = (offsetX - 50)/rotateXDeg//x轴单位位移量 180 为 获取到的组件坐标的x值+组件宽度 50 为 组件初始x轴坐标值
const offsetUnitY = (offsetY-100)/rotateXDeg //y轴单位位移量   100 为 获取到的组件坐标的y值+组件宽度 ;

export default class App extends Component<Props> {
 
  constructor(props){
    super(props)
    this.state =({
      textRotateX:0,//X轴旋转
      translateX:new Animated.Value(0),//X轴位移
      translateY:new Animated.Value(0),//Y轴位移
    });
    this.textRotateX = 0
    this.translateX = 0
    this.translateY = 0
  }

  checkAction(){
    console.log("NativeModules=>",AppDelegate);
    if(AppDelegate){
      AppDelegate.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    }
  }

  componentWillMount(){
    if(!this._panResponder)
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      // onMoveShouldSetPanResponder: (evt, gestureState) => true,
      // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

        // gestureState.{x,y} 现在会被设置为0
        // console.log("===>>0",'开始手势操作');
      },
      onPanResponderMove: (evt, gestureState) => {
        // 最近一次的移动距离为gestureState.move{X,Y}

        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
        if(this.textRotateX < -rotateXDeg){
          this.textRotateX = -rotateXDeg;
          this.setState({
            textRotateX:this.textRotateX
          })
          return
        }
        if(gestureState.dy < 0 && this.textRotateX> -rotateXDeg){
          this.textRotateX = this.textRotateX -1;
          this.translateX = this.translateX + offsetUnitX;
          this.translateY = this.translateY + offsetUnitY ;
          this.setState({
            textRotateX:this.textRotateX
          })
          Animated.parallel([
            // 执行缩放
            Animated.timing(this.state.translateX, {
                toValue: this.translateX,
                duration: 0,
            }),
            Animated.timing(this.state.translateY, {
                toValue: this.translateY,
                duration: 0,
            })
        ]).start();

        }else if(gestureState.dy > 0 && this.textRotateX <= 0){
          this.textRotateX = this.textRotateX +1;
          this.translateX = this.translateX - offsetUnitX;
          this.translateY = this.translateY - offsetUnitY ;
          this.setState({
            textRotateX:this.textRotateX
          })
           Animated.parallel([
            // 执行缩放
            Animated.timing(this.state.translateX, {
                toValue: this.translateX,
                duration: 0,
            }),
            Animated.timing(this.state.translateY, {
                toValue: this.translateY,
                duration: 0,
            })
        ]).start();
        }
      },

      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
        // console.log("用户放开",gestureState.moveX,gestureState.moveY);

        if(this.textRotateX > -rotateXDeg/2.0 && this.textRotateX < rotateXDeg/2.0){
          this.textRotateX = 0  
          this.translateX = 0;
          this.translateY = 0;
          this.setState({
            textRotateX:this.textRotateX
          })
          Animated.parallel([
          Animated.spring(this.state.translateX,
            { 
              toValue: this.translateX,
              duration: 500
            }),
          Animated.spring(this.state.translateY,
          { 
            toValue: this.translateY,
            duration: 500
          })
        ]).start()
        }else{
          this.textRotateX = -rotateXDeg
          this.translateX = offsetX - 50;
          this.translateY = (offsetY-100);
          this.setState({
            textRotateX:this.textRotateX
          })
          Animated.parallel([
            Animated.spring(this.state.translateX,
              { 
                toValue: this.translateX,
                duration: 500
              }),
            Animated.spring(this.state.translateY,
            { 
              toValue: this.translateY,
              duration: 500
            })
          ]).start()
        }
        
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
        console.log("===>>3",'另一个组件');
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  }

  getAnimatedView(event){
    let {x,y,width,height} = event.nativeEvent.layout
    console.log("xxxxxxx==>",x,y,width,height)
  }

  render() {
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
      <Animated.View style={{
        width:80,
        height:80,
        marginTop:100,
        marginLeft:50,
        backgroundColor:'red',
        borderRadius:40,
        transform:[{translateX:this.state.translateX},{translateY:this.state.translateY}]
      }}
      onLayout = {this.getAnimatedView.bind(this)}
      ref={(animatedView)=>this.animatedView = animatedView}
      >
      </Animated.View>
       <Text style={{
         fontSize:12,
         height:30,
         width:80,
         marginLeft:200,
         marginTop:30,
         backgroundColor:'cyan',
         alignItems:'center',
         justifyContent:'center',
         transform:[{ rotateX: this.state.textRotateX +'deg'}],
         marginBottom:30
       }}>{'Hello'}</Text>       
        <TouchableOpacity 
        onPress={this.checkAction.bind(this)}
        style={{width:80,height:40,alignItems:'center',justifyContent:'center',backgroundColor:'cyan'}}>
          <Text>验证</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
