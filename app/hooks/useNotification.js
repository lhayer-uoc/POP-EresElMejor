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
import { updateChallengeNotifications } from "../services/updateChallengeService";

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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

// HOOK for handle notifications, create and cancel
export const useHandleNotifications = () => {
  const [error, setError] = useState(null);

  const createTestNotification = async (challengeInfo) => {
    const data = {
      title: challengeInfo.title,
      trigger: challengeInfo.trigger ?? {
        seconds: 2,
      },
    };

    try {
      await schedulePushNotification(data);
    } catch (error) {
      console.log("error: ", error);
      setError({
        message: "No se ha podido crear la notificación, vuelve a intentarlo",
        data: challengeInfo,
      });
    }
  };

  const createNotifications = async ({ periodicity, challengeInfo }, token) => {
    try {
      await Promise.all(
        periodicity.map(async (day) => {
          const data = {
            title: challengeInfo.title,
            trigger: challengeInfo.trigger ?? {
              weekday: day,
              hour: 11,
              minute: 0,
              repeats: true,
            },
          };
          const identifier = await schedulePushNotification(data, token);
          await updateChallengeNotifications(day, identifier, challengeInfo.id);
        })
      );
      if (error) {
        setError(null);
      }
    } catch (error) {
      console.log("error: ", error);
      setError({
        message: "No se ha podido crear la notificación, vuelve a intentarlo",
        data: { ...{ periodicity, challengeInfo }, token },
      });
    }
  };

  const schedulePushNotification = async (messageData) => {
    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: messageData.title,
        body:
          messageData.body ??
          "Recuerda que hoy debes dedicarle tiempo a tu reto!",
      },
      trigger: {
        ...messageData.trigger,
      },
    });

    return identifier;
  };

  const cancelPushNotifications = async (notifications) => {
    try {
      await Promise.all(
        notifications.map(async (notification) => {
          await Notifications.cancelScheduledNotificationAsync(
            notification.notificationId
          );
        })
      );
      //TODO: borrar las notificationsIds de ese reto

      if (error) {
        setError(null);
      }
    } catch (error) {
      setError({
        message:
          "No se han podido cancelar las notificación, vuelve a intentarlo",
      });
    }
  };

  return {
    createNotifications,
    createTestNotification,
    cancelPushNotifications,
    error,
  };
};

export default usePushNotifications;
