
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import CakeContainer from './components/CakeContainer';
import HookCakeContainerWithPayload from './components/HookCakecontainerWithpayload';
import UserContainer from './components/UserContainer';
import IceCreamContainerWithNumber from './components/IceCreamContainerWithNumber';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <HookCakeContainerWithPayload />
        <IceCreamContainerWithNumber />
        <HooksIcecreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
