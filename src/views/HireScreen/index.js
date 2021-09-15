import React, { useState } from 'react';
import { View , Text , StyleSheet , Image , TouchableHighlight, Alert } from 'react-native';
import { Button } from 'react-native-paper';
const logo = require('../../../images/21404656.png')
const nextLogo = require('../../../images/chevron-down-2.png')
const displayBar3 = require('../../../images/bar1.png')
const displayBar2 = require('../../../images/bar2.png')
const displayBar1 = require('../../../images/bar3.png')
export default function HireScreen({navigation}){
  const [displayBar]=useState([
    displayBar1,
    displayBar2,
    displayBar3
  ])
  return(
    <View style={styles.container} >
    <View style={styles.main_container}>
    <View style={styles.sub_first_container}>
    <Image source={logo} style={{width:217,height:210}}></Image>
    </View>
    <View style={styles.sub_second_container}>
    <Text style={{fontSize:35,color:'white'}}>
          Hire
    </Text>
    <Text style={{fontSize:17,color:'white'}}>
          Check availablity and book right in the path.
    </Text>
    </View>   
    </View>
    <View style={styles.last_container}>
    <View style={styles.last_sub_container}>
        {
          displayBar.map((value,index)=>{
            return   <Image key={index} source={value} />
          })
        }
    </View>
    <TouchableHighlight onPress={()=>navigation.navigate('tabNavigator')}>
    <Image source={nextLogo}></Image>
    </TouchableHighlight>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    justifyContent:'space-between',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'black'
  },
  sub_first_container:{
    width:300,
    height:400,
    backgroundColor:'white',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  },
  sub_second_container:{
    width:300,
    height:90,
   
    justifyContent:'center',
    justifyContent:'space-between'
  },
  main_container:{
    justifyContent:'space-between',
    height:530,
    width:300
  },
  last_container:{
    width:300,
    height:50,
    flexDirection:'row', 
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'space-between',

  },
  last_sub_container:{
    width:15,
    flexDirection:'row',
    alignItems:'flex-end',
     justifyContent:'space-between'
  }
})