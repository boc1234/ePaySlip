import React,{useEffect,useState,useCallback} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar ,TouchableOpacity,Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const [data , setData] = useState('');
import { useFocusEffect } from '@react-navigation/native';
import { SpeedDial } from 'react-native-elements';
import {URL} from '../provider'
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons'; 
const {width,height} = Dimensions.get('window');
export default function AddUser({ navigation,route }) {
  const [data, setdata] = useState("");
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    // const phone = await 
   
   

},[]);

useFocusEffect(
  useCallback(()=>{
    AsyncStorage.getItem('@phone').then(res=>{
      axios.get(URL+"GetGuest",{
        params:{
            phone:res
          
        }
      }).then(function(response){

      setdata(response.data);
      });
    
    })
   
  },[])    
)

const add = ()=>{
  navigation.navigate({
    name: 'NotiOTP',
    params: { stat: 1 },
    merge: true,
  });
}

const click = (id)=>{

  axios.get(URL+"GetName",{
    params:{
        id:id.empid
      
    }
}).then(function(response){
  AsyncStorage.removeItem('@lock')
  AsyncStorage.setItem('@choose',id.empid)
  AsyncStorage.getItem('@phone').then(res=>{

  axios.get(URL+"Login",{
    params:{
        id:id.empid,
        phone:res
    }

})

.then(function (response) {

  AsyncStorage.setItem('@choosepin',response.data[0].pin)
})
  })
  navigation.navigate({
    name: 'LockScreen',
    params: { id:id.empid ,pin:id.pin ,name:response.data.namempt},
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
        <StatusBar></StatusBar>
<LinearGradient colors={['#095379','#00adb5']} style={{position:'absolute',top:0,width:width,height:height}}>
          <View style={styles.header}>
          {/* <SimpleLineIcons name="logout" size={18} color="white" />
          <Text>  Logout</Text> */}
          </View>
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
      buttonStyle={{backgroundColor:"#003380"}}
    >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          // title="Add"
          onPress={add}
          buttonStyle={{backgroundColor:"#003380"}}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          // title="Delete"
          onPress={() => console.log('Delete Something')}
          buttonStyle={{backgroundColor:"#003380"}}
        />
    </SpeedDial>
    </LinearGradient>
      </SafeAreaView>
    );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10
    // marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    // marginTop:60
    marginTop:30,
    flexDirection:'row',
    // justifyContent:'space-between',
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.4)',
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
    backgroundColor: '#6FB2D2',                                    
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

