import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { signOut } from "firebase/auth";
import { Colors, auth } from "../config";

export const Footer = () => {
    const handleLogout = () => {
        signOut(auth).catch((error) => console.log("Error logging out: ", error));
    };
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
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 12,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        fontWeight: "700",
        color: Colors.red,
        paddingHorizontal: 4
    },
})