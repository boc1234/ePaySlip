import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const {width,height} = Dimensions.get('window');

export default function Phone({ navigation }) {

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
                    <Text style={styles.text}>กรอกหมายเลขโทรศัพท์มือถือ</Text>
                        <TextInput
                         style={styles.input}
                    
                         // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        />
                        
            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}  onPress={() => navigation.navigate('ID')} >Next
                
                </Text>
                
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
        backgroundColor:'#095379',
      
          padding: 10,
          marginRight: 30,
          marginLeft: 30,
        //   height: 80,
          justifyContent:'center',
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
