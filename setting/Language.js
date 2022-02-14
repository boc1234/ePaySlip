import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,createContext,useContext,useCallback} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet,Dimensions, Text, View, Button,SafeAreaView ,SafeAreaProvider,BackHandler,Alert,TouchableOpacity,Image} from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import d from '../assets/images/en.png'
const {width,height} = Dimensions.get('window');
import {context} from '../provider'
import { useFocusEffect } from '@react-navigation/native';
function Content() {
    const {language,toggleLanguage}=useContext(context);

 
    return(
        <View>
            
            {language}
            <TouchableOpacity onPress={toggleLanguage}>
                <Text>test</Text>
            </TouchableOpacity>
        </View>
    ) 
}
export default function Language({navigation,route}) {
const [language,setLanguage] = useState();



function toggleLanguage() {
    setLanguage(language=>(language = 1));
}

const eng =()=>{
    
    AsyncStorage.setItem('@lang','0')
    navigation.navigate('Setting')
}
const th =()=>{
    
    AsyncStorage.setItem('@lang','1')
    navigation.navigate('Setting')
}
const mm =()=>{
    
    AsyncStorage.setItem('@lang','2')
    navigation.navigate('Setting')
}
const kh =()=>{
    
    AsyncStorage.setItem('@lang','3')
    navigation.navigate('Setting')
}

useFocusEffect(
    useCallback(()=>{
      AsyncStorage.getItem('@lang').then(res=>{
   
        setLanguage(res)
      })
    })    
  )
    return (
        // <context.Provider value={{language , toggleLanguage}}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.list} onPress={eng} > 
           
            <View >
                <Text style={styles.textlist}>
                English
                </Text>
            </View>
            {language == '0' ?
            <View style={styles.icon}>
             <AntDesign name="check" size={20} color="black" />
            </View> : null}
           
            
  

        </TouchableOpacity > 

        <TouchableOpacity style={styles.list} onPress={th}> 
           
           <View >
               <Text style={styles.textlist}>
                   ไทย
               </Text>
           </View>
           {language == '1' ?
            <View style={styles.icon}>
            <AntDesign name="check" size={20} color="black" />
            </View> : null}
         

       </TouchableOpacity> 

       
       <TouchableOpacity style={styles.list}  onPress={mm}>  
           
           <View >
               <Text style={styles.textlist}>
               မြန်မာဘာသာ
               </Text>
           </View>
           {language == '2' ?
            <View style={styles.icon}>
            <AntDesign name="check" size={20} color="black" />
            </View> : null}
         

       </TouchableOpacity> 
      {/* <Content /> */}
        
        </View>
        // </context.Provider>
        
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
    
    icon:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
        // margin:15,
        // position:'absolute',
       
    },

      list:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        // height:64
      },
      textlist:{
        margin:19,
        fontSize:15
      }
});
