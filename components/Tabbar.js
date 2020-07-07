import * as React from 'react';
import {View,Text, SafeAreaView, Dimensions,StyleSheet, Animated, Alert } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import StaticTabbar from './StaticTabbar'
const {width} = Dimensions.get('window');
const height = 50;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);


const tabs = [
  {name: 'grid'},
  {name: 'list'},
  {name: 'refresh-cw'},
  {name: 'box'},
  {name: 'user'},
]
const tabWidth = width / tabs.length; 

const tab =  shape.line()
  .x(d => d.x)
  .y(d => d.y)
  .curve(shape.curveBasis)([
    {x: width - 25, y: 0},
    {x:width + 3, y:0},
    // {x:width + 15, y:10},
    {x:width + 22, y:height / 2 + 10},
    {x:width + tabWidth - 18, y: height / 3 + 18},
    // {x:width + tabWidth - 15, y:10},
    {x:width + tabWidth - 3, y:0},
    {x:width + tabWidth + 26 , y:0},
  ]);

const left  = shape.line()
  .x(d => d.x)
  .y(d => d.y)
  ([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);
const right = shape.line()
  .x(d => d.x) 
  .y(d => d.y)
  ([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: height},
    {x: 0 , y: height},
    {x: 0 , y: 0},
  ]);

const d = `${left} ${tab} ${right}`;


export default class Tabbar extends React.Component {
  value = new Animated.Value(- width);

  
  constructor(props) {
    super(props)
    this.state = {someVar: ''};
  }

  handler= (someArg) => {
    this.props.handleUpdateState(someArg)
  }
  sertificIndex(){

  }
  
  render(){
    
    const {value: translateX}  = this
     return (
        <>
          <View {...{width, height}} >  
            <AnimatedSvg width={width * 2.5}{...{height}} style={{
              transform: [{translateX}]}}>
              <Path {...{d}} fill="white"/>
            </AnimatedSvg>
            <View style={{...StyleSheet.absoluteFill, backgroundColor:'transparent'}}>
              <StaticTabbar 
                handler={this.handler}
                value={translateX}
                 {...{tabs}}/>
            </View>
          </View> 
          <SafeAreaView style={styles.SafeAreaView}/>
        </>
     )
  }
}
const styles = StyleSheet.create({
  SafeAreaView:{
    backgroundColor: 'transparent'
  }
})