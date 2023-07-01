import { ScrollView, View } from "react-native";
import AulaTaskListar from "./AulaTaskListar";
import AulaTasksAdicionar from "./AulaTaskAdicionar";
import styles from "../utils/styles";

export default function ProjectScreen() {
	return (
		<View
			style={
				{
					flex: 1,
					alignSelf: 'stretch',
					justifyContent: 'space-between'
				}
			}
		>
			<ScrollView>
				<AulaTaskListar />
			</ScrollView>
			<View
				style={{ flexBasis: 90 }}
			>
				<AulaTasksAdicionar

				/>
			</View>
		</View >
	)
}