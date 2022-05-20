import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetailScreen from "./DetailScreen";
import Store from "./Store";

const Stack = createNativeStackNavigator();


const DetailStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Store" component={Store} options={{ headerShown: false}}/>
            <Stack.Screen name="Details" component={DetailScreen} options={{title: "Tarea"}} />
        </Stack.Navigator>
        )
    }

export { DetailStackNavigator };