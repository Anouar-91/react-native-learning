import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native'

export default function App() {
  const obj = [
    {id:1, name:"Anouar", age:14},
    {id:2, name:"Samy", age:149},
    {id:3, name:"mudffy", age:34},
    {id:4, name:"homere", age:54},
    {id:5, name:"test", age:54},
    {id:6, name:"zoro", age:54},
    {id:7, name:"nami", age:54}
  ]
  const [family, setFamily] = useState(obj)

  return (
    <View style={styles.wrapper}>  
    <ScrollView>
      {family.map((member) => {
        return (
          <View key={member.id} style={styles.viewList}>

              <Text style={styles.text}>Nom: {member.name}</Text>

              <Text style={styles.text}>Age: {member.age}</Text>
          </View>
        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewList:{
    marginTop:30,
    backgroundColor: "purple", 
    padding:19
  },
  text:{
    color:"white"
  }

})