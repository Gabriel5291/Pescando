import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({ saldo, gastos }) {
 return (
   <View style={styles.container}>
    <View style={styles.item}>
        <Text style={styles.itemTitle}>Lucro</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
        </View>
    </View>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>Custos</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.expenses}>{gastos}</Text>
        </View>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 10,
        paddingEnd: 10,
        paddingTop: 22,
        paddingBottom: 22,
        marginTop: 10,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
    },
    item:{

    },
    itemTitle:{
        fontSize: 20,
        color: '#000',
        fontWeight:'bold'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol:{
        color: '#000',
        marginRight: 6,
        fontWeight:'bold'
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c'
    }
})