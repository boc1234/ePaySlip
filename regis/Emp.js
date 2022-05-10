import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet,Dimensions,TextInput, Text, View, Button,SafeAreaView ,SafeAreaProvider,BackHandler,Alert,TouchableOpacity,Image} from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import d from '../assets/images/en.png'
import axios from 'axios';
const {width,height} = Dimensions.get('window');
import { URL } from '../provider';


export default function Emp({navigation,route}) {
const [empid , setEmpid]= useState('');

const [idcard , setIdcard] = useState('');
const [passport , setPassport] = useState('');


    useEffect(()=>{
     
    },[]);

const next= () =>{
    

            axios.get(URL+"GetName",{
                params:{
                    id:empid
                }
            })
            .then(function (res) {
                if(res.data == ''){
                    console.log(res.data)
                    console.log(1)
                }else{
                    navigation.navigate({
                        name: 'Face',
                        params: { phone:route.params?.phone,empid:empid,idcard:idcard,stat:route.params?.stat },
                        merge: true,
                      });
                }
                
            })
            
        
  
     
  
        
}
    return (
        <View style={styles.container}>
      
            <View style={{marginTop:15}}>
                {/* <Text>New PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={id=> setEmpid(id)}    placeholder={"Employee ID"}></TextInput>
            </View>
            <View>
                {/* <Text>Confirm PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={idcard=> setIdcard(idcard)}  placeholder={"citizen id / passport no"}></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={next}>
                <Text  style={styles.textButton}>Next</Text>
            </TouchableOpacity>
        
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#ecf0f1',

        
    },

       textInput:{
        backgroundColor:'rgba(255,255,255,0.4)',
        // padding:15,
        paddingLeft:15,
        paddingRight:100,
        borderRadius:5,
        fontSize:14,
        height:40,
        marginVertical:3,
        marginBottom:15,
        marginLeft:20,
        marginRight:20,
        alignItems:'center',
        color:'black'
        
    }, 
    button:{
    
        justifyContent:'center',
        alignContent:'center',
        borderRadius:5,
        marginVertical:5,
        height:50,
        backgroundColor:'#095379',
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
        // marginTop:20
        
    },
    textButton:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'

    },
});
