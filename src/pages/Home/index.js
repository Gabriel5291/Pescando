import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import Coletas from '../../components/Coletas';

export default function Home() {
  return (
    <View style={styles.container}>

        <Header name="Usuário" />

        <Balance saldo="9.000,00" gastos="-4.527,00" />

        <Actions/>

        <Coletas/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  }
});
