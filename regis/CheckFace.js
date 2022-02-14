import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,SafeAreaView,StatusBar,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const {width,height} = Dimensions.get('window');
export default function CheckFace({ navigation, route}) {
    const [postText, setPostText] = React.useState('');
    // React.useEffect(() => {
    //     if (route.params?.pic) {
    //       // Post updated, do something with `route.params.post`
    //       // For example, send the post to the server
          
    //     }
    //   }, [route.params?.pic]);
      
    if(route.params?.pic !== undefined){
        const picture = route.params?.pic;
        const picture_string = picture.base64;
       console.log(picture_string)
        
    return(
    <View style={styles.container}>
        <StatusBar></StatusBar>
        <Image
            style={{
  
                width: "100%",
                height: "80%",
                resizeMode: 'contain',
                transform: [{ scaleX: -1 }]
            }}
            source={{
                uri:
                'data:image/png;base64,'+picture_string
            }}
            />
                <View style={{  justifyContent:'flex-start', alignItems:'flex-start'}}>
                <TouchableOpacity
                style={styles.change}
                onPress={() => {
                  
                }}>
                <AntDesign name="sync" size={20} color="black" />
                
              
                 </TouchableOpacity>
       
             </View>
    </View>
    )
    }
    if(route.params?.picker !== undefined){
        const picker = route.params?.picker;
        const picker_string = picker.base64
        console.log(picker_string)
        return(
            <View style={styles.container}>
            <StatusBar></StatusBar>
            <Image
                style={{
      
                    width: "100%",
                    height: "80%",
                    resizeMode: 'contain',
          
                }}
                source={{
                    uri:
                    'data:image/png;base64,'+picker_string
                }}
                />
                    <View style={{  justifyContent:'flex-start', alignItems:'flex-start'}}>
                    <TouchableOpacity
                    style={styles.change}
                    onPress={() => {
                      
                    }}>
                    <AntDesign name="sync" size={20} color="black" />
                    
                  
                     </TouchableOpacity>
           
                 </View>
        </View>
        )
    }
    


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