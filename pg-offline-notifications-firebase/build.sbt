import Dependencies._

ThisBuild / scalaVersion     := "2.13.1"
ThisBuild / version          := "0.1.0-SNAPSHOT"
ThisBuild / organization     := "com.example"
ThisBuild / organizationName := "example"

lazy val root = (project in file("."))
  .settings(
    name := "pg-offline-notifications-firebase",
    libraryDependencies += scalaTest % Test,
    libraryDependencies += "com.google.firebase" % "firebase-admin" % "6.12.2"
  )

// See https://www.s<groupId></groupId>
//  <artifactId>firebase-admin</artifactId>
//  <version>6.12.2</version>cala-sbt.org/1.x/docs/Using-Sonatype.html for instructions on how to publish to Sonatype.
