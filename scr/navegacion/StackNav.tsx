import { createStackNavigator } from '@react-navigation/stack'; 
import React from 'react'
import { PaginaDosScreen } from '../screens/PaginaDosScreen';
import { PaginaTresScreen } from '../screens/PaginaTresScreen';
import { PaginaUnoScreen } from '../screens/PaginaUnoScreen';
const Stack =createStackNavigator()
export const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PaginaUNo" component={PaginaUnoScreen} />
            <Stack.Screen name="PaginaDos" component={PaginaDosScreen} />
            <Stack.Screen name="PaginaTres" component={PaginaTresScreen} />
        </Stack.Navigator>
    )
}
