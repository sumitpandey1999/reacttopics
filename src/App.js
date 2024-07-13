import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import CrudOperation from './components/Crud Operation/CrudOperation';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
    <CrudOperation/>
      </div>
    </Provider>
  );
}

export default App;
