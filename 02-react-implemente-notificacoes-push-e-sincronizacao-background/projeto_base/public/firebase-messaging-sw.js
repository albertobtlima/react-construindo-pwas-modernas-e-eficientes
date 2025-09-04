/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA5oxO72RjKGDDQHFSyHF_N0i2A0Izb0i0",
  authDomain: "jornada-milhas-9715c.firebaseapp.com",
  projectId: "jornada-milhas-9715c",
  storageBucket: "jornada-milhas-9715c.firebasestorage.app",
  messagingSenderId: "423766070192",
  appId: "1:423766070192:web:7465f37525e466443c3c75",
};

firebase.initializaApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Notificação em segundo plano", payload.notification);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
