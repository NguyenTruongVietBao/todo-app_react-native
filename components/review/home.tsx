import React, { useState } from "react";
import {
  Text,
  Button,
  StyleSheet,
  View,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Iphone13Frame from "../../Iphone13Frame";
import { NavigationProp, useNavigation } from "@react-navigation/native";
interface TodoProps {
  id: number;
  title: string;
}

export default function Home() {
  const [todo, setTodo] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State to track search query
  const [listTodo, setListTodo] = useState<TodoProps[]>([
    { id: 1, title: "Learning React Native" },
    { id: 2, title: "Designing a UI UX" },
    { id: 3, title: "Implementing features" },
  ]);

  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  function randomId(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      alert("Please type TODO");
      return;
    }
    setListTodo([...listTodo, { id: randomId(4, 100), title: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo ?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setListTodo(listTodo.filter((t) => t.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const filteredTodo = listTodo.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Iphone13Frame>
        {/* header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>TODO app</Text>
        </View>

        {/* form */}
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Type your work here"
            value={todo}
            onChangeText={setTodo}
            style={styles.textInput}
          />
          <Button title="Add" onPress={handleAddTodo} />
        </View>

        {/* search bar */}
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Search ToDo"
            value={searchQuery}
            onChangeText={setSearchQuery} // Update the search query
            style={styles.textInput}
          />
        </View>

        {/* list todo */}
        <View style={styles.listTodoContainer}>
          <FlatList
            data={filteredTodo}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onLongPress={() => alert("long press")}
                  style={styles.listTodo}
                >
                  <View>
                    <Text>{item.title}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <AntDesign
                      name="eyeo"
                      size={24}
                      color="black"
                      onPress={() =>
                        navigation.navigate("detail", {
                          id: item.id,
                          title: item.title,
                        })
                      }
                    />
                    <AntDesign
                      name="close"
                      size={24}
                      color="black"
                      onPress={() => handleDeleteTodo(item.id)}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* navigate */}
        <View>
          <Button
            title="Go to about"
            onPress={() => navigation.navigate("about")}
          />
        </View>
      </Iphone13Frame>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full available space
    justifyContent: "center", // Centers the content vertically in the container
    alignItems: "center", // Centers the content horizontally in the container
    backgroundColor: "#f8dada", // Sets the background color of the container
  },
  headerContainer: {}, // An empty container for the header (can be expanded later if needed)
  headerTitle: {
    backgroundColor: "orange", // Sets the background color of the header to orange
    width: 320, // Sets the width of the header
    height: "auto", // Auto-adjusts the height based on content
    paddingVertical: 15, // Adds vertical padding inside the header
    textAlign: "center", // Centers the text inside the header
    color: "#000", // Sets the text color to black
    fontWeight: "bold", // Makes the text bold
    fontSize: 30, // Sets the font size of the header title to 30
  },
  formContainer: {
    padding: 20, // Adds padding inside the form container
    width: 300, // Sets a fixed width for the form container
    alignItems: "center", // Centers the content horizontally
  },
  listTodoContainer: {
    flex: 1, // Expands to take up the available vertical space
    width: 300, // Sets a fixed width for the container
    alignItems: "center", // Centers the list items horizontally
  },
  textInput: {
    borderBottomWidth: 1, // Adds a bottom border to the text input
    borderColor: "#000", // Sets the color of the bottom border to black
    paddingHorizontal: 10, // Adds horizontal padding inside the text input
    marginBottom: 10, // Adds margin below the text input
    width: 300, // Sets a fixed width for the text input
    height: 50, // Sets a fixed height for the text input
  },
  listTodo: {
    marginBottom: 10, // Adds margin below each todo item
    width: 300, // Sets a fixed width for each todo item
    padding: 10, // Adds padding inside each todo item
    borderWidth: 1, // Adds a border around each todo item
    borderColor: "#ccc", // Sets the color of the border to light gray
    borderRadius: 5, // Rounds the corners of the border slightly
    backgroundColor: "#fff", // Sets the background color of each todo item to white
    alignItems: "center", // Centers the content horizontally inside the todo item
    justifyContent: "space-between", // Distributes space between children inside the todo item
    flexDirection: "row", // Arranges the children vertically inside the todo item
  },
});
