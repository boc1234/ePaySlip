import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext, useState} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import {URL} from '../provider'
const {width,height} = Dimensions.get('window');

export default function VerifyOtp({ navigation , route}) {

    
const [otp,setOtp] = useState()

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
        //    navigation.navigate("")
        if(response.data.bool_Result == true){
            navigation.navigate({
                name: 'SignUp',
                params: { phone: route.params?.phone },
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
        <View >
        
        {/* <LinearGradient colors={['#095379','#00adb5']}  style={styles.container} > */}
        <StatusBar  barStyle="light-content"></StatusBar>
        <View>
            <Text>กรอกรหัสOTP</Text>
            <TextInput
                         style={styles.input}
                    
                         onChangeText={num=> setOtp(num)}
                        // value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        />
        </View>
            
        <TouchableOpacity style={styles.button}  onPress={requestOTP}>
            
            <Text style={styles.buttonText}>enter</Text>

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
        
   
        padding: 10,
        marginRight: 25,
        marginLeft: 25,
        borderWidth: 1,
        padding: 10,
      },
      text:{
          textAlign:'left',
          fontSize:17,
          marginLeft:25
          
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
});
