import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
// const COLOR_DECREMENT = 50;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

  switch(action.type)
  {
    case 'change_red':
      // never going to change the state value or object directly
      // rebuild the entire thing from scretch
      
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
        
      
      // return {...state, red: state.red + action.amount}
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
        
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
        
    default: 
      return state;
  }

}

const ControlColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const {red, green, blue} = state;
  
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ControlColorScreen;
