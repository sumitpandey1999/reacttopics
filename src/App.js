import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import Toaster from './components/Toaster';
;


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Toaster/>
      </div>
    </Provider>
  );
}

export default App;
