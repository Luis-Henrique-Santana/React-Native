import { Component, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from
'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
export default function Form({route}) {
const [id, setId] = useState(route.params?.id)
const [newTitle, setNewTitle] = useState(route.params?.title)
const [newDescription, setNewDescription] =
useState(route.params?.description)

const navigation = useNavigation();

const salvarTarefa = async () => {
const body = JSON.stringify({title: newTitle, description:
newDescription})

if (id !== undefined){
const response = await api.put(`/tasks/${id}`, body, {headers:
{'Content-Type': 'application/json'}});
await route.params?.atualizarLista()
}
else{
const response = await api.post('/tasks', body, {headers:
{'Content-Type': 'application/json'}});
await route.params?.atualizarLista()
}

navigation.goBack()
}

return (
<View>
<TextInput
style={styles.input}
defaultValue={route.params?.title}
onChangeText={(text)=> setNewTitle(text)}
/>

<TextInput
style={styles.input}
defaultValue={route.params?.description}
onChangeText={(text)=> setNewDescription(text)}
/>

<Button title="Salvar" onPress={salvarTarefa} />

</View>
);
}

const styles = StyleSheet.create({
input:{
width: 350,
height: 40,
borderColor: '#DDD',
borderWidth: 1,
padding: 10,
backgroundColor: '#FFF',
margin: 4,
}
});