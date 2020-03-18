import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { complete, submit } from "./reducers/todos";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list: {
    alignSelf: "stretch"
  }
});

const App = ({ data, complete }) => {
  const [value, setValue] = useState("");

  const handleChange = val => {
    setValue(val);
  };
  return (
    <View style={styles.container}>
      <Input onChange={handleChange} value={value} />
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => (
          <ListItem
            completed={item.completed}
            onPress={() => complete(item.id)}
            desc={item.desc}
          />
        )}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return { data: state.todos };
};

const mapDispatchToProps = dispatch => ({
  complete: id => dispatch(complete(id)),
  submit: val => dispatch(submit(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
