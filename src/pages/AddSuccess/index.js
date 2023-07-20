import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function AddSuccess() {

    const navigation = useNavigation();

 return (
   <View style={styles.container}>

    <Animatable.View delay={50} animation={"fadeInUp"} style={styles.viewContent}>

        <Text style={styles.text}>
        Dados adicionados com sucesso!
        </Text>

        <Text style={styles.text}>
        Clique no botão abaixo para voltar a tela inicial:
        </Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Data')}>
          <Text style={styles.buttonText}>
           Finalizar
          </Text>
        </TouchableOpacity>

    </Animatable.View>

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
    },
    viewContent:{
        flex: 9,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 25,
        paddingStart:'5%',
        paddingEnd:'5%',
        marginHorizontal: 30,
        marginVertical: 150
    },
    buttonText:{
        fontSize:18,
        color: '#fff',
        fontWeight:'bold',
    },
    text:{
        fontSize:23,
        fontWeight:'bold',
        marginHorizontal:20,
        textAlign:'center',
        marginBottom:50
    }
})