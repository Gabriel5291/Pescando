import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import Header2 from '../../components/Header2';

export default function App() {
  const data = [
    { id: 1, name: 'kroyeri', age: 25, sell: 50 },
    { id: 2, name: 'rosa', age: 30, sell: 80 },
    { id: 3, name: 'branco', age: 35, sell: 20 }
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Header2 name={"Adicione os dados da coleta"}/>

      <Animatable.View delay={50} animation={"fadeInUp"} style={styles.viewContent}>

        <Text style={styles.date}>Insira os dados da coleta:</Text>

        <Text style={styles.tittle}>Espécie</Text>
        <TextInput placeholder="Digite a espécie" style={styles.input}/>

        <Text style={styles.tittle}>Quantidade coletada</Text>
        <TextInput placeholder="Digite a quantidade" style={styles.input}/>

        <Text style={styles.tittle}>Valor/kg</Text>
        <TextInput placeholder="Digite o valor/kg" style={styles.input}/>

        <Text style={styles.tittle}>Data de retorno</Text>
        <TextInput placeholder="Digite a data de retorno da embarcação" style={styles.input}/>

        <Text style={styles.tittle}>Custos</Text>
        <TextInput placeholder="Digite o valor dos custos desta coleta" style={styles.input}/>

      </Animatable.View>

      <View style={styles.viewButton}>

      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AddSuccess')}>
          <Text style={styles.buttonText}>
           Adicionar Dados
          </Text>
      </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },
  button:{
    backgroundColor:'#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontSize:18,
    color: '#fff',
    fontWeight:'bold'
  },
  date:{
    marginTop:20,
    fontSize:18,
    fontWeight:'bold',
    marginLeft: 20
  },
  viewButton:{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  viewContent:{
    flex: 9,
    backgroundColor: '#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  tittle:{
    fontSize:20,
    marginHorizontal:28,
    marginTop: 15
  },
  input:{
    borderBottomWidth:1,
    height:40,
    fontSize:16,
    marginHorizontal:28,
    marginBottom:15
  },
});
