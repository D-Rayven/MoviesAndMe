import React from 'react'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmItem'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={ Search }/>
                <Stack.Screen name="FilmDetail" component={ FilmDetail }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}