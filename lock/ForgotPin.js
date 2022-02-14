import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React,{useContext,createContext,useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import md5 from 'blueimp-md5';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width,height} = Dimensions.get('window');


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  
export default function ForgotPin({ navigation }) {
     const [empid , setEmpid] = useState('')
     const [timerCount, setTimer] = useState(0)
     const [timeDisabled , setTimeDisabled] = useState(false);
     const [expoPushToken, setExpoPushToken] = useState('');
     const [notification, setNotification] = useState(false);
     const notificationListener = useRef();
     const responseListener = useRef();

     useEffect(() => {
       setEmpid(AsyncStorage.getItem('@empid'))
       
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
     
      
    
        return () => {
          
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);


      async function registerForPushNotificationsAsync() {
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
      }
      async function sendPushNotification(expoPushToken) {
  
        var random = Math.floor(100000 + Math.random() * 900000)
        AsyncStorage.removeItem('@lock')
        const message = {
          to: expoPushToken,
          sound: 'default',
          title: 'Original Title',
          body: 'Your Password PIN:'+random,
          data: { someData: 'goes here' },
        };
      console.log(JSON.stringify(message))
        await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
          
        }).then(res=>{
          let formData = new FormData();
          formData.append('empid','Y11111')
          formData.append('phone','098765432')
          formData.append('new_pin',md5(random))
          axios.post(URL+'ForgotPin', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then(res=>{
            
            //    AsyncStorageLib.removeItem('@lock')
            });
          countdown();
            navigation.navigate('ChangePIN')
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
        <View style={styles.container}>
        
        {/* <LinearGradient colors={['#095379','#00adb5']}  style={styles.container} > */}
        <StatusBar  barStyle="light-content"></StatusBar>
            {/* <View style={styles.iconContainer}>
                <TouchableOpacity  disabled={true} style={styles.frame}>
                     <FontAwesome name="mobile-phone"  style={styles.icon} />
                 </TouchableOpacity>

                 
            </View> */}
           
            <View style={{marginBottom:20}} >
                    <Text style={styles.text}>กรอกหมายเลขโทรศัพท์มือถือ </Text>
                        <TextInput
                         style={styles.input}
                    
                         // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        />
                        
            </View>
           
            <TouchableOpacity style={(timerCount != 0 ? styles.button: styles.button2)}disabled={(timerCount != 0 ? true: false)} onPress={async() =>  {await sendPushNotification(expoPushToken)}}>
              {/* <View  */}
                 <Text style={(timerCount == 0 ? styles.buttonText: {height: 0, width: 0, opacity: 0})}>Reset Password
                </Text>
                <Text style={(timerCount != 0 ? styles.buttonText: {height: 0, width: 0, opacity: 0})} >{timerCount}</Text>
              {/* </View> */}
                
                
            </TouchableOpacity>
            <View style={{marginTop:50}}></View>
            {/* <StatusBar style='auto' /> */}
          
            
        {/* </LinearGradient> */}
        </View>
        {/* </ScrollView> */}
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
 
});
