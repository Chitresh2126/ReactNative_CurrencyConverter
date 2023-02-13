import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import convertCurrency from "../utils/convertCurrency";

const ConvertButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.convertBtn}>
        <TouchableOpacity
          onPress={() => {
            convertCurrency({
              setResult: props.setResult,
              to: props.to,
              from: props.from,
              amount: props.amount,
            });
          }}
        >
          <Text style={{ textAlign: "center", color: "black", fontSize: 25 }}>
            Convert
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height: 50,
  },
  convertBtn: {
    width: "90%",
    borderRadius: 35,
    flex: 1,
    backgroundColor: "#FD8A8A",
    justifyContent: "center",
  },
});

export default ConvertButton;
