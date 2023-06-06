import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Info() {
    const [lista, setLista] = useState([

    ]);

    const [novoItem, setNovoItem] = useState("");

    const adicionarItem = () => {
        if (novoItem) {
            const novoItemObj = { texto: novoItem, key: Date.now().toString() };
            setLista([...lista, novoItemObj]);
            setNovoItem("");
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
                    <FontAwesome5 style={styles.posicao} name="star-half" size={24} color="black" />
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
        backgroundColor: "white",
    },
    conteudo: {
        padding: 20,
    },
    info: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "#00BFFF",
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
        borderColor: "#00BFFF",
        borderRadius: 4,
        color: "black", // Definindo a cor do texto de entrada
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#00BFFF",
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
        borderColor: "#00BFFF",
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
