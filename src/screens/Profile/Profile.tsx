import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { logout } from "../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removePhotos } from "../../store/photos/photosSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { name, email, avatar } = useAppSelector((state) => state.auth);

  const onPressLogout = () => {
    dispatch(logout());
    dispatch(removePhotos());
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {avatar ? (
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.image}
          />
        ) : (
          <ActivityIndicator style={{marginRight: 20}}/>
        )}
        <View>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Email: {email}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.logoutBtn} onPress={onPressLogout}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "auto",
    backgroundColor: "gray",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 50,
  },
  text: {
    color: "white",
  },
  logoutBtn: {
    marginBottom: 10,
    paddingVertical: 10,
    textAlign: "center",
    backgroundColor: "gray",
    color: "white",
    borderRadius: 10,
  },
});
