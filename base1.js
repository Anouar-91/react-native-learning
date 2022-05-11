import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.wrapper}>  
      <Text style={styles.text}>{count}</Text>
      <View     style={styles.button}>
        <Button
          onPress={() => setCount(count + 1)}
          title="+1"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    marginTop:50,
    flexDirection:"column"
  },
  text: {
    textAlign: "center",
    fontSize:50

  },
  button: {
    padding: 20,
    color: "red",
    backgroundColor:"purple"
  }

})