import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  backgroundbutton: {
    display: 'flex',
    borderColor: 'green',
    borderRadius: 33,
    padding: 10,
    width: 150
  },

  activeBackground: {
    backgroundColor: 'gray'
  },

  deactiveBackground: {
    backgroundColor: 'yellow'
  },

  button: {
    display: 'flex',
    alignSelf: 'center'
  }
})
