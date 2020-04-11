 var firebaseConfig = {
    apiKey: "AIzaSyAmG5Dk5tcrNkv6FJf1oemy7K39O0ihmHU",
    authDomain: "test-firebase2-4879d.firebaseapp.com",
    databaseURL: "https://test-firebase2-4879d.firebaseio.com",
    projectId: "test-firebase2-4879d",
    storageBucket: "test-firebase2-4879d.appspot.com",
    // from https://console.firebase.google.com/project/test-firebase2-4879d/settings/cloudmessaging
    // from settings -> cloud messaging
    messagingSenderId: "261922828095",
    appId: "1:261922828095:web:ff9dcbb0dd27f7e8a96d8a",
    measurementId: "G-LN3Y8T93ML"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.usePublicVapidKey("BKoKA1ZJJ6PDNpCJe2-0ToUmcV6H_SQ-g7qzuvLy4f32XeMUUq7LThUq-gbLSF1SrEMHiYapNLgov4Pw8wVorN4");

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log("got token: " + currentToken)
    //sendTokenToServer(currentToken);
    //updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    //updateUIForPushPermissionRequired();
    //setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  //showToken('Error retrieving Instance ID token. ', err);
  //setTokenSentToServer(false);
});

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed:' + refreshedToken);
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    //setTokenSentToServer(false);
    // Send Instance ID token to app server.
    //sendTokenToServer(refreshedToken);
    // ...
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    //showToken('Unable to retrieve refreshed token ', err);
  });
});