import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signOut } from "firebase/auth";
import { TextInput } from "../components";
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore"; 

import { Colors, auth } from "../config";

export const AddItemScreen = ({ navigation }) => {
    const handleLogout = () => {
        signOut(auth).catch((error) => console.log("Error logging out: ", error));
    };

    const [open1, setOpen1] = useState(false);
    const [type, setType] = useState(null);
    const [types, initializeTypes] = useState([
        {label: 'Chair', value: 'chair'},
        {label: 'Couch', value: 'couch'},
        {label: 'Table', value: 'table'},
        {label: 'Desk', value: 'desk'},
        {label: 'Coffee Table', value: 'coffee_table'},
        {label: 'Lamp', value: 'lamp'},
    ]);

    const [open2, setOpen2] = useState(false);
    const [material, setMaterial] = useState(null);
    const [materials, initMaterials] = useState([
        {label: 'Wood', value: 'wood'},
        {label: 'Plastic', value: 'plastic'},
        {label: 'Metal', value: 'metal'},
        {label: 'Desk', value: 'desk'},
    ]);


    const handleAddItem = async (values) => {
        const { type, material } = values;
        console.log(`type: ${type}, material: ${material}`);
        try {
            const docRef = await addDoc(collection(db, "furniture"), {
              type: type,
              primary_material: material,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };

    const goHome = () => {
        navigation.navigate("Home");
    };

  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput 
                placeholder="Custom Field 1"
                width="48%"
            />
            <TextInput 
                placeholder="Custom Field 2"
                width="48%"
            />
        </View>
        <Formik
            initialValues={{ type: '',  material: ''}}
            onSubmit={values => handleAddItem(values)}
        >
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, touched, errors }) => (
        <>
            <View style={{flexDirection: 'row', width:'51%', justifyContent: 'space-between', marginBottom:144}}>
                <DropDownPicker
                    open={open1}
                    value={type}
                    items={types}
                    setOpen={setOpen1}
                    setValue={setType}
                    setItems={initializeTypes}
                    onChangeValue={item => setFieldValue('type', item)}
                    placeholder="Type"
                    zIndex={3000}
                    zIndexInverse={3000}
                    style={{width: '95%'}}
                />
                <DropDownPicker
                    open={open2}
                    value={material}
                    items={materials}
                    setOpen={setOpen2}
                    setValue={setMaterial}
                    setItems={initMaterials}
                    onChangeValue={item => setFieldValue('material', item)}
                    placeholder="Material 1"
                    zIndex={2500}
                    zIndexInverse={2500}
                    style={{width: '95%'}}
                />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </>
        )}
        </Formik>
        <KeyboardAwareScrollView>
            <TouchableOpacity style={styles.createMenuButton} onPress={goHome}>
                <Text style={styles.buttonText} numberOfLines={1}>Home</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
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
  footer: {
    paddingHorizontal: 12,
    paddingBottom: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.red,
  },
  createMenu: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    padding: 12,
    justifyContent: 'space-between',
    width: '90%', 
    height: '12%',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 12
  },
  createMenuButton: {
    backgroundColor: Colors.red,
    padding: 12,
    borderRadius: 8,
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  viewInventoryButton: {

  },
  jobListButton: {

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
