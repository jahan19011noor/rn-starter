import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = () => {
    
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Box Screen</Text>
            <View style={styles.textStyle2Parent}>
                <Text style={styles.textStyle2}>Box Screen</Text>
            </View>
            <Text style={styles.textStyle3}>Box Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // alignItems: 'flex-end'
    },
    textStyle1: {
        height: 50,
        width: 50,
        backgroundColor:'red'
        // flex:4
    },
    textStyle2: {
        height: 50,
        width: 50,
        backgroundColor: 'green'
    },
    textStyle2Parent: {
        height: 100,
        justifyContent: 'flex-end'
    },
    textStyle3: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
        // flex:3
    }
})

export default BoxScreen