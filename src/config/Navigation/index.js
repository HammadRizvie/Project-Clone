import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../../views/SplashScreen';
import SearchScreen from '../../views/SearchScreen';
import ChatScreen from '../../views/ChatScreen';
import HireScreen from '../../views/HireScreen';
import DashBoard from '../../components/DashBoard';
import ContactUs from '../../components/ContactUs';
import Search from '../../components/Search';
import Cart from '../../components/Cart';
import Profile from '../../components/Profile';
import ContactToFixer from '../../components/ContactToFixer';
import FixerInfo from '../../components/FixerInfo';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
    headerShown: false
  }}
  >
      <Stack.Screen name="stackNavigation" component={stackNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

function stackNavigation() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="HireScreen" component={HireScreen} />
      <Stack.Screen name="tabNavigator" component={tabNavigator} />
    </Stack.Navigator>
  );
}


function tabNavigator(){

  return (
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
        headerShown:false,
        headerTitle:'',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'contactFixerStack') {
            iconName = focused
              ? 'home'
              : 'home';
          } 
          else if (route.name === 'ContactUs') {
            iconName = focused ? 
            'phone' : 
            'phone';
          }
          else if (route.name === 'Search') {
            iconName = focused ? 
            'search' : 
            'search';
          }
          else if (route.name === 'Cart') {
            iconName = focused ? 
            'shopping-cart' : 
            'shopping-cart';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 
            'user' : 
            'user';
          }
         
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'gray',
      })   
  }
      >
        <Tab.Screen name="contactFixerStack" component={contactFixerStack} options={{tabBarLabel:"Home"}} />
        <Tab.Screen name="ContactUs" component={ContactUs} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}


function contactFixerStack(){

  return (
    <Stack.Navigator>
      <Stack.Screen name="DashBoard" component={DashBoard}  options={{
      headerShown:false,
    }} />
      <Stack.Screen name="ContactToFixer" component={ContactToFixer} options={{
     headerTransparent:true,
     headerTitle:"",
     headerTintColor:"white",
    }} />
     <Stack.Screen options={{
          headerShown:false,
         
          
    }} 
      name="FixerInfo" component={FixerInfo} 
        />
    </Stack.Navigator>
  );
}
