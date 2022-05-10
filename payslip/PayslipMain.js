import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect,useRef} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider,Dimensions,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { NumperiodContext } from '../provider';
const { width, height } = Dimensions.get("window");
import {URL} from '../provider'
export default function  PayslipMain({navigation}) {
  const citiesDropdownRef = useRef();
  
    // const [numperiod,setNumperiod] = useState(NumperiodContext);
   
   const [empid,setEmpid] = useState()
    const [year,setYear] = useState([]);
    const [month,setMonth] = useState([]);
    const [period,setPeriod] = useState([]);
    const [enteryear , setEnteryear] = useState()
    const [entermonth , setEntermonth] = useState()
    const [enterperiod , setEnterperiod] = useState()
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@choose').then(function(){
          setEmpid(JSON.parse(value))
          console.log(empid)
          })
          
          console.log(empid)
        } catch(e) {
          console.log(e)
          // error reading value
        }
      }
    const getMonthPay = async(year)=>{
      const value = await AsyncStorage.getItem('@choose')
      try {
        axios.get(URL+"GetMonthPay",{
            params:{
                id:value,
                year:year

            }
        
        })
        
        .then(function (response) {
            console.log(response.data)
            setMonth(response.data)
        })
        
    } catch(e) {
        console.log(e)
      // error reading value
    }
    }
    const getPeriodPay = async(year,month)=>{
      const value = await AsyncStorage.getItem('@choose')
      try {
        axios.get(URL+"GetperiodPay",{
            params:{
                id:value,
                year:year,
                month:month

            }
        
        })
        
        .then(function (response) {
            console.log(response.data)
            setPeriod(response.data)
            setEnterperiod(response.data[0].period)
        })
        
    } catch(e) {
        console.log(e)
      // error reading value
    }
    }

    // const  [empid,setEmpid] = useState(async() =>{
    //   const value = await AsyncStorage.getItem('@empid')
    //   setEmpid(value)
    // });

    useEffect(()=>{
      // AsyncStorage.getItem('@guest').then(res=>{
     
        // if(res == 'undefined' || res == 'null' ){

          //  AsyncStorage.getItem('@guest').then(res=>{
          //   axios.get(URL+"GetYearPay",{
          //     params:{
          //         id:res
          //     }
          
          // })
          
          // .then(function (response_year) {
          //     // console.log(response.data)
            
          //    setYear(response_year.data)
          //    setEnteryear(response_year.data[0].year)
          //     try {
          //       axios.get(URL+"GetMonthPay",{
          //           params:{
          //               id:res,
          //               year:response_year.data[0].year
        
          //           }
                
          //       })
          //       .then(function (response_month) {
          //           // console.log(response_month.data)
          //           setMonth(response_month.data)
          //           setEntermonth(response_month.data[0].month)
          //           try {

          //             axios.get(URL+"GetperiodPay",{
          //                 params:{
          //                     id:res,
          //                     year:response_year.data[0].year,
          //                     month:response_month.data[0].month
          //                 }
          //             })
          //             .then(function (response_period) {
          //                 setPeriod(response_period.data)
          //                 setEnterperiod(response_period.data[0].period)
          //             })
                      
          //           } catch(e) {
          //               console.log(e)
          //             // error reading value
          //           }
          //       })
                
          //   } catch(e) {
          //       console.log(e)
          //     // error reading value
          //   }
              
          // })
          // })

        // }else{
            
          AsyncStorage.getItem('@choose').then(res=>{
            axios.get(URL+"GetYearPay",{
              params:{
                  id:res
              }
          
          })
          
          .then(function (response_year) {
              // console.log(response.data)
            
             setYear(response_year.data)
             setEnteryear(response_year.data[0].year)
              try {
                axios.get(URL+"GetMonthPay",{
                    params:{
                        id:res,
                        year:response_year.data[0].year
        
                    }
                
                })
                .then(function (response_month) {
                    // console.log(response_month.data)
                    setMonth(response_month.data)
                    setEntermonth(response_month.data[0].month)
                    try {

                      axios.get(URL+"GetperiodPay",{
                          params:{
                              id:res,
                              year:response_year.data[0].year,
                              month:response_month.data[0].month
                          }
                      })
                      .then(function (response_period) {
                          setPeriod(response_period.data)
                          setEnterperiod(response_period.data[0].period)
                      })
                      
                    } catch(e) {
                        console.log(e)
                      // error reading value
                    }
                })
                
            } catch(e) {
                console.log(e)
              // error reading value
            }
              
          })
          
          })
        // }


      // })
      // const value = await AsyncStorage.getItem('@empid')
      // setEmpid(JSON.parse(value))
      //   console.log(value)
      
      // // setNumperiod('2021')
      // console.log('-0-',empid)
      // AsyncStorage.getItem('@empid').then((value) => setEmpid(value));
      // console.log(empid)

        
        try {
          // setYear([
          //   {
          //     "year": "2021"
              
          //   },
          //   {
          //     "year": "2022"
              
          //   }
          // ])
          
        } catch(e) {
            console.log(e)
          // error reading value
        }
        
     
      },[])
     
    const goToPage1 = () =>{
     
      if(enterperiod == ''){
        alert('กรอกข้อมูลให้ครบ')
      }else{
        try {
          AsyncStorage.getItem('@choose').then(res=>{

        
          axios.get(URL+"GetPaySlip",{
              params:{
                  id:res,
                  year:enteryear,
                  month:entermonth,
                  period:enterperiod
              }
          
          })
          
          .then(function (response) {
        
              AsyncStorage.setItem('@payslip',JSON.stringify(response.data))
              navigation.navigate({
                name: 'Page1',
               
                merge: true,
              })
          })
        })
      } catch(e) {
          console.log(e)
        // error reading value
      }
    
    }
    }

    return (
<View style={styles.container}>

<View style={styles.dropdownsRow}>
          <SelectDropdown
            data={year}
            defaultValue={year[0]}
            onSelect={(selectedItem, index) => {
              
         console.log(selectedItem.year)
              citiesDropdownRef.current.reset();
              setMonth([]);
              // setMonth(selectedItem.month[0]);
            //   setPeriod(selectedItem.period)
            setEnteryear(selectedItem.year)
            getMonthPay(selectedItem.year);
            }}
            // defaultValue={selectedItem}
            defaultButtonText={"Select Year"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.year;
            }}
            rowTextForSelection={(item, index) => {
              return item.year;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={"#444"} size={18} />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            
          />

          <View style={{ width: 50 }} />
          <SelectDropdown
            ref={citiesDropdownRef}
            data={month}
            defaultValue={month[0]}
            onSelect={(selectedItem, index) => {
              setPeriod([]);
              getPeriodPay('2021',selectedItem.month);
              setEntermonth(selectedItem.month);
            
             
            }}
            defaultButtonText={"Select Month"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.month;
            }}
            rowTextForSelection={(item, index) => {
              // console.log(item)
              return item.month;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={"#444"} size={18} />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />

          <View style={{ width: 12 }} />
          <SelectDropdown
            ref={citiesDropdownRef}
            data={period}
            defaultValue={period[0]}
            onSelect={(selectedItem, index) => {
         
                
              setPeriod([]);
             setPeriod(selectedItem);
             setEnterperiod(selectedItem.period)
              console.log('--------1')
              console.log(period)
              console.log('--------2')
              console.log(selectedItem)
             
            }}
            defaultButtonText={"Select Period"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.period;
            }}
            rowTextForSelection={(item, index) => {
              return item.period;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={"#444"} size={18} />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
       
        </View>
        <TouchableOpacity style={styles.button} onPress={goToPage1} >
            
            <Text style={styles.textButton}>Next</Text>

        </TouchableOpacity>
          
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
    dropdownsRow: {
      marginTop:30,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: "100%",
    
      paddingHorizontal: "5%",
    },
  
    dropdown1BtnStyle: {
   
      height: 50,
      backgroundColor: "#FFF",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#444",
      margin:20   
    },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
      backgroundColor: "#EFEFEF",
      borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" ,fontSize:18},
  
   
    button:{
    
      justifyContent:'center',
      alignContent:'center',
      borderRadius:5,
      marginVertical:5,
      height:40,
      backgroundColor:'#095379',
      marginLeft:70,
      marginRight:70,
      flexDirection:'row',
      alignItems:'center',
      // marginTop:20
      
  },
  textButton:{
    color:'white',
    fontSize:20,
    
  }
});
