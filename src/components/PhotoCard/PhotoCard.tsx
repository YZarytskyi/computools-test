import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Photo } from '../../types/types';

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard = ({ photo }: PhotoCardProps): JSX.Element => {

  const navigation = useNavigation();
  const onPressPhotoDetails = () => {
    navigation.navigate('HomeDetailsScreen', {
      id: photo.id,
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressPhotoDetails}>
        <Image source={{ uri: photo.download_url }} style={styles.image} />
        <Text style={styles.author}>{photo.author}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  author: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingStart: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
  },
});
