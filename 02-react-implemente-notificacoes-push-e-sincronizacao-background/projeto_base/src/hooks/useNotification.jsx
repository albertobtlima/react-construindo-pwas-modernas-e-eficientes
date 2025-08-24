import { useEffect } from "react";

const useNotification = () => {
  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      alert("Permissão não concedida");
    }
  };

  const sendNotification = (title, options) => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else "Notificações não permitidas";
  };

  const sentTestNotification = () {}

  useEffect(() => {
    requestNotificationPermission();
  });

  return {};
};

export default useNotification;
