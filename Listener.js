import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet, TextInput, Keyboard, Alert} from 'react-native'

export default function App() {
  const [name, setName] = useState("")

  const _keyboardDidShow = () => {
    alert('Veuillez remplir le champs text')
  }
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
  }, [])

  return (
    <View style={styles.container}>  
        <TextInput style={styles.textInput} />
        <Button title="Valider"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",


  },
  textInput:{
    borderColor: "grey",
    borderWidth:1,
    padding:10,
    margin:9,
    width:"90%",
    marginTop:60,
  }

})
