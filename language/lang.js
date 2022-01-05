import React , { useState,useEffect }from 'react';
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function t(name){
// const [lang,setLang]= useState({});
  // useEffect(async()=>{
  //  const  getLang =async() => {
      
        // setLang(value);
      // },[]);

    // console.log(value)
// const  value =  AsyncStorage.getItem('@lang')
// console.log(value)
// .then((res)=>{
//   console.log(res)
//   return (res)
// }
// )
// const test = value.then(res=>{

//   return res;
// })
const a = {'lang':'en','id':'Employee ID','name':'123'}

  // }
  i18n.translations = {
    language: a
    // mm: s,)
    // kh: kh
  };
  i18n.locale = "language";


i18n.fallbacks = true;

return  i18n.t(name)


    
    // Set the locale once at the beginning of your app.


// When a value is missing from a language it'll fallback to another language with the key present.

  }