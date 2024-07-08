
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import FormValidation from './components/FormValidation';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <FormValidation/>
    </div>
    </Provider>
  );
}

export default App;
