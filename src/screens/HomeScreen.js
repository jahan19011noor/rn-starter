import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>New App</Text>
      <Button
        onPress={() => {
          // props.navigation.navigate("Components");
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          // props.navigation.navigate("List");
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => {
          // props.navigation.navigate("List");
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Go to Counter"
        onPress={() => {
          // props.navigation.navigate("List");
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Go to color controller"
        onPress={() => {
          navigation.navigate("Controller");
        }}
      />
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("List");
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
