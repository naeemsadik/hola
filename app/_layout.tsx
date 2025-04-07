import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";  // Import StatusBar

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#121212" />
      <SafeAreaView style={{flex:1}}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
      </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
