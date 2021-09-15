import React from "react";
import { View , StyleSheet,Text , Image, Button} from "react-native";
const logo = require('../../../images/1231.png')

export default function SplashScreenView ({navigation}){
 
return(
    <View style={styles.container} >
    <Image source={logo} >    
    </Image>
    <View>
    <Button
    title="PRESS IT"
    onPress={()=>navigation.navigate('SearchScreen')} />
    </View>
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

   // Splash Screen...