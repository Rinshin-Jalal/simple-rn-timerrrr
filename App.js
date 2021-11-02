import * as React from "react";
import { SafeAreaView } from "react-native";
import Timer from "./comps/Timer";

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: 30 }}>
      <Timer />
    </SafeAreaView>
  );
}
