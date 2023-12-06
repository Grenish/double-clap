import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Linking,
  StyleSheet,
} from "react-native";

export default function App() {
  const openGoogleAssistant = () => {
    const googleAssistantUrl = "https://assistant.google.com/";
    Linking.openURL(googleAssistantUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Click Away</Text>
      <TouchableOpacity
        accessible={true}
        accessibilityRole="button"
        style={styles.button}
        onPress={openGoogleAssistant}
      >
        <Text style={styles.buttonText}>Open Google Assistant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  button: {
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#1E90FF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
