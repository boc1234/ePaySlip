import React, { Component } from 'react';
import { View, Text ,StyleSheet,SafeAreaView,Image,StatusBar,ImageBackground, Dimensions ,TouchableOpacity,Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Face from '../regis/Face';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {URL} from '../provider'
const {width,height} = Dimensions.get('window');

import md5 from 'blueimp-md5';
import { LinearGradient } from 'expo-linear-gradient';
class LockScreen extends Component {
  constructor(props) {

    super(props);
    this.state = {
        passcode:['','','','','',''],
        pin:'',
        emp:'',
        count:0
      
    };
    
  }
 async componentDidMount () {


    try {


        AsyncStorage.getItem('@choosepin').then(res=>{
            this.state.pin = res;
        })

      } catch(e) {
          console.log(e)
        // error reading value
      }
  }

//   async removeItemValue(key) {
//     try {
//         await AsyncStorage.removeItem(key);
//         return true;
//     }
//     catch(exception) {
//         return false;
//     }
// }
//   componentWillReceiveProps
 componentDidUpdate(nextProps){
    try{
        // if(this.state.pin == undefined){
            AsyncStorage.getItem('@choosepin').then(res=>{
                this.state.pin = res;
                console.log(res)
                if(res == undefined){
                    AsyncStorage.getItem('@pin').then(res=>{
                        this.state.pin = res
                    })
                }
            })
        // }
         if(this.props.route.params?.pin != undefined){

        
        // this._onPressCancel()
    //   console.log(this.props.route.params?.pin)
        this.state.pin = this.props.route.params?.pin
       
            
        }
     
        if(this.props.route.params?.id !== 'undefined'){

// alert(this.props.route.params?.id)
            if(this.state.emp != this.props.route.params?.id){
            // this._onPressCancel()

            this.state.emp = this.props.route.params?.id
            AsyncStorage.setItem('@guest',this.props.route.params?.id)
            AsyncStorage.setItem('@guestname',this.props.route.params?.name)
        }

        }
        
    }catch(err){
        console.log(err)
    }

  }

//   getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('@empid')
//       if(value !== null) {
//           console.log(123)
//         this.state.pin = value;
//         // value previously stored
       
//       }
//     } catch(e) {
//       // error reading value
//     }
//     }
  
  _onPressNumber  = async(num) =>{
    const value = await AsyncStorage.getItem('@guest')
    const lock = await AsyncStorage.getItem('@lock')
   
    const choose = await AsyncStorage.getItem('@choose')
    // this.state.passcode = 'c33367701511b4f6020ec61ded352059';
    if(lock == null){
  
      let tempCode = this.state.passcode;
      let pin = '';
      for(var i = 0 ;i< tempCode.length;i++){
          if(tempCode[i] == ''){
              tempCode[i] = num;
              pin = tempCode.join("");
              if(pin.length == 6){

                if(this.state.pin == md5(pin)){
                    this.state.count = 0
                    

                    AsyncStorage.getItem('@empid').then(async res=>{

                        let formData = new FormData();
                        formData.append('empid',choose)
                        formData.append('function_name','PIN')
                        formData.append('status','success')
                        formData.append('detail','success')
              
                        axios.post(URL+'Log', formData, {
                          headers: {
                            'Content-Type': 'multipart/form-data'
                          }
                        })
                        let a = await AsyncStorage.getItem('@screen');
     
   
                        if(a == 'multi'  ){
                     
                            // this.props.navigation.navigate('GuestDrawer')
                            this.props.navigation.navigate({
                                name:'MyDrawer',
                                params:{check:0},
                                merge:true
                            })
      
                        }else{
                        
                            this.props.navigation.navigate({
                                name:'MyDrawer',
                                params:{check:1},
                                merge:true
                            }
                            )


                            // this.props.navigation.navigate('MyDrawer')
                        }


                    })
                    
                    
                    this._onPressCancel();
                }
                // else if(){
                    
                // }
                else{
                    this.state.count++
                    // AsyncStorage.getItem('@empid').then(res=>{
                    if(this.state.count >= 3){
                        AsyncStorage.setItem('@lock','1')
                        let formData = new FormData();
                        formData.append('empid',choose)
                        formData.append('function_name','PIN')
                        formData.append('status','fail')
                        formData.append('detail','PIN lock')
              
                        axios.post(URL+'Log', formData, {
                          headers: {
                            'Content-Type': 'multipart/form-data'
                          }
                        })
                    }
                    
                   

                        let formData = new FormData();
                        formData.append('empid',choose)
                        formData.append('function_name','PIN')
                        formData.append('status','fail')
                        formData.append('detail','Incorrect PIN ['+this.state.count+']')
              
                        axios.post(URL+'Log', formData, {
                          headers: {
                            'Content-Type': 'multipart/form-data'
                          }
                        })
                    // })
                    alert('Incorrect PIN. Try again.'+this.state.count)
                    this._onPressCancel();

                    // this.props.navigation.navigate('MyDrawer')
                }
                
                
            }
              break;
          }else{
              continue;
          }
        }
          
      
      this.setState({passcode:tempCode})
    }else{
        // alert('รหัส PIN ไม่ถูกต้องเกินจำนวนครั้งที่กำหนด')
        this.createAlert();

        
        
    }
    //  alert(this.state.passcode)
    
  }

 guest = async() =>{
    const value = await AsyncStorage.getItem('@guest')
    if(value != null ){
        // alert(value)
        this.props.navigation.navigate('GuestDrawer')
        
    }else{
        this.props.navigation.navigate('MyDrawer')
    }
 }

  createAlert = () =>
  
    Alert.alert(
      "รหัส PIN ไม่ถูกต้องเกินจำนวนครั้งที่กำหนด",
      "My Alert Msg",
      [
        {
          text: "Cancel",
        //   onPress: () =>  this.props.navigation.navigate('MyDrawer'),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
         
            this.state.count = 0
            //  AsyncStorage.getItem('@lock').then(res=>{
            //      console.log(1)
            //  })
            console.log(this.state.count)
            
       
        this.props.navigation.navigate('ForgotPin')}}
      ]
    );

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
            {/* style={{marginTop:50}} */}
            <View >
                <View >
                {/* {t('name')} */}
                    <Text style={styles.passcodeText}>Enter Password </Text>

                </View>
                <View style={styles.codeContainer}>
                    {this.state.passcode.map(p=>{
                        let style= p !=''? styles.code2:styles.code1;
                        return <View style={style}></View>
                    })}
                </View>
            </View>
           
        </View>
        
        <View style={{alignItems:'center',justifyContent:'center',flex:1.8,}}>
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
                <Text style={styles.buttonText} onPress={() => navigation.navigate('ForgotPin')} >Forgot </Text>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('ForgotPin')} >Password</Text>
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

export default LockScreen



const styles = StyleSheet.create({
    container:{
        flex:1,
  
        
    },
    swipe:{
        flex:1,
        marginTop:40,
        // height:'10%',
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
        flex:1,
        marginTop:50,
        marginLeft:36,
        marginRight:36,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    
    },
    buttonText:{
        fontSize:14,
        color:'#ffffff',
        letterSpacing:-0.39,
        textAlign:'center'
    }
   

})