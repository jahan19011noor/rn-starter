import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
    const[passwor, setPassword] = useState('');
    const[error, setError] = useState('');
    const setPass = (value) => {
        if(value.length < 5)
        {
            setError("Password must be longer then 5 characters")
        }
        else
        {
            setError("")
        }
        setPassword(value)
        return;
    }
    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setPass(newValue)}
            />
            <Text>The password is {name}</Text>
            {error ? <Text>{error}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen