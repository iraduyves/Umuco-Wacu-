import { View, Text ,SafeAreaView,TouchableOpacity,ScrollView, Image} from 'react-native'
import React from 'react'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { Styles } from './home.style';
import { Welcome } from '../../components/home/welcom/Welcome';
import { CarouselSliders } from '../../components/home/CarouselSliders copy';
import { Headings } from '../../components/home/heading/Headings';
import { ProductRow } from '../../components/products/ProductRow';

export const Home = () => {
  return (
    <SafeAreaView>
      {/* <FontAwesomeIcon icon={faEnvelope}/> */}
      <View style={Styles.appBarWrapper}>
        <View style={Styles.appBar}>
          {/* <FontAwesomeIcon icon={faLocationDot} /> */}
          <Ionicons name='location-outline' size={24} />
          <Text style={Styles.location}>Rwanda</Text>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/imagelogo.jpg')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <CarouselSliders/>
        <Headings/>
        <ProductRow/> 
      </ScrollView>
    </SafeAreaView>
  )
}
