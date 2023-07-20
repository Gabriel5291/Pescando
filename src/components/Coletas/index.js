import { StyleSheet, Text, View, FlatList } from 'react-native';

import Movements from '../../components/Movements';

const list = [
    {
      id: 1,
      label: 'Coleta kroyeri',
      value: '300,90',
      date: '27/09/2022',
      type: 0 // despesas
    },
    {
      id: 2,
      label: 'Coleta rosa',
      value: '2500,00',
      date: '17/09/2022',
      type: 1 // receita
    },
    {
      id: 3,
      label: 'Coleta branco',
      value: '7.200,00',
      date: '14/09/2022',
      type: 1 // receita
    },
    {
      id: 4,
      label: 'Coleta branco',
      value: '4.500,00',
      date: '11/09/2022',
      type: 1 // receita
    },
    {
      id: 5,
      label: 'Coleta rosa',
      value: '1.200,00',
      date: '07/09/2022',
      type: 1 // receita
    }
  ]

export default function Coletas(){
    return (
    <View style={styles.container}>

        <View style={styles.container2}>

            <Text style={styles.title}>Últimas Coletas</Text>

            <Text style={styles.title}>Valor</Text>

        </View>

        <View style={styles.container}>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={ (item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Movements data={item}/>}
            />

        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',

    },
    container2: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
  
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 25,
      marginLeft: 15,
      marginBottom:15,
      marginTop:30,
      color: '#000'

    },
    list:{
      marginStart: 14,
      marginEnd: 14
    }
  });
  
