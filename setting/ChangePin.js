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
import md5 from 'blueimp-md5';
import { URL } from '../provider';
export default function ChangePin({navigation,route}) {
const [empid , setEmpid]= useState('');
const [old_pin , setOld_pin] = useState('');
const [new_pin , setNew_pin] = useState('');
const [confirm_pin , setConfirm_pin] = useState('');


    useEffect(()=>{
     
    },[]);



const ResetPin =async()=>{
    const empid = await AsyncStorage.getItem('@choose');   
    if(new_pin == confirm_pin){
    
        let formData = new FormData();
        formData.append('id',empid)
        formData.append('old_pin',md5(old_pin))
        formData.append('new_pin',md5(confirm_pin))
        axios.post(URL+'ResetPin', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(res=>{
console.log(res)
            if(res.data.bool_Result == true){
                let formData1 = new FormData();
                formData1.append('empid',empid)
                formData1.append('function_name','Reset PIN')
                formData1.append('status','success')
                formData1.append('detail','New PIN '+ md5(confirm_pin))
                AsyncStorage.setItem('@choosepin',md5(confirm_pin))
                axios.post(URL+'Log', formData1, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                })
                
                alert('success')
                AsyncStorage.removeItem('@lock')
            navigation.navigate('LockScreen')
            }else{
                alert('fail')
                let formData1 = new FormData();
                formData1.append('empid',empid)
                formData1.append('function_name','Reset PIN')
                formData1.append('status','fail')
                formData1.append('detail','fail')
              
                axios.post(URL+'Log', formData1, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                })
            }
       
          });

      
        
    
    }else{
        alert(2)
    }
  
}

    return (
        <View style={styles.container}>
            <View style={{marginTop:10}}>
                {/* <Text>Current PIN</Text> */}
                <TextInput style={styles.textInput} onChangeText={old_pin=> setOld_pin(old_pin)}maxLength={6} keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"Current PIN"}></TextInput>
            </View>
            <View style={{marginTop:15}}>
                {/* <Text>New PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={new_pin=> setNew_pin(new_pin)}maxLength={6}  keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"New PIN"}></TextInput>
            </View>
            <View>
                {/* <Text>Confirm PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={confirm_pin=> setConfirm_pin(confirm_pin)}maxLength={6}  keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"Confirm PIN"}></TextInput>
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
