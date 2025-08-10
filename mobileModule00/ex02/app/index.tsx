import Button from "@/components/ui/button";
import { colors } from "@/constants/color";
import useCalculator from "@/hook/use-calculator";
import useOrientation from "@/hook/use-orientation";
import { useEffect, useRef } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	const orientation = useOrientation();
	const { exp, res, onCalcButtonPressed } = useCalculator();
	const scrollViewRef = useRef<ScrollView>(null);

	useEffect(() => {
		if (!scrollViewRef.current) return;
		scrollViewRef.current.scrollToEnd();
	}, [exp]);

	return (
		<SafeAreaView style={{ flex: 0, height: "100%", backgroundColor: colors.primary }} edges={["left", "right", "bottom"]}>
			<StatusBar
				animated={true}
				backgroundColor={colors.primary}
			/>
			<ScrollView
				// showsVerticalScrollIndicator
				ref={scrollViewRef}
				scrollToOverflowEnabled
				contentContainerStyle={{
					gap: 8,
					direction: "rtl",
					padding: 16,
				}}
				style={{
					maxHeight: (orientation === "landscape") ? 130 : 400,
					backgroundColor: colors.secondary,
				}}>
				<Text style={{ fontSize: 32, color: "#fff" }}>{exp}</Text>
				<Text style={{ fontSize: 32, color: "#fff" }}>{res}</Text>
			</ScrollView>
			<View style={{ flex: 1, flexDirection: "column", backgroundColor: colors.primary }}>
				<View style={{ flex: 1, flexDirection: "row" }}>
					<Button style={{ flex: 5, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("7")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>7</Text>
					</Button>
					<Button style={{ flex: 5, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("8")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>8</Text>
					</Button>
					<Button style={{ flex: 5, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("9")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>9</Text>
					</Button>
					<Button style={{ flex: 5, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("C")}>
						<Text style={{ color: "#ff0000", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}>C</Text>
					</Button>
					<Button style={{ flex: 5, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("AC")}>
						<Text style={{ color: "#ff0000", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}>AC</Text>
					</Button>
				</View>
				<View style={{ flex: 1, flexDirection: "row" }}>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("4")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>4</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("5")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>5</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("6")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>6</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("+")}>
						<Text style={{ color: "#fff", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}>+</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("-")}>
						<Text style={{ color: "#fff", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}>-</Text>
					</Button>
				</View>
				<View style={{ flex: 1, flexDirection: "row" }}>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("1")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>1</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("2")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>2</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("3")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>3</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("x")}>
						<Text style={{ color: "#fff", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}>x</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("/")}>
						<Text style={{ color: "#fff", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}>/</Text>
					</Button>
				</View>
				<View style={{ flex: 1, flexDirection: "row" }}>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("0")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>0</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed(".")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>.</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("00")}>
						<Text style={{ color: "#000", fontSize: 19, fontWeight: "bold" }}>00</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2} onPress={() => onCalcButtonPressed("=")}>
						<Text style={{ color: "#fff", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}>=</Text>
					</Button>
					<Button style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={0.2}>
						<Text style={{ color: "#fff", opacity: 0.6, fontSize: 19, fontWeight: "bold" }}></Text>
					</Button>
				</View>
			</View>
		</SafeAreaView>
	);
}
