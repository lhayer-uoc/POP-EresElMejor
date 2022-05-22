import { isDevice } from "expo-device";
import { openSettings } from "expo-linking";
import {
  getPermissionsAsync,
  requestPermissionsAsync,
  getExpoPushTokenAsync,
} from "expo-notifications";
import { Alert } from "react-native";

const generatePushNotificationsToken = async () => {
  if (!isDevice) {
    throw new Error(
      "Sorry, Push Notifications are only supported on physical devices."
    );
  }

  const { status: existingStatus } = await getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    Alert.alert(
      "Error",
      "Sorry, we need your permission to enable Push Notifications. Please enable it in your privacy settings.",
      [
        {
          text: "OK",
        },
        {
          text: "Open Settings",
          onPress: async () => openSettings(),
        },
      ]
    );
    return undefined;
  }

  const { data } = await getExpoPushTokenAsync();

  return data;
};

export default generatePushNotificationsToken;
