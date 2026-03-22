import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const components = StyleSheet.create({

  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,

    borderWidth: 1.5,
    borderColor: colors.glow,

    shadowColor: colors.glow,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
    width: '100%',
    height: 500,
  },

  input: {
    backgroundColor: colors.inputBg,
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,

    borderWidth: 1.5,
    borderColor: colors.border,
  },

  inputFocused: {
    borderColor: colors.glow,

    shadowColor: colors.glow,
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 6,
  },

  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 10,

    borderWidth: 1.5,
    borderColor: colors.glow,

    shadowColor: colors.glow,
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },

  buttonText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 17,
    letterSpacing: 0.5,
  },

  buttonSecondary: {
    marginTop: 14,
    alignItems: 'center',
  },

  buttonSecondaryText: {
    color: colors.primaryDark,
    textDecorationLine: 'underline',
    fontWeight: '700',
  },

});