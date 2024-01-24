import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { Image } from 'react-native'
import { styles } from './ProductDetails.style';

export const ProductDetails = ({ navigation, route }) => {
  const [count, SetCount] = useState(1)
  const { product } = route.params;
  console.log("products::::",product);
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <Ionicons name='chevron-back-circle' size={30} />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: product?.image }}
            style={styles.image}
          />
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{product?.name}</Text>
              <View style={styles.priceWrapper}>
                <Text style={styles.price}>{product?.invented}</Text>
              </View>
            </View>
            <View style={styles.ratingRow}>
              <View style={styles.rating}>
                {[1, 2, 3, 4, 5].map((index) => (
                  <SimpleLineIcons key={index} name='star' size={24} color='gold' />
                ))}
                <Text style={styles.ratingText}>(4.9)</Text>
              </View>
              
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description} >Ibisobanuro</Text>
              <Text style={styles.dscText} >{product?.description} </Text>
            </View>
            <View style={{ marginBottom: SIZES.small }}>
              <View style={styles.location}>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name='location-outline' size={20} />
                  <Text>Kigali</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text>Menya Byinshi Kubuntu</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => { }} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>KOMMEZA UBUSHAKASHATSI BWAWE AHANDI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default ProductDetails