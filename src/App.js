import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import DragAndDrop from './components/DragAndDrop';






function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DragAndDrop />
      </div>
    </Provider>
  );
}

export default App;
