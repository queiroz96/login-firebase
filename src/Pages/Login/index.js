import React , {useState, useEffect} from "react";
import { View, SafeAreaView, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../ConnectionFirebase/firebaseConnection';
import { useNavigation } from "@react-navigation/native";

export default function Login(){

    const navigation = useNavigation()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

  },[])

  async function Login (){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('Home')
    })
   .catch((error) =>{ 
    alert('Ops algo deu errado')
        return;

   })
        

    setEmail('')
    setPassword('')
  }
  return(

   
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
       <Image
       style={styles.logo}
       source={require('../Login/Samsonite-Logo-1996.png')}
       />
       <Text style={{marginBottom:30}}>
        CRIADOR DE VOUCHERS
      </Text>
      </View>

      

      <View style={{justifyContent:'flex-start', alignItems:'center'}}>
        <TextInput
        style={styles.input}
        placeholder="Digite o e-mail"
        value={email}
        onChangeText={(text) => setEmail(text) }
        >
        </TextInput>

        <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Digite a senha"
        value={password}
        onChangeText={(text) => setPassword(text)}

        >
        </TextInput>
      </View>
      <View style={{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
        <TouchableOpacity style={styles.btnacessar}
        onPress={Login}
        >
          <Text style={{fontSize:20, color:'#FFF'}}>
            login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
         <Text style={{marginTop:20, textDecorationLine:'underline', fontSize:15}}>
         Já possui login? Entrar
          </Text> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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