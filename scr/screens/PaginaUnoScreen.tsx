import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'

interface Props extends StackScreenProps<any ,any>{}
export const PaginaUnoScreen = ({navigation}: Props) => {
    return (
        <View>
            <Text>pagina 1</Text>
            <Button  title="Ir a la pagina 2" onPress={() => navigation.navigate(`PaginaDosScreen`)}/>
        </View>
    )
}
