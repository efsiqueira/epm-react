import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserProfileImagePicker from "./UserProfileImagePicker";

export default function UserProfile() {
  const [user, setUser] = useState({
    nomeDaPessoa: "",
    userUID: "",
    image: null,
  });

  async function handleUpdate() {
    try {
      const usuarioId = user.userUID;
      const docRef = doc(db, "usuarios", usuarioId);
      const updateTimestamp = await updateDoc(docRef, {
        nomeDaPessoa: user.nomeDaPessoa,
        userUID: user.userUID,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteImage() {
    try {
      const usuarioId = user.userUID;
      const docRef = doc(db, "usuarios", usuarioId);
      const updateTimestamp = await updateDoc(docRef, {
        image: deleteField(),
      });
      setUser((prevUser) => ({
        ...prevUser,
        image: null,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    AsyncStorage.getItem("usuario").then((retorno) => {
      const usuario = JSON.parse(retorno);
      setUser(usuario);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text
          style={{
            ...styles.textCenter,
            fontWeight: "bold",
            marginBottom: 20,
            color: "rgb(94, 143, 135)",
          }}
          variant="titleLarge"
        >
          Edite seu perfil
        </Text>
        <UserProfileImagePicker
          idUsuario={user.userUID}
          image={user.image}
          onDeleteImage={handleDeleteImage}
        />
        <TextInput
          label="Nome"
          value={user.nomeDaPessoa}
          onChangeText={(text) =>
            setUser((prevUser) => ({ ...prevUser, nomeDaPessoa: text }))
          }
        />
        <Button
          mode="contained"
          style={{ maxWidth: 200, marginTop: 20, marginHorizontal: "auto" }}
          onPress={handleUpdate}
        >
          Atualizar meu perfil
        </Button>
      </View>
    </View>
  );
}
