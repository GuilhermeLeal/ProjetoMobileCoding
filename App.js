import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, } from 'react-native';
import React, { useState } from "react"
import Axios from "axios";
import Cabecalho from "./src/componentes/Cabecalho";
import ItensListados from './src/componentes/ItensListados';
import AdicionarItem from './src/componentes/AdicionarItem';

export default function App() {
  
  const[lista, setLista] = useState([
  { texto: "comprar café", key: '1'},
  { texto: "criar um app", key: '2'},
  { texto: "jogar video game", key: '3'},
  ]);

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key != key);
      }
    )
  }

  const submeterInformacao = (texto) => {
    setLista((prevLista) => {
      return [
        { texto: texto, key: Math.random().toString() },
        ...prevLista
      ];
    })
  }

  return (
    
    <View style={styles.container}>

    <Cabecalho />

    <View style={styles.conteudo}>
      
     <AdicionarItem funcao={submeterInformacao}/>

      <View style={styles.estiloLista}>
        <FlatList
        data={lista}
        renderItem={({ item}) => (
          <ItensListados props={item} funcao= {apertarItem}/>
        )}
        />

      </View>

    </View>

    </View>
  );
}
 
  
 const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#e0e5e5',
    },
    conteudo:{
      padding: 40,
    },
 
  });
