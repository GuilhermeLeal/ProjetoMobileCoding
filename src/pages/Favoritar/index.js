import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';

export default function Info() {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    useEffect(() => {
        // Carregar os itens do banco de dados quando o componente for montado
        carregarItens();
    }, []);

    const carregarItens = () => {
        // Fazer a solicitação GET para obter todos os itens do banco de dados
        axios.get('https://647ea7e1c246f166da8f3d38.mockapi.io/AppsFavoritos')
            .then(response => {
                // Se a solicitação for bem-sucedida, atualizar o estado com os itens retornados
                setLista(response.data);
            })
            .catch(error => {
                // Em caso de erro, trate-o adequadamente
                console.error('Erro ao carregar itens:', error);
            });
    };

    const adicionarItem = () => {
        if (novoItem) {
            const novoItemObj = { texto: novoItem, key: Date.now().toString() };

            // Fazer a solicitação POST para adicionar o item ao banco de dados
            axios.post('https://647ea7e1c246f166da8f3d38.mockapi.io/AppsFavoritos', novoItemObj)
                .then(response => {
                    // Se a solicitação for bem-sucedida, atualize o estado com o novo item
                    setLista([...lista, response.data]);
                    setNovoItem("");
                })
                .catch(error => {
                    // Em caso de erro, trate-o adequadamente
                    console.error('Erro ao adicionar item:', error);
                });
        }
    };

    const removerItem = (key) => {
        const novaLista = lista.filter(item => item.key !== key);
        setLista(novaLista);
    };

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.titulo}>Favorite seus apps preferidos!</Text>
            </View>

            <View style={styles.conteudo}>
                <TextInput
                    style={styles.input}
                    value={novoItem}
                    onChangeText={text => setNovoItem(text)}
                    placeholder="Digite o nome da plataforma..."
                    placeholderTextColor="grey" // Definindo a cor do placeholder
                />
                <TouchableOpacity style={styles.button} onPress={adicionarItem}>
                    <FontAwesome5 style={styles.posicao} name="star-half" size={24} color="white" />
                    <Text style={styles.buttonText}>Favoritar</Text>
                </TouchableOpacity>

                <FlatList
                    data={lista}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <View style={styles.borda}>
                                <TouchableOpacity style={styles.removeButton} onPress={() => removerItem(item.key)}>
                                    <MaterialCommunityIcons name="star-remove" size={28} color="black" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.itemText}>{item.texto}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    conteudo: {
        padding: 20,
    },
    info: {
        
        height: 80,
        paddingTop: 38,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    titulo: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 4,
        color: "black", // Definindo a cor do texto de entrada
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "black",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    item: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: "black",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
    },
    itemText: {
        marginLeft: 20,
        fontSize: 16,
    },

    borda: {
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        padding: 0.5,

    },

    removeButton: {
        marginRight: 5,
        right: 5,
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 30,
    },
    removeButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    posicao: {
        left: 15
    },
});
