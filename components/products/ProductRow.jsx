import React from 'react'
import useFetch from '../hooks/useFetch'
import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import MostSearched from './MostSearched'
import { COLORS, SIZES } from '../../constants'
import { isLoading } from 'expo-font'

export const ProductRow = () => {
    const products = [1, 2, 3, 4, 5]

    const { data, loading, error, refetch } = useFetch()

    return (
        <View style={{ marginTop: SIZES.medium }}>
            {loading ? (
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            ) : error ? (
                <Text>Something went Wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => 
                        { return <MostSearched item={item} />}}
                    horizontal
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            )}
        </View>

    )
}
