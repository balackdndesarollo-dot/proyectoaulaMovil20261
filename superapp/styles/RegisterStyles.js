import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },

  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },

  title: {
    fontSize: 34,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 1,
  },

  subtitle: {
    color: colors.textLight,
    marginTop: 6,
    fontSize: 15,
    letterSpacing: 0.5,
  },

  form: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
  },

  label: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 6,
    letterSpacing: 1,
  },
logo: {
  width: 180,
  height: 180,
  resizeMode: 'contain',
  alignSelf: 'center',

  marginBottom: -60, // 🔥 acerca el logo al texto

  shadowColor: '#E8A020',
  shadowOpacity: 0.8,
  shadowRadius: 12,
  elevation: 10,
},
});