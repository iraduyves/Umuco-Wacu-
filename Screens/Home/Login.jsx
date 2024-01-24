import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View ,Button, Alert} from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../../components/BackBtn'
import { SIZES } from '../../constantss'

import { COLORS } from '../../constants'
import useFetch from '../../components/hooks/useFetch'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {

    const[email,setEmail]=useState()
    const[password,setpassword]=useState()


    const { data,user, loading, error, refetch } = useFetch()
   

    const handleLogin =async () => {
    if (!email || !password) {
        Alert.alert("Error", "Please enter both email and password");
        return;
    }
    const matchedUser = user.find(u => u.email === email);
    if (matchedUser) {
        if (matchedUser.passord === password) {
        
              try {
            await AsyncStorage.setItem('userData', JSON.stringify(matchedUser));
            navigation.navigate("Profile");
        } catch (error) {
            console.error('Error storing user data:', error);
        }
        } 
        else {
       
            Alert.alert("Error", "Incorrect password");
        }
    } else {

        Alert.alert("Error", "User not found");
    }
}
 console.log("user",user);

    return (
        <ScrollView>
            <SafeAreaView style={{ MarginHorizontal: 20 }}>
                <View>
                    <BackBtn onpress={() => navigation.goBack()} style={styles.BackBtn} />
                    <Image
                        source={require('../../assets/images/bk.png')}
                        style={styles.cover}
                    />
                    <Text style={styles.title}>injirira hano ,kurubuga rwacu Rwacu Rwa IWACU</Text>
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Email</Text>

                            <View style={styles.inputWrapper}>
                                <TextInput
                                    placeholder="Enter User Email"
                                    style={styles.input}
                                    value={email}
                                    onChangeText={txt => setEmail(txt)}
                                />
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Password</Text>

                            <View style={styles.inputWrapper}>
                                <TextInput
                                    placeholder="Enter Your Password"
                                    style={styles.input}
                                    secureTextEntry={true}
                                    value={password}
                                    onChangeText={txt => setpassword(txt)}
                                />
                            </View>
                        </View>
                    </View>
                    
                    <Button title={"L O G I N"} onPress={handleLogin} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    cover: {
        height: SIZES.height / 2.4,
        width: SIZES.width - 60,
        resizeMode: "contain",
        marginBottom: SIZES.xxLarge
    },
    BackBtn: {
        alignItems: "center",
        position: "absolute",
        zIndex: 999,
        top: SIZES.large - 10
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        alignItems: "center",
        marginBottom: SIZES.xxLarge
    },
    wrapper: {
        marginBottom: 20,
        marginHorizontal: 20,

    },
    label: {
        fontFamily: "regular",
        fontSize: SIZES.xsmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "center",
    },
    inputWrapper: {
        borderBottomColor: "green",
        borderColor: "green",
        backgroundColor: COLORS.lightWhite,
        borderwidth: 3,
        height: 55,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: "center",
        // marginTop:10
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.3,
        alignSelf: 'center',
        // paddingLeft: 20,
    },
})