import { StyleSheet, Text, View, FlatList } from 'react-native';
import  Header  from "../../components/Header"
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: "Boleto da Luz",
    value: '32,52',
    date: '17/01/2024',
    type: 0 //despesa
  },
  {
    id: 2,
    label: "Recebimento",
    value: '2563,21',
    date: '21/01/2024',
    type: 1 
  },
  {
    id: 3,
    label: "Boleto de Agua",
    value: '17,52',
    date: '12/01/2024',
    type: 0 //despesa
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Kennedy Tomazete"/>
      <Balance saldo="9.521,12" gastos="-125,33"/>
      <Actions/>
      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item)=> String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
