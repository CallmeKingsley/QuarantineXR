import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import Styles from './Styles/ButtonStyles'

export default class MyButton extends React.PureComponent {
    static propTypes = {
      text: PropTypes.string,
      onPress: PropTypes.func.isRequired,
      style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      disable: PropTypes.bool
    }

    static defaultProps = {
      text: 'my Button',
      style: {},
      disable: false
    }

    state = {
      toggleState: false
    }

    getToggleStatus () {
      const { style } = this.props
      const toggleBackgroundColor = this.state.toggleState ? [Styles.backgroundbutton, Styles.activeBackground] : [Styles.backgroundbutton, Styles.deactiveBackground]

      return Array.isArray(style) ? [...toggleBackgroundColor, ...style] : [...toggleBackgroundColor, style]
    }

    handleOnPress=() => {
      const { disable, onPress } = this.props
      const oldtoggleState = this.state.toggleState

      if (!disable) {
        this.setState({
          toggleState: !oldtoggleState
        })
        onPress()
      }
    }

    render () {
      const { text, style } = this.props
      return (
        <TouchableOpacity style={this.getToggleStatus()} onPress={this.handleOnPress}>
          <Text style={[style, Styles.button]}> {text} </Text>
        </TouchableOpacity>
      )
    }
}
