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
import Iphone13Frame from "./Iphone13Frame"; // Adjust the path if needed

interface TodoProps {
  id: number;
  title: string;
}

const App = () => {
  const [todo, setTodo] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State to track search query
  const [listTodo, setListTodo] = useState<TodoProps[]>([
    { id: 1, title: "Learning React Native" },
    { id: 2, title: "Designing a UI" },
    { id: 3, title: "Implementing features" },
  ]);

  function randomId(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      alert("Please type TODO");
      return;
    }
    setListTodo([...listTodo, { id: randomId(3, 100), title: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Canceled Todo"),
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
  ); // Filter the todos based on the search query

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
            placeholder="Nhập việc cần làm"
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
            data={filteredTodo} // Use filteredTodos instead of listTodo
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onLongPress={() => alert("long press")}
                  onPress={() => handleDeleteTodo(item.id)}
                  style={styles.listTodo}
                >
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Iphone13Frame>
    </View>
  );
};

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
  },
});

export default App;
