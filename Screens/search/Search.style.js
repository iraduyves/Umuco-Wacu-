import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants"

export const styles =StyleSheet.create({

    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        marginHorizontal:SIZES.small,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50,
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:'regular',
        width:'100%',
        height:'100%',
        paddingHorizontal:SIZES.small
    },
    searchBtn:{
        width:50,
        height:"100%",
        borderRadius:SIZES.medium,
        marginRight:5,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary

    }

})