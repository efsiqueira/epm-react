import { ScrollView, View } from "react-native";
import AulaProjectListar from "./AulaProjectListar";
import AulaProjectAdicionar from "./AulaProjectAdicionar";
import styles from "../utils/styles";

export default function ProjectScreen() {
	return (
		<View
			style={
				{
					// backgroundColor: "#121212",
					flex: 1,
					alignSelf: 'stretch',
					justifyContent: 'space-between'
				}
			}
		>
			<ScrollView>
				<AulaProjectListar />
			</ScrollView>
			<View
				style={{ flexBasis: 90 }}
			>
				<AulaProjectAdicionar

				/>
			</View>
		</View >
	)
}