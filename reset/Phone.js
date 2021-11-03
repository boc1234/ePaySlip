import { StatusBar } from 'expo-status-bar';
import React,{useContext,createContext} from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView ,TouchableOpacity , TextInput ,TouchableWithoutFeedback ,Keyboard,ScrollView ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window');

export default function Phone({ navigation }) {

    return (
        
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        
        <ScrollView >
        
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.iconContainer}>
                <TouchableOpacity  disabled={true} style={styles.frame}>
                     <FontAwesome name="mobile-phone"  style={styles.icon} />
                 </TouchableOpacity>

                 
            </View>
            <View  >
                    <Text style={styles.text}>กรอกหมายเลขโทรศัพท์มือถือ</Text>
            </View>
            
            <TextInput
                style={styles.input}
                
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            {/* <StatusBar style='auto' /> */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}  onPress={() => navigation.navigate('ID')} >Next
                
                </Text>
                
            </TouchableOpacity>
            
        </SafeAreaView>
        </ScrollView>
    </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        width:width,height:height,
        
        // justifyContent: 'center',
    },
    frame:{
        width:200,
        height:200,
        borderRadius:200,
        backgroundColor:'#393E46',
        justifyContent:'center',
        alignItems:'center',
        margin:50
    }, 
    iconContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',

     
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
        margin: 25,
        borderWidth: 1,
        padding: 10,
      },
      text:{
          textAlign:'left',
          fontSize:17,
          marginLeft:25
          
      },
      button:{
     
        //   width:"80%",
        backgroundColor:'#00ADB5',
      
          padding: 10,
          margin: 30,
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
        
    }
});
