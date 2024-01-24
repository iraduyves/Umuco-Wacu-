import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './ProductCardView.style'
import { Image } from 'react-native'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import {ProductDetails} from '../../Screens/ProductDetails/ProductDetails'

const ProductCardView = ({ product }) => {
    const navigation = useNavigation();

    if (!product) {
      return null;
    }
  
    const { image, description, name } = product;
  
    if (!image || !description || !name) {
      return null;
    }
  
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product })}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              {description}
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              {name}
            </Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  };
  

export default ProductCardView