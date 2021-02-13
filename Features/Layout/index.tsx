import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

interface LayoutProps {
  headerText: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <StatusBar style="auto" />
      <Header text={props.headerText} />
      <Body>{props.children}</Body>
    </View>
  );
};

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "700", fontSize: 30, marginTop: 10 }}>
        {props.text}
      </Text>
    </View>
  );
};

const Body: React.FC = (props) => {
  return (
    <View
      style={{
        flex: 9,
        alignItems: "stretch",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {props.children}
    </View>
  );
};

export default Layout;
