import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'
import React from 'react'
import { COLORS } from '../constants'


export function Button  ({title,onpress}) {
   

    return (
        <TouchableOpacity style={styles.btnstyle}>
            <Text style={styles.btnTxt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnTxt: {
        fontFamily:"bold",
        color:COLORS.white,
        fontSize:18
    },
    btnstyle:{
        height:50,
        width:'100%',
        marginVertical:20,
        backgroundColor:COLORS.primary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12
    }
})

