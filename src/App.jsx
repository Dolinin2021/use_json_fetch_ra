import {REACT_APP_DATA_URL} from './data/data';
import {REACT_APP_ERROR_URL} from './data/data';
import {REACT_APP_LOADING_URL} from './data/data';

import CustomHook from './components/CustomHook';
import './App.css';

function App() {
  return (
    <div>
      <CustomHook url={REACT_APP_DATA_URL} />
      <hr />
      <CustomHook url={REACT_APP_ERROR_URL} />
      <hr />
      <CustomHook url={REACT_APP_LOADING_URL} />
      <hr />
    </div>
  );
}

export default App;
