import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

export default function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  return (
    <View style={styles.wrapper}>  

    <Text style={styles.text}>Nom : {name}</Text>
      <TextInput 
      style={styles.textInput} 
      onChangeText={(text) => setName(text)}
      placeholder="Indiquer votre nom"
       />


    <Text style={styles.text}>Age : {age}</Text>
      <TextInput 
      style={styles.textInput} 
      onChangeText={(text) => setAge(text)}
      placeholder="Indiquer votre age"
      keyboardType='numeric'
       />


    </View>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    marginTop:50,
    alignItems: "center",
    height: 200
  },
  textInput : {
    height:40,
    borderColor: "grey",
    borderWidth:1,
    padding:10,
    margin:9,
    width:"90%"
  },
  text: {

  }

})