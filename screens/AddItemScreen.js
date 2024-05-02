import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { TextInput } from "../components";
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Colors } from "../config";

export const AddItemScreen = ({ navigation }) => {


    const [open1, setOpen1] = useState(false);
    const [type, setType] = useState('');
    const [types, initializeTypes] = useState([
        {label: 'Chair', value: 'chair'},
        {label: 'Couch', value: 'couch'},
        {label: 'Table', value: 'table'},
        {label: 'Desk', value: 'desk'},
        {label: 'Coffee Table', value: 'coffee_table'},
        {label: 'Lamp', value: 'lamp'},
    ]);

    const [open2, setOpen2] = useState(false);
    const [material, setMaterial] = useState('');
    const [materials, initMaterials] = useState([
        {label: 'Wood', value: 'wood'},
        {label: 'Plastic', value: 'plastic'},
        {label: 'Metal', value: 'metal'},
        {label: 'Glass', value: 'glass'},
    ]);

    const [open4, setOpen4] = useState(false);
    const [color, setColor] = useState('');
    const [colors, initColors] = useState([
      {label: 'Red', value: 'red'},
      {label: 'Orange', value: 'orange'},
      {label: 'Yellow', value: 'yellow'},
      {label: 'Green', value: 'green'},
      {label: 'Blue', value: 'blue'},
      {label: 'Violet', value: 'violet'},
      {label: 'Black', value: 'black'},
      {label: 'White', value: 'white'}
    ]);


    const handleAddItem = async (values) => {
        const { type, material, custom, length, width, height, color } = values;
        // console.log(`type: ${type}, material: ${material}, custom: ${custom}, length: ${length}, width: ${width}, height: ${height}, color: ${color}`);
        try {
            const docRef = await addDoc(collection(db, "furniture"), {
              type: type,
              material: material,
              custom_field: custom,
              length: length,
              width: width,
              height: height,
              color: color
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };
  return (
    <View style={styles.container}>
        <Header />
        <Formik
            initialValues={{ type: '',  material1: '', custom: '', length: '', width: '', height: ''}}
            onSubmit={values => handleAddItem(values)}
        >
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, touched, errors }) => (
          <>
            <View style={styles.dropdownRow}>
              <DropDownPicker
                  open={open1}
                  value={type}
                  items={types}
                  setOpen={setOpen1}
                  setValue={setType}
                  setItems={initializeTypes}
                  onChangeValue={item => setFieldValue('type', item)}
                  placeholder="Type"
                  style={{width: '95%'}}
                  maxHeight={150}
                  zIndex={3000}
                  zIndexInverse={1000}
              />
              <DropDownPicker
                  open={open2}
                  value={material}
                  items={materials}
                  setOpen={setOpen2}
                  setValue={setMaterial}
                  setItems={initMaterials}
                  onChangeValue={item => setFieldValue('material', item)}
                  placeholder="Material"
                  style={{width: '95%'}}
                  maxHeight={150}
                  zIndex={2500}
                  zIndexInverse={2500}
              />
            </View>
            { (open1 || open2) ? (
              <View style={{paddingTop:140}}>
                <View style={styles.textRow}>
                  <TextInput
                    placeholder="Length"
                    value={values.length}
                    onChangeText={item => setFieldValue('length', item)}
                    width={'49%'}
                  />
                  <TextInput
                    placeholder="Width"
                    value={values.width}
                    onChangeText={item => setFieldValue('width', item)}
                    width={'49%'}
                  />
                </View>
                <View style={styles.textRow}>
                  <TextInput
                    placeholder="Height"
                    value={values.height}
                    onChangeText={item => setFieldValue('height', item)}
                    width={'49%'}
                  />
                  <TextInput
                    placeholder="Custom Field"
                    value={values.custom}
                    onChangeText={item => setFieldValue('custom', item)}
                    width={'49%'}
                  />
                </View>
                <DropDownPicker
                  open={open4}
                  value={color}
                  items={colors}
                  setOpen={setOpen4}
                  setValue={setColor}
                  setItems={initColors}
                  onChangeValue={item => setFieldValue('color', item)}
                  placeholder="Color"
                  style={{width: '95%'}}
                  maxHeight={150}
                />
                <Button title="Submit" onPress={handleSubmit} />
              </View>
            ) : (
              <>
                  <View style={styles.textRow}>
                    <TextInput
                      placeholder="Length"
                      value={values.length}
                      onChangeText={item => setFieldValue('length', item)}
                      width={'49%'}
                    />
                    <TextInput
                      placeholder="Width"
                      value={values.width}
                      onChangeText={item => setFieldValue('width', item)}
                      width={'49%'}
                    />
                  </View>
                  <View style={styles.textRow}>
                    <TextInput
                      placeholder="Height"
                      value={values.height}
                      onChangeText={item => setFieldValue('height', item)}
                      width={'49%'}
                    />
                    <TextInput
                      placeholder="Custom Field"
                      value={values.custom}
                      onChangeText={item => setFieldValue('custom', item)}
                      width={'49%'}
                    />
                  </View>
                  <DropDownPicker
                    open={open4}
                    value={color}
                    items={colors}
                    setOpen={setOpen4}
                    setValue={setColor}
                    setItems={initColors}
                    onChangeValue={item => setFieldValue('color', item)}
                    placeholder="Color"
                    maxHeight={150}
                    zIndex={1000}
                    zIndexInverse={3000}
                  />
                  <Button title="Submit" onPress={handleSubmit} />
                </> 
            )
            }
          </>
        )}
        </Formik>
        <Footer />
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
  dropdownRow: {
    flexDirection: 'row', 
    width:'51%', 
    justifyContent: 'space-between',
    marginBottom:16
  },
  textRow: {
    flexDirection: 'row', 
    width:'100%', 
    justifyContent: 'space-between',
  }
});
