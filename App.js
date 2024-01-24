import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import BottomTabNavigation from './Navigations/BottomTabNavigation';
import ProductDetails from './Screens/ProductDetails/ProductDetails';
import Products from './Screens/Products';
import Login from './Screens/Home/Login';
import AddItem from './Screens/Home/AddItem';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular:require("./assets/fonts/Poppins-Regular.ttf"),
    light:require("./assets/fonts/Poppins-Light.ttf"),
    bold:require("./assets/fonts/Poppins-Bold.ttf"),
    medium:require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold:require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold:require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView =useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  if (!fontsLoaded){
    return null;
  }
  return (
    <>


    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name='Bottom Navigation'
      component={BottomTabNavigation}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Login'
      component={Login}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Products'
      component={Products}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='AddItem'
      component={AddItem}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='ProductDetails'
      component={ProductDetails}
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:"bold",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily:"bold",
    
  },
});
