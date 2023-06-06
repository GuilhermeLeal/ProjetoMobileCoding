import { StyleSheet, Text, View } from 'react-native';

export function ListItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{props.renderIcon(props.iconName)}</View>
      <View style={styles.informacao}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
  },
  iconContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informacao: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default ListItem;
