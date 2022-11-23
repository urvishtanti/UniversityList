import { Dimensions, StyleSheet } from "react-native";
import { Color } from "../../constants/Color";

const Style = StyleSheet.create({
  listItem: {
    borderRadius: 5,
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: Color.white,
    width: "95%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
  },
  schoolIcon: {
    padding: 5,
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  universityInfo: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
  },
  universityName: {
    color: Color.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  universityCountry: {
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default Style;
