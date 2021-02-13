import React from "react";
import { View } from "react-native";
import Workouts from "./Features/Workouts";
import { Provider } from "react-redux";
import { Store } from "./Features/State/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Workouts />
      </View>
    </Provider>
  );
}
