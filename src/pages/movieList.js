import React, {useState,useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import axios from 'axios';




const BASE_URL = "http://image.tmdb.org/t/p/w500"
const MovieList = () => {
 const [data, setData] = useState([]);
 
  const fetchData = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=9574339eebcee0d472f9a4c770f00a4b&language=en-US&page=1'
    const response = await axios.get(url);
    setData(response.data.results)
    console.log("data"+JSON.stringify(response.data.results[0].poster_path));
  };

  useEffect(() => {
    fetchData();
  }, []);

 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin:2,
              backgroundColor:"black"
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: BASE_URL+item.poster_path}}
            />
             <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        //Setting the number of column
        horizontal={false}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color :"white",
    textAlign:"center",
    marginBottom:5,
    },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    margin:10,
    resizeMode: 'contain',
  },
});

export default MovieList;