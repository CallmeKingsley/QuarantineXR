import React, { Component } from 'react'
import { View } from 'react-native'
import Button from '../Components/Button'
import SmartInput from '../Components/SmartInput'
import Styles from './Styles/RootContainerStyles'
import DisplayMessage from '../Components/MessageDisplay'
import UserActions from '../Redux/UserRedux'
import { connect } from 'react-redux'

class RootContainer extends Component {
  constructor (props) {
    super(props)
    this.refTag = React.createRef()
    this.state = {
      message: '',
      stateBool: false,
      messages: ['kingsley Akpan', 'dwayne johnson']
    }
  }

  handleOnPress = () => {
    const newState = this.state.stateBool
    const message = this.state.message  
    this.props.addTodo(message)
    this.refTag.current.clear()
  }

    onHandleOnChange =(event) => {
      const { text } = event.nativeEvent
      this.setState({ message: text })
    }

    render () {
      const returnString = this.state.stateBool ? 'Send' : 'Send'
      return (
        <View style={Styles.container}>
          <SmartInput handleOnChange={this.onHandleOnChange} refTag ={this.refTag} />
          <Button
            text={returnString}
            onPress={this.handleOnPress}
            disable={false}
            style={{ color: 'red', fontSize: 13, display: 'flex', alignSelf: 'center', marginBottom: 10 }}
          />
          <DisplayMessage Messages={this.props.todoList} />
        </View>
      )
    }
}

const mapStateToProps = state => ({
  todoList: state.User.todoList
})

const mapDispatchToProps = dispatch => ({
  addTodo: (item) => dispatch(UserActions.addTodo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
