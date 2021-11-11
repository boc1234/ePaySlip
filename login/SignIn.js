import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const {width,height} = Dimensions.get('window');

export default function SignIn({ navigation }) {
    const login =()=>{
        navigation.navigate('LockScreen')
        
    }
    
    return (
        // style={{position:'absolute',top:0,width:width,height:height}}
        
        // <SafeAreaView style={styles.container}>
         <LinearGradient colors={['#095379','#00adb5']}  style={styles.container} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
            
        {/* <ScrollView > */}
        {/* <StatusBar barStyle="light-content"></StatusBar> */}
     
        <View style={{padding: 24, flex: 1,justifyContent:'space-around'}}>
            <View style={{marginBottom:'10%'}}></View>
            <View style={styles.header}>
               
                <Text style={styles.headerText}>Welcome!</Text>
                <Text style={{paddingBottom:15,color:'white',zIndex:1}}>Login to continue</Text>
            </View>
            <View style={styles.content} >
                <View>
                    <AntDesign name="idcard" style={styles.icon} size={24}  />
                    <TextInput style={styles.textInput} placeholder={'ID Card or Passport'}  placeholderTextColor={'rgba(255,255,255,0.6)'}></TextInput>
                </View>
                <View>
                    <Feather name="phone" style={styles.icon} size={24}  />
                    <TextInput keyboardType={'phone-pad'} style={styles.textInput}  placeholder={'Phone Number'} placeholderTextColor={'rgba(255,255,255,0.6)'}></TextInput>
                </View>
            <TouchableOpacity style={styles.button}  onPress={login}>
            
                <Text style={styles.textButton}>Login</Text>

            </TouchableOpacity>
            <View style={styles.extraView}>
                <Text style={styles.extraText}>Don't have an account?  </Text>
                <TouchableOpacity   >
            
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
    content:{
        
        paddingTop:15,
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
    }


});
