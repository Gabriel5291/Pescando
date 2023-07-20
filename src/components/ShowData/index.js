import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';


export default function ShowData() {

  return (
    
    <View style={styles.container}>


     <View style={styles.userLogo}>
       <Animatable.Image animation={"flipInY"} source={require('../../assets/logo.jpg')} style={{width: '100%'}} resizeMode='contain'>
       </Animatable.Image>
     </View>
 
     <Animatable.View delay={600} animation={"fadeInUp"} style={styles.containerForm}>
       <Text style={styles.title}>
         Monitore e organize seus custos
       </Text>
       <Text style={styles.text}>
         Faça o login para começar
       </Text>
 
       <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
         <Text style={styles.buttonText}>
           Acessar
         </Text>
       </TouchableOpacity>
     </Animatable.View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#38a69d'
  },
  userLogo:{
    flex:2,
    backgroundColor:'#38a69d',
    justifyContent:'center',
    alignItems:'center'
  },
  containerForm:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:28,
    marginBottom:28
  },
  text:{
    color:'#a0a0a0',
    fontSize:18
  },
  button:{
    position:'absolute',
    backgroundColor:'#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    bottom: '15%',
    marginTop:20
  },
  buttonText:{
    fontSize:18,
    color: '#fff',
    fontWeight:'bold'
  }
})