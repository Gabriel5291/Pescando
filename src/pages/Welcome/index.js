import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation={"flipInY"}
          source={require("../../assets/logoLucas.png")}
          style={{ width: "300%" }}
          resizeMode="contain"
        ></Animatable.Image>
        <Animatable.Text
          animation={"fadeInUp"}
          delay={100}
          style={styles.textLogo}
        ></Animatable.Text>
      </View>

      <Animatable.View
        delay={300}
        animation={"fadeInUp"}
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore e organize seus custos e lucro de forma simples e rápida
        </Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerForm: {
    flex: 2,
    backgroundColor: "#fff",
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 28,
    marginHorizontal: "3%",
    textAlign: "center",
  },
  text: {
    color: "#a0a0a0",
    fontSize: 18,
    marginTop: 48,
    marginBottom: 28,
    marginHorizontal: "3%",
    textAlign: "center",
  },
  textLogo: {
    fontSize: 40,
    marginTop: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    bottom: "15%",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
