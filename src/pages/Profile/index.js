import React from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/130711658?v=4' }}
                    style={styles.profilePicture}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
});

export default ProfileScreen;