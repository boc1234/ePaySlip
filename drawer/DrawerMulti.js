import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView} from 'react-native';
import { DrawerContentScrollView,DrawerItem ,DrawerItemList} from '@react-navigation/drawer';
import { Drawer,Title,Caption,Patagraph,TouchableRipper } from 'react-native-paper';
import { size } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from "react-native-elements";
import {URL} from '../provider'
import axios from 'axios';
export default function DrawerMulti({ props,navigation,route}) {
const [name,setName] = useState('')
const [language,setLanguage] = useState('')

// useEffect(async()=>{
//     try {
//       const g_name = await AsyncStorage.getItem('@guestname');
//       setName(g_name)
//     } catch(e) {
//       // error reading value
//     }
//   },[])
     const removeItemValue= async() =>{
        AsyncStorage.getItem('@lang').then(res=>{
            setLanguage(res)
            console.log(res)
            AsyncStorage.getItem('@empid').then(res=>{
            let formData = new FormData();
            formData.append('empid',res)
            formData.append('function_name','Logout')
            formData.append('status','success')
            formData.append('detail','success')
           
  
            axios.post(URL+'Log', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            })
            AsyncStorage.getAllKeys()
                .then(keys => AsyncStorage.multiRemove(keys))
                .then(() =>alert('Successfully Sign Out'))
     
                .then(()=>AsyncStorage.setItem('@lang',res));
        })
        
        

        navigation.navigate('SignIn')
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>

                
         </DrawerContentScrollView>
      
         <Drawer.Section style={styles.bottomDraweSection}>
         
            <DrawerItem
                icon={({color,size})=>(
                    <MaterialIcons name="logout" size={size} color={color} />
                    
                )}
                label="Logout"
                onPress={removeItemValue}
            />
         </Drawer.Section>
         
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DrawerContent:{
        flex:1
    },
    userInfoSection:{
        // marginTop:2,
        paddingLeft:20
    },
    title_name:{
        // fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    title_lastname:{
        fontSize:16,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15
    },
    bottomDraweSection:{
        marginBottom:1,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    }
});
