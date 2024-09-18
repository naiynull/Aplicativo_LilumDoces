import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors'; // Se já tiver um arquivo de cores

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE7E0', // Baseado no design do fundo claro da imagem
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.principal || '#C94F5C', // Cor primaria baseada no arquivo de cores
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#C94F5C',
  },
  cakeItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 16,
    width: 200,
  },
  cakeImage: {
    width: '100%',
    height: 150,
  },
  cakeInfo: {
    padding: 10,
  },
  cakeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C94F5C',
  },
  cakePrice: {
    fontSize: 14,
    color: '#333',
  },
  cakeRating: {
    fontSize: 12,
    color: '#666',
  },
});
