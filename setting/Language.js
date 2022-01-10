import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,createContext,useContext} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet,Dimensions, Text, View, Button,SafeAreaView ,SafeAreaProvider,BackHandler,Alert,TouchableOpacity,Image} from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import d from '../assets/images/en.png'
const {width,height} = Dimensions.get('window');
import {context} from '../provider'
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

const changeLanguage =()=>{
    
    AsyncStorage.setItem('@lang','1')
}

    return (
        // <context.Provider value={{language , toggleLanguage}}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.list} onPress={changeLanguage} > 
           
            <View >
                <Text style={styles.textlist}>
                English
                </Text>
            </View>
            <View style={styles.icon}>
             <AntDesign name="check" size={20} color="black" />
                
             </View>
  

        </TouchableOpacity > 

        <TouchableOpacity style={styles.list} onPress={changeLanguage}> 
           
           <View >
               <Text style={styles.textlist}>
                   ไทย
               </Text>
              
           </View>
         

       </TouchableOpacity> 

       
       <TouchableOpacity style={styles.list}  onPress={changeLanguage}>  
           
           <View >
               <Text style={styles.textlist}>
               မြန်မာဘာသာ
               </Text>
              
           </View>
         

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
        margin:15,
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
