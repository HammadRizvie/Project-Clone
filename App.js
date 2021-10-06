import React from 'react';
import { View , StyleSheet  , Text } from 'react-native';
import MyStack from './src/config/Navigation'
export default function App(){
  return(
    <View style={styles.container} >
     <MyStack />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'white'
  }
})