import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import AllProducts from '../components/products/AllProducts';

const Products = () => {
const navigation=useNavigation();

  return (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.upperRow}>
            <TouchableOpacity  onPress={()=>navigation.goBack()}>
                <Ionicons name='chevron-back-circle' size={24} color={COLORS.lightWhite} />
            </TouchableOpacity>
            <Text style={styles.heading}>Ibikoresho bya kinyarwanda </Text>
            </View>
            <AllProducts/>
        </View>
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.lightWhite,
    },
    wrapper:{
        flex:1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:0,
        borderRadius:SIZES.large,
        position:'absolute',
        top:SIZES.large,
        marginHorizontal:SIZES.large,
        zIndex:999,
        width:SIZES.width-50,
        backgroundColor:COLORS.primary,
    },
    heading:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:5
    }
})