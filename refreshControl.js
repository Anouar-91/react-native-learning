import React, {useState} from 'react';
import {View, Text, StyleSheet, Button,Alert, TextInput, FlatList, ScrollView, RefreshControl} from 'react-native'

export default function App() {

  const obj = [
    { name:"Stan", age:45},
    { name:"Remy", age:45},
    { name:"Steph", age:45},
    {name:"Daniel", age:45},
    { name:"test", age:45},
    { name:"veerv", age:45},

  ]
  const [family, setFamily] = useState(obj)
  const [refresh, setRefresh] = useState(false)
  const [inverted, setInverted] = useState(false)

  const renderItem = ({item}) => {
    return(
    <View style={styles.listView}>
      <Text style={styles.textList}>{item.name} | {item.age}</Text>
    </View>
    )
  }
  const onRefresh = () => {
      setRefresh(true)
      setInverted(!inverted)
      setRefresh(false)
  }
  return (
    <View style={styles.container}>  
    <FlatList 
    data={family}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
    horizontal
    inverted={inverted}
    refreshControl= {
      <RefreshControl 
      refreshing={refresh}
      onRefresh={onRefresh}
      />
    }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",

  },
  listView:{
    padding: 40,
    backgroundColor: "deepskyblue",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
    fontSize:40,
    marginRight:10
  },
  textList:{
    color: "white",
    padding:9
  }

})
