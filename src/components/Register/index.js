import React from "react";
import { View  , Text , StyleSheet , TextInput , SafeAreaView , ImageBackground } from "react-native";
import { Button } from 'react-native-paper';
const image = { uri: "data:image/jpeg;base64,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" };

export default function Register({navigation}){
  return(
    <SafeAreaView style={styles.main_container}>
    <ImageBackground style={styles.container} source={image}  resizeMode="cover" >
      <View style={styles.header_text}>
      <Text style={{fontSize:40,color:'white'}} > 
      REGISTER
      </Text>
      </View>
      <View style={styles.midder} >
        <TextInput placeholder="USER NAME" placeholderTextColor="white" style={styles.input_field} />
        <TextInput placeholder="EMAIL" placeholderTextColor="white" style={styles.input_field} />
        <TextInput placeholder="PASSWORD" placeholderTextColor="white" secureTextEntry={true} style={styles.input_field} />
        <TextInput placeholder="CONFIRM PASSWORD" placeholderTextColor="white" style={styles.input_field} />
        <TextInput placeholder="MOBILE" placeholderTextColor="white" keyboardType='numeric' style={styles.input_field} />
        <Button style={styles.button1} mode="contained"
        onPress={()=>{navigation.navigate('Login')}}
        >
        <Text style={{fontSize:20}} >
        REGISTER
        </Text>
      </Button>  
      </View>
  </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main_container:{
    flex: 1,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'space-between',
    justifyContent:'space-around',
    backgroundColor:'black',

  },
  header_text:{
    width:'70%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center',
  },
  midder:{
    width:'70%',
    height:'50%',
    justifyContent:'space-around',
    justifyContent:'space-between'
  },
  input_field:{
    width:'100%',
    height:'12%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingLeft:20,
    color:'white',
    fontSize:15
  },
  button1:{
    width:'100%',
    height:'12%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(169,105,106,0.8)',
    borderColor:'transparent',

  }
})
