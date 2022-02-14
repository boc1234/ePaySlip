import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider,ScrollView} from 'react-native';
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
   
    const [salary,setSalary] = useState();
    const [overtime,setOvertime] = useState();
    const [other,setOther] = useState();
    const [total_income,setTotal_income] = useState();

    const [tax,setTax] = useState();
    const [social_welfare,setSocial_welfare] = useState();
    const [ total_deduction,setTotal_deduction] = useState();

    const [net_income,setNet_income] = useState();
   


    useEffect(()=>{
      // const getData = async () => {
      AsyncStorage.getItem('@lang').then(res=>{
        setLanguage(res)
      })
      try {
        // const value = await 
        AsyncStorage.getItem('@payslip').then(res=>{
          const payslip = JSON.parse(res)

          payslip.forEach(element => {
            setEmpid(element.codempid)
            setName(element._6)
            setDate((element._7).slice(0,10))

            setSalary(element._8)
            setOvertime(element._9)
            setOther(element._12)
            setTotal_income(element._13)
            setTax(element._14)
            setSocial_welfare(element._16)
            setTotal_deduction(element._20)

            setNet_income(element._24)
          });
        })
      

      } catch(e) {
        console.log(e)
        // error reading value
      }
      
      //title
      // AsyncStorage.getItem('@empid').then(res=>{
      //   navigation.setOptions({ title: res })
      // })
      



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
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <ScrollView>
        <View style={styles.content}> 
            <Text style={styles.text}>
              {t('id')[language]}  :  {empid}
            </Text>
    
      
            <Text style={styles.text}>
              {t('name')[language]}  :  {name}
            </Text>

        
            <Text style={styles.text}>
              {t('date')[language]}  :  {date}
            </Text>
        </View>
         
        <View style={styles.content}>
            <Text style={styles.header}>{t('income')[language]}</Text>
            <Text style={styles.text}>{t('salary')[language]}  :  {salary}</Text>
            <Text style={styles.text}>{t('overtime')[language]}  :  {overtime}</Text>
            <Text style={styles.text}>{t('other')[language]}  :  {other}</Text>
            <Text style={styles.text2}>{t('total_income')[language]}  :  {total_income}</Text>
        </View>
            
        <View style={styles.content}>
            <Text style={styles.header}>{t('deduction')[language]}</Text>
            <Text style={styles.text}>{t('tax')[language]}  :  {tax}</Text>
            <Text style={styles.text}>{t('social_welfare')[language]}  :  {social_welfare}</Text>
            <Text style={styles.text2}>{t('total_deduction')[language]}  :  {total_deduction}</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.total}>{t('net_income')[language]}  :  {net_income}</Text>
        </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(140, 188, 193);',
        // alignItems: 'center',#00adb5
        // justifyContent: 'center',
    },
    content:{
      margin:10,
      backgroundColor:'rgba(255,255,255,0.4)',
      padding:20
    },
    header:{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:5
      
    },
    text:{
      // margin:10,
      fontSize:18,
    },
    text2:{
      // margin:10,
      fontSize:18,
      // fontWeight:'1900'
    },
    total:{
      fontSize:26,
    }
});
