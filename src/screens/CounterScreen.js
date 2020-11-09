import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch(action.type)
  {
    case 'increase_counter':
      return state.counter + action.payload > 10
        ? state
        : {...state, counter: state.counter + action.payload }
      // return {...state, counter: state.counter + action.payload }
    case 'decrease_counter':
      return state.counter - action.payload < 0
      ? state
      : {...state, counter: state.counter - action.payload }
      // return {...state, counter: state.counter - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, {counter: 0})
  const {counter} = state;
  // let counter = 0;
  // array destructuring
  // const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => 
          // counter++;
          // console.log(counter);
          // setCounter(counter + 1);
          dispatch({type: 'increase_counter', payload: 1})
        }
      />
      <Button
        title="Decrease"
        onPress={() => 
          // counter--;
          // console.log(counter);
          // setCounter(counter - 1);
          dispatch({type: 'decrease_counter', payload: 1})
        }
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
