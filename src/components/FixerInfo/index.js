import React, { useState } from "react";
import { View ,Text, StyleSheet , Image , ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Tab , TabView } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
const rectangle= require('../../../images/Rectangle.png')
const star0= require('../../../images/star0.png')
const star1= require('../../../images/star1.png')
export default function FixerInfo ({route}){
    const {name,address,image} = route.params;
const images = [
    image,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgfjJ2DQH1tXvAwNl8W3xWewMSIlOm8zChX_NJya6m8WXF9BuoLL1iT6qu2CiKWAPrO0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGT5OiJs75pfP5CJwhCDve8H4FR1iooZeZe1_OJ62P8skaXHZh0ceX_A-RZVxw1CgMbAw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84WTGKApN6WgminJLrGwe2Nix5-DuKRxPAMz7LLggwAkFKGNUPri2hZS5Qbj_hqTx34Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYCdDZ3wB35avW7FtjYNeHEHK68LPrfVeWw&usqp=CAU"
]
const [index,setIndex] = useState();
const [stars] = useState([star1,star1,star1,star1,star0])
return(
    <View style={styles.container} >
    <ScrollView>
    <View  >
            {/*  slider box ===>  */}
    <SliderBox images={images}  sliderBoxHeight={250}  dotColor="#32CD32"
        inactiveDotColor="white" 
        dotStyle={{
        width: 8,
        height: 8,
        borderRadius: 50,
        marginHorizontal:-5 
  }}
  />
  {/*  slider box ===>  */}
        </View>
        {/*  fixer info ===>  */}
    <View  style={styles.sub_container} >
    <Text style={{fontSize:25}} >{name}</Text>
    <View style={{flexDirection:'row',marginTop:10}} >
    <Image source={rectangle} style={{width:22,height:18,borderRadius:5}} />
    <Text style={{fontSize:15,marginLeft:10,color:'grey'}}>{address}</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:10}} >
            {
                stars.map((value,index)=>{
                     return  <Image style={{width:20,height:20}} source={value}/>
                })
            }
    <Text style={{fontSize:20,marginLeft:20,color:'#FFC300'}}>4.9</Text>
    </View>
    <Text style={{fontSize:20,marginTop:25}} >Overview</Text>
    <Text style={{fontSize:15,marginTop:10}}>Overall customer experience, individuals have one main purpose for contacting a customer service center to resolve  an issue</Text>
     </View> 
        {/*  fixer info ===>  */}
        <View style={{width:'100%',height:'50%'}} >
            {/*  tabs name ===>  */}
    <Tab value={index} onChange={setIndex}>
    <Tab.Item title="Service" titleStyle={{ 
            color:"black"
        }} 
        />
    <Tab.Item title="Portfolio" titleStyle={{
            color:"black"
        }} />
    <Tab.Item  title="Reviews" titleStyle={{
            color:"black"
        }} />
    </Tab>
             {/*  tabs name ===>  */}
    <TabView  value={index} onChange={setIndex} >
            {/*  tab data ===>  */}
    <TabView.Item  style={{ width: '100%' }}>
            <View style={{ width: '100%',height:'80%',alignItems:'center'}}>
                {/* search bar ===>  */}
            <Searchbar
            placeholderTextColor="#20B2AA"
            inputStyle={{fontSize:12}}
            iconColor="grey"
            style={styles.input}
            placeholder="Find your service"
        >
    </Searchbar>
        {/* search bar ===>  */}
    <View style={{width:'80%',height:2,backgroundColor:'#D3D3D3',opacity:0.5,marginTop:20}} >
    </View>
               {/* options ===>  */}
    <View style={{width:'80%',flexDirection:'row',alignItems:'center',marginTop:20}} >
    <Text style={{fontSize:17,color:'#C0C0C0',width:150}}>Lawn Maintenance</Text>
    <Button mode="contained"   style={{backgroundColor:'#E0E0E0',height:30,width:65,marginLeft:30,borderRadius:10}}><Text style={{fontSize:8.5}} >PKR 400</Text></Button>
    <Button mode="contained"   style={{backgroundColor:'#20B2AA',height:30,width:65,marginLeft:5,borderRadius:10}}><Text style={{fontSize:8.5}} >Book</Text></Button>
    </View>
    <View style={{width:'80%',flexDirection:'row',alignItems:'center',marginTop:10}} >
    <Text style={{fontSize:17,color:'#C0C0C0',width:150}}>Landscaping Design</Text>
    <Button mode="contained"   style={{backgroundColor:'#E0E0E0',height:30,width:65,marginLeft:30,borderRadius:10}}><Text style={{fontSize:8.5}} >PKR 400</Text></Button>
    <Button mode="contained"   style={{backgroundColor:'#20B2AA',height:30,width:65,marginLeft:5,borderRadius:10}}><Text style={{fontSize:8.5}} >Book</Text></Button>
    </View>
    <View style={{width:'80%',flexDirection:'row',alignItems:'center',marginTop:10}} >
    <Text style={{fontSize:17,color:'#C0C0C0',width:150}}>New Lawn Installation</Text>
    <Button mode="contained"   style={{backgroundColor:'#E0E0E0',height:30,width:65,marginLeft:30,borderRadius:10}}><Text style={{fontSize:8.5}} >PKR 400</Text></Button>
    <Button mode="contained"   style={{backgroundColor:'#20B2AA',height:30,width:65,marginLeft:5,borderRadius:10}}><Text style={{fontSize:8.5}} >Book</Text></Button>
    </View>
    <Button mode="contained"  style={{width:'70%',height:35,backgroundColor:'#20B2AA',marginTop:20,borderRadius:50}} ><Text style={{fontSize:12}} >Contact</Text></Button>
            {/* options ===>  */}
    </View>
    </TabView.Item> 
    <TabView.Item style={{  width: '100%' }}>
    <Text h1>Portfolio</Text>
    </TabView.Item>
    <TabView.Item style={{ width: '100%' }}>
    <Text h1>Reviews</Text>
    </TabView.Item>
    </TabView>
        {/*  tab data ===>  */}
    </View>
    </ScrollView>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white'
    },
    sub_container:{
        width:'100%',
        padding:20  
    },
    input: {
        height: 40,
        width:'80%',
        backgroundColor:'#e8f8f4',
        borderRadius:15,
        marginTop:20,
        shadowColor:'white',
      },
  })