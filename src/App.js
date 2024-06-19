
import './App.css';
// import DebouncingPractice from './components/DebouncingPractice';
import { Provider } from 'react-redux';
import store from './utils/store';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <DebouncingPractice/> */}
     <LiveChat/>
    </div>
    </Provider>
  );
}

export default App;
