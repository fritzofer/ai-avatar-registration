import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
    color: '#3949AB',
  },
  input: {
    height: 50,
    borderColor: '#D0D0D0', 
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16, 
    paddingLeft: 16,
    fontSize: 16,
    color: '#333', 
  },
  button: {
    backgroundColor: '#3949AB', 
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  alreadyAccountContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadyAccountText: {
    fontSize: 14,
    color: '#7B7B7B',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: 'white', 
    borderColor: '#3949AB', 
    borderWidth: 1, 
    width: '100%',
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#3949AB',
    fontSize: 16,
    fontWeight: '600',
  },
  logo: {
    width: 60, 
    height: 60, 
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 50, 
  },
});

export default styles;
