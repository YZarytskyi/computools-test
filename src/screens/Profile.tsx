import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppSelector } from "../store/hooks";

const Profile = () => {

  const {name, email} = useAppSelector(state => state.auth)

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.themeBtn}>Change theme to "Light"</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.logoutBtn}>Logout</Text>
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
    marginBottom: "auto",
    backgroundColor: "gray",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
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
