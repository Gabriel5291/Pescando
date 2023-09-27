import React, { useMemo } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

import Header2 from "../../components/Header2";
import Tables from "../../components/Tables";
import Table from "../../components/Table";

import mData from "/MOCK_DATA.json";

export default function App() {
  const data = useMemo(() => mData, []);

  /** @type import('@tanstack/react-table').columnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Especie",
      accessorKey: "especie",
      footer: "Especie",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Data",
      accessorKey: "data",
      footer: "Data",
    },
  ];

  /*   const data = [
    { id: 1, name: "kroyeri", age: 25, sell: 50 },
    { id: 2, name: "rosa", age: 30, sell: 80 },
    { id: 3, name: "branco", age: 35, sell: 20 },
  ]; */

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header2 name={"Dados das últimas coletas"} />

      <Animatable.View
        delay={50}
        animation={"fadeInUp"}
        style={styles.viewContent}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Table data={data} columns={columns} />
        </ScrollView>
      </Animatable.View>

      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Add")}
        >
          <Text style={styles.buttonText}>Adicionar Coleta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  button: {
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  date: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  dataTable: {
    margin: 16,
  },
  viewButton: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContent: {
    flex: 9,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  containerInner: {
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    marginBottom: 0,
    marginTop: 30,
  },
});
