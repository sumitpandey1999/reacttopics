import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import TrelloBoard from './components/TrelloBoard';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
  <TrelloBoard/>
    </div>
    </Provider>
  );
}

export default App;
