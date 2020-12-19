import PushNotification from 'react-native-push-notification';

const Notif = (title, msg) => {
  PushNotification.localNotification({
    title: title,
    message: msg, // (required)
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    // title: 'Local Notification Title',
    // message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]',
  });
};

export default Notif;
