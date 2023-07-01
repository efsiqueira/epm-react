import { collection, endAt, getDocs, query, startAt, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

export default function AulaProjectBuscar({ routes, navigation }) {
    const [busca, setBusca] = useState("");
    const [resultadoProjetos, setResultadoProjetos] = useState([]);

    async function buscarProjeto() {
        try {
            const projetosRef = collection(db, 'tarefas')
            const queryProjetos = query(
                projetosRef,
                where('nomeDaTarefa', '>=', busca),
                where('nomeDaTarefa', '<=', busca + "\uf8ff")
            )
            const querySnapshot = await getDocs(queryProjetos)
            const projetos = querySnapshot.docs.map(doc => doc.data())
            setResultadoProjetos(projetos)

        } catch (error) { console.log(error); }
    }

    useEffect(() => {
        buscarProjeto();
        console.log(busca)
    }, [busca])

    return (
        <View>
            <Text>Buscar Projeto</Text>
            <TextInput
                label="Buscar"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultadoProjetos}
                renderItem={({ item }) => (
                    <Text id={item.id}>{item.nomeDaTarefa}</Text>
                )}
            />
        </View>
    )
}