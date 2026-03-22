import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },

  header: {
    marginBottom: 20,
  },

  emoji: {
    fontSize: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text,
  },

  subtitle: {
    color: colors.textLight,
    marginTop: 4,
  },

});