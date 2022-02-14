import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext,useState,useEffect, useCallback} from 'react';
import { StyleSheet,Linking, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import axios, { Axios } from 'axios';
import md5 from 'blueimp-md5';
import {URL} from '../provider'
const {width,height} = Dimensions.get('window');

export default function SignUp({ navigation,route }) {
    const [empid, setEmpid] = useState("");
    const [phone, setPhone] = useState("");
    const [idcard, setIdcard] = useState("");
    const [passport, setPassport] = useState("");
    const [pin, setPin] = useState("");
    const [status,setStatus] = useState(1);
    // if(route.params?.p_empid != undefined){
        

        const supportedURL = "https://google.com";
        const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};



     useEffect(()=>{
   
      },[])




        
            // value previously stored
           
          
  
    // }
    
    useFocusEffect(
        useCallback(()=>{
            // console.log(route.params?.p_empid)
            // if(route.params?.p_empid != undefined){
            // setEmpid(route.params?.p_empid)
            setStatus(route.params?.stat)
            setPin(route.params?.pin)
            setPhone(route.params?.phone)
            // }
        })
    )

    const signUp =()=>{
        // console.log(1,empid)
        const base64 = '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'
        let formData = new FormData();
        formData.append('empid','Y16992')
        formData.append('idcard','2')
        
        formData.append('pin',md5(654321))
        formData.append('phonenum','0899996547')
        formData.append('ownerphone',1)
        formData.append('agree','2')
        formData.append('cardpic',base64)
        formData.append('facepic','2')

        const app_data = {
                    //  uid:3942,
                    empid:'666',
                    idcardnum:'2',
                    passportidnum:'2',
                    pin:md5(pin),
                    phonenum:'0959324326',
                    ownerphone:status,
                    agree:0,
                    cardpic:'',
                    facepic:'2'
        }
        const postData =JSON.stringify(app_data)


        axios.post(URL+'Register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }) .then(function (response) {
              
          });
        
    }
    
    return (
        // style={{position:'absolute',top:0,width:width,height:height}}
        
       

        //  <View style={styles.container} >
        <SafeAreaView style={styles.container}>  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
            
        {/* <ScrollView > */}
        {/* <StatusBar barStyle="light-content"></StatusBar> */}
     
        <View style={{padding: 24, flex: 1,}}>
           
            <View style={styles.content} >
            {/* <View  style={{flexDirection:'row',alignItems:'center'}}> */}
                    {/* <AntDesign name="idcard" style={styles.icon} size={24}  /> */}
                    <Text style={{paddingLeft:30,}}>Employee ID*</Text>
                    <View >
                  
                    {/* <TouchableOpacity  onPress={()=>navigation.navigate('ID')}> */}
                    {/* placeholder={empid} editable={false} selectTextOnFocus={false}   */}
                    
                        <TextInput style={styles.textInput} onChangeText={text=> setEmpid(text)}></TextInput>
                    {/* </TouchableOpacity> */}
                    
                    {/* <Ionicons  name="md-checkmark-circle" size={22} color="green"  style={{position:'absolute',alignItems:'flex-end'}}/> */}
                    </View>
                    
                {/* </View> */}
                <Text style={{paddingLeft:30,}}>Phone Number*</Text>
                <TouchableOpacity  onPress={()=>navigation.navigate('Otp')}>
                    <View>
                        <TextInput style={styles.textInput} value={phone} editable={false} selectTextOnFocus={false} ></TextInput>
                    </View>
                    {/* <AntDesign name="idcard" style={styles.icon} size={24}  /> */}
                    
                </TouchableOpacity>

                <Text style={{paddingLeft:30}}>Passport</Text>
                <TouchableOpacity>
                    {/* <AntDesign name="idcard" style={styles.icon} size={24}  /> */}
                    <TextInput style={styles.textInput} onChangeText={passport=> setPassport(passport)}  ></TextInput>
                </TouchableOpacity>
                    
                    <Text style={{paddingLeft:30,}}>PIN*</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('CreatePin')} >
                    {/* <AntDesign name="idcard" style={styles.icon} size={24}  /> */}
                    <TextInput style={styles.textInput}  selectTextOnFocus={false} secureTextEntry={true} value={pin} ></TextInput>
                    </TouchableOpacity>
             
                    

                <Text style={{paddingLeft:30}}>p*</Text>
                <TouchableOpacity>
                    {/* <AntDesign name="idcard" style={styles.icon} size={24}  /> */}
                    <TextInput style={styles.textInput}   ></TextInput>
                </TouchableOpacity>
                
                    {/* <Feather name="phone" style={styles.icon} size={24}  /> */}
                    <Text style={{paddingLeft:30}}>c*</Text>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Face')}>
                    <TextInput keyboardType={'phone-pad'} style={styles.textInput}   editable={false}    ></TextInput>
                    </TouchableOpacity>
                

            <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>


            <TouchableOpacity style={styles.button}  onPress={signUp}>
            
                <Text style={styles.textButton}>Sign up</Text>

            </TouchableOpacity>
            
    
            
            </View>
        </View>

        {/* </ScrollView> */}
        </TouchableWithoutFeedback>
            
        {/* </View> */}
        </SafeAreaView>
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
    content:{
        
        paddingTop:15,
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
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,

      },


});
