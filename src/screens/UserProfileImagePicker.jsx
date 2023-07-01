import React, { useState, useEffect } from "react";
import { Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function UserProfileImagePicker(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (props.image) {
      setImage(props.image);
    } else {
      setImage(null);
    }
  }, [props.image]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      const docRef = doc(db, "usuarios", props.idUsuario);
      const updateTimestamp = await updateDoc(docRef, {
        image: result.uri,
      });

      setImage(result.uri);
    }
  };

  const handleDeleteImage = async () => {
    const docRef = doc(db, "usuarios", props.idUsuario);
    const updateTimestamp = await updateDoc(docRef, {
      image: null,
    });

    setImage(null);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
        />
      ) : (
        <Ionicons
          name="person-circle-outline"
          size={100}
          color="gray"
          style={{
            marginBottom: 10,
          }}
        />
      )}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Button icon="camera" mode="outlined" onPress={pickImage}>
          Escolher Imagem
        </Button>
        {image && (
          <Button icon="delete" mode="outlined" onPress={handleDeleteImage}>
            Excluir Imagem
          </Button>
        )}
      </View>
    </View>
  );
}
