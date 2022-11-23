import { Dimensions, StyleSheet } from "react-native";
import { Color } from "../constants/Color";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  header: {
    backgroundColor: Color.blue,
    flexDirection: "row",
    alignContent: "space-between",
    borderBottomWidth: 1,
    fontWeight: "bold",
    borderBottomColor: Color.white,
    height: 60,
  },
  title: {
    color: Color.white,
    flexDirection: "row",
    flex: 1,
    marginVertical: 15,
    paddingLeft: 10,
    fontSize: 20,
  },
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noItemText: {
    fontSize: 20,
    alignSelf: "center",
  },
  flex: {
    flexGrow: 1,
    marginTop: 10,
  },
  messageContainer: {
    backgroundColor: Color.white,
    flex: 1,
    position: "absolute",
    top: 60,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Style;
