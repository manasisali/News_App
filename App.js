import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Mynewscard from './components/mynewscard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'green',fontSize:40,fontWeight:'700'}}>
        The State News</Text>
      <View style={styles.allnewscontainer}>
        <Mynewscard/>
      </View>
      {/* <View style={styles.mynewscard}>
        <Text style={styles.newstitle}>This is my title</Text>
        <View style={{flex:0,width:'100%',alignItems:'center'}}>
          <Image source={{uri:'data:image/jpeg;base64,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'}}
          style={{width:'100%',height:200}}/>
        </View>
        <Text style={styles.mydescription}>This is my description</Text>
        <TouchableOpacity style={styles.readmorecontainer}>
          <Text style={styles.readmorebtn}>Read More {'>'}</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor:'#ebffe8',
    marginTop:25,
    alignItems:'center'
  },
  
});