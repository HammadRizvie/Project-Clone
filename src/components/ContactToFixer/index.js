import React from "react";
import { useState } from "react";
import { Searchbar } from 'react-native-paper';
import { View ,Text, StyleSheet , Image, ScrollView, ImageBackground , TouchableHighlight }
 from "react-native";
 import {Card} from 'react-native-shadow-cards';
const profile_1 =  require('../../../images/profile1.png')
const profile_2 =  require('../../../images/profile2.png')
const rectangle= require('../../../images/Rectangle.png')
const star0= require('../../../images/star0.png')
const star1= require('../../../images/star1.png')
export default function ContactToFixer ({route,navigation}){
    const [gardener,setGardener] = useState([{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYCdDZ3wB35avW7FtjYNeHEHK68LPrfVeWw&usqp=CAU",
        name:"Ahmad Ali",
        price:500,
        profile:profile_1,
        address:"35 Block C Faisal Garden Lahore"
    },{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQyd3e5dPeSiT3AFLPAHVstoEKsQJ-fc5aw&usqp=CAU",
        name:"Zeshan Hassan",
        price:450,
        profile:profile_2,
        address:"14 Block A Model Collony Karachi"
    },{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUv2Kixn_gGkw3oqUFa2YO4x0OoZfnswFXPw&usqp=CAU",
        name:"Usama Zeshan",
        price:400,
        profile:profile_1
    }])
    const [stars] = useState([star1,star1,star1,star1,star0])
return(
        <View style={styles.container} >
        <ScrollView>
        {/*  for search bar ===>  */}
        <View style={styles.header_view} >
        <Searchbar
        placeholderTextColor="grey"
        inputStyle={{fontSize:12}}
        iconColor="grey"
        style={styles.input}
        placeholder="Find your service"
        >
        </Searchbar>
        </View>
        {/*  for search bar ===>  */}
        <View style={styles.fixer_view}>
            {/*  for fixers  ===>  */}
            {
                gardener.map((value,index)=>{
                    return <View  key={index} >
                       {/*  for fixers background image  ===>  */}
                        <ImageBackground style={{width:'100%',height:180,marginTop:20,flexDirection:'row',alignItems:'flex-end'}} 
                          imageStyle={{ borderTopLeftRadius: 20,borderTopRightRadius: 20}}
                        source={{uri:value.image}} >
                            <Text style={{color:'white',fontSize:20,marginBottom:10,marginLeft:10}} >PKR {value.price}</Text>
                            <Text style={{color:'white',fontSize:10,marginBottom:13,marginLeft:10}} >Starting Soon</Text>
                        </ImageBackground>
                         {/*  for fixers background image  ===>  */}
                        <TouchableHighlight onPress={()=>navigation.navigate('FixerInfo',{
                            name:value.name,
                            address:value.address,
                            image:value.image
                        })} >
                             {/*  for fixers info  ===>  */}
                        <Card style={styles.fixer_name} > 
                        <View style={styles.fixer_dp}>
                        <Image style={{width:30,height:30}} source={value.profile} />
                        </View>
                        <View style={{marginLeft:10,width:100}} >
                        <Text>{value.name}</Text>
                        <View style={{flexDirection:'row'}} >
                        <Image source={rectangle} />
                        <Text style={{fontSize:7,marginLeft:4,color:"grey"}} >Background Checked</Text>
                        </View>
                        </View>
                            {/*  for stars  ===>  */}
                        <View style={{flexDirection:'row',marginLeft:140}} >
                                {
                                    stars.map((value,index)=>{
                                        return  <Image style={{width:10,height:10}} source={value}/>
                                    })
                                }
                        </View>
                            {/*  for stars ===>  */}
                        </Card>
                        {/*  for fixers info  ===>  */}
                        </TouchableHighlight>
                        </View>
                })
            }
        </View>
        {/*  for fixers  ===>  */}
        </ScrollView>
        </View>
)
}



const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white'
    },
    header_view:{
        width:'100%',
        height:100,
        backgroundColor:'black',
        borderBottomLeftRadius:40,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    input: {
        height: 31,
        width:'85%',
        margin: 10,
        borderRadius:30,
        marginBottom:20
      },
      fixer_view:{
          height:700,
          margin:20,
      },
      fixer_name:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      },
      fixer_dp:{
        marginLeft:10,
        width:33,
        height:33,
        backgroundColor:'red',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
      }
  })