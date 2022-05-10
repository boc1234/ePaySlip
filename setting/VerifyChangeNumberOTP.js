import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext, useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import {URL} from '../provider'
import PhoneInput from "react-native-phone-number-input";
const {width,height} = Dimensions.get('window');

export default function VerifyChangeNumberOTP({ navigation , route}) {

const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);
const inputRef4 = useRef(null);
const inputRef5 = useRef(null);
const inputRef6 = useRef(null);
const [value0, setValue] = useState("");
const [value1, setValue1] = useState("");  
const [value2, setValue2] = useState("");
const [value3, setValue3] = useState("");
const [value4, setValue4] = useState("");
const [value5, setValue5] = useState("");
const [value6, setValue6] = useState("");  
const [otp,setOtp] = useState(['','','','','',''])


useEffect(()=>{
    inputRef1.current?.focus()
},[]);


const _onPressNumber  = async(num) =>{
  
    // this.state.passcode = 'c33367701511b4f6020ec61ded352059';
 
      let tempCode = otp;
      let pin = '';
      for(var i = 0 ;i< tempCode.length;i++){
          if(tempCode[i] == ''){
              tempCode[i] = num;
              pin = tempCode.join("");
              if(pin.length == 6){
          
            }
              break;
          }else{
              continue;
          }
        }
          
      
      setOtp({otp:tempCode})
    }
   
    
//   }
    const requestOTP = ()=>{
        var datenow = new Date()
        var date = new Date(route.params?.ref.exp)
        
        console.log(date.toLocaleTimeString())
        console.log(datenow.toLocaleTimeString())
 
        setValue(value1.value + value2.value + value3.value + value4.value + value5.value + value6.value)
        console.log(value0)
    //     axios.post(URL+'VerifyOTP?otp='+otp+"&refno="+route.params?.ref.refno,{
    //         headers: { "Content-Type": "application/json; "
    //               },})

    //    .then(function (response) {
    //     //    navigation.navigate("")
        
    //     navigation.navigate({
    //         name: 'SignUp',
    //         params: { phone: route.params?.phone },
    //         merge: true,
    //       });
    //        console.log(response.data);
    //    })
    //    .catch(function (error) {

    //    });

      if(date > datenow){

      
        axios({
        method: 'post',
        
        url: URL+'VerifyOTP',
        params: {
            otp:value0,
            refno:route.params?.ref.refno
        },
        headers: {"Content-Type": "application/json; "}
      }) .then(function (response) {
      console.log(response.data)
        if(response.data.bool_Result == true){
          console.log('test')
            // if(new_number == confirm_number){
                // AsyncStorage.getItem('@phone').then(res=>{
                    axios.get(URL+"GetGuest",{
                      params:{
                          phone:route.params?.phone
                        
                      }
                    }).then(function(response){
              
                    // setdata(response.data)
                  for(let item of response.data){
                      console.log(item.empid)
             
                  
                  
                let formData = new FormData();
                formData.append('id',item.empid)
                formData.append('phone',route.params?.phone)
                formData.append('newphone',route.params?.new)
                axios.post(URL+'UpdateNumber', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }).then(res=>{
                    console.log(res.data)
                    // AsyncStorage.setItem('@phone',route.params?.new)
                    navigation.navigate({
                        name: 'SignIn',
                        // params: { phone: route.params?.phone ,stat:route.params?.stat},
                        merge: true,
                      });
                  });
                  }
                    
                    });
                // })
                // navigation.navigate('VerifyChangeNumberOTP')
            
            // }else{
            //     alert(2)
            // }
         
        }else{
            alert('wrong')
        }
      
           
       })
       .catch(function (error) {

       }); 
    }else{
      alert("เกินระยะเวลา")
    }
  }



    return (
        
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        {/* <ScrollView > */}
        <View style={styles.container}>
        
        {/* <LinearGradient colors={['#095379','#00adb5']}  style={styles.container} > */}
        <StatusBar  barStyle="light-content"></StatusBar>
        <View style={styles.body}>
            <Text style={styles.text}>OTP Verification</Text>
            <Text style={styles.textNumber}>Enter the OTP send to</Text>
            <Text >{route.params?.new}</Text>
            {/* <TextInput
                         style={styles.input}
                         maxLength={6}
                         onChangeText={num=> setOtp(num)}
                        // value={number}
                        placeholder="Input OTP"
                        keyboardType="numeric"
                        /> */}
                        
        </View>
        <View style={styles.content}>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef1}
            keyboardType={'numeric'}
            value={value1}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {


//               let tempCode = otp;
//               let pin = '';
//               if(tempCode[0] == ''){
//                 tempCode[0] = value;
//               }else{
//                 console.log(11212)
//               }
            
                  
              
//               setOtp({otp:tempCode})
// console.log(otp)




               setValue1({ value })
               if (value)  inputRef2.current?.focus(); 
               //assumption is TextInput ref is input_2
            }}
            onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ?  inputRef1.current?.focus()   :null
              }}
            >

            </TextInput>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef2}
            keyboardType={'numeric'}
            value={value2}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
//               let tempCode = otp;
//               let pin = '';
//               if(tempCode[1] == ''){
//                 tempCode[1] = value;
//               }
            
                  
              
//               setOtp({otp:tempCode})
// console.log(otp)


               setValue2({ value })
               if (value)  inputRef3.current?.focus(); 
               //assumption is TextInput ref is input_2
            }}
            onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ? inputRef1.current?.focus() :null
              }}
            >

            </TextInput>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef3}
            keyboardType={'numeric'}
            value={value3}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue3({ value })
               if (value)  inputRef4.current?.focus(); 
               //assumption is TextInput ref is input_2
            }}
            onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ? inputRef2.current?.focus():null
              }}
            >

            </TextInput>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef4}
            keyboardType={'numeric'}
            value={value4}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue4({ value })
               if (value)  inputRef5.current?.focus(); 
               //assumption is TextInput ref is input_2
            }}
            onKeyPress={({ nativeEvent }) => {
                // nativeEvent.key === 'Backspace' ? inputRef3.current?.focus():null

                if(nativeEvent.key === 'Backspace'){
                    inputRef3.current?.focus()
                    // setValue('')
                }
              }}
            >

            </TextInput>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef5}
            keyboardType={'numeric'}
            value={value5}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue5({ value })
               if (value)  inputRef6.current?.focus(); 
               //assumption is TextInput ref is input_2
            }}
            onKeyPress={({ nativeEvent }) => {
                if(nativeEvent.key === 'Backspace'){
                    inputRef4.current?.focus()
                    // setValue('')
                }
              }}
            >

            </TextInput>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef6}
            keyboardType={'numeric'}
            value={value6}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue6({ value })
            //    if (value)  inputRef6.current?.focus(false); 
             
            }}
            onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ? inputRef5.current?.focus():null
              }}
            >

            </TextInput>
       
            {/* {otp.map(p=>{
                        let style= p !=''? styles.code2:styles.code1;
                        onChangeText={idcard=> setIdcard(idcard)}
                        return <View style={style}></View>
                    })} */}
        </View>
    <Text></Text>
            
        <TouchableOpacity style={styles.button}  onPress={requestOTP}>
            
            <Text style={styles.buttonText}>Next</Text>

        </TouchableOpacity>
    
        </View>
      
    </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'rgb(140, 188, 193);',
        // alignItems: 'center',
        width:width,height:height,
        justifyContent:'center'
        // justifyContent: 'center',
    },
    frame:{
        width:150,
        height:150,
        borderRadius:200,
        backgroundColor:'#095379',
        justifyContent:'center',
        alignItems:'center',
        margin:50
    }, 
    iconContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        // marginTop:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        // backgroundColor:'blue'
     
    },
    icon:{
        fontSize:100,
        color:'white',
        // letterSpacing:0,
        textAlign:'center',
        justifyContent:'center',
    
    },
    input: {
        
        
        // padding: 10,
        marginRight: 25,
        marginLeft: 25,
        borderWidth: 1,
        // padding: 10,
        marginTop:10
      },
      text:{
          textAlign:'left',
          fontSize:40,
          marginLeft:25,
          marginTop:20,
          marginBottom:10
          
      },
      textNumber:{
        textAlign:'left',
        fontSize:20,
        marginLeft:25,

      },
      button:{
     
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        //   width:"80%",
        backgroundColor:'#095379',
      
          padding: 10,
          marginRight: 30,
          marginLeft: 30,
        //   height: 80,
          justifyContent:'center',
          marginTop:20
      },
      buttonText:{
        
        fontSize:22,
        color:'#FFFFFF',
        // letterSpacing:-0.39,
        textAlign:'center',
        
        // marginRight:20,
        // marginTop:20
        
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    otp:{
        // marginRight: 25,
        // marginLeft: 25,
        width:50,
        height:70,
        borderWidth: 2,
        // margin:10,
        fontSize:25,
        textAlign:'center',
        

    },
    content:{
        // width:150,
        // height:50,
        margin:20,
        justifyContent:'space-between',
        flexDirection:'row',

    },
    body:{
      justifyContent:'center',
      alignItems:'center'
    }
});
