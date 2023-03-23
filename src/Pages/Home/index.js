import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import firebase from "../../ConnectionFirebase/firebaseConnection";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation()

async function Logout(){
    await firebase.auth().signOut()
    .then(() => {
        alert ('Deslogado com sucesso')
        navigation.navigate('Login')
      })
   
}

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.bemvindo}>
                    Bem vindo!!! 
                </Text>
                <TouchableOpacity style={styles.btnlogout} onPress={Logout}>
                    <Text style={{fontSize:18, color:'#FFF', fontWeight:'bold'}}>
                        Logout 
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
         flex:1,
        justifyContent:'center', 
        alignItems:'center'
    }, 

    bemvindo:{
        fontSize:25
    },

    btnlogout:{
        backgroundColor:'red',
        marginTop:50,
        width:100, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:9, 
        borderWidth:1
    }


    
})