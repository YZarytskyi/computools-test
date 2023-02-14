import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchPhotos, fetchMorePhotos } from '../../store/photos/photosThunks';

const HomeScreen = () => {
  const { photos, isLoading } = useAppSelector(state => state.photos);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchPhotos());
      return;
    }
    dispatch(fetchMorePhotos(page));
  }, [page]);

  const fetchMore = () => {
    setPage(prev => prev + 1);
  };

  const onRefresh = useCallback(() => {
    if (page === 1) {
      dispatch(fetchPhotos());
    }
    setPage(1);
  }, []);

  if (!photos.length || isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => <PhotoCard photo={item} />}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        onEndReached={fetchMore}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  loading: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
