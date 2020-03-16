import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "./components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list: {
    alignSelf: "stretch"
  }
});

const data = [{ id: 1, desc: "texto prueba", completed: false }];

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => (
          <ListItem onPress={() => {}} desc={item.desc} />
        )}
      />
    </View>
  );
};
