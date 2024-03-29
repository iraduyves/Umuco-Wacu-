import { StyleSheet } from "react-native";
import { COLORS,SIZES } from '../../constants'; 

export const styles =StyleSheet.create({
    container:{
        flex:1
    },
    upperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width-44,
        zIndex:999
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        marginTop:-60,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,
        // height:"fit-content"
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-44,
        top:20
    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-10,
        // top:
    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        // justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal:SIZES.large,
    },
    ratingText:{
        color:COLORS.gray,
        fontFamily:'medium',
        paddingHorizontal:SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop:SIZES.large+10,
        marginHorizontal:SIZES.large
    },
    description:{
        fontFamily:"bold",
        fontSize:SIZES.medium,
    },
    dscText:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        textAlign:'justify',
        marginBottom:SIZES.small,
        marginTop:SIZES.small
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
    },
    price:{
        paddingHorizontal:10,
        fontFamily:"semibold",
        fontSize:SIZES.large
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large,
    },
    location:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        marginHorizontal:15,
        padding:5,
        borderRadius:SIZES.large
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width
    },
    cartBtn:{
        width:SIZES.width*0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.xSmall/2,
        borderRadius:SIZES.large,
        marginLeft:12
    },
    cartTitle:{
        marginLeft:SIZES.small,
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite
    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:"center",
        justifyContent:"center"
    }
})