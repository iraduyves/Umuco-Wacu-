import Constants from 'expo-constants';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, Linking, Alert, StyleSheet, TouchableOpacity, TextInput,Image} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../../constants';



const url = 'https://d89b-196-12-144-113.ngrok-free.app/posts'
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const AddItem = () => {



    const navigation = useNavigation();
    const [data, SetData] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [invented, setInvented] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(image);
        }
    };



    const addPosts = (name, description, invented, image) => {
        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({
                "name": name,
                "description": description,
                "invented": invented,
                "image": image
            })
        })
            .then((res) => res.json())
            .then(resJson => {
                console.log('data:', resJson)
                SetData(resJson)
                Alert.alert(`${name} is Added to Databasse Sucessfully`)
                navigation.navigate("Home");
            }).catch(e => { console.log(e) })
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter Product Name"
                style={styles.input}
                value={name}
                onChangeText={txt => setName(txt)}
            />
            <TextInput
                placeholder="Enter Description"
                style={[styles.input, { marginTop: 20 }]}
                value={description}
                onChangeText={txt => setDescription(txt)}
            />
            <TextInput
                placeholder="Enter Invented time"
                style={[styles.input, { marginTop: 20 }]}
                value={invented}
                onChangeText={txt => setInvented(txt)}
            />
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: '#eee' }} onPress={pickImage}>
                <Text>Choose Image</Text>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => {
                    addPosts(name, description, invented, image);
                }}
            >
                <Text style={styles.btnText}>Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.3,
        alignSelf: 'center',
        paddingLeft: 20,
        marginTop: 100,
    },
    addBtn: {
        backgroundColor: COLORS.primary,
        width: '80%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        alignSelf: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default AddItem