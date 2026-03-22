import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },

  subtitle: {
    fontSize: 15,
    color: colors.textLight,
    marginTop: 6,
  },
});