import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,useCallback} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet,Dimensions, Text, View, Button,SafeAreaView ,SafeAreaProvider,BackHandler,Alert,TouchableOpacity,Image} from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import d from '../assets/images/en.png'
const {width,height} = Dimensions.get('window');
import { useFocusEffect } from '@react-navigation/native';

export default function Setting({navigation,route}) {

      const [language,setLanguage] = useState('');
      const countries = ["English", "ไทย", "Myanmar", "Cambodia"]

      useFocusEffect(
        useCallback(()=>{
          AsyncStorage.getItem('@lang').then(res=>{
       
            setLanguage(res)
          })
        })    
      )

//       useEffect(()=>{

//    console.log(855)
//         AsyncStorage.getItem('@lang').then(res=>{
//           setLanguage(res)
//         })
//         },[])
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate('ChangePIN')}> 
           
           <View >
               <Text style={styles.textlist}>
                   Change PIN
               </Text>
           </View>


       </TouchableOpacity>     


        <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate('Language')}> 
           
            <View >
                <Text style={styles.textlist}>
                    Language
                </Text>
            </View>

            <View style={styles.text}>
                {/* <Image style={styles.image}  source={require("../assets/images/en.png")}/> */}
                <Text> 
                    {countries[language]}
                {/* <AntDesign style={{paddingLeft:20}} name="right" size={10} color="black" /> */}
                </Text>
                
             </View>

        </TouchableOpacity> 

        <TouchableOpacity style={styles.list}> 
           
           <View >
               <Text style={styles.textlist}>
                   About Us
               </Text>
           </View>

           <View style={styles.text}>
   
               <Text>v1.0</Text>
            </View>

       </TouchableOpacity> 
      
        
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'column',
        // gap: 20,
        backgroundColor: '#ecf0f1',
        // alignItems: 'center',
        // marginTop:10,
        
        
    },
    paragraph: {
    
      // margin: 35,
      alignContent:'center',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    card:{
        height:100,
        
        // backgroundColor:'red'
        width:300
    },
    text:{
        flexDirection:'row',
        margin:18,
    },
      image:{
        margin:3,
          width:20,
          height:15
      },
      list:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:0.5
      },
      textlist:{
        margin:15,
        fontSize:18
      }
});
