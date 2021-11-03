import { StatusBar } from 'expo-status-bar';
import React ,{useContext, useState}from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Face from './verify/Face';
import CheckFace from './verify/CheckFace';
import IDCard from './verify/IDCard';
import LockScreen from './lock/LockScreen';
import Home from './main/Home';
import AddUser from './main/AddUser';
import ID from './reset/ID';
import Phone from './reset/Phone';

import UserDetails from './UserDetails';
import { PictureContext } from './provider';
import DrawerContent from './drawer/DrawerContent';
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  // const {Text} = useContext(PictureContext)
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    // <PictureContext.Provider value={123}>
    //   <Text>test</Text>
    // </PictureContext.Provider>
    
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>} >
      
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="AddUser" component={AddUser} />
      {/* <Drawer.Screen name="Home" component={Home} /> */}
    </Drawer.Navigator>
  );
}


function MyStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name='LockScreen' component={MyDrawer} options={{headerShown:false}}  />
          <Stack.Screen name='IDCard' component={IDCard} options={{title:"Profile" ,headerRight:()=>(<Button title={"Done"}/>)}} />
          <Stack.Screen name='Face' component={Face} options={{title:"Profile" ,headerRight:()=>(<Button title={"Done"}/>)}} />
          <Stack.Screen name='CheckFace' component={CheckFace}   />
          <Stack.Screen name='ID' component={ID}   />
          <Stack.Screen name='Phone' component={Phone}   />
      </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
