import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,SafeAreaView,StatusBar,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const {width,height} = Dimensions.get('window');
export default function PDPA({ navigation, route}) {
    const [postText, setPostText] = React.useState('');
  
    
    return(
    <View style={styles.container}>
        <StatusBar></StatusBar>
        <Image
            style={{
  
                width:width,
                height: height,
                resizeMode: 'contain',
                
            }}
            source={{
                uri:
                'http://www.stecon.co.th/images/home/home_02.jpg'
            }}
            />
     
    </View>
   
        )
    
    


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
   

    },
    change:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:'rgba(255,255,255,0.9)',
        justifyContent:'center',
        alignItems:'center',
        margin:22,
    },
});