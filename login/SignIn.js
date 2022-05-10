import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext,useState, useEffect,useCallback} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity ,Picker, TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
const {width,height} = Dimensions.get('window');
import axios from 'axios';
import {URL} from '../provider'
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { context } from '../provider';
import t from '../language/lang';
import SelectDropdown from 'react-native-select-dropdown';
import { useFocusEffect } from '@react-navigation/native';
export default function SignIn({ navigation }) {
const lang = useContext(context)
const [empid, setEmpid] = useState("058672");
const [phone,setPhone] = useState("0959324326");
const [language,setLanguage] = useState('');
const [expopushtoken, setExpoPushToken]= useState('');
const countries = ["EN", "TH", "MM", "KH"]
    const login =()=>{
        navigation.navigate('LockScreen')
        
    }
    useFocusEffect(
      useCallback(()=>{

        AsyncStorage.getItem('@lang').then(res=>{
         
          if(res == 'undefined' || res ==null){
            AsyncStorage.setItem('@lang','0');
          }
          setLanguage(res)
        })
      },[])    
    )

    useEffect(()=>{
     
     
        AsyncStorage.getItem('@lang').then(res=>{
           
            if(res == 'undefined'){
              AsyncStorage.setItem('@lang','0');
            }
            setLanguage(res)
          }).catch(err=>{
            console.log(err)
          })
          
        try {
        //   const value = await 
          AsyncStorage.getItem('@empid').then(res=>{
            registerForPushNotificationsAsync().then(token => {
              AsyncStorage.getItem('@token').then(token_storage=>{

            // if(token == token_storage){
                AsyncStorage.getItem('@screen').then(res2=>{ 
                  console.log(res2)
                  console.log(res)
                  if(res !== null && res2 == 'lock') {

                    navigation.navigate('LockScreen')

                  }else if(res !== null && res2 == 'multi'){

                    navigation.navigate('MultipleUsers')
                }
                
            })
            // }else{
            //   alert('test123')
            // }
             });
           });
          })
          
        } catch(e) {
          // error reading value
        }
      },[])

      async function registerForPushNotificationsAsync() {
        try{
          let token;
          if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
              const { status } = await Notifications.requestPermissionsAsync();
              finalStatus = status;
            }
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
        
          } else {
            alert('Must use physical device for Push Notifications');
          }
      
          if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
              name: 'default',
              importance: Notifications.AndroidImportance.MAX,
              vibrationPattern: [0, 250, 250, 250],
              lightColor: '#FF231F7C',
            });
          }
        
          return token;
        }catch(e){
          alert(e)
        }
      
      }

    const add = ()=>{
        navigation.navigate({
          name: 'Otp',
          params: { stat: 0 },
          merge: true,
        });
      }
      

      const checkLogin = async()=>{

        // navigation.navigate({
        //     name: 'LockScreen',
        //   });

        axios.get(URL+"Login",{
            params:{
                id:empid,
                phone:phone
            }
        
        })
        
        .then(function (response) {
          console.log(response.data)
      console.log(response.data[0].string_Message)

       registerForPushNotificationsAsync().then(token => {
         console.log(token)
        //  if(token == response.data[0].token){
                try {

                     AsyncStorage.setItem('@phone',response.data[0].phonenum)
                     AsyncStorage.setItem('@empid',response.data[0].empid)
                     AsyncStorage.setItem('@pin',response.data[0].pin)
                    //  AsyncStorage.setItem('@token',token)
                     axios.get(URL+"GetGuest",{
                       params:{
                         phone:response.data[0].phonenum
                       }
                     }).then(res=>{

              // console.log(response.data[0].string_Message)
                       if(res.data[1] == undefined && response.data[0].string_Message == 'owner'){
                        AsyncStorage.setItem('@screen','lock')
                        navigation.navigate({
                          name: 'LockScreen',
  
                        });
                       }else if(res.data[1] != undefined && response.data[0].string_Message == 'owner'){
                        AsyncStorage.setItem('@screen','multi')
                        navigation.navigate({
                        name: 'MultipleUsers',
  
                      });
                       }else if(response.data[0].string_Message == 'guest'){
                         alert('รหัสนี้ไม่สามารถเข้าใช้งานได้')
                       }
                     })
                    
                     
                  } catch (e) {
                
                    // navigation.navigate({
                    //   name: 'MultipleUsers',

                    // });
                    
                    console.log(e)
                  }

                   
        axios.get(URL+"GetName",{
            params:{
                id:response.data[0].empid,
              
            }
        
        }).then(function(response){
            
            AsyncStorage.setItem('@name',response.data.namempt)
        })

            // }
          
          //   axios.post(URL+"Log",{
          //     params:{
          //       empid:response.data[0].empid,
          //       function_name:'Login',
          //       status:'success',
          //       detail:response.data[0].empid+' Login success'

                
          //     }
          
          // }).then(function(response){
              
          //     console.log(response)
          // })

          let formData = new FormData();
          formData.append('empid',response.data.empid)
          formData.append('function_name','Login')
          formData.append('status','success')
          formData.append('detail',response.data.empid+' Login success')

          axios.post(URL+'Log', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }) .then(function (response) {
              
          });
        //   --------
        //  }else{
        //    alert('test')
        //  }
        //---
        });
        // -------------
        })
        .catch(function (error) {
          let formData = new FormData();
          formData.append('empid',empid)
          formData.append('function_name','Login')
          formData.append('status','fail')
          formData.append('detail','invalid id')

          axios.post(URL+'Log', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }) .then(function (response) {
              
          });
        console.log(error)
          alert('รหัสไม่ถูกต้อง')

        // navigation.navigate('LockScreen')
        })
      }

const languagePage =() =>{
  navigation.navigate({name: 'Language',params: {status:0},merge: true,})
}

      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@empid')
          if(value !== null) {
            setTest(value)
            // value previously stored
           
          }
        } catch(e) {
          // error reading value
        }
      }
    //   route.params?.post
    return (
        // style={{position:'absolute',top:0,width:width,height:height}}
        
        // <SafeAreaView style={styles.container}>
         <LinearGradient colors={['#095379','#00adb5']}  style={styles.container} >
           <StatusBar barStyle="light-content"></StatusBar>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
            
        {/* <ScrollView > */}
        
     
        <View style={{padding: 24, flex: 1,}} >
        {/* justifyContent:'space-around' */}
              <View style={styles.language}  >
                <Text style={styles.languageText} onPress={languagePage}>Language {countries[language]}  </Text>
    

                {/* <Picker
                  selectedValue={language}
                  
                  style={{ backgroundColor:'rgba(255,255,255,0.5)'}}
                  onValueChange={(itemValue, itemIndex) =>  AsyncStorage.setItem('@lang',itemValue)}
                >
                  <Picker.Item label="EN" value="0" />
                  <Picker.Item label="TH" value="1" />
                  <Picker.Item label="MM" value="2" />
                  <Picker.Item label="KH" value="3" />
                  
                </Picker> */}



                {/* <SelectDropdown
                  style={{color:'blue'}}
                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {

                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
  
                    return item
                  }}
                /> */}
                
              </View>
            <View style={{marginBottom:'10%'}}></View>
            <View style={styles.header}>
  
                <Text style={styles.headerText}>Welcome!</Text>
                <Text style={{paddingBottom:15,color:'white',zIndex:1}}>Login to continue</Text>
              
            </View>
            <View style={styles.content} >
             
                <View>
                    <AntDesign name="user" style={styles.icon} size={24}  />
                    <TextInput onChangeText={id=> setEmpid(id)} style={styles.textInput} placeholder={'Employee ID'}  placeholderTextColor={'rgba(255,255,255,0.6)'}></TextInput>
                </View>
                <View>
                    <Feather name="phone" style={styles.icon} size={24}  />
                    <TextInput onChangeText={num=> setPhone(num)} keyboardType={'phone-pad'} style={styles.textInput}  placeholder={'Phone Number'} placeholderTextColor={'rgba(255,255,255,0.6)'}></TextInput>
                </View>
            <TouchableOpacity style={styles.button}  onPress={checkLogin}>
            
                <Text style={styles.textButton}>Login</Text>

            </TouchableOpacity>
            <View style={styles.extraView}>
                <Text style={styles.extraText}>Don't have an account?  </Text>
                <TouchableOpacity  onPress={add} >
            
                <Text style={styles.linkText}>Sign up</Text>

                </TouchableOpacity>
            </View>
            
            </View>
        </View>

        {/* </ScrollView> */}
        </TouchableWithoutFeedback>
            
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        // backgroundColor: 'black',
        
        // alignItems: 'center',
        // justifyContent: 'center',
        
    },
    header:{
        // flex:1,
        // height:400,
        // marginBottom:59,
        // backgroundColor:'#00ADB5',
        alignItems:'center',
        justifyContent:'flex-end',
        alignContent:'center',
    },
    headerText:{
        
        fontSize:40,
        color:'white',
        fontWeight:'bold',
        zIndex:1
    },
    language:{
      marginTop:15,
      alignItems:'center',
      justifyContent:'flex-end',
      flexDirection:'row',
    },
    languageText:{
      color:'white'
    },
    content:{
        
        paddingTop:55,
    },
    textInput:{
        backgroundColor:'rgba(255,255,255,0.4)',
        padding:15,
        paddingLeft:55,
        paddingRight:55,
        borderRadius:5,
        fontSize:16,
        height:50,
        marginVertical:3,
        marginBottom:15,
        marginLeft:20,
        marginRight:20,
        alignItems:'center',
        color:'white'
        
    },
    icon:{
        left:40,
        top:15,
        position:'absolute',
        zIndex:1,
        color:'#095379'
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
    extraView:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    extraText:{
        justifyContent:'center',
        alignContent:'center',
    },
    linkText:{
        color:'white'
    },
    dropdownsRow: {
      marginTop:30,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: "100%",
    
      paddingHorizontal: "5%",
    }


});
