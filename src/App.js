import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import TicTacToe from './components/TicTacToe';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TicTacToe />
      </div>
    </Provider>
  );
}

export default App;
