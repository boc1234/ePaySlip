import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,useCallback} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider,BackHandler,Alert,TouchableOpacity,FlatList,Dimensions} from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import {URL} from '../provider'
import t from '../language/lang'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const {width,height} = Dimensions.get('window');
// const {  DatePicker, Space  } = antd;

import {context} from '../provider';

export default function Home({navigation,route}) {

  const [language,setLanguage] = useState('');
  const [empid,setEmpid] = useState('');
  const [data, setdata] = useState("");
  const [guest,setGuest] = useState('');
  useFocusEffect(
    useCallback(()=>{
      
      AsyncStorage.getItem('@lang').then(res=>{

        setLanguage(res)
      })
      
    })
    
)
    useEffect(() => {
    console.log(route)
      AsyncStorage.getItem('@guest').then(res=>{

        setGuest(res)
        


       
        if(  route.params?.check == 1  ){
      
         axios.get(URL+"GetPaySlip2",{
           params:{
               id:res
             
           }
         }).then(function(response){

         setdata(response.data);
         });
       }else{
   
         AsyncStorage.getItem('@empid').then(res=>{
           axios.get(URL+"GetPaySlip2",{
             params:{
                 id:res
               
             }
           }).then(function(response){
    
           setdata(response.data);
           });
         
         })
       }
       })

        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
        //   alert(1)
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, [guest]);

        try {
          AsyncStorage.getItem('@empid').then(res=>{
             if(res !== null) {
              setEmpid(res)
             }
          })
         
        } catch(e) {
          // error reading value
        }
      


        const Item = ({ total ,onPress ,value,date}) => (
          <Card style={styles.card}>
            <TouchableOpacity onPress={onPress}>
            <Text  style={styles.title}>EPAYSLIP</Text>
            <Text>{t('date')[language]}  {date.slice(0,10)}</Text>
            <Text>{t('total_income')[language]} : {total}</Text>
            </TouchableOpacity>
          </Card>
        );
          const renderItem = ({ item }) => (
            
              <Item 
              item={item}
              onPress={()=>click(item)}
              date={item.date}
              total={item.total}
              value={item.year}
              />
      
            
           
          );

          const click = (item)=>{
            
               try {
            axios.get(URL+"GetPaySlip",{
                params:{
                    id:item.id,
                    year:item.year,
                    month:item.month,
                    period:item.period
                }
            
            })
            
            .then(function (response) {
          
                AsyncStorage.setItem('@payslip',JSON.stringify(response.data))
                navigation.navigate({
                  name: 'Page1',
                 
                  merge: true,
                })
            })
            
        } catch(e) {
            console.log(e)
          // error reading value
        }
          }
       
    return (
        <View style={styles.container}>
          <StatusBar style='auto' />
            {/* <Text>Home1!</Text>
            
           
            <Button title='Go to Profile' onPress={() => navigation.navigate('AddUser')} /> */}
            {/* <DatePicker onChange={onChange} picker="year" /> */}
            
            <View style={{marginTop:15}}>
            <TouchableOpacity onPress={() => navigation.navigate('PaySlip')}>
                <Card style={styles.card}>
                <Text style={styles.paragraph} >EPAYSLIP</Text>
                </Card>
            </TouchableOpacity>
            </View>


            <View >
              {/* <Text>test</Text> */}
            </View>
            <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.empid}
          
        />
     
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'column',
        // gap: 20,
        backgroundColor: 'rgb(140, 188, 193);',
        alignItems: 'center',
        // marginTop:10,
        
        
    },
    paragraph: {
    
      // margin: 35,
      alignContent:'center',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    card:{
        // height:100,
        margin:10,
        backgroundColor:'rgba(255,255,255,0.4)' ,
        
        width:width-30,
        padding:20
    },
    item: {
      backgroundColor: 'rgba(255,255,255,0.4)',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:15,
      marginVertical:15,
    },
    title: {
      fontSize: 23,
    },
});
