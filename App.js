import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet,BackHandler } from 'react-native';
import TabBar from './components/Tabbar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {NavigationContainer} from '@react-navigation/native' 
import {createStackNavigator} from '@react-navigation/stack'
import {Provider } from 'react-redux'
import Person from './pages/Person'
import Home from './pages/Home'
import List from './pages/List'
import store from './store';



export default function App() {
  const ref = React.useRef(null)
  const Stack = createStackNavigator();
  const [navigationHandle, setNavigationHandle] = React.useState('')
  const [stateName, setStateName] = React.useState('')


  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress", 
      () =>{return true}
    ); 
    return () => backHandler.remove();
  }, [navigationHandle]);

  useEffect(()=>{
    // console.log(stateName)
    ref.current && ref.current.navigate(navigationHandle);

  },[navigationHandle]); 

  const handleUpdateState = data => setNavigationHandle(data)
  return (
    
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>    
        <NavigationContainer ref={ref}>
          <Stack.Navigator   initialRouteName="grid">
            <Stack.Screen name="grid"   component={Home} 
               options={{
                 //remove o header do componente
                headerShown: false,
                title: 'My home',
                headerTitleStyle: {
                  paddingTop:30,
                  alignSelf: 'center',
                  justifyContent: 'center'
                },
                headerStyle: {
                   backgroundColor: '#f4511e',            
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },  
              }} 
            /> 
            <Stack.Screen name="list" component={List} options={{
              headerShown: false,
              headerLeft: null,
            }}/>  
            <Stack.Screen name="user"  component={Person} options={({navigation}) => ({
              headerShown: false,
              headerLeft: null, 
              //por padrão no ios o botão de voltar é definido como texto
              // e o headerTitle modifica esse texto
              gestureEnabled: true,
              headerTitleStyle: {
                paddingTop: 0,
                alignSelf: 'center',
                justifyContent: 'center'
              },
            })} />  
          </Stack.Navigator> 
        </NavigationContainer>    
        <StatusBar style="auto"/>
        <TabBar handleUpdateState={handleUpdateState} /> 
      </SafeAreaProvider>
    </Provider>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4511e',
    justifyContent: 'flex-end',
  },
});
