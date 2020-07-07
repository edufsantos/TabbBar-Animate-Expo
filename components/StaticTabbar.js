import React, {Component} from 'react';
import { View, TouchableNativeFeedback, StyleSheet,Animated, Dimensions } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'
// import { State } from 'react-native-gesture-handler';
import {connect} from 'react-redux'


const {width} = Dimensions.get('window')
class StaticTabbar extends Component {
  
  values = [] 
  constructor(props){
    super(props);
    const {tabs} =this.props
    this.values = tabs.map((tab, index)=> new Animated.Value(index === 0 ? 1 : 0) ) 
  }
 
  onPress = (index) => {
    const {value,tabs,handler} = this.props;
    // console.log(index)
    const {name} = tabs[index]
    // console.log('ROTAS',this.props.rotas[0]);

    if( name === 'user'){ 
      handler(name)
    }else if( name === 'grid'){    
      handler(name)
    }else if( name === 'list'){    
      handler(name)
    }else if( name === 'refresh-cw'){    
      handler(name)
    }else if( name === 'box'){    
      handler(name)
    }
    const tabWidth = width / tabs.length;
    Animated.sequence([
      ...this.values.map(value => 
      Animated.timing(value,{
        toValue: 0,
        duration: 15,
        useNativeDriver: true
      })),
      Animated.parallel([
        Animated.spring(this.values[index],{
          toValue: 1,
          useNativeDriver: true
        }),
        Animated.spring(value, { 
          toValue: -width + tabWidth * index,
          useNativeDriver: true,
        })
      ])
    ]).start()
  }
  render(){
    const {tabs, value} = this.props;
    const tabWidth = width / tabs.length
    const cliked = true;
    return(
     <View style={styles.container}>
      {
        tabs.map(({name}, key) =>{
          const activeValue = this.values[key] 
          const opacity = value.interpolate({
            inputRange: [-width + tabWidth * (key - 1), -width + tabWidth * key , -width + tabWidth * (key + 1)],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
          })
          const translateY = activeValue.interpolate({
            inputRange: [0,1],
            outputRange:  [100, 0]
          })
          return(
          <React.Fragment {...{key}}>
            <TouchableNativeFeedback onPress={ () => this.onPress(key)}  >           
                <Animated.View style={[styles.tab, {opacity}]}> 
                    <Icon color="#3214" size={25} {...{name}}/> 
                 </Animated.View>   
            </TouchableNativeFeedback>
            <Animated.View style={{position: 'absolute', width: tabWidth, left: tabWidth * key, height: 12,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{translateY}]
              }}> 
              <View style={styles.circle}>
                <Icon  size={25} {...{name}}/>
              </View>
           </Animated.View>
          </React.Fragment>
          )   
        }) 
      }
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  tab: {
    top: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  circle:{
    height: 40,
    width:40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center' 
  }
});

export default connect(state => ({
  rotas: state.rotas,
}))(StaticTabbar)

