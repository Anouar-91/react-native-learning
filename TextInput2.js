import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList,Alert, TextInput, FlatList, ScrollView, RefreshControl} from 'react-native'

export default function App() {
  const [name, setName] = useState("")

  return (
    <View style={styles.container}>  
    <TextInput 
      style={styles.textInput} 
      onChangeText={(text) => setName(text)}
      placeholder="Indiquer votre nom"
      multiline
       />
    <TextInput 
      style={styles.textInput} 
      onChangeText={(text) => setName(text)}
      placeholder="Indiquer votre nom"
      maxLength={9}
       />
    <TextInput 
      style={styles.textInput} 
      onChangeText={(text) => setName(text)}
      placeholder="Indiquer votre nom"
      secureTextEntry
       />
    <TextInput 
      style={styles.textInput} 
      onChangeText={(text) => setName(text)}
      placeholder="Indiquer votre nom"
      editable={false}
       />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1

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
