import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator,TouchableOpacity, Alert } from 'react-native'
import { COLORS, SIZES } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {AntDesign,MaterialCommunityIcons,SimpleLineIcons} from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Profile () {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData,setUserData]= useState(null)
    const [userLogin,setuserLogin]=useState(false)

    const navigation=useNavigation();

    const logout =async()=>{
      Alert.alert(
        "Logout",
        "Are you sure u wnat to logout",
        [
          {
            text:"cancel",onPress:()=>console.log("cancel pressed")
          },
          {
            text:"continue",onPress:async()=>{
              try {
            await AsyncStorage.removeItem('userData');
            setuserLogin(false);
            setUserData(null);
            // navigation.navigate("Login");
            console.log("Logged out");
          } catch (error) {
            console.error("Error during logout:", error);
          }
            }
          },
          {default:1}
        ]
      )
    }
    const Delete =()=>{
      Alert.alert(
        "Delete Account",
        "Are you sure u wnat to Delete ur account",
        [
          {
            text:"cancel",onPress:()=>console.log("cancel pressed")
          },
          {
            text:"continue",onPress:()=>console.log("Logged out")
          },
          {default:1}
        ]
      )
    }

 useEffect(() => {
        // Check if there is stored user data
        const checkUserData = async () => {
            try {
                const storedUserData = await AsyncStorage.getItem('userData');
                if (storedUserData) {
                    setuserLogin(true);
                    setUserData(JSON.parse(storedUserData));
                }
            } catch (error) {
                console.error('Error checking stored user data:', error);
            } finally {
                // Set loading to false once the check is complete
                setLoading(false);
            }
        };

        checkUserData();
    }, []);
console.log(userData);

    return (
        <> 
            <ScrollView style={styles.container}>
              <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.gray}/>
                <View style={{width:'100%'}}>
                  <Image
                      source={require('../assets/images/loginbackground.jpg')} style={styles.cover}
                  />
                </View>
                <View style={styles.profileContainer} >
                  <Image
                      source={ userLogin ? {uri:userData?.image}:require('../assets/images/profile.jpeg')} style={styles.profile}
                  />
                  <Text  style={styles.name}>{userLogin === true ? (userData?.name): ("pleasae login into your account")}</Text>
                  {userLogin === false ? (
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                      <View style={styles.loginBtn}>
                        <Text style={styles.menuText}>L O G I N</Text>
                      </View>
                    </TouchableOpacity>
                  ):(
                    <View style ={styles.loginBtn}>
                      <Text style={styles.menuText}>{userData?.email}</Text>
                    </View>
                  )}
                  {userLogin === false?(
                    <View></View>
                  ):( 
                    <View style={styles.MenuWrapper}>
                        {userData?.role === 'admin' && (
                     <TouchableOpacity onPress={() => navigation.navigate("AddItem")}>
                       <View style={styles.menuItem(0.5)}>
                     <MaterialCommunityIcons
                        name="heart-outline"
                        color={COLORS.primary}
                       size={24}
                      />
                    <Text style={styles.menuText}>Add Items</Text>
                  </View>
                </TouchableOpacity>
                    )}
                      <TouchableOpacity onPress={()=>Delete()}>
                        <View style={styles.menuItem(0.5)}>
                          <AntDesign
                              name="deleteuser"
                              color={COLORS.primary}
                              size={24}
                          />
                          <Text style={styles.menuText}>Delete Account</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>logout()}>
                        <View style={styles.menuItem(0.5)}>
                          <AntDesign
                              name="logout"
                              color={COLORS.primary}
                              size={24}
                          />
                          <Text style={styles.menuText}>Logout</Text>
                        </View>
                      </TouchableOpacity>    
                    </View>
                  )

                  }
                </View>
              </View>
                
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    cover:{
      height:290,
      widht:"100%",
      resizeMode:"cover"
    },
    profileContainer:{
      flex:1,
      alignItems:"center",
    },
    profile:{
      height:155,
      width:155,
      borderRadius:999,
      borderColor:COLORS.primary,
      marginTop:-90,
      resizeMode:"cover",
      borderWidth:2
    },
    name:{
      fontFamily:"bold",
      color:"black",
      marginVertical:5,
    },
    loginBtn:{
      backgroundColor:COLORS.primary,
      padding:2,
      borderWidth:0.4,
      borderColor:COLORS.primary,
      borderRadius:SIZES.xxLarge
    },
    menuText:{
      fontFamily:"regular",
      color:COLORS.gray,
      marginLeft:20,
      fontWeight:'600',
      fontSize:14,
      lineWeight:26
    },
    MenuWrapper:{
      marginTop:SIZES.xLarge,
      width:SIZES.width-SIZES.large,
      backgroundColor:COLORS.lightWhite,
      borderRadius:12
    },
    menuItem:(borderBottomWidth) =>({
      borderBottomWidth:borderBottomWidth,
      flexDirection:"row",
      paddingVertical:15,
      paddingHorizontal:30,
      borderColor:COLORS.gray,
    })
   
});