import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";
import { cn } from "~/lib/cn";
import { useColorScheme } from "~/lib/useColorScheme";


export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerRightContainerStyle: { paddingRight: 8 } }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Currently",
					tabBarIcon: ({ color }) => <FontAwesome size={20} name="clock-o" color={color} />,
					...SCREEN_OPTIONS,
				}}
			/>

			<Tabs.Screen
				name="today"
				options={{
					title: "Today",
					tabBarIcon: ({ color }) => <FontAwesome size={20} name="sun-o" color={color} />,
					...SCREEN_OPTIONS,
				}}
			/>

			<Tabs.Screen
				name="weekly"
				options={{
					title: "Weekly",
					tabBarIcon: ({ color }) => <FontAwesome size={20} name="calendar" color={color} />,
					...SCREEN_OPTIONS,
				}}
			/>
		</Tabs>
	);
}

const SCREEN_OPTIONS = {
	headerTitle: "Weather app",
	headerRight: () => <Geolocation />
} as const;

function Geolocation() {
	const { colors } = useColorScheme();
	return (
		<Link href="/geolocation" asChild>
			<Pressable className="opacity-80" style={{ marginRight: 8 }}>
				{({ pressed }) => (
					<View className={cn(pressed ? 'opacity-50' : 'opacity-90')}>
						<FontAwesome size={24} name="location-arrow" color={colors.foreground} />
					</View>
				)}
			</Pressable>
		</Link>
	);
}
