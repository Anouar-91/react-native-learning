import React from 'react';
import {View,StyleSheet} from 'react-native'
import Exemple from './components/Exemple';

export default function App() {

  return (
    <View style={styles.container}>  

      <Exemple />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1, 
    justifyContent: "center",
    backgroundColor: "orange",
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
