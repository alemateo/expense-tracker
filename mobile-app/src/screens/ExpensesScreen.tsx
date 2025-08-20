// src/screens/ExpensesScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// CORRECCIÓN: Importamos desde la librería correcta
import { SafeAreaView } from 'react-native-safe-area-context';
import mockData from '../../mock-data.js';

const GastoItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemInfo}>
      <Text style={styles.itemComercio}>{item.comercio}</Text>
      <Text style={styles.itemFecha}>{item.fecha}</Text>
    </View>
    <Text style={styles.itemMonto}>${item.monto.toFixed(2)}</Text>
  </View>
);

const ExpensesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mis Gastos</Text>
      <FlatList
        data={mockData}
        renderItem={({item}) => <GastoItem item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    header: { fontSize: 32, fontWeight: 'bold', padding: 20, paddingBottom: 10, color: '#111' },
    itemContainer: { backgroundColor: '#ffffff', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 1 },
    itemInfo: { flexDirection: 'column' },
    itemComercio: { fontSize: 16, fontWeight: '500' },
    itemFecha: { fontSize: 14, color: '#666' },
    itemMonto: { fontSize: 18, fontWeight: 'bold', color: '#2e8b57' },
});

export default ExpensesScreen;