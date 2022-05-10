import { StatusBar } from 'expo-status-bar';
import React ,{createContext, useContext, useEffect, useState}from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Face from './regis/Face';
import CheckFace from './regis/CheckFace';
import IDCard from './regis/IDCard';
import LockScreen from './lock/LockScreen';
import CreatePass from './lock/CreatePass';
import ConfirmPass from './lock/ConfirmPass';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import Home from './main/Home';
import AddUser from './main/AddUser';
import Setting from './main/Setting';
import ID from './reset/ID';
import Phone from './reset/Phone';
import PayslipMain from './payslip/PayslipMain';
import Page1 from './payslip/Page1';
import Page2 from './payslip/Page2';
import PDPA from './PDPA';
import UserDetails from './UserDetails';
import { PictureContext } from './provider';
import DrawerContent from './drawer/DrawerContent';
import DrawerGuest from './drawer/DrawerGuest';
import DrawerMulti from './drawer/DrawerMulti';
import Otp from './regis/Otp';
import VerifyOtp from './regis/VerifyOtp';
import MultipleUsers from './lock/MultipleUsers';
import axios from 'axios';
import t from './language/lang';
import {URL} from './provider'
import Language from './setting/Language';
import ChangePin from './setting/ChangePin';
import ChangeNumber from './setting/ChangeNumber';
import ForgotPin from './lock/ForgotPin';
import CreatePin from './regis/CreatePin';
import Emp from './regis/Emp';
import NotiOTP from './regis/NotiOTP';
import VerifyNotiOtp from './regis/VerifyNotiOTP';
import VerifyChangeNumberOTP from './setting/VerifyChangeNumberOTP';
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export  const a = createContext( AsyncStorage.getItem('@empid'));

export default function App() {

 const {test} = useContext(a);
 
  useEffect(()=>{
//     try{
//       AsyncStorage.getItem('@lang').then(res=>{
//         if(res != undefined || res == null){
//           AsyncStorage.setItem('@lang','0');
//         }else{
//           alert(1212)
//         }
//       }).catch(err=>{
//         console.log(err)
//       })
//     }catch{
// console.log(54566)
//     }
   
    
  
    
  },[]);
 
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
      
      <Drawer.Screen name="Home" component={Home}options={{headerStyle:{backgroundColor:'rgb(140, 188, 193);'}}} />
      <Drawer.Screen name="User" component={AddUser} options={{title:"Guest"}}/>
      <Drawer.Screen name="EPaySlip" component={Toptab} />
      {/* <Drawer.Screen name="Setting" component={Setting} /> */}
      
    </Drawer.Navigator>
  );
}
function GuestDrawer() {
  return (

    <Drawer.Navigator drawerContent={props =><DrawerGuest {...props}/>} >
      
      <Drawer.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:'rgb(140, 188, 193);'}}}/>
      <Drawer.Screen name="User" component={AddUser}  />
      <Drawer.Screen name="EPaySlip1" component={Toptab} />
      
    </Drawer.Navigator>
  );
}
function MultiDrawer() {
  return (

    <Drawer.Navigator drawerContent={props =><DrawerMulti {...props}/>} >
      
      <Drawer.Screen name='MultipleUsers' component={MultipleUsers}  />
      {/* <Drawer.Screen name="Setting" component={Setting} /> */}
      
    </Drawer.Navigator>
  );
}

function LaguagePage() {
  return (

    <Stack.Navigator  >
      
    
      <Stack.Screen name="Language" component={Language}  />
    
      
    </Stack.Navigator >
  );
}


function MyStack() {

    return (
    
      <Stack.Navigator  >
          
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false,}}  />
          <Stack.Screen name='LockScreen' component={LockScreen} options={{headerShown:false}}  />
          <Stack.Screen name='SignUp' component={SignUp} options={{headerTintColor: 'white',headerStyle:{backgroundColor:'rgb(140, 188, 193);'}}} />
          <Stack.Screen name='Face' component={Face}  options={{title: 'face',headerTintColor: 'white',headerStyle:{backgroundColor:'black'}}} />
          <Stack.Screen name='Otp' component={Otp} options={{title:'OTP'}}/>
          <Stack.Screen name='VerifyOtp' component={VerifyOtp} options={{title:'VerifyOTP'}}/>
          <Stack.Screen name='Emp' component={Emp} options={{title:'Personal Information'}} />
          <Stack.Screen name='IDCard' component={IDCard} options={{title:"Profile" ,headerRight:()=>(<Button title={"Done"}/>)}} />
          <Stack.Screen name='CreatePin' component={CreatePin} options={{title:"PIN"}}  />
          <Stack.Screen name='ConfirmPass' component={ConfirmPass} options={{headerShown:false}}  />
          <Stack.Screen name='CheckFace' component={CheckFace}  options={{title: 'check',headerTintColor: 'white',headerStyle:{backgroundColor:'black'}}} />
          <Stack.Screen name='ID' component={ID} options={{ title: 'Employee ID' }}  />
          <Stack.Screen name='ForgotPin' component={ForgotPin}   options={{title: 'Forgot PIN',headerTintColor: 'white',headerStyle:{backgroundColor:'#095379'}}} />
          <Stack.Screen name='EPAYSLIP' component={Toptab}   />
          <Stack.Screen name='MyDrawer' component={MyDrawer} options={{headerShown:false}}  />
          <Stack.Screen name='GuestDrawer' component={GuestDrawer} options={{headerShown:false}}  />
          <Stack.Screen name='PaySlip' component={PayslipMain} />
          <Stack.Screen name='Page1' component={Page1} options={{title: 'PaySlip',headerStyle:{backgroundColor:'rgb(140, 188, 193);'}}} />
          <Stack.Screen name='Setting' component={Setting} />
          <Stack.Screen name='Language' component={Language} />
          <Stack.Screen name='ChangePIN' component={ChangePin} options={{title:'Change PIN'}} />
          <Stack.Screen name="User" component={AddUser} options={{title:"Guest"}}/>
          <Stack.Screen name='MultipleUsers' component={MultipleUsers} options={{headerShown:false,headerStyle:{backgroundColor:'#095379'}}}  />
          <Stack.Screen name='ChangeNumber' component={ChangeNumber} />
          <Stack.Screen name='NotiOTP' component={NotiOTP} options={{title:"OTP"}}/>
          <Stack.Screen name='VerifyNotiOtp' component={VerifyNotiOtp} options={{title:"VerifyOTP"}}/>
          <Stack.Screen name='VerifyChangeNumberOTP' component={VerifyChangeNumberOTP}  options={{title:"VerifyOTP"}} />
    
      </Stack.Navigator>
    );
  

}

function  Toptab ({}){
  // const {value} = props
  // console.log(props.route.params)
  
  return(   

      <Tab.Navigator
      
        screenOptions={{
          
          tabBarScrollEnabled:true,
          tabBarLabelStyle: { fontSize: 12,fontWeight:'bold' },
          tabBarItemStyle: { width: 120},
          tabBarStyle: { backgroundColor: 'powderblue'},
          
        }}
      >
         {/* <Stack.Screen name='PaySlip' component={PayslipMain}  screenOptions={{    tabBarItemStyle: { width: 200,height:20},}}  /> */}
        {/* <Tab.Screen name='PaySlip' component={PayslipMain}   options={{tabBarStyle:{display:'none'},tabBarItemStyle:{display:'none', width:0}}} /> */}
        <Tab.Screen name= "emp" component={Page1} />
        <Tab.Screen name="salary" component={Page2}  />
        <Tab.Screen name="annually cumulative" component={Page2} />
        <Tab.Screen name="other" component={Page2} />
        {/* <Tab.Screen  name="รวม" component={Page2} />
        <Tab.Screen name="รายงานการหยุด" component={Page2}  /> */}



      </Tab.Navigator>

  );
}
function MyLogin() {
  return(
    <Stack.Navigator >
      <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false,gestureEnabled: false,}}  />
  
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
