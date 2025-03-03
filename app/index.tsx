import { auth } from "@/configs/FirebaseConfig";
import { AuthContext } from "@/context/Authcontext";
import axios from "axios";
import { Redirect } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const {user, setUser} = useContext(AuthContext);

  onAuthStateChanged(auth, async (userData) => {
    if (userData && userData?.email) {
      // User is signed in
      const result = await axios.get(process.env.EXPO_PUBLIC_HOST_URL + '/user?email=' + userData?.email);
      console.log(result);
      // setUser(result.data);
      setUser({
        name: user.displayName,
        email: user.email,
        image: user?.photoURL ?? ''
      });
    } else {
      // No user is signed in
      console
        .log("No user is signed in");
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Redirect href={"/landing"} />
    </View>
  );
}
