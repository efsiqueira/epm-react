import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SignOut from "./screens/SignOut";
import UserProfile from "./screens/UserProfile";
import TarefasScreen from "./screens/TarefasScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Registre-se",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="MTBNavigation"
          component={MBTNavigation}
          options={{
            title: "Nav pricipal",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MTB = createMaterialBottomTabNavigator();

export function MBTNavigation() {
  return (
    <MTB.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        labelStyle: { fontSize: 8, fontWeight: "bold" },

      }}
    >
      <MTB.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: "android",

          title: "Inicio",
        }}
      />
      <MTB.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: "Contato",
          tabBarIcon: "phone-in-talk",
        }}
      />
      <MTB.Screen
        name="Tarefas"
        component={TarefasScreen}
        options={{
          title: "Tarefas",
          tabBarIcon: "format-list-bulleted",
        }}
      />
      <MTB.Screen
        name="ProfileScreen"
        component={UserProfile}
        options={{
          title: "Perfil",
          tabBarIcon: "account-circle",
        }}
      />
      <MTB.Screen
        name="LogoutScreen"
        component={SignOut}
        options={{
          title: "Sair",
          tabBarIcon: "exit-to-app",
        }}
      />
    </MTB.Navigator>
  );
}
