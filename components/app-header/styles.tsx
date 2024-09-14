import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  brandLogo: {
    // borderWidth: 1,
    height: 40,
    width: 200,
  },
  container: {
    alignItems: "center",
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
