import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: 24,
    
  },
  

  emoji: {
    fontSize: 50,
    textAlign: 'center',
  },

  welcome: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginTop: 10,
  },

  email: {
    textAlign: 'center',
    color: colors.primary,
    marginTop: 6,
  },

  subtitle: {
    textAlign: 'center',
    color: colors.textLight,
    marginTop: 6,
  },
    title: {
    textAlign: 'center',
    color: colors.text,
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },

  buttonDanger: {
    backgroundColor: colors.danger,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonDangerText: {
    color: colors.white,
    fontWeight: '700',
  },
    logo: {
  width: 175,
  height: 175,
  resizeMode: 'contain',
  marginBottom: 20,
  alignSelf: 'center',
  marginTop: -200,
}

});