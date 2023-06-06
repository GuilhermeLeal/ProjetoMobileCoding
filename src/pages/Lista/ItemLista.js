import { StyleSheet, Text, View, Image } from 'react-native';

export  function ListItem(props) { 
    console.log(props)
  return (
    <View style={styles.container}>
        <View >
            <Image 
            source={{uri: props.imagem}}
            style={styles.imagem}/>
        </View>
        <View style={styles.informacao}>
            <Text style={styles.name}> {props.name} </Text>
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

  informacao: {
    justifyContent: 'center'
  },

  imagem: {
    borderRadius: 50,
    backgroundColor: 'white',
    height: 50,
    width: 50,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },

});

export default ListItem;