import { View, Text ,SafeAreaView,TouchableOpacity,ScrollView, Image, Button} from 'react-native'
import React from 'react'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { Styles } from './home.style';
import { Welcome } from '../../components/home/welcom/Welcome';
import { CarouselSliders } from '../../components/home/CarouselSliders copy';
import { Headings } from '../../components/home/heading/Headings';
import { ProductRow } from '../../components/products/ProductRow';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';


export const page2 =(route)=>{
 
  const props = route.params;
   
  return(
  
<FlatList
    data={props.content}
    keyExtractor={(item) => item.name}
    renderItem={(item)=>{
      <view>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
      </view>

    }}
/>
  )
}

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
            <TouchableOpacity
   dssjfgfdndk
            >
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
