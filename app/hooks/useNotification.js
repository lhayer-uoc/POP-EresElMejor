import { useEffect, useRef, useState } from "react";
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  AndroidImportance,
  removeNotificationSubscription,
  setNotificationChannelAsync,
  setNotificationHandler,
} from "expo-notifications";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const schedulePushNotification = async (messageData, token) => {
  console.log("messageData: ", messageData);
  console.log("token: ", token);

  await Notifications.scheduleNotificationAsync({
    identifier: token,
    content: {
      title: messageData.title,
      body: messageData.body,
    },
    trigger: messageData.trigger,
  });
};

const usePushNotifications = (onTapNotification) => {
  const [notification, setNotification] = useState(null);
  const notificationListener = useRef();
  const responseListener = useRef();

  const handleConfigNotifications = async () => {
    if (Platform.OS === "android") {
      await setNotificationChannelAsync("default", {
        name: "default",
        importance: AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };

  useEffect(() => {
    notificationListener.current =
      addNotificationReceivedListener(setNotification);

    responseListener.current = addNotificationResponseReceivedListener(
      (response) => onTapNotification?.(response)
    );

    handleConfigNotifications();

    return () => {
      if (notificationListener.current) {
        removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        removeNotificationSubscription(responseListener.current);
      }
    };
  }, [onTapNotification]);

  return { notification };
};

export default usePushNotifications;
