import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react'
export default function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Name');
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Hello: {name}
                </Text>
                <TextInput
                    multiline={true}
                    onChangeText={(value) => setName(value)}
                    style={styles.text_input}
                />
            </View>
            <View>
                <Text style={styles.text}>
                    {count}
                </Text>
                <Button title='Increase' onPress={()=> setCount(count + 1)}/>
                <Button title='Decrease' onPress={()=> setCount(count - 1)}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        backgroundColor: '#e03657',
    },
    text_input: {
        borderColor: 'green',
        borderWidth: 1,
        padding: 10,
        width: 150
    }
});
