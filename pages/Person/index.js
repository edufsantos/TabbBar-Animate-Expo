import React, {useState} from 'react';
import { View,Text,Dimensions, Button} from 'react-native';
import {useIsFocused, CurrentRenderContext} from '@react-navigation/native';
import {connect} from 'react-redux'
// import { Container } from './styles';
const {height, width} = Dimensions.get('window')

function Person({route, navigation, dispatch}){
  const isFocused = useIsFocused();

  React.useEffect(()=>{
    if(isFocused){
      const name = 'user' 
      dispatch({
        type: 'ADD_ROTAS',
        name
     }) 
    }else{
      return
    } 
  },[]);
  function backRouteHome(){
    return navigation.navigate('grid')
  }
  return (
  <>
    <View  navigation={navigation} style={{flex: 1, height, width , backgroundColor: "#f4511e", 
      alignItems: "center", justifyContent: "center"}}>
      <Text style={{color: "white",fontSize: 50}}>Person</Text>
     {/* <Button  title="home" onPress={backRouteHome}/> */}
    </View>
  </>
  )

}
export default  connect()(Person)
 