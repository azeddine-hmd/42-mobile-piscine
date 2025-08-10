import Button from "@/components/ui/button";
import { Text, View } from "react-native";

export default function Home() {
	const onButtonPressed = () => {
		console.log("Button Pressed");
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				gap: 16,
			}}
		>
			<Text style={{ fontSize: 32 }} >A simple text</Text>
			<Button onPress={onButtonPressed}>
				<Text style={{ fontSize: 24, color: "#fff" }} >Press me</Text>
			</Button>
		</View>
	);
}
