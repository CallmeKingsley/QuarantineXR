import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Styles from './Styles/MessageDisplayStyle'
import PropTypes from 'prop-types'

export default class MessageDisplay extends PureComponent {
   static propTypes = {
     Messages: PropTypes.array
   }

   static defaultProps = {
     Messages: ['this is kingsley', 'this was kingsley']
   }

   render () {
     return this.props.Messages.map((data, key) => {
       return (
         <Message Message={data} key={key} />
       )
     })
   }
}

export class Message extends PureComponent {
  render () {
    return (
      <View style={Styles.container}>
        <Text style={Styles.messageText}>
          {this.props.Message}
        </Text>
        <View style={Styles.iconContainer}>
          <Icon name='edit' color='green' size={18} />
          <Icon name='ban' color='red' size={18} />
        </View>
      </View>
    )
  }
}
