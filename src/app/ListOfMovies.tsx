import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';


const ListOfMovies = () => {

const startingDataSource = [
    { "title": "Elf", "releaseYear": "2003" },
    { "title": "The Grinch", "releaseYear": "1966" },
    { "title": "Die Hard", "releaseYear": "1988" },
    { "title": "Home Alone", "releaseYear": "1990" },
    { "title": "A Christmas Story", "releaseYear": "1983" }
  ];

  const [movies, setMovies] = useState(startingDataSource);

  const loadMore = async () => {
    const response = await fetch('https://reactnative.dev/movies.json');
    const data = await response.json();
    setMovies(movies.concat(data.movies));
 };
  
         
  return (
    <View style={styles.container}>     
    <FlatList
    data={movies}
    renderItem={({ item }) => (
        <Link
            href={{
                pathname: "/MovieDetails",
                params: {
                    title: item.title,
                    releaseYear: item.releaseYear
                }
            }}
            style={[styles.item, styles.border]}
        >
            {item.title}
        </Link>
    )}
/>
<Button title="Load More" onPress={loadMore} />
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

export default ListOfMovies;