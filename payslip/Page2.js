import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import t from '../language/lang'

export default function Page2({navigation}) {
    const [language,setLanguage] = useState();
    const [salary,setSalary] = useState();
    const [overtime,setOvertime] = useState();
    const [other,setOther] = useState();
    const [total_income,setTotal_income] = useState();
    const [tax,setTax] = useState();
    const [social_welfare,setSocial_welfare] = useState();
    
    useEffect(()=>{
        // const getData = async () => {
          AsyncStorage.getItem('@lang').then(res=>{
            setLanguage(res)
          })
        try {
          // const value = await 
          AsyncStorage.getItem('@payslip').then(res=>{
            const payslip = JSON.parse(res)
            setSalary(payslip[0]._8)
            setOvertime(payslip[0]._9)
            setOther(payslip[0]._12)
            setTotal_income(payslip[0]._13)
            setTax(payslip[0]._14)
            setSocial_welfare(payslip[0]._16)
          })
         
          
         
          
        //   console.log(payslip[0]._6)
     

  
        } catch(e) {
          console.log(e)
          // error reading value
        }
      

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
        
       
      },[])
    return (

        <View>
            <Text>{t('salary')[language]} : {salary}</Text>
            <Text>{t('overtime')[language]} : {overtime}</Text>
            <Text>{t('other')[language]} : {other}</Text>
            <Text>{t('total_income')[language]} : {total_income}</Text>

            <Text>{t('tax')[language]} : {tax}</Text>
            <Text>{t('social_welfare')[language]} : {social_welfare}</Text>

        </View>
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
