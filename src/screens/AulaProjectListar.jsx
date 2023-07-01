import { FlatList, ScrollView, View } from "react-native";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { List, Text, TouchableRipple } from "react-native-paper";

export default function AulaProjectListar() {
    const [projetos, setProjetos] = useState([]);

    const projetosRef = collection(db, "tarefas")

    useEffect(() => {

        const q = query(projetosRef)
        const unsubscribe = onSnapshot(
            q,
            (querySnapshot) => {
                const listaDeProjetos = querySnapshot.docs.map(
                    (doc) => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )
                )
                setProjetos(listaDeProjetos)
            }
        )
        return () => unsubscribe()
    }, [])

    function handleDelete(id) {
        console.log("vou deletar mesmo>", id)
        const docRef = doc(db, "tarefas", id)
        deleteDoc(docRef)
            .then(() => console.log("Documento deletado com sucesso"))
            .catch((error) => console.log(error))
    }

    return (
        <ScrollView>
            <FlatList
                data={projetos}
                renderItem={({ item }) => (
                    <List.Item
                        title={<Text style={{ color: "#5e8f87" }}>{item.nomeDaTarefa}</Text>}
                        onPress={() => console.log("Pressionado")}
                        right={(props) => (
                            <TouchableRipple
                                onPress={() => handleDelete(item.id)}
                            >
                                <List.Icon
                                    {...props}
                                    icon="delete"
                                    size={28}
                                    color="#5e8f87"
                                />
                            </TouchableRipple>
                        )}
                    />
                )}
            />
        </ScrollView>
    )
}