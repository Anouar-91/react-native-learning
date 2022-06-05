import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exemple = () => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.parent}>
            <Text style={styles.text}>Text 1, </Text>
            <Text style={styles.text}>Text 1</Text>
        </Text>
        <Text style={styles.parent2}>
            <View>            
                <Text>Text <Text>Toto</Text> <Text>tata</Text></Text>
                <Text style={styles.text}>Text 2</Text>
            </View>
        </Text>
    </View>
  )
}

export default Exemple

const styles = StyleSheet.create({
    textContainer: {
        height: 300, 
        width : "75%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color:"red"
    }
    ,
    parent: {
        fontWeight:"bold"
    },
    parent2: {
       color:"green"
    }
})