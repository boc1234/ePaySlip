import React , { useState,useEffect }from 'react';
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import language from './language.json'


// export default function t(name) {
//   const a = {'lang':'en','id':'Employee ID','name':'123'}
// // const  value = await AsyncStorage.getItem('@lang');
// // console.log(value)
//   // }
//   i18n.translations = {
//     language: a
//     // mm: s,)
//     // kh: kh
//   };
//   i18n.locale = "language";


// i18n.fallbacks = true;

// return  i18n.t(name)

// }


export const t  = (name)=>{
  i18n.translations = {
    language: language
    // mm: s,)
    // kh: kh
  };
  i18n.locale = "language";


i18n.fallbacks = true;

return i18n.t(name)
  }

  export default  t
    
