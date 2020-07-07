import React from 'react';
import { View,Text,Dimensions} from 'react-native';

// import { Container } from './styles';
const {height, width} = Dimensions.get('window')
export default function List({navigation}){
  React.useEffect(()=>{
  },[])
  return (
  <>
    <View  navigation={navigation} style={{flex: 1, height, width , backgroundColor: "#f4511e", 
      alignItems: "center", justifyContent: "center"}}>
      <Text style={{color: "white",fontSize: 50}}>List</Text>
    </View>
  </>
  )

}
  
 