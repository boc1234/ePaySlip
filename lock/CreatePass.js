import React, { Component } from 'react';
import { View, Text ,StyleSheet,SafeAreaView,Image,StatusBar,ImageBackground, Dimensions ,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Face from '../regis/Face';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width,height} = Dimensions.get('window');

import md5 from 'blueimp-md5';
import { LinearGradient } from 'expo-linear-gradient';
class CreatePass extends Component {
  constructor(props) {
 
    super(props);
    this.state = {
        passcode:['','','','','',''],
        pin:''
    };
    
  }


  
  _onPressNumber = num =>{
      
      let tempCode = this.state.passcode;
      let pin = '';
      for(var i = 0 ;i< tempCode.length;i++){
          if(tempCode[i] == ''){
              tempCode[i] = num;
              pin = tempCode.join("");
              if(pin.length == 6){
 
      
            
                this.props.navigation.navigate({
                    name: 'ConfirmPass',
                    params: { pin:pin },
                    merge: true,
                  });
            }
              break;
          }else{
              continue;
          }
          
      }
      this.setState({passcode:tempCode})
    //  alert(this.state.passcode)
  }
  _onPressCancel = () =>{
    let tempCode = this.state.passcode;
    for(var i =  tempCode.length -1 ;i>=0; i--){
    //     if(tempCode[i] != ''){
    //         tempCode[i] = '';
    //         break;
    //     }else{
    //         continue;
    //     }
    tempCode[i] = ''
    }
    
    this.setState({passcode:tempCode})
   
}
 
  render() {
    const { navigation,route } = this.props;

      let numbers =[
          {id:'1'},
          {id:'2'},
          {id:'3'},
          {id:'4'},
          {id:'5'},
          {id:'6'},
          {id:'7'},
          {id:'8'},
          {id:'9'},
          {id:'0'}
          
          
     ];
    return (
   
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <LinearGradient colors={['#095379','#00adb5']} style={{position:'absolute',top:0,width:width,height:height}}>
            {/* <ImageBackground source={require('../assets/images/bg2.jpg')}
            style={{position:'absolute',top:0,width:width,height:height}}
            ></ImageBackground> */}
        <View style={styles.swipe}>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="lock" size={24} color="#ffffff" style={{marginRight:1}} />
          
            </View>
          
            
            <View style={{marginTop:50}}>
                <View >
                    <Text style={styles.passcodeText}>Create Password</Text>

                </View>
                <View style={styles.codeContainer}>
                    {this.state.passcode.map(p=>{
                        let style= p !=''? styles.code2:styles.code1;
                        return <View style={style}></View>
                    })}
                </View>
            </View>
           
        </View>
        
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={styles.numbersContainer}>
                {numbers.map(num=>{ 
                   
                    return (<TouchableOpacity key={num.id.toString()} style={styles.number}    onPress = {()=>this._onPressNumber(num.id)}>
                              <Text  style={styles.numberText}>{num.id}</Text>
                            </TouchableOpacity>)
                })}

            </View>
            
        </View>

        <View style={styles.buttons}>
            <TouchableOpacity  >
                {/* <Text style={styles.buttonText}  > </Text> */}
                <Text style={styles.buttonText} onPress={() => navigation.navigate('SignUp')} >Back</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress = {()=>this._onPressCancel()}>
                 <Text style={styles.buttonText} >Cancel</Text>
            </TouchableOpacity> 
        </View>
        </LinearGradient>
        </SafeAreaView>
        

    // <SafeAreaView style={styles.container}>
    //     <StatusBar barStyle="light-content">
    //         <Image source={require('../assets/images/bg.jpg')}></Image>
    //     </StatusBar>
        
    // </SafeAreaView>
    );
  }
}

export default CreatePass



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    swipe:{
        height:193,
        alignItems:'center',
        justifyContent:'center'
    },
    swipeText:{
        fontSize:18,
        color:'#ffffff',
        letterSpacing:-0.41,
        lineHeight: 22
    },
    passcodeText:{
        fontSize:24,
        color:'#ffffff',
        letterSpacing:0.1,
        lineHeight: 50
    },
   
    codeContainer:{
        marginTop:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        justifyContent:'space-between'
    },
    code1:{
        width:13,
        height:13,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#ffffff'
    },
    code2:{
        width:13,
        height:13,
        borderRadius:13,
        backgroundColor:'#ffffff'
    },
    number:{
        width:75,
        height:75,
        borderRadius:75,
        backgroundColor:'rgba(255,255,255,0.4)',
        justifyContent:'center',
        alignItems:'center',
        margin:9
    },
    numbersContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:25,
        width:282,
        height:348,
        alignItems:'center',
        justifyContent:'center',
     
    },
    numberText:{
        fontSize:36,
        color:'black',
        letterSpacing:0,
        textAlign:'center'
    },
    buttons:{
        marginTop:50,
        marginLeft:36,
        marginRight:36,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    buttonText:{
        fontSize:14,
        color:'#ffffff',
        letterSpacing:-0.39,
        textAlign:'center'
    }
   

})