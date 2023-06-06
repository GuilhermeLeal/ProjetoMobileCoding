import React from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
    const discounts = [
        { key: 1, title: 'Jogo 1', discount: '50%', iconName: 'gamepad' },
        { key: 2, title: 'Jogo 2', discount: '70%', iconName: 'gamepad' },
        { key: 3, title: 'Jogo 3', discount: '30%', iconName: 'gamepad' },
        // Adicione outros descontos aqui, se necessário
    ];

    const renderDiscount = ({ item }) => {
        return (
            <TouchableOpacity style={styles.discountContainer}>
                <FontAwesome name={item.iconName} size={30} color="black" />
                <Text style={styles.discountTitle}>{item.title}</Text>
                <Text style={styles.discountText}>{item.discount} OFF</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/130711658?v=4' }}
                    style={styles.profilePicture}
                />
            </View>

            <View style={styles.discountsContainer}>
                <Text style={styles.discountsTitle}>Plataforma favorita 1</Text>
                <FlatList
                    data={discounts}
                    renderItem={renderDiscount}
                    keyExtractor={(item) => item.key.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.discountsContainer}>
                <Text style={styles.discountsTitle}>Plataforma favorita 2</Text>
                <FlatList
                    data={discounts}
                    renderItem={renderDiscount}
                    keyExtractor={(item) => item.key.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.discountsContainer}>
                <Text style={styles.discountsTitle}>Plataforma favorita 3</Text>
                <FlatList
                    data={discounts}
                    renderItem={renderDiscount}
                    keyExtractor={(item) => item.key.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
    },
    discountsContainer: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    discountsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    discountContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    discountTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    discountText: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ProfileScreen;
