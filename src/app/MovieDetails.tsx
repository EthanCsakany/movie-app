import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const MovieDetails = () => {
const { title, releaseYear } = useLocalSearchParams();

return (
    <View style={styles.container}>
            
        <Text style={styles.item}>{title}</Text>
        <Text style={styles.item}>{releaseYear}</Text>         
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 54,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    }
  });  

export default MovieDetails;