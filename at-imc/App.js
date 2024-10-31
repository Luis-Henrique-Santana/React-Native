import {Text, View, StyleSheet, TextInput, Button, Image, Pressable } from "react-native";
import {useState} from 'react';


function Foto(){
  let img ='https://aps.bvs.br/apps/calculadoras/img/bmi_girls_perc_5-19_exp.png';

  return(

    <Image
    source={{ uri:img }}
    style={{width:150, height:150, alignSelf:'center'}}
    />

  )
}

export default function App(){

const [numero1, setNumero1] = useState(0);

const [numero2, setNumero2] = useState(0);

const [resultado, setResultado] = useState('');

const calcular = () => {

const res = numero1 / (numero2*numero2);
if(res<18.5){
  setResultado ('Baixo peso')
}

else if(res>18.5 && res<24.9){
  setResultado ('Peso normal')
}

else if(res>25 && res<29.9){
  setResultado ('Sobre peso')
}

else if(res>30 && res<34.9){
  setResultado ('Obesidade grau I')
}

else if(res>35 && res<39.9){
  setResultado ('besidade grau II')
}

else if(res>40){
  setResultado ('besidade grau III')
}


}
  return(
 
<View style = {styles.container}>
  <Text style = {styles.titulo}>CALCULADORA DE IMC</Text>

<Foto />

<TextInput
style = {styles.input}
  placeholder = "digite o peso (KG)"
  onChangeText={num => setNumero1(num)}
/>
<TextInput
style = {styles.input}
  placeholder = "digite a altura (M)" 
  onChangeText={num => setNumero2(num)}/>

<Pressable style = {styles.pressable} onPress={calcular}>
  <Text style = {{fontSize: 20}}>
    calcular
  </Text>
</Pressable>
<Text style ={styles.texto}>
  {resultado}
</Text>
</View>
  );
}


const styles = StyleSheet.create({
  container:{ 
    flex: 1,
},
titulo: {
  fontSize: 23,
  color: 'Red',
  alignSelf: 'Center',
  marginTop: 15,
},

input: {
  height: 45,
  borderWidth:1,
  borderColor: "#222",
  margin: 15,
  fontSize:14,
  padding:10,
},

pressable: {
  height: 45,
  borderWidth:5,
  borderColor: "#222",
  margin: 15,
  fontSize:35,
  textAlign: 'center',
  
  backgroundColor:'yellow',


},

texto: {
  textAlign: "center",
  fontSize: 25,
  padding: 20,
}
});