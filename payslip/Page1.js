import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrencyInput from 'react-native-currency-input';
import axios from 'axios';
// import { NumperiodContext } from '../provider';
import t from '../language/lang';
import Moment from 'moment';
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
    const [account_number,setAccount_number] = useState();
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
            if(element._7 == null){
              setDate('-')
            }else{
              setDate((element._7).slice(0,10))
            }
            // setDate((element._7).slice(0,10))
            setAccount_number(element._23)
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

          <View style={styles.textContent}>
            <Text style={styles.text}>
              {t('id')[language]}  : 
            </Text>
            <Text style={styles.text}>
               {empid} 
            </Text>
          </View>
            
          <View style={styles.textContent}>
             <Text style={styles.text}>
              {t('name')[language]}  :  
             </Text>
             <Text style={styles.text}>
             {name}
             </Text>
          </View>

          <View style={styles.textContent}>
            <Text style={styles.text}>
              {t('date')[language]}  :  
            </Text>
            <Text style={styles.text}>
              {Moment(date).format('DD-MMM-YYYY')}
            </Text>
          </View>

          <View style={styles.textContent}>
            <Text style={styles.text}>
              {t('account_number')[language]}  :  
            </Text>
            <Text style={styles.text}>
              {account_number}
            </Text>
          </View>


          
        </View>
         
        <View style={styles.content}>
            <Text style={styles.header}>{t('income')[language]}</Text>

            <View style={styles.row}>
            <Text style={styles.text}>{t('salary')[language]} :</Text>
            <CurrencyInput
              value={salary}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:18}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>{t('overtime')[language]} :</Text>
            <CurrencyInput
              value={overtime}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:18}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />
            </View>
            <View style={styles.row}>
               <Text style={styles.text}>{t('other')[language]} :</Text>
            <CurrencyInput
              value={other}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:18}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />
            </View>
           <View style={styles.row}>
             <Text style={styles.text2}>{t('total_income')[language]} :</Text>
            <CurrencyInput
              value={total_income}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:18}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />
           </View>
            
        </View>
            
        <View style={styles.content}>
            <Text style={styles.header}>{t('deduction')[language]}</Text>
            <View style={styles.row}>
            <Text style={styles.text}>{t('tax')[language]} :</Text>
            <CurrencyInput
              value={tax}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:18}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />

            </View>
            
            <View style={styles.row}>
            <Text style={styles.text}>{t('social_welfare')[language]} :</Text>
            <CurrencyInput
              value={social_welfare}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:18}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />
            </View>

            <View style={styles.row}>
            <Text style={styles.text2}>{t('total_deduction')[language]} :</Text>
            <CurrencyInput
              value={total_deduction}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:18}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />
            </View>
        </View>

        <View style={styles.content}>
          <View style={styles.row}>
          <Text style={styles.total}>{t('net_income')[language]} : </Text>
            <CurrencyInput
              value={net_income}
              // onChangeValue={setValue}
              // prefix="$"
              style={{color:'black',fontSize:22}}
              delimiter=","
              separator="."
              precision={2}
              editable = {false}
              onChangeText={(formattedValue) => {
                
              }}
            />
          </View>
            
            
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
      padding:20,
      paddingStart:20,
      paddingEnd:40
      
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
      fontSize:25,
    },
    textContent:{
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    row:{
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
});
