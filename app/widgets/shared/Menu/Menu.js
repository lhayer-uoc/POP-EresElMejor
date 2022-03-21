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
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const CreateNEwChanllengeIcon = ({ color, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={menuStyles.createChallenge}
        onPress={() => navigation.navigate("Nuevo Reto Center")}
      >
        <PlusIcon fill={color} />
      </TouchableOpacity>
    </View>
  );
};

const Menu = () => {
  const homeScreenTabs = ["Contactar", "Nuevo Reto Center", "Perfil"];
  const commonScreenTabs = ["Contactar", "Retos", "Perfil", "Nuevo Reto"];

  const commonTabBarITemStyles = {
    paddingTop: 8,
    paddingBottom: 10,
  };

  const commonTabBarLabelStyle = {
    fontWeight: "bold",
    fontSize: 12,
    color: "black",
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => {
          const currentScreen = getCurrentScreen(navigation);

          return {
            tabBarStyle: {
              height: 65,
            },
            tabBarActiveBackgroundColor: "#fc0",
            tabBarButton:
              (currentScreen === "Home" &&
                !homeScreenTabs.includes(route.name)) ||
              (currentScreen !== "Home" &&
                !commonScreenTabs.includes(route.name))
                ? () => null
                : undefined,
            tabBarLabelStyle: commonTabBarLabelStyle,
            tabBarItemStyle: commonTabBarITemStyles,
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Contactar"
          component={Home}
          options={() => ({
            tabBarIcon: () => <ContactIcon />,
          })}
        />
        <Tab.Screen
          name="Retos"
          component={Home}
          options={() => ({
            tabBarIcon: () => (
              <ChallengesIcon fill="#000" width={20} height={20} />
            ),
          })}
        />
        <Tab.Screen
          name="Nuevo Reto Center"
          component={Home}
          options={({ navigation }) => ({
            title: "Nuevo Reto",
            tabBarIcon: () => (
              <CreateNEwChanllengeIcon color="#fff" navigation={navigation} />
            ),
            tabBarLabelStyle: {
              ...commonTabBarLabelStyle,
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
            tabBarIcon: () => <ProfileIcon />,
          })}
        />
        <Tab.Screen
          name="Nuevo Reto"
          component={Home}
          options={({ route, navigation }) => {
            const currentScreen = getCurrentScreen(navigation);
            const indexNavigation = navigation.getState().index;
            return {
              title: "Nuevo Reto",
              tabBarIcon: () => <PlusIcon fill="#000" width={20} height={20} />,
              tabBarItemStyle: {
                ...commonTabBarITemStyles,
                backgroundColor:
                  indexNavigation === 3 || currentScreen === "Nuevo Reto"
                    ? "#fc0"
                    : "#fff",
              },
            };
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Menu;
