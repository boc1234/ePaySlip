import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView} from 'react-native';
import { DrawerContentScrollView,DrawerItem ,DrawerItemList} from '@react-navigation/drawer';
import { Drawer,Avatar,Title,Caption,Patagraph,TouchableRipper } from 'react-native-paper';
import { size } from 'lodash';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function DrawerContent({ props,navigation }) {

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image source={{
                               uri:'../asset/images/Avatar.jpg',
                               size:50
                            }}></Avatar.Image>
                            <View style={{marginLeft:15,}}> 
                                <Title style={styles.title_name}>Chusana </Title>
                                {/* <Title style={styles.title_lastname}>Pattharacharoenlert</Title> */}
                                <Caption style={styles.caption}>test</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon={({color,size})=>(
                 
                        <AntDesign name="home" size={color} color={color} />
                        )}
                         label="Home"
                         onPress={() =>navigation.navigate('Home')}
                        />
                        <DrawerItem
                        icon={({color,size})=>(
                 
                            <AntDesign name="adduser" size={color} color={size} />
                            )}
                         label="Add User"
                         onPress={() =>navigation.navigate('AddUser')}
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
                onPress={() => props.navigation.Page1()}
            />
            <DrawerItem
                icon={({color,size})=>(
                    <MaterialIcons name="logout" size={size} color={color} />
                    
                )}
                label="Logout"
                onPress={() => props.navigation.Page2()}
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
        fontSize:16,
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
