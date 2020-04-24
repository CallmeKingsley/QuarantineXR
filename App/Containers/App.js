import React, { PureComponent } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import RootContainer from './RootContainer'
import { Provider } from 'react-redux'
import getStore from '../Redux'

// create our store
const { store, persistor } = getStore()

class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
