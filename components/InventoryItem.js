import React, { useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../config';

export const InventoryItem = ({ id, type, material, length, width, height, custom, color }) => {
    const navigation = useNavigation();
    const dimensions = parseInt(length) * parseInt(width) * parseInt(height);

    const onPress = () => {
        navigation.navigate('ItemPage', 
        id,
        type, 
        material, 
        length, 
        width, 
        height, 
        custom, 
        color);
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.inventoryItem}>
            <Text>{type}</Text>
            <Text>{material}</Text>
            <Text>{color}</Text>
            <Text>{dimensions}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    inventoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '2%',
        paddingVertical: '4%',
        borderWidth:2,
        marginVertical: '2%',
        borderRadius: 12
    }
});
