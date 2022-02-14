import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,SafeAreaView,StatusBar} from 'react-native';
import { Camera } from 'expo-camera';
import { SimpleLineIcons } from '@expo/vector-icons';
import { PictureContext } from '../provider';
const {width,height} = Dimensions.get('window');
export default function IDCard() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [value,setValue] = useState("asd");
  
useEffect(() => {
    (async () => {
   
      const { status } = await   Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
  
    <SafeAreaView style={styles.container}>
   <StatusBar barStyle="light-content"></StatusBar>

   {/* </View> */}
   <View style={{height:'10%',backgroundColor:'#11052C',}}>
         <Text style={styles.header}>ถ่ายบัตรประชาชน{value}</Text>
     </View>
       <Camera style={styles.camera} type={type}>

    
      </Camera>
  
      
     
     <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={styles.buttonContainer}>
               
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <SimpleLineIcons name="camera" style={styles.text} />
                
              
             </TouchableOpacity>
               

            </View>
            
        </View>
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
   

    },
    camera: {
  
      height: '60%',
      width: '100%',


  
    },
    buttonContainer: {
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:25,
        width:282,
        height:348,
        alignItems:'center',
        justifyContent:'center',
    

    },
    button: {
        width:75,
        height:75,
        borderRadius:75,
        backgroundColor:'rgba(255,255,255,0.9)',
        justifyContent:'center',
        alignItems:'center',
        margin:22,
        
   
    },
    text: {
        fontSize:36,
        color:'black',
        letterSpacing:0,
        textAlign:'center'
      
    },
    header:{
    marginTop:'5%',
     fontSize: 18,
     color: 'white',
     textAlign:'center',
    },













  });