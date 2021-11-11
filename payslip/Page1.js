import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider} from 'react-native';



export default function Page1({navigation}) {
    return (
        <View style={styles.container}>
             <StatusBar style='auto' />
             <View style={{marginLeft:20 ,marginTop:20}}>
                 <Text>วันที่ 5/11/2664</Text>
             </View>

             <View style={{marginLeft:20 ,marginTop:20}}>
                 <Text>0800311254200000000  :  25420C</Text>
                 <Text>YS01  :  25420C ชุดช่างธนธรณ์ </Text>
             </View>

             <View style={{marginLeft:20 ,marginTop:20}}>
                 <Text>รหัส 13420</Text>
                 <Text>ชื่อ MR.KO HTAY</Text>
             </View>

             
            {/* <View style={{marginLeft:20 ,marginTop:20 }}>
                    <Text style={{fontSize:25}}>รวมหัก </Text>
                    <Text style={{fontSize:20}}>99.00</Text>
            </View> */}
            <View style={{marginLeft:20 ,marginTop:20 }}>
                    <Text style={{fontSize:25}}>รายรับสุทธิ </Text>
                    <Text style={{fontSize:20}}>5,964.00</Text>
            </View>
            
            
           
            {/* <Button title='Go to Profile' onPress={() => navigation.navigate('Home')} /> */}
        
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
});
