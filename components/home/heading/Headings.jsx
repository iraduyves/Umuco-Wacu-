import { View, Text } from 'react-native'
import React from 'react'
import styles from './heading.style'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
export  function Headings() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Ibikoresho Byakera </Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Products')}>
            <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </View>
  )
}