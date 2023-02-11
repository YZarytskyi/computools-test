import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { useAppSelector } from "../../store/hooks";
import { removePhotos } from "../../store/photos/photosSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { name, email } = useAppSelector((state) => state.auth);

  const onPressLogout = () => {
    dispatch(logout());
    dispatch(removePhotos())
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElAU57KWynwhvyWHZ6p0X_shiDxetiIizhofpEX-OUyWoa0Mdkxb1KFivYEF3ke2v6jg&usqp=CAU",
          }}
          style={styles.image}
        ></Image>
        <View>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.themeBtn}>Change theme to "Light"</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.logoutBtn} onPress={onPressLogout}>Logout</Text>
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
  themeBtn: {
    marginBottom: 10,
    paddingVertical: 10,
    textAlign: "center",
    backgroundColor: "gray",
    color: "white",
    borderRadius: 10,
  },
  logoutBtn: {
    paddingVertical: 10,
    textAlign: "center",
    backgroundColor: "gray",
    color: "white",
    borderRadius: 10,
  },
});
