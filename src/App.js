import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import AdvanceTrelloBoard from './components/AdvanceTrelloBoard';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AdvanceTrelloBoard />
      </div>
    </Provider>
  );
}

export default App;
