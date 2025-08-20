// src/screens/DashboardScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos los iconos

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.content}>
        <View style={styles.card}>
          <Icon name="wallet-outline" size={30} color="#007AFF" />
          <Text style={styles.cardTitle}>Gasto Total (Mes)</Text>
          <Text style={styles.cardValue}>$5,490.50</Text>
        </View>
        <View style={styles.card}>
          <Icon name="card-outline" size={30} color="#34C759" />
          <Text style={styles.cardTitle}>Próximo Límite</Text>
          <Text style={styles.cardValue}>Restan $4,509.50</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { fontSize: 32, fontWeight: 'bold', padding: 20, color: '#111' },
  content: { paddingHorizontal: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 5,
  },
});

export default DashboardScreen;