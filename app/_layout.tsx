import { AuthContext } from "@/context/Authcontext";
import { Stack } from "expo-router";
import { useState } from "react";

interface USER {
  id: number;
  email: string;
  password: string;
  image: string;
}

export default function RootLayout() {
  const [user, setUser] = useState<USER | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Stack>
        <Stack.Screen
          name="landing"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/SignUp"
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="(auth)/SignIn"
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </Stack>
    </AuthContext.Provider>
  );
}
