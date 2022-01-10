import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import { NumperiodContext } from '../provider';
import t from '../language/lang';
export default function Page1({navigation,route,props}) {
  // const [num,setNum] = useState(NumperiodContext)
    const [empid,setEmpid] = useState();
    const [name,setName]= useState();
    const [year,setYear] = useState([]);
    const [month,setMonth] = useState([]);
    const [period,setPeriod] = useState([]);
    const [date,setDate] = useState();
    const [language,setLanguage] = useState();
    // const [payslip,setPayslip] = useState()
   
        
   


    useEffect(()=>{
      // const getData = async () => {
      AsyncStorage.getItem('@lang').then(res=>{
        setLanguage(res)
      })
      try {
        // const value = await 
        AsyncStorage.getItem('@payslip').then(res=>{
          const payslip = JSON.parse(res)
          console.log(payslip[0]._6)
           setEmpid(payslip[0].codempid)
           setName(payslip[0]._6)
           setDate((payslip[0]._7).slice(0,10))
   
        })
      

      } catch(e) {
        console.log(e)
        // error reading value
      }
      AsyncStorage.getItem('@empid').then(res=>{
        navigation.setOptions({ title: res })
      })
      
    // }
    // getData();
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
        <Text>{t('id')[language]} : {empid}</Text>
      </View>
        
        <Text>{t('name')[language]} : {name}</Text>
        <Text>{t('date')[language]} : {date}</Text></View>
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
