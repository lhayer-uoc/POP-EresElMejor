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
import { deleteChallengeNotifications } from "../services/deleteChallengeNotificationsService";

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
      try {
        await setNotificationChannelAsync("default", {
          name: "default",
          importance: AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      } catch (error) {
        handleConfigNotifications();
      }
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
  const [isLoading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(false);

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
      setIsloading(true);
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
          const identifier = await schedulePushNotification(data);
          await updateChallengeNotifications(day, identifier, challengeInfo.id);
        })
      );
      if (error) {
        setError(null);
      }
      setIsloading(false);
      setSuccess(true);
    } catch (error) {
      setError({
        message: "No se ha podido crear la notificación, vuelve a intentarlo",
        data: { ...{ periodicity, challengeInfo }, token },
      });
      setIsloading(false);
      setSuccess(false);
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

  const cancelPushNotifications = async (notifications, id) => {
    try {
      setIsloading(true);
      await Promise.all(
        notifications.map(async (notification) => {
          await Notifications.cancelScheduledNotificationAsync(
            notification.notificationId
          );
          await deleteChallengeNotifications(id);
        })
      );
      if (error) {
        setError(null);
      }
      setIsloading(false);
      setSuccess(true);
    } catch (error) {
      console.log("error: ", error);
      setError({
        message:
          "No se han podido cancelar las notificación, vuelve a intentarlo",
      });
      setIsloading(false);
      setSuccess(false);
    }
  };

  return {
    createNotifications,
    createTestNotification,
    cancelPushNotifications,
    onSuccess: success,
    isLoading,
    error,
  };
};

export default usePushNotifications;
