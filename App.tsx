import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Iphone13Frame from "./Iphone13Frame"; // Adjust the path if needed

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "Bao 1", age: 10 },
    { id: 2, name: "Bao 2", age: 11 },
    { id: 3, name: "Bao 3", age: 12 },
    { id: 4, name: "Bao 4", age: 13 },
    { id: 5, name: "Bao 5", age: 14 },
    { id: 6, name: "Bao 6", age: 15 },
    { id: 7, name: "Bao 7", age: 16 },
    { id: 8, name: "Bao 8", age: 17 },
    { id: 9, name: "Bao 9", age: 18 },
    { id: 10, name: "Bao 10", age: 19 },
  ]);

  const handleLogin = () => {
    Alert.alert("Login Info", `Username: ${username}, Password: ${password}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Iphone13Frame>
        <View>
          <Text style={styles.title}>Welcome to my App!</Text>
          <Button title="Click me" onPress={() => alert("Hello World !")} />
        </View>
        <View style={loginStyles.loginForm}>
          <Text>Login page</Text>
          <TextInput
            style={loginStyles.textInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={loginStyles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleLogin}>
            <Text style={loginStyles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={listStudentStyles.listStudentContainer}>
          <Text>Student List</Text>
          <FlatList
            style={listStudentStyles.studentsList}
            data={students}
            keyExtractor={(item) => item.id + "="}
            renderItem={(data) => {
              return (
                <View key={data.item.id}>
                  <Text>{data.item.name}</Text>
                  <Text>{data.item.age} years old</Text>
                </View>
              );
            }}
          />
          {/* <ScrollView>
            {students.map((student) => (
              <View key={student.id}>
                <Text>{student.name}</Text>
                <Text>{student.age} years old</Text>
              </View>
            ))}
          </ScrollView> */}
        </View>
      </Iphone13Frame>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
    backgroundColor: "#f8dada",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
    backgroundColor: "#f8dada",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loginForm: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  loginButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
const listStudentStyles = StyleSheet.create({
  listStudentContainer: {
    flex: 1,
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
    backgroundColor: "#f8dada",
    borderColor: "#000",
    borderWidth: 1,
    borderEndColor: "red",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 50,
    borderStartEndRadius: 20,
    borderEndStartRadius: 20,
  },
  studentsList: {
    marginTop: 20,
    padding: 10,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
export default App;
