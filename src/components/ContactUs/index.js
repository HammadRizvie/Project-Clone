import React from "react";
import { View ,Text, StyleSheet , Image, Button } from "react-native";

export default function ContactUs (){
 
return(
    <View style={styles.container} >
        <Text>
         CONTACT US
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