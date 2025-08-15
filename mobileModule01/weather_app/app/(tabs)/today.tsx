import { View } from "react-native";
import { Container } from "~/components/Container";
import { useHeaderSearchBar } from "~/lib/useHeaderSearchBar";
import { Text } from "~/components/nativewindui/Text";

export default function TodayTab() {
	const searchValue = useHeaderSearchBar();

	return (
		<Container>
			<View className="flex-1 justify-center items-center">
				<Text>Today Window</Text>
			</View>
		</Container>
	);
}
