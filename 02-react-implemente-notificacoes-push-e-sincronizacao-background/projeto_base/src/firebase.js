// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5oxO72RjKGDDQHFSyHF_N0i2A0Izb0i0",
  authDomain: "jornada-milhas-9715c.firebaseapp.com",
  projectId: "jornada-milhas-9715c",
  storageBucket: "jornada-milhas-9715c.firebasestorage.app",
  messagingSenderId: "423766070192",
  appId: "1:423766070192:web:7465f37525e466443c3c75",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BBqGcuvd9uQENzK4hzudWLpIElemTPvJ_jCu3dyvX8aSRXssO9IqipzW7p9qgG-5VwiurWjnp5PVydnFgTJiglw",
    });

    if (currentToken) {
      console.log(currentToken);
    } else {
      console.log("Nunhum token recebido");
    }
  } catch (err) {
    console.log(err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Payload", payload);
      resolve(payload);
    });
  });
