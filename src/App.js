
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import ImprovedAccordian from './components/ImprovedAccordian';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
<ImprovedAccordian/>
    </div>
    </Provider>
  );
}

export default App;
