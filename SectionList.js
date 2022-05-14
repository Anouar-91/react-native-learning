import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList,Alert, TextInput, FlatList, ScrollView, RefreshControl} from 'react-native'

export default function App() {

  const obj = [
    { 
      role: "pere", 
      data:["homer", 45]
    },
    { 
      role: "mere", 
      data:["marge", 45]
    },
    { 
      role: "daughter", 
      data:["Lisa", 15]
    },
    { 
      role: "son", 
      data:["bart", 25]
    },
    { 
      role: "maggie", 
      data:["baby", 5]
    }

  ]
  const [family, setFamily] = useState(obj)


  const renderItem = ({item}) => {
    return(
      <View style={styles.listViewItem}>
        <Text style={styles.textListData}>{item}</Text>
      </View>
      )
  }

  return (
    <View style={styles.container}>  
      <SectionList 
        sections={family}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({section}) => (
          <View style={styles.listView}>
          <Text style={styles.textList}>{section.role}</Text>
        </View>
   ) }
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",

  },
  listView:{
    padding: 10,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
    fontSize:40,
    marginRight:10
  },
  textList:{
    color: "white",
    padding:10,
  },
  textListData: {
    color: "grey",
    padding:2,
    fontSize:19
  }, listViewItem:{

  }

})
