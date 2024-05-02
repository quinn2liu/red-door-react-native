import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signOut } from "firebase/auth";
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { InventoryItem } from "../components/InventoryItem";

import { Colors, auth } from "../config";

export const ViewInventoryScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, 'furniture'));
      setItems(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

    fetchData();
  }, []);
    
    return (
        <View style={styles.container}>
          <Header/>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>
              Type
            </Text>
            <Text style={styles.tableHeaderText}>
              Material
            </Text>
            <Text style={styles.tableHeaderText}>
              Color
            </Text>
            <Text style={styles.tableHeaderText}>
              Volume
            </Text>
          </View>
          {items.map(item => (
            <View key={item.id}>
              <InventoryItem id={item.id} type={item.type} material={item.material} length={item.length} width={item.width} height={item.height} custom={item.custom} color={item.color} />
            </View>
          ))}
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
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: '3%',
    justifyContent: 'space-between'
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: '16',
    marginBottom:'3%'
  }
});
