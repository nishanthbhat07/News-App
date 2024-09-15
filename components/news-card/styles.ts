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
    marginBottom: 10,
  },
  image: {
    borderRadius: 10,
    height: 80,
    width: 80,
  },
  pinIcon: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  pinnedContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
  },
  title: {
    flexShrink: 1,
    maxWidth: 300,
    textAlign: "auto",
  },
});
