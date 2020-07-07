import React from 'react';
import { View,Text ,Dimensions, Button} from 'react-native';
import {useIsFocused} from '@react-navigation/native'
import {connect} from 'react-redux'
const {width,height} = Dimensions.get('window')

const Home = ({navigation, dispatch}) => {

  React.useEffect(()=>{
    
  },[])
  return ( 
    <View  navigation={navigation} style={{flex: 1, height, width , backgroundColor: "#f4511e", 
    alignItems: "center", justifyContent: "center"}}>
    <Text style={{color: "white",fontSize: 50}}>Home</Text>
    {/* <Button title="Go to Details" onPress={ () => {
      navigation.navigate('user',{
        name: 'ola'
      })
    }}>home</Button>  */}
  </View>
  );
}

export default connect()(Home);