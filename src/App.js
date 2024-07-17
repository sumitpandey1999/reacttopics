import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import CircleOnClick from './components/CircleOnClick';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CircleOnClick />
      </div>
    </Provider>
  );
}

export default App;
