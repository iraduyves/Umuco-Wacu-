import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './ProductCardView.style'
import { Image } from 'react-native'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { ProductDetails } from '../../Screens/ProductDetails/ProductDetails'

const MostSearched = ({ item }) => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item?.item })}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: item?.item?.image }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title} numberOfLines={1}>{item?.item?.name}</Text>
                        <Text style={styles.supplier} numberOfLines={4}>{item?.item?.description}</Text>
                        <Text style={styles.price} >{item?.item?.invented}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )

}
export default MostSearched