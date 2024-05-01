import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../config';

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Red Door Inventory Manager</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.footerText}>
                <Text style={{color: Colors.blue}}>Sign Out</Text>
            </TouchableOpacity> 
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
        paddingHorizontal: 12,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent:'center',
        flexDirection: 'row',
      },
      footerText: {
        fontSize: 14,
        fontWeight: "700",
        color: Colors.red,
        paddingHorizontal: 4
    },
})