import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView ,SafeAreaProvider} from 'react-native';



export default function Page1({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Page1!</Text>
            <StatusBar style='auto' />
           
            <Button title='Go to Profile' onPress={() => navigation.navigate('Home')} />
        
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
