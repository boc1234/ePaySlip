import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext, useState,useRef} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback,Modal,Pressable ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import {URL} from '../provider'
import PhoneInput from "react-native-phone-number-input";
const {width,height} = Dimensions.get('window');

export default function Otp({ navigation ,route}) {
const [num,setNum] = useState()
const [timerCount, setTimer] = useState(0)
const [modalVisible, setModalVisible] = useState(false);
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);
const inputRef4 = useRef(null);
const inputRef5 = useRef(null);
const inputRef6 = useRef(null);
const [value, setValue] = useState("");    
const [otp,setOtp] = useState(['','','','','',''])
    const requestOTP = ()=>{
        countdown();
        console.log(num)

        // navigation.navigate({
        //   name: 'VerifyOtp',
        //   // params: { ref: response.data,phone:num ,stat:route.params?.stat},
        //   merge: true,
        // });
       
     axios({
            method: 'post',
            url: URL+'RequestOTP',
            params: {
                phone:num
            },
            headers: {"Content-Type": "application/json; "}
          }) .then(function (response) {
            
            navigation.navigate({
             name: 'VerifyOtp',
             params: { ref: response.data,phone:num ,stat:route.params?.stat},
             merge: true,
           });
          setModalVisible(true)
            console.log(response.data.refno);
            
        })
        .catch(function (error) {
          console.log(error)
        });

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
        
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        {/* <ScrollView > */}
        <View >
        
        {/* <LinearGradient colors={['#095379','#00adb5']}  style={styles.container} > */}
        <StatusBar  barStyle="light-content"></StatusBar>
        <View>
            <Text style={styles.text}>กรอกหมายเลขโทรศัพท์มือถือ</Text>
            <View style={styles.input}>
                <PhoneInput 
                    // ref={phoneInput}
                    // defaultValue={value}
                    defaultCode="TH"
                    // layout="first"
                    // onChangeText={(text) => {
                    //   setNum(text);
                    // }}
                    onChangeFormattedText={(text) => {
                      setNum(text);
                    }}
                    // withDarkTheme
                    // withShadow
                    // autoFocus
                />
                </View>
            <TextInput
                         style={styles.input}
                         maxLength={10}
                         
                         onChangeText={num=> setNum(num)}
                        // value={number}
                        placeholder="placeholder"
                        keyboardType="numeric"
                        />
        </View>

        



      {/* <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
               <Text style={styles.headertext}>OTP Vertification</Text>
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
        </View>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Verify</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Verify</Text>
      </Pressable>
    </View> */}
            
        {/* <TouchableOpacity style={styles.button}  onPress={requestOTP}>
            
            <Text style={styles.buttonText}>Next{num}</Text>

        </TouchableOpacity> */}







        <TouchableOpacity style={(timerCount != 0 ? styles.button: styles.button2)}disabled={(timerCount != 0 ? true: false)} onPress={requestOTP}>
 
                 <Text style={(timerCount == 0 ? styles.buttonText: {height: 0, width: 0, opacity: 0})}>Get OTP
                </Text>
                <Text style={(timerCount != 0 ? styles.buttonText: {height: 0, width: 0, opacity: 0})} >{timerCount}</Text>
    
                
                
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
        // borderWidth: 1,
        marginTop:10
      },
      text:{
          textAlign:'left',
          fontSize:17,
          marginLeft:25,
          marginTop:20
          
      },
    //   button:{
    //     marginTop:15,
    //     paddingLeft: 15,
    //     paddingRight: 15,
    //     borderRadius: 5,
    //     //   width:"80%",
    //     backgroundColor:'#095379',
      
    //       padding: 10,
    //       marginRight: 30,
    //       marginLeft: 30,
    //     //   height: 80,
    //       justifyContent:'center',
    //   },
    //   buttonText:{
        
    //     fontSize:22,
    //     color:'#FFFFFF',
    //     // letterSpacing:-0.39,
    //     textAlign:'center',
        
    //     // marginRight:20,
    //     // marginTop:20
        
    // },
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
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      header:{
        margin:50
      },
      headertext:{
        fontSize:20
      },
      centeredView: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 80
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
      },
      buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:50
  
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      otp:{
        width:40,
        height:50,
        borderWidth: 2,
        margin:5,
        fontSize:25,
        textAlign:'center',
    },
    content:{
        justifyContent:'space-between',
        flexDirection:'row',
  
    }
});
