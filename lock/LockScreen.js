import React, { Component } from 'react';
import { View, Text ,StyleSheet,SafeAreaView,Image,StatusBar,ImageBackground, Dimensions ,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Face from '../verify/Face';
const {width,height} = Dimensions.get('window');

class LockScreen extends Component {
  constructor(props) {
      
    super(props);
    this.state = {
        passcode:['','','','','','']
    };
  }
  
  _onPressNumber = num =>{
      
      let tempCode = this.state.passcode;
      for(var i = 0 ;i< tempCode.length;i++){
          if(tempCode[i] == ''){
              tempCode[i] = num;
              break;
          }else{
              continue;
          }
      }
      this.setState({passcode:tempCode})
      
  }
  _onPressCancel = () =>{
    let tempCode = this.state.passcode;
    for(var i =  tempCode.length -1 ;i>=0; i--){
        if(tempCode[i] != ''){
            tempCode[i] = '';
            break;
        }else{
            continue;
        }
    }
    this.setState({passcode:tempCode})
   
}
 
  render() {
    const { navigation } = this.props;
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
            <ImageBackground source={require('../assets/images/bg2.jpg')}
            style={{position:'absolute',top:0,width:width,height:height}}
            ></ImageBackground>
        <View style={styles.swipe}>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="lock" size={24} color="#ffffff" style={{marginRight:1}} />
                <Text style={styles.swipeText} >
                    {this.state.passcode[0]}
                </Text>
                <Text>{this.state.passcode[1]}</Text>
            </View>
          
            
            <View style={{marginTop:50}}>
                <View >
                    <Text style={styles.passcodeText}>ใส่รหัสผ่าน</Text>
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
                    // key={num.id}
                    return (<TouchableOpacity style={styles.number}  onPress = {()=>this._onPressNumber(num.id)}>
                              <Text style={styles.numberText}>{num.id}</Text>
                            </TouchableOpacity>)
                })}

            </View>
            
        </View>

        <View style={styles.buttons}>
            <TouchableOpacity  onPress = {()=>this._onPressCancel()}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Phone')} >ลืมรหัสผ่าน</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress = {()=>this._onPressCancel()}>
                 <Text style={styles.buttonText} >ยกเลิก</Text>
            </TouchableOpacity> 
        </View>
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
        letterSpacing:0.34,
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
        fontSize:16,
        color:'#ffffff',
        letterSpacing:-0.39,
        textAlign:'center'
    }
   

})