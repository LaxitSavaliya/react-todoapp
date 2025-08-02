import './App.css'
import Todo from './components/todo'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <h1>Todo List</h1>
        <Todo />
      </Provider>
    </>
  )
}

export default App
