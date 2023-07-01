import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import { db } from "../config/firebase"
import styles from "../utils/styles"

export default function AulaProjectAdicionar() {
    const [projeto, setProjeto] = useState('')

    const projetosRef = collection(db, "tarefas")

    function handleAddProject() {
        console.log(projeto)
        const data = {
            nomeDaTarefa: projeto
        }

        addDoc(projetosRef, data)
            .then((docRef) => {
                console.log("Projeto Adicionar com a ID: ", docRef.id)
                setProjeto('')
            })
            .catch(
                (error) => console.log(error)
            )
    }

    return (
        <View
            style={styles.containerInner}
        >
            <TextInput
                label="Projeto"
                mode="outlined"
                value={projeto}
                onChangeText={setProjeto}
                right={
                    <TextInput.Icon
                        icon="plus"
                        size={28}
                        color="#5e8f87"
                        onPress={handleAddProject}
                    />
                }
            />
        </View>
    )
}