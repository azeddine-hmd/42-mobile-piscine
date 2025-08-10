import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
	  headerTitle: 'Calculator',
	  headerTitleAlign: 'center',
	  headerStyle: { backgroundColor: '#607d8b' },
	  headerTitleStyle: { color: '#fff' }
  }} />;
}
