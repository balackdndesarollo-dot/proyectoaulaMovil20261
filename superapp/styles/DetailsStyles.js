import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 40,
    textAlign: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginTop: 10,
  },

  subtitle: {
    textAlign: 'center',
    color: colors.textLight,
    marginTop: 6,
  },

});