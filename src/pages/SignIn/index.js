import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import Home from '../Home';

export default function SignIn(){
  const navigation = useNavigation();

 return (
   <View style={styles.container}>

    <Animatable.View animation={"fadeInLeft"} delay={100} style={styles.containerHeader}>
      <Text style={styles.message}>Login</Text>
    </Animatable.View>

    <Animatable.View delay={100} animation={'fadeInUp'} style={styles.containerForm}>

      <Text style={styles.tittle}>Email</Text>
      <TextInput placeholder="Digite seu email" style={styles.input}/>

      <Text style={styles.tittle}>Senha</Text>
      <TextInput placeholder="Digite sua senha" style={styles.input}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se aqui</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Home')} style={styles.buttonBypass}>
        <Text style={styles.BypassText}>Ou acesse sem conta</Text>
      </TouchableOpacity>

    </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#38a69d',
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart:'5%',
  },
  message:{
    fontSize:28,
    fontWeight:'bold',
    color:'#fff'
  },
  containerForm:{
    backgroundColor: '#fff',
    flex:1,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd: '5%',
  },
  tittle:{
    fontSize:20,
    marginTop:38
  },
  input:{
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:16
  },
  button:{
    backgroundColor:'#38a69d',
    width: '100%',
    borderRadius:4,
    paddingVertical:8,
    marginTop:25,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color: '#fff',
    fontSize:18,
    fontWeight:'bold',
  },
  buttonRegister:{
    marginTop:14,
    alignSelf:'center'
  },
  registerText:{
    color:'#a1a1a1'
  },
  buttonBypass:{
    marginTop:14,
    alignSelf:'center',
  },
  BypassText:{
    color:'#a1a1a1'
  }
})