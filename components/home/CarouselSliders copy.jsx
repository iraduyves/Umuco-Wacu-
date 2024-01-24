import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

export  function CarouselSliders () {
    const sliders =[
      "https://yt3.googleusercontent.com/AQpPaZhfB2kCgNRRyJ9qKZrD2SiRxB0kOkYJtORh7If2UsCg5G2LEtWwQn5qZ8xRV-XlOLMNRA=s900-c-k-c0x00ffffff-no-rj",
        "https://www.igihe.com/local/cache-vignettes/L600xH400/arton118379-cfc07.jpg?1650015885",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ikibindi.jpg/220px-Ikibindi.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ingoma.png/220px-Ingoma.png",
        "https://kiny.taarifa.rw/wp-content/uploads/2023/11/F_uV1kZW0AACaIg.jpg"

    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={sliders}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center"
    }
})