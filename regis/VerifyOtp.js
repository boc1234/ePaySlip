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

export default function VerifyOtp({ navigation , route}) {

const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);
const inputRef4 = useRef(null);
const inputRef5 = useRef(null);
const inputRef6 = useRef(null);
const [value, setValue] = useState("");    
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
        console.log(otp)
 
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


       axios({
        method: 'post',
        
        url: URL+'VerifyOTP',
        params: {
            otp:otp,
            refno:route.params?.ref.refno
        },
        headers: {"Content-Type": "application/json; "}
      }) .then(function (response) {
      
        if(response.data.bool_Result == true){
            navigation.navigate({
                name: 'Emp',
                params: { phone: route.params?.phone ,stat:route.params?.stat},
                merge: true,
              });
        }else{
            alert('wrong')
        }
      
           
       })
       .catch(function (error) {

       }); 
    }



    return (
        
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        {/* <ScrollView > */}
        <View style={styles.container}>
        
        {/* <LinearGradient colors={['#095379','#00adb5']}  style={styles.container} > */}
        <StatusBar  barStyle="light-content"></StatusBar>
        <View>
            <Text style={styles.text}>กรอกรหัสOTP</Text>
            <TextInput
                         style={styles.input}
                         maxLength={6}
                         onChangeText={num=> setOtp(num)}
                        // value={number}
                        placeholder="placeholder"
                        keyboardType="numeric"
                        />
                        
        </View>
        <View style={styles.content}>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef1}
            keyboardType={'numeric'}
            value={value}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue({ value })
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
            value={value}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue({ value })
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
            value={value}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue({ value })
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
            value={value}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue({ value })
               if (value)  inputRef5.current?.focus(); 
               //assumption is TextInput ref is input_2
            }}
            onKeyPress={({ nativeEvent }) => {
                // nativeEvent.key === 'Backspace' ? inputRef3.current?.focus():null

                if(nativeEvent.key === 'Backspace'){
                    inputRef3.current?.focus()
                    setValue('')
                }
              }}
            >

            </TextInput>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef5}
            keyboardType={'numeric'}
            value={value}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue({ value })
               if (value)  inputRef6.current?.focus(); 
               //assumption is TextInput ref is input_2
            }}
            onKeyPress={({ nativeEvent }) => {
                if(nativeEvent.key === 'Backspace'){
                    inputRef3.current?.focus()
                    setValue('')
                }
              }}
            >

            </TextInput>
            <TextInput maxLength={1} style={styles.otp}
            ref={inputRef6}
            keyboardType={'numeric'}
            value={value}
            underlineColorAndroid='rgba(0,0,0,0)'
            numberOfLines={1}
            // secureTextEntry={true}
            onChangeText={value => {
              
               setValue({ value })
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
            
            <Text style={styles.buttonText}>Next {otp}</Text>

        </TouchableOpacity>
    
        </View>
      
    </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        width:width,height:height,
        justifyContent:'space-around'
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
          fontSize:17,
          marginLeft:25,
          marginTop:20
          
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
        
        justifyContent:'space-between',
        flexDirection:'row',

    }
});
