import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from '../Lista/ItemLista';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function Lista() {
  const data = [
    { key: 1, name: 'Minha conta', iconName: 'user' },
    { key: 2, name: 'Geral', iconName: 'cog' },
    { key: 3, name: 'Notificações', iconName: 'notifications' },
    { key: 4, name: 'Personalização', iconName: 'brush' },
    { key: 5, name: 'Segurança', iconName: 'shield' },
    { key: 6, name: 'Idioma', iconName: 'language' },
    { key: 7, name: 'Ajuda', iconName: 'help-circle' },
    { key: 8, name: 'Sobre', iconName: 'information-circle' },
  ];

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'user':
        return <FontAwesome name="user" size={30} color="black" />;
      case 'cog':
        return <Ionicons name="cog" size={30} color="black" />;
      case 'notifications':
        return <Ionicons name="notifications" size={30} color="black" />;
      case 'brush':
        return <Ionicons name="brush" size={30} color="black" />;
      case 'shield':
        return <Ionicons name="shield" size={30} color="black" />;
      case 'language':
        return <Ionicons name="language" size={30} color="black" />;
      case 'help-circle':
        return <Ionicons name="help-circle" size={30} color="black" />;
      case 'information-circle':
        return <Ionicons name="information-circle" size={30} color="black" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={100} color="black" />
      </View>

      <View style={styles.loginArea}>
        <Text style={styles.loginText}>Bem-vindo, usuário!</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              iconName={item.iconName}
              renderIcon={renderIcon}
            />
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
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  loginArea: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    maxHeight: '70%',
  },
});

export default Lista;
