import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight, Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Burrito', code: '#1abc9c', imagen:require('./assets/mxburrito.jpg') },
    { name: 'Fajita', code: '#2ecc71', imagen:require('./assets/mxfajitas.jpg') },
    { name: 'Flauta', code: '#3498db' ,imagen:require('./assets/mxflautas.jpg')},
    { name: 'Nacho', code: '#9b59b6', imagen:require('./assets/mxnachos.jpg') },
    { name: 'Tacos', code: '#34495e', imagen:require('./assets/mxtacos.jpg') },
    { name: 'Torta', code: '#16a085', imagen:require('./assets/mxtorta.jpg') },
    { name: 'Brucheta', code: '#8e44ad' , imagen:require('./assets/itbrucheta.jpg') },
    { name: 'Carpaccio', code: '#f1c40f', imagen:require('./assets/itcarpaccio.jpg') },
    { name: 'Lasaña', code: '#d35400', imagen:require('./assets/itlasana.jpg') },
    { name: 'Pizza', code: '#c0392b',imagen:require('./assets/itpizza.jpg') },
    { name: 'Ravioles', code: '#bdc3c7', imagen:require('./assets/itravioles.jpg') },
    { name: 'Spaguetti', code: '#7f8c8d',imagen:require('./assets/itspaguettti.jpg') },
    { name: 'Atol elote', code: '#27ae60', imagen:require('./assets/svatolelote.jpg') },
    { name: 'Atol chuco', code: '#2980b9', imagen:require('./assets/svatolshuco.jpg') },
    { name: 'Empanada', code: '#2c3e50', imagen:require('./assets/svempanada.jpg') },
    { name: 'Enchilada', code: '#e67e22', imagen:require('./assets/svenchilada.jpg') },
    { name: 'Nuegado masa', code: '#e74c3c', imagen:require('./assets/svnuegadomasa.jpg') },
    { name: 'Nuegado yuca', code: '#ecf0f1' , imagen:require('./assets/svnuegadoyuca.jpg') },
    { name: 'Pupusa', code: '#95a5a6', imagen:require('./assets/svpupusa.jpg') },
    { name: 'Torreja', code: '#f39c12' , imagen:require('./assets/svtorreja.jpg') },
  ]);

function createButtonAlert (msg,titulo){
    Alert.alert(
      "Se encuentra en la sección: "+titulo,
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    }

  return (
    <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Comida mexicana',
          data: items.slice(0, 6),
        },
        {
          title: 'Comida italiana',
          data: items.slice(6, 12),
        },
        {
          title: 'Comida Salvadoreña',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={() => createButtonAlert("Seleccionó el item: " + item.name,section.title)}>
        <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
          <Image style={styles.img} source={item.imagen}/>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  img:{
    width:80,
    height:80,
    marginLeft:-5,
    borderRadius:99,
    resizeMode: 'contain',
    margin:'auto',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});
