import React, { PureComponent } from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import Style from './Styles/SmartInputStyles'

class SmartInput extends PureComponent {
    static propTypes = {
      placeholder: PropTypes.string,
      autoCapitalize: PropTypes.string,
      handleOnChange: PropTypes.func.isRequired,
      icon: PropTypes.string,
      style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
      editable: PropTypes.bool,
      keyboardType: PropTypes.string,
      spellCheck: PropTypes.bool,
      onFocus: PropTypes.func
    }

    static defaultProps = {
      keyboardType: 'default',
      spellCheck: true,
      editable: true,
      autoCapitalize: 'word',
      placeholder: 'Please Type Here'
    }

    render () {
      return (
        <View style={Style.container}>
          <TextInput
            maxLength={48}
            ref = {this.props.refTag}
            onChange={this.props.handleOnChange}
            style={{ height: 25, borderColor: 'gray', paddingBottom: -222, backgroundColor: 'yellow', width: 310 }}
          />
          <Icon name='check-circle' color='red' size={25} />
        </View>

      )
    }
}

export default SmartInput
