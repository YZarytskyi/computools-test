import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { getPhotoDetails } from '../../services/photosApi';
import { Photo } from '../../types/types';

const HomeDetailsScreen = () => {
  const route = useRoute();
  const { id } = route.params;

  const [photoDetails, setPhotoDetails] = useState<Photo | null>(null);

  useEffect(() => {
    async function fetchPhotoDetails() {
      try {
        const data = await getPhotoDetails(id);
        setPhotoDetails(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPhotoDetails();
  }, []);

  if (!photoDetails) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: photoDetails?.download_url }}
        style={styles.image}
      >
        <Text style={styles.text}>{photoDetails?.author}</Text>
      </ImageBackground>
    </View>
  );
};

export default HomeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
