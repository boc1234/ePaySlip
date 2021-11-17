import { StatusBar } from 'expo-status-bar';
import React ,{useContext, useEffect, useState}from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Face from './verify/Face';
import CheckFace from './verify/CheckFace';
import IDCard from './verify/IDCard';
import LockScreen from './lock/LockScreen';
import CreatePass from './lock/CreatePass';
import ConfirmPass from './lock/ConfirmPass';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import Home from './main/Home';
import AddUser from './main/AddUser';
import ID from './reset/ID';
import Phone from './reset/Phone';
import Page1 from './payslip/Page1';
import Page2 from './payslip/Page2';
import PDPA from './PDPA';
import UserDetails from './UserDetails';
import { PictureContext } from './provider';
import DrawerContent from './drawer/DrawerContent';
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const a = 1;

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
      <Drawer.Screen name="EPaySlip" component={Toptab} />
      
    </Drawer.Navigator>
  );
}


function MyStack() {

    return (
    
      <Stack.Navigator  >
          
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false,}}  />
          <Stack.Screen name='LockScreen' component={LockScreen} options={{headerShown:false}}  />
          <Stack.Screen name='SignUp' component={SignUp} options={{headerTintColor: 'white',headerStyle:{backgroundColor:'#095379'}}} />
          <Stack.Screen name='Face' component={Face} options={{headerShown:false}} />
          <Stack.Screen name='IDCard' component={IDCard} options={{title:"Profile" ,headerRight:()=>(<Button title={"Done"}/>)}} />
          <Stack.Screen name='CreatePass' component={CreatePass} options={{headerShown:false}}  />
          <Stack.Screen name='ConfirmPass' component={ConfirmPass} options={{headerShown:false}}  />
          <Stack.Screen name='CheckFace' component={CheckFace}   />
          <Stack.Screen name='ID' component={ID} options={{ title: 'Employee ID' }}  />
          <Stack.Screen name='Phone' component={Phone}   options={{title: 'Forgot Password',headerTintColor: 'white',headerStyle:{backgroundColor:'#095379'}}} />
          <Stack.Screen name='EPAYSLIP' component={Toptab}   />
          <Stack.Screen name='MyDrawer' component={MyDrawer} options={{headerShown:false}}  />
          {/* <Stack.Screen name='LockScreen' component={LockScreen} options={{headerShown:false}}  /> */}
      </Stack.Navigator>
    );
  

}
function MyLogin() {
  return(
    <Stack.Navigator >
      <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false,gestureEnabled: false,}}  />
  
    </Stack.Navigator>
  );
}

function Toptab(){
  return(   
    
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled:true,
          tabBarLabelStyle: { fontSize: 12,fontWeight:'bold' },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' },
          
        }}
      >
       
        <Tab.Screen name="ชื่อ" component={Page1} />
        <Tab.Screen name="รายรับ" component={Page2} />
        <Tab.Screen name="ส่วนหัก" component={Page2} />
        <Tab.Screen name="รวม" component={Page2} />
        <Tab.Screen name="รายงานการหยุด" component={Page2} />



      </Tab.Navigator>
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
