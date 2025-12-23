import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

interface Pros {
    onPress: () => void
    placeholder: string; 
}

const SearchBar = ({onPress, placeholder}:Pros) => {
    return (
        <View className=' flex-row items-center bg-dark-200 rounded-full px-3 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=""
                onChange={()=>{}}
                placeholderTextColor="#a8b5db"
                className='flex-1 ml-2 text-white'
            />
         </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})