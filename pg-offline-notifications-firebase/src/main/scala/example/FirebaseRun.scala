package example

import java.io.FileInputStream
import com.google.firebase._

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import java.io.FileInputStream
import com.google.firebase.messaging.FirebaseMessaging
import com.google.firebase.messaging.Message



object FirebaseRun extends App {

  val creds = "/home/kadekm/Code/playgrounds/pg-offline-notifications-firebase/test-firebase2-4879d-firebase-adminsdk-95keq-39155d9ccf.json"

  val serviceAccount = new FileInputStream(creds)

  val options = new FirebaseOptions.Builder().setCredentials(GoogleCredentials.fromStream(serviceAccount))
    .setDatabaseUrl("https://test-firebase2-4879d.firebaseio.com").build

  FirebaseApp.initializeApp(options)

  // we store this in on our side for each user
  val userTokenFromDb = "eS7GUGchgr2eQ-Wt-yuDQh:APA91bGnqAgbTOsogzkETZCReOtquAw1Re7KlHAc9SEmIleH_OXSKrWzYcBUfvXh8pfVF1vUHOixoMj1VqN9x1JA5miozzmUKzyvOUoUk_ZkAy5BDxeQoQ_Q8FdXFZoB5dOY7D_kalZp"
  val message = Message.builder.putData("score", "850").putData("time", "2:45").setToken(userTokenFromDb).build

  // Send a message to the device corresponding to the provided
  // registration token.
  val response = FirebaseMessaging.getInstance.send(message)
  // Response is a message ID string.
  System.out.println("Successfully sent message: " + response)

}
