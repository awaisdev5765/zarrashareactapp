importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: "AIzaSyCwjzTENDXt_zRmUQSAP_r7dg7VrJjvKiw",
    authDomain: "cheezar-57cb6.firebaseapp.com",
    projectId: "cheezar-57cb6",
    storageBucket: "cheezar-57cb6.firebasestorage.app",
    messagingSenderId: "498494034856",
    appId: "1:498494034856:web:c1e67ddd780248ec33c39d",
    measurementId: "G-P911QG84WP"
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})