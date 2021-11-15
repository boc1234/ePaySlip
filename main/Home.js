import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider,BackHandler,Alert,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const {  DatePicker, Space  } = antd;

export default function Home({navigation}) {
  const [test,setTest] = useState('');
    useEffect(() => {
      getData();
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
      }, []);

      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@empid')
          if(value !== null) {
            setTest(value)
            // value previously stored
           
          }
        } catch(e) {
          // error reading value
        }
      }
    return (
        <View style={styles.container}>
            {/* <Text>Home1!</Text>
            <StatusBar style='auto' />
           
            <Button title='Go to Profile' onPress={() => navigation.navigate('AddUser')} /> */}
            {/* <DatePicker onChange={onChange} picker="year" /> */}
            
            <View style={{marginTop:15}}>
                <Card style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('EPAYSLIP')} style={{flexDirection:'row',}}>
                <Text style={styles.paragraph} >{test}{'\n'} Nov</Text>
                {/* <Text style={{flexGrow:2}} >13 November 2020</Text> */}
                </TouchableOpacity>
                </Card>
            </View>
            
            <View style={{marginTop:15}}>
                <Card style={styles.card}>
                <Text style={styles.paragraph} onPress={() => navigation.navigate('EPAYSLIP')}>13 November 2020</Text>
                </Card>
            </View>
            <View style={{marginTop:15}}>
                <Card style={styles.card}>
                <Text style={styles.paragraph} onPress={() => navigation.navigate('EPAYSLIP')}>13 November 2020</Text>
                </Card>
            </View>
            <View style={{marginTop:15}}>
                <Card style={styles.card}>
                <Text style={styles.paragraph} onPress={() => navigation.navigate('EPAYSLIP')}>13 November 2020</Text>
                </Card>
            </View>
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'column',
        // gap: 20,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        marginTop:10,
        
        
    },
    paragraph: {
    
      // margin: 35,
      fontSize: 20,
      fontWeight: 'bold',
      // textAlign: 'center',
      color: '#34495e',
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    card:{
        height:100,
        
        // backgroundColor:'red'
        width:300
    }
});
