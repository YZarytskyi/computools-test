import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import PhotoCard from "../components/PhotoCard/PhotoCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPhotos } from "../store/photos/photosThunks";


const Home = () => {
  const photos = useAppSelector((state) => state.photos.photos);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchPhotos(page));
  }, [page]);

  const fetchMorePhotos = () => {
    setPage((prev) => prev + 1)
  }

  if(!photos.length) {
    return (
      <ActivityIndicator />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => <PhotoCard photo={item} />}
        onEndReached={fetchMorePhotos}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
