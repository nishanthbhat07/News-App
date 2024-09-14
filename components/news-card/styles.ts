import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  image: {
    borderRadius: 10,
    height: 80,
    width: 80,
  },
  title: {
    flexShrink: 1,
    maxWidth: 300,
    textAlign: "auto",
  },
});
