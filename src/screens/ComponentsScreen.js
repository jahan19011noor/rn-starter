import React from "react"; //makes different components to work together
import { Text, StyleSheet, View } from "react-native"; //takes info from differet components and use it to show contents on the mobile device

const ComponentsScreen = () => {
  const greeting = "Noor";
  return (
    <View>
      <Text style={styles.textStyle}>
        Getting started with Reactive Native!
      </Text>
      <Text style={styles.subHeaderStyle}>My name is: {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
