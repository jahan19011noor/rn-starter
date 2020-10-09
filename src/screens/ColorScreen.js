import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          // ... means make a copy of colors and then update the copy
          setColors([...colors, randomRgb()]);
        }}
      />
      {/* <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
      ></View> */}
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        // {item} item destructured from colors array, one item taken at a time
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const style = StyleSheet.create({});

export default ColorScreen;
