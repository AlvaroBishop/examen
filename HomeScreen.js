import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image 
                style={{width: '100%', height: 300, position: 'absolute', top: 0,
                borderTopRightRadius: 10, borderTopLeftRadius: 10}}
                source={require('./assets/link.jpg')}
            />
            <Button 
                title="Ir a B-shop"
                onPress={() => navigation.navigate('Store')}
            />
            
            
        </View>
    );
}

export default HomeScreen;