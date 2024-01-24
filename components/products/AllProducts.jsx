import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import useFetch from '../hooks/useFetch'

const AllProducts = () => {

    const { data, loading, error, refetch } = useFetch()
    return (
        <SafeAreaView style={styles.container}>

            {loading ? (
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            ) : error ? (
                <Text>Something went Wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        console.log("all productts:", data);
                        return <ProductCardView product={item} />
                    }}
                    numColumns={2}
                    contentContainerStyle={styles.container}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator}></View>}

                />
            )}
        </SafeAreaView>
    )
}

export default AllProducts

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: SIZES.xxLarge + SIZES.large,
        paddingLeft: SIZES.small
    },
    separator: {
        height: 16
    }
})