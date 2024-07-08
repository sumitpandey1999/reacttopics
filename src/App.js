
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import Accordian from './components/Accordian';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Accordian/>
    </div>
    </Provider>
  );
}

export default App;
