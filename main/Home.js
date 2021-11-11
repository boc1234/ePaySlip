import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider,BackHandler,Alert,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
// const {  DatePicker, Space  } = antd;

export default function Home({navigation}) {
    useEffect(() => {
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

    return (
        <View style={styles.container}>
            {/* <Text>Home1!</Text>
            <StatusBar style='auto' />
           
            <Button title='Go to Profile' onPress={() => navigation.navigate('AddUser')} /> */}
            {/* <DatePicker onChange={onChange} picker="year" /> */}
            
            <View style={{marginTop:15}}>
                <Card style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('EPAYSLIP')}>
                <Text style={styles.paragraph} >13 November 2020</Text>
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
      margin: 35,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
      
    },
    card:{
        height:100
        // backgroundColor:'red'
    }
});
