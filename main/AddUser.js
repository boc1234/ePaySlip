import React,{useEffect,useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar ,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const [data , setData] = useState('');
import { SpeedDial } from 'react-native-elements';
import {URL} from '../provider'

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const AddUser = () => {
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       <TouchableOpacity style={styles.fab}>
//       <Entypo name="plus" size={24} color="black" style={{      letterSpacing:0,
//         textAlign:'center',justifyContent:'center',alignItems:'center'}} />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

export default function AddUser({ navigation,route }) {
  const [data, setdata] = useState("");
  const [open, setOpen] = React.useState(false);
  useEffect(async() => {
    const phone = await AsyncStorage.getItem('@phone');
   
    axios.get(URL+"GetGuest",{
      params:{
          phone:phone
        
      }
  }).then(function(response){
  console.log(response.data);
  setdata(response.data);
  });
},[]);


const add = ()=>{
  navigation.navigate({
    name: 'SignUp',
    params: { stat: 0 },
    merge: true,
  });
}

const click = (id)=>{
  console.log(id.empid)
  axios.get(URL+"GetName",{
    params:{
        id:id.empid
      
    }
}).then(function(response){
  console.log(response.data.namempt);
  console.log(id.pin)
  navigation.navigate({
    name: 'LockScreen',
    params: { id: id.empid,pin:id.pin,name: response.data.namempt},
    merge: true,
  });
})


}
  const Item = ({ title ,onPress }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
    const renderItem = ({ item }) => (
      
        <Item 
        item={item}
        onPress={()=>click(item)}
        title={item.empid} />

      
     
    );
  
    return (
      <SafeAreaView style={styles.container}>

          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.empid}
          
        />
  
        
        {/* <TouchableOpacity style={styles.fab} onPress={add}>
        <Entypo name="plus" size={24} color="black" style={styles.icon} />
        </TouchableOpacity> */}
        <SpeedDial
      isOpen={open}
      icon={{ name: 'edit', color: '#fff' }}
      openIcon={{ name: 'close', color: '#fff' }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
    >
      <SpeedDial.Action
        icon={{ name: 'add', color: '#fff' }}
        // title="Add"
        onPress={add}
      />
      <SpeedDial.Action
        icon={{ name: 'delete', color: '#fff' }}
        // title="Delete"
        onPress={() => console.log('Delete Something')}
      />
    </SpeedDial>
      </SafeAreaView>
    );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  fab:{
    width: 80,  
    height: 80,   
    borderRadius: 40,            
    backgroundColor: '#ee6e73',                                    
    position: 'absolute',                                          
    bottom: 20,                                                    
    right: 20, 
  },
  icon:{
    letterSpacing:0,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  }
});

// export default AddUser;

