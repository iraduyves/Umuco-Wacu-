import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from '../constants'

const BackBtn = ({onpress}) => {
    return (

            <TouchableOpacity onPress={onpress}>
                <Ionicons
                 name='chevron-back-circle'
                 size={30}
                 color={COLORS.primary}/>
            </TouchableOpacity>

    )
}

export default BackBtn

const styles = StyleSheet.create({})