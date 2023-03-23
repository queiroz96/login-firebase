import React , {useState, useEffect} from "react";
import { View, SafeAreaView, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App(){

  return(

   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name ="Login" 
      component={Login}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name ="Home" 
      component={Home}
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
   </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1
  },

  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width:250,
    height:250,
    resizeMode:'contain',
    marginBottom:-50
  },

  input:{
    justifyContent:'center',
    alignItems:'center', 
    width:'90%',
    height:50, 

  borderWidth:1, 
  marginBottom:20, 
  fontSize:18, 
  borderRadius:6,
  paddingStart:10
  },

  btnacessar:{
    width:'90%',
    backgroundColor:'#121212',
    height:50,
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:5
  }
})