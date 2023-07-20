import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons'

export default function Data() {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>

     <View style={styles.userLogo}>
       <Animatable.View delay={100} animation={"fadeInDown"} style={{width: '50%'}} resizeMode='contain'>
        <Feather name="user" size={150} color="#fff" />
       </Animatable.View>
     </View>
 
     <Animatable.View delay={100} animation={"fadeInUp"} style={styles.containerForm}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>
         Informação
        </Text>
        <Text style={styles.text}>
         Informação
        </Text>

        <Text style={styles.title}>
         Informação
        </Text>
        <Text style={styles.text}>
         Informação
        </Text>
        
        <Text style={styles.title}>
         Informação
        </Text>
        <Text style={styles.text}>
         Informação
        </Text>

        <Text style={styles.title}>
         Informação
        </Text>
        <Text style={styles.text}>
         Informação
        </Text>
        
        <Text style={styles.title}>
         Informação
        </Text>
        <Text style={styles.text}>
         Informação
        </Text>

        <Text style={styles.title}>
         Informação
        </Text>
        <Text style={styles.text}>
         Informação
        </Text>

        <Text style={styles.title}>
         Informação
        </Text>
        <Text style={styles.text}>
         Informação
        </Text>
 
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>
           Sair
          </Text>
        </TouchableOpacity>

      </ScrollView>
       
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
    flex:1,
    backgroundColor:'#38a69d',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  containerForm:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:30,
    marginBottom:10
  },
  text:{
    color:'#a0a0a0',
    fontSize:15
  },
  button:{
    backgroundColor:'#e74c3c',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    marginBottom: 40
  },
  buttonText:{
    fontSize:18,
    color: '#fff',
    fontWeight:'bold'
  }
})