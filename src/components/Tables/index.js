import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Tables({ id, name, qnt, price }) {
    
    const data1 = [{ id: id, name: name, qnt: qnt, price: price }];

    const data = [
        { id: 1, name: 'kroyeri', qnt: 25, price: 50 },
        { id: 2, name: 'rosa', qnt: 30, price: 80 },
        { id: 3, name: 'branco', qnt: 35, price: 20 }
      ];
  
    return (
        /*<View style={styles.containerInner}>
  
            <Text style={styles.date}>Período: 01/09/2022 - 31/09/2022</Text>

            <View style={styles.dataTable}>

                <DataTable>
                    <DataTable.Header>
                    <DataTable.Title>Espécie</DataTable.Title>
                    <DataTable.Title>Quantidade</DataTable.Title>
                    <DataTable.Title>Valor/kg</DataTable.Title>
                    </DataTable.Header>

                    {data.map(item => (
                    <DataTable.Row key={item.id}>
                        <DataTable.Cell>{item.id}</DataTable.Cell>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell>{item.qnt}</DataTable.Cell>
                        <DataTable.Cell>R$ {item.price}</DataTable.Cell>
                    </DataTable.Row>
                    ))}
                </DataTable>

            </View>

        </View>*/

        <View>

        <View style={styles.containerInner}>

          <Text style={styles.date}>Período: 01/09/2022 - 31/09/2022</Text>

          <View style={styles.dataTable}>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>ID</DataTable.Title>
                <DataTable.Title>Espécie</DataTable.Title>
                <DataTable.Title>Quantidade</DataTable.Title>
                <DataTable.Title>Valor/kg</DataTable.Title>
              </DataTable.Header>

              {data.map(item => (
                <DataTable.Row key={item.id}>
                  <DataTable.Cell>{item.id}</DataTable.Cell>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.qnt}</DataTable.Cell>
                  <DataTable.Cell>R$ {item.price}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>

          </View>

          </View>

          <View style={styles.containerInner}>

          <Text style={styles.date}>Período: 01/08/2022 - 30/08/2022</Text>

          <View style={styles.dataTable}>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>ID</DataTable.Title>
                <DataTable.Title>Espécie</DataTable.Title>
                <DataTable.Title>Quantidade</DataTable.Title>
                <DataTable.Title>Valor/kg</DataTable.Title>
              </DataTable.Header>

              {data.map(item => (
                <DataTable.Row key={item.id}>
                  <DataTable.Cell>{item.id}</DataTable.Cell>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.qnt}</DataTable.Cell>
                  <DataTable.Cell>R$ {item.price}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>

          </View>

          </View>

          <View style={styles.containerInner}>

          <Text style={styles.date}>Período: 01/07/2022 - 31/07/2022</Text>

          <View style={styles.dataTable}>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>ID</DataTable.Title>
                <DataTable.Title>Espécie</DataTable.Title>
                <DataTable.Title>Quantidade</DataTable.Title>
                <DataTable.Title>Valor/kg</DataTable.Title>
              </DataTable.Header>

              {data.map(item => (
                <DataTable.Row key={item.id}>
                  <DataTable.Cell>{item.id}</DataTable.Cell>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.qnt}</DataTable.Cell>
                  <DataTable.Cell>R$ {item.price}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>

          </View>

          </View>

          </View>

    );
  }
  
  const styles = StyleSheet.create({
    date:{
      marginTop:20,
      fontSize:18,
      fontWeight:'bold',
      marginLeft: 20
    },
    dataTable:{
      margin:16
    },
    containerInner:{
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: '#ffffff',
      borderRadius: 30,
      marginBottom: 0,
      marginTop:30,
    }
  });
  