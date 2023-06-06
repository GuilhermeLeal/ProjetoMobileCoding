import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

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
                <Text style={styles.titulo}>Quais apps deseja ficar por dentro?</Text>
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
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>

                <FlatList
                    data={lista}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.removeButton} onPress={() => removerItem(item.key)}>
                                <Text style={styles.removeButtonText}>Remover</Text>
                            </TouchableOpacity>
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
        backgroundColor: "coral",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
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
        borderColor: "coral",
        borderRadius: 4,
        color: "#fff", // Definindo a cor do texto de entrada
    },
    button: {
        backgroundColor: "coral",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
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
        backgroundColor: "#A4C9FF",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
    },
    itemText: {
        paddingLeft: 10,
        fontSize: 16,
    },
    removeButton: {
        backgroundColor: "#171626",
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
    },
    removeButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});
