import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Search.style';
import { COLORS, SIZES } from '../../constants';
import useFetch from '../../components/hooks/useFetch';
import ProductCardView from '../../components/products/ProductCardView';

export function Search({ product }) {
  const { data, loading, error, refetch } = useFetch()
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedProduct, setSearchedProduct] = useState(data);


  const searchHandler = (product) => {
    const filteredProduct = product.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchedProduct(filteredProduct);
    setSearchTerm(product);
  };

  console.log("searchedProduct", searchedProduct);

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for'
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => searchHandler(data)}>
            <Feather name='search' size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
       {searchedProduct.length > 0 ?  (
                <FlatList
                    data={searchedProduct}
                    renderItem={({ item }) => {
                        console.log("all productts:", data);
                        return <ProductCardView product={item} />
                    }}
                    numColumns={2}
                    contentContainerStyle={styles.container}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator}></View>}

                />
                ):(<Text>Icyo Gikoresho Ntago Tugifitemo</Text>)}
          
    </SafeAreaView>
  );
}
