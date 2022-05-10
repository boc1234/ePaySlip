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
export default function ChangeNumber({navigation,route}) {
const [empid , setEmpid] = useState('');
const [old_number , setOld_number] = useState('');
const [new_number , setNew_number] = useState('');
const [confirm_number , setConfirm_number] = useState('');
const [timerCount, setTimer] = useState(0)

    useEffect(()=>{
      
    },[]);


    const requestOTP = ()=>{
        // navigation.navigate({
        //   name: 'VerifyOtp',
        //   params: { phone:num ,stat:route.params?.stat},
        //   merge: true,
        // });
          console.log(confirm_number)
        if(confirm_number.length < 10){
          alert("Please enter a valid phone number")
        }else{
          countdown();
            axios({
              method: 'post',
              url: URL+'RequestOTP',
              params: {
                  phone:confirm_number
              },
              headers: {"Content-Type": "application/json; "}
            }) .then(function (response) {
              console.log(response.data)
              if(response.data == false){
                alert("หมายเลขนี้ถูกใช้งานไปแล้ว")
              }else{
                navigation.navigate({
              name: 'VerifyChangeNumberOTP',
              params: { ref: response.data,phone:old_number,new:confirm_number},
              merge: true,
            });
            setModalVisible(true)
              console.log(response.data.refno)
              }
              ;
              
          })
          .catch(function (error) {
            console.log(error)
          });
        }
      }
  
const ResetPin =async()=>{
    const id = await AsyncStorage.getItem('@empid');   
    if(new_number == confirm_number){
        AsyncStorage.getItem('@phone').then(res=>{
            axios.get(URL+"GetGuest",{
              params:{
                  phone:res
                
              }
            }).then(function(response){
      
            // setdata(response.data)
          for(let item of response.data){
              console.log(item.empid)
     
          
          
        let formData = new FormData();
        formData.append('id',item.empid)
        formData.append('phone',old_number)
        formData.append('newphone',confirm_number)
        axios.post(URL+'UpdateNumber', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          }
            
            });
        })
        // navigation.navigate('VerifyChangeNumberOTP')
    
    }else{
        alert(2)
    }

    countdown(); 
  
}
function countdown() {
    setTimer(30)
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval)
          return lastTimerCount - 1
      })
    }, 1000) //each count lasts for a second
    //cleanup the interval on complete
    return ()=> clearInterval(interval)
  }
    return (
        <View style={styles.container}>
            <View style={{marginTop:10}}>
                {/* <Text>Current PIN</Text> */}
                <TextInput style={styles.textInput} onChangeText={old_number=> setOld_number(old_number)} keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"Current Phone Number"}></TextInput>
            </View>
            <View style={{marginTop:15}}>
                {/* <Text>New PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={new_number=> setNew_number(new_number)}  keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"New Phone Number"}></TextInput>
            </View>
            <View>
                {/* <Text>Confirm PIN</Text> */}
                <TextInput style={styles.textInput}onChangeText={confirm_number=> setConfirm_number(confirm_number)}  keyboardType={'phone-pad'} secureTextEntry={true} placeholder={"Confirm Phone Number"}></TextInput>
            </View>
                <TouchableOpacity style={(timerCount != 0 ? styles.button: styles.button2)}disabled={(timerCount != 0 ? true: false)} onPress={requestOTP}>
 
                 <Text style={(timerCount == 0 ? styles.buttonText: {height: 0, width: 0, opacity: 0})}>Get OTP
                </Text>
                <Text style={(timerCount != 0 ? styles.buttonText: {height: 0, width: 0, opacity: 0})} >{timerCount}</Text>
    
                
                
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
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        //   width:"80%",
        backgroundColor:'grey',
        padding: 10,
        marginRight: 30,
        marginLeft: 30,
        //   height: 80,
        justifyContent:'space-between',
      },
      button2:{
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        //   width:"80%",
        backgroundColor:'#095379',
      
          padding: 10,
          marginRight: 30,
          marginLeft: 30,
        //   height: 80,
          justifyContent:'space-between',
      },
      buttonText:{
        fontSize:22,
        color:'#FFFFFF',
        // letterSpacing:-0.39,
        textAlign:'center',
        // marginRight:20,
        // marginTop:20
    },
    textButton:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'

    },
});
