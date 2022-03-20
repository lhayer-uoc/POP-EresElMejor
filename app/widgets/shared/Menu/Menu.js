import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../../views/Home/Home";
import { getCurrentScreen } from "../../../utils/navigation";
import ContactIcon from "../../../../assets/contact.svg";
import ProfileIcon from "../../../../assets/profile.svg";
import PlusIcon from "../../../../assets/plus.svg";
import ChallengesIcon from "../../../../assets/rocket.svg";
import { View } from "react-native";
import { menuStyles } from "./MenuStyles";

const Tab = createBottomTabNavigator();

const CreateNEwChanllengeIcon = ({ color }) => {
  return (
    <View style={menuStyles.createChallenge}>
      <PlusIcon fill={color} />
    </View>
  );
};

const Menu = () => {
  const homeScreenTabs = ["Contactar", "Crear Reto", "Perfil"];
  const commonScreenTabs = ["Contactar", "Retos", "Perfil", "Nuevo Reto"];

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => {
          const currentScreen = getCurrentScreen(navigation);
          return {
            tabBarButton:
              (currentScreen === "Home" &&
                !homeScreenTabs.includes(route.name)) ||
              (currentScreen !== "Home" &&
                !commonScreenTabs.includes(route.name))
                ? () => null
                : undefined,
            tabBarLabelStyle: {
              fontWeight: "bold",
              fontSize: 12,
              color: "black",
            },
            tabBarStyle: {
              paddingTop: 8,
              paddingBottom: 10,
              height: 65,
            },
          };
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Contactar"
          component={Home}
          options={() => ({
            tabBarIcon: ({ tintColor }) => <ContactIcon />,
          })}
        />
        <Tab.Screen
          name="Retos"
          component={Home}
          options={() => ({
            tabBarIcon: ({ tintColor }) => <ChallengesIcon color={tintColor} />,
          })}
        />
        <Tab.Screen
          name="Crear Reto"
          component={Home}
          options={() => ({
            tabBarIcon: ({ tintColor }) => <CreateNEwChanllengeIcon />,
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: "bold",
              color: "black",
            },
          })}
        />
        <Tab.Screen
          name="Perfil"
          component={Home}
          options={() => ({
            tabBarIcon: ({ tintColor }) => <ProfileIcon />,
          })}
        />
        <Tab.Screen name="Nuevo Reto" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Menu;
