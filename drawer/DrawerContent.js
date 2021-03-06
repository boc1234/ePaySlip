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
import axios from 'axios';
import {URL} from '../provider'
export default function DrawerContent({ props,navigation }) {
const [name,setName] = useState('')
const [firstcha,setFirstcha] = useState('')
const [language,setLanguage] = useState()

useEffect(async()=>{
    try {
      const s_name = await AsyncStorage.getItem('@name');

      setName(s_name)
    //   setFirstcha(s_name.charAt(0))

    } catch(e) {
      // error reading value
    }
  },[])
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
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        
                        <View style={{flexDirection:'row',marginTop:15}}>
                            {/* <Avatar.Image source={{
                               uri:'../asset/images/Avatar.jpg',
                               size:50
                            }}></Avatar.Image> */}
                            <Avatar
                                activeOpacity={0.3}
                                avatarStyle={{}}
                                containerStyle={{ backgroundColor: "#8DBDBD" }}
                                icon={{}}
                                iconStyle={{}}
                                imageProps={{}}
                                onLongPress={() => alert("onLongPress")}
                                onPress={() => alert("onPress")}
                                overlayContainerStyle={{}}
                                placeholderStyle={{}}
                                rounded
                                size="medium"

                                title="O"
                                titleStyle={{}}
                            />
       
                            <View style={{marginLeft:15,}}> 
                                <Title style={styles.title_name}>{name}</Title>
                                {/* <Title style={styles.title_lastname}>Pattharacharoenlert</Title> */}
                                {/* <Caption style={styles.caption}>Owner</Caption> */}
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon={({color,size})=>(
                 
                        <AntDesign name="home" size={size} color={color} />
                        )}
                         label="Home"
                         onPress={() =>navigation.navigate('Home')}
                        />
                        <DrawerItem
                        icon={({color,size})=>(
                        <AntDesign name="user" size={size} color={color} />
                            )}
                         label="Guest"
                         onPress={() =>  navigation.navigate('MultipleUsers')}
                        />
                    </Drawer.Section>
                    
                </View>
                
         </DrawerContentScrollView>
      
         <Drawer.Section style={styles.bottomDraweSection}>
             <DrawerItem
                icon={({color,size})=>(
                <AntDesign name="setting" size={size} color={color} />
                )}
                label="Setting"
                onPress={() =>navigation.navigate('Setting')}
            />
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




{/* <Avatar
activeOpacity={0.3}
avatarStyle={{}}
containerStyle={{ backgroundColor: "#8DBDBD" }}
icon={{}}
iconStyle={{}}
imageProps={{}}
onLongPress={() => alert("onLongPress")}
onPress={() => alert("onPress")}
overlayContainerStyle={{}}
placeholderStyle={{}}
rounded
size="medium"
source={{ uri: "" }}
title="P"
titleStyle={{}}
/> */}