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
export default function DrawerGuest({ props,navigation,route}) {
const [name,setName] = useState('')

useEffect(async()=>{
    try {
      const g_name = await AsyncStorage.getItem('@guestname');
      setName(g_name)
    } catch(e) {
      // error reading value
    }
  },[])
     const removeItemValue= async() =>{
        await AsyncStorage.removeItem('@guest').then(res=>{
            AsyncStorage.setItem('@guest','undefined')
            alert('success');
            navigation.navigate('MyDrawer');
        })
        // .then(() => alert('success'));
        // navigation.navigate('MyDrawer')
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
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

                                title="G"
                                titleStyle={{}}
                            />
       
                            <View style={{marginLeft:15,}}> 
                                <Title style={styles.title_name}>{name} </Title>
                                {/* <Title style={styles.title_lastname}>Pattharacharoenlert</Title> */}
                                <Caption style={styles.caption}>Guest</Caption>
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
                        {/* <DrawerItem
                        icon={({color,size})=>(
                        <AntDesign name="user" size={size} color={color} />
                            )}
                         label="User123"
                         onPress={() =>navigation.navigate('User')}
                        /> */}
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
                label="Exit"
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
