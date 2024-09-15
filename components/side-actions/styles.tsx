import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
import { width } from "../../utils/system";

const styles = StyleSheet.create({
  actionContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  container: {
    alignSelf: "center",
    backgroundColor: COLORS.blue,
    height: "100%",
    width,
  },
  deleteContainer: {
    alignItems: "flex-end",
    paddingRight: 30,
  },
  deleteIcon: {
    alignSelf: "center",
  },
  pinContainer: {
    alignItems: "flex-start",
    paddingLeft: 30,
  },
  pinIcon: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  text: {
    textAlign: "center",
  },
});

export default styles;
