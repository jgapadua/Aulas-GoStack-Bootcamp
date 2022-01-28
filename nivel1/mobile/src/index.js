import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

//não possuem valor semântico e não possuem estilização própria
//Todos os componentes possuem por padrão "display: flex"

//View ⇒ div, footer, header, main, aside, section
//Text ⇒ p, span, strong, h1, h2, h3, ...
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.title}>Olá mundo</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});