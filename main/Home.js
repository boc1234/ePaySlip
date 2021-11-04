import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider} from 'react-native';



export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home1!</Text>
            <StatusBar style='auto' />
           
            <Button title='Go to Profile' onPress={() => navigation.navigate('AddUser')} />
        
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
