/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  backgroundColor: string;
};

export const CustomButton = ({backgroundColor}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor}]}>
      <Text style={[styles.buttonText]}>Buy tickets</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
