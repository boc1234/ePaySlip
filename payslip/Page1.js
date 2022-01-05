import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { NumperiodContext } from '../provider';
import t from '../language/lang';
export default function Page1({navigation,route,props}) {
  const [num,setNum] = useState(NumperiodContext)
    const [empid,setEmpid] = useState();
    const [name,setName]= useState();
    const [year,setYear] = useState([]);
    const [month,setMonth] = useState([]);
    const [period,setPeriod] = useState([]);
    const [date,setDate] = useState();
    // const [payslip,setPayslip] = useState()
   
        
   


    useEffect(()=>{
      const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@payslip')
        const payslip = JSON.parse(value)
        console.log(payslip[0]._6)
   
         setEmpid(payslip[0].codempid)
         setName(payslip[0]._6)
         setDate((payslip[0]._7).slice(0,10))
        console.log('f',empid)

      } catch(e) {
        console.log(e)
        // error reading value
      }
      const id = await AsyncStorage.getItem('@empid')
      navigation.setOptions({ title: id })
    }
    getData();
      // setNum._currentValue('2121')
      
   
      
      // if(num._currentValue.year === '2021'){
      //   console.log(123)      
      // setNum({year:'123'})
      // console.log(num._currentValue.year)
    // }
  
        // console.log(num)
        // console.log(num?._currentValue)
        
       
      },[date])
     
    

    return (
      <View>
      <View>
        <Text>Employee ID : {empid}</Text>
      </View>
        
        <Text>{name}</Text>
        <Text>{date}</Text></View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
