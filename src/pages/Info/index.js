import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from '../Lista/ItemLista';

export function Lista() {
  const data = [
    { key: 1, name: 'Davy Woolley', imagem: 'https://forbes.com.br/wp-content/uploads/2023/01/LIFE_Kobe_Bryant_celebra-768x512.jpg' },
    { key: 2, name: 'GuizGuizess', imagem: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/12/316500764-595935365633385-649521050041578142-n.jpg' },
    { key: 3, name: 'Lucas Nobre', imagem: 'https://i.em.com.br/UCf-MiUZI1xTxEqcWzmkmSoYzVY=/820x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/11/21/1423434/neymar_1_32099.jpg' },
    { key: 4, name: 'Leleo', imagem: 'https://tntsports.com.br/__export/1680798778827/sites/esporteinterativo/img/2023/04/06/messi-psg-gettyimages-1430750043.jpg_554688468.jpg' },
    { key: 5, name: 'Diogostoso', imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-LGhdtcRG8Lk8LXe8GrEwzdRV_nim8jRsWfzsQPLMJB0v0nDkVqHJhb9fergRTYpzAdNq9Ee0GEnGvML7MTk5OyHGqUgTz-Kdhu26IL8T4YjU8sOBiYjVAwpWzCQIJvas65pPy-Z2D191646JAuJqc2_a2uRvZV9LCZRvIWZ3M3cyosSCKjNcmoo6WA/w640-h426/marco%20reus%20alemanha.jpg' },
  
  ]
  return (

    <FlatList
    data={data}
    renderItem={({item}) => (
        <ListItem name={item.name} funcao={item.funcao} imagem={item.imagem}/>
        )}
        keyExtractor={item => item.key}
        style={styles.container}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default Lista ;
