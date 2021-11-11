import React, { useState, useEffect,useRef,useContext,createContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,SafeAreaView,StatusBar,Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const {width,height} = Dimensions.get('window');
import { PictureContext } from '../provider';
import { Button } from 'react-native-paper';


export default function Face({ navigation }) {
  // const context = createContext(PictureContext)
const value = useContext(PictureContext)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const ref = useRef(null);
  // const [name,setName] = useState(context);
  // const {value,setValue} = useContext(PictureContext);

useEffect(() => {
    (async () => {
  
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      
      // console.log(value._currentValue.pic)

      


    })();
  }, );




  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async()=>{

      const option ={quatity:0.5,base64:true,skipProcessing:true};
      const picture = await ref.current.takePictureAsync(option); 
      const array_picture = [picture]
    console.log(picture)
    // try{
    //   if(picture.source){
    //   console.log(picture.source)
    // }
    // }catch(err){
    //   console.log(err)

    // }
    navigation.navigate({
      name: 'CheckFace',
      params: { pic: array_picture },
      merge: true,
    });
  
  }
  

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });
    console.log('-----------------------')
    console.log(JSON.stringify(pickerResult));
    console.log('-----------------------')
    
    navigation.navigate({
      name: 'CheckFace',
      params: { picker: pickerResult },
      merge: true,
    });
  }
  return (
    
  
    <SafeAreaView style={styles.container}>
   <StatusBar barStyle="light-content"></StatusBar>
  
   

   {/* </View> */}
   <View style={{height:'10%',backgroundColor:'#11052C',}}>
         <Text style={styles.header}>ถ่ายใบหน้า</Text>
    
     </View>
       <Camera style={styles.camera} type={type} ref={ref} >
      
     
      </Camera>
  
      
     
     <View style={{alignItems:'center',justifyContent:'center'}}>

       
            <View style={styles.buttonContainer}>

            <View style={{  justifyContent:'flex-start', alignItems:'flex-start'}}>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.picker}>
                <FontAwesome name="photo" size={20} color="black" />
             </TouchableOpacity>
       
             </View>
               
            <TouchableOpacity
                style={styles.button}
                onPress={()=>takePicture()}>
                <SimpleLineIcons name="camera" style={styles.text} />
                
              
             </TouchableOpacity>
               
             <View style={{  justifyContent:'flex-start', alignItems:'flex-start'}}>
                <TouchableOpacity
                style={styles.change}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.front
                      ? Camera.Constants.Type.back
                      : Camera.Constants.Type.front
                  );
                }}>
                <AntDesign name="sync" size={20} color="black" />
                
              
                 </TouchableOpacity>
       
             </View>

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
    change:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:'rgba(255,255,255,0.9)',
        justifyContent:'center',
        alignItems:'center',
        margin:22,
    },
    picker:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:'rgba(255,255,255,0.9)',
        justifyContent:'center',
        alignItems:'center',
        margin:22,

    }













  });