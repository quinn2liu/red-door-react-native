import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { db } from "../config/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore"; 
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { InventoryItem } from "../components/InventoryItem";
import { useNavigation } from "@react-navigation/native";

import { Colors, auth } from "../config";

export const ViewItemScreen = ({ route }) => {
    const { id, type, material, length, width, height, custom, color } = route.params;
    const dimensions = parseInt(length) * parseInt(width) * parseInt(height);
    const [item, setItem] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'furniture', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setItem({ ...docSnap.data(), id: docSnap.id });
            } else {
                console.log('No such document!');
            }
        };

        fetchData();
    }, []);

    const deleteItem = async (id) => {
        const docRef = doc(db, 'furniture', id);
        await deleteDoc(docRef);
        navigation.navigate('ViewInventory');
    }
    
    return (
        <View style={styles.container}>
          <Header/>
          <View style={styles.itemContainer}>
            <Text style={styles.title}>Type: {type}</Text>
            <Text style={styles.detail}>Material: {material}</Text>
            <Text style={styles.detail}>Dimensions: {length} x {width} x {height}</Text>
            {
                custom ? (
                    <Text style={styles.detail}>Custom: {custom}</Text>
                ) : (
                    null
                )
            }
            <Text style={styles.detail}>Color: {color}</Text>
          </View>
          <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', paddingTop:'4%'}} onPress={() => deleteItem(id)}>
            <Text style={{color: Colors.red, fontSize:20}}>Delete Item</Text>
          </TouchableOpacity>
          <Footer/>
        </View>   
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingVertical: 72,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
      },
      itemContainer: {
        flexDirection: 'column',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        margin: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      detail: {
        fontSize: 16,
        marginBottom: 5,
      },
    });