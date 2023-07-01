import { Text, View } from "react-native";
import styles from "../utils/styles";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AboutScreen() {
  const [nomeDaPessoa, setNomeDaPessoa] = useState("")

  useEffect(() => {
    // pega o usuário do AsyncStorage
    AsyncStorage.getItem("usuario")
      // resolve a promessa
      .then((retorno) => {
        // transforma o JSON em objeto
        const usuario = JSON.parse(retorno)
        // seta o nome da pessoa na variável de estado
        setNomeDaPessoa(usuario.nomeDaPessoa)
      })
  }, [])

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Olá, {nomeDaPessoa}. Quer saber um pouco mais sobre o nosso sistema?</Text>
      <Text style={styles.text}>Somos um sistema de código aberto, idealizado no curso de Análise e Desenvolvimento de Sistemas do Senac Joinville. Nosso propósito é auxiliar os alunos e coordenadores no envio e análise dos dados de curricularização da extensão, que é o novo modelo de extensão. Para isso, consultamos e analisamos a opinião de diversas pessoas interessadas no assunto, e o resultado é o aplicativo que você está utilizando agora. Espero que aproveite e caso tenha algum feedback, entre em contato com a gente! Espero que sua experiência seja a melhor possível.</Text>
    </View>
  );
}
