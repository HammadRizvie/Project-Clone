import React from "react";
import { View ,Text, StyleSheet , Image, Button } from "react-native";

export default function Search (){
 
return(
    <View style={styles.container} >
        <Text>
            SEARCH
        </Text>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white'
    }
  })