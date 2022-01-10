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
export default function ChangePin({navigation,route}) {
const [empid , setEmpid]= useState('');
const [old_pin , setOld_pin] = useState('');
const [new_pin , setNew_pin] = useState('');
const [confirm_pin , setConfirm_pin] = useState('');


    useEffect(()=>{
     
    },[]);



const ResetPin =async()=>{
    const id = await AsyncStorage.getItem('@empid');   
    if(new_pin == confirm_pin){
        alert(1)
        let formData = new FormData();
        formData.append('empid',id)
        formData.append('old_pin',old_pin)
        formData.append('new_pin','123123')
        axios.post(URL+'ResetPin', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
    
    }
  
}

    return (
        <View style={styles.container}>
            <View style={{marginTop:10}}>
                {/* <Text>Current PIN</Text> */}
                <TextInput style={styles.textInput} onChangeText={old_pin=> setOld_pin(old_pin)} keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"Current PIN"}></TextInput>
            </View>
            <View style={{marginTop:15}}>
                {/* <Text>New PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={new_pin=> setNew_pin(new_pin)}  keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"New PIN"}></TextInput>
            </View>
            <View>
                {/* <Text>Confirm PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={confirm_pin=> setConfirm_pin(confirm_pin)}  keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"Confirm PIN"}></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={ResetPin}>
                <Text  style={styles.textButton}>Reset</Text>
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
