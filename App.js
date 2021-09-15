import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import MainNavigation from './src/config/Navigation'
export default function App(){
  return(
    <View style={styles.container} >
     <MainNavigation />
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