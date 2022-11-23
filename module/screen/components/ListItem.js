import React from "react";
import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import Style from "./Style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Color } from "../../constants/Color";
import { icons } from "../../constants/Icon";
import { text } from "../../constants/Text";

const ListItem = ({ item }) => {
  const openBrowser = () =>
    Linking.openURL(item.web_pages[0]).catch((err) =>
      Alert.alert(text.couldNotOpenUrl, err, [
        {
          text: text.okay,
        },
      ])
    );

  return (
    <TouchableOpacity onPress={() => openBrowser()} style={Style.listItem}>
      <View style={Style.schoolIcon}>
        <MaterialIcons name={icons.school} size={40} color={Color.black} />
      </View>
      <View style={Style.universityInfo}>
        <Text style={Style.universityName}>{item?.name}</Text>
        <Text style={Style.universityCountry}>{item?.country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
