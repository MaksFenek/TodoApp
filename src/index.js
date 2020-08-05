// ==== React imports =====
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// ==== Redux imports =====
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './_Reducers';

// ==== Components imports ====
import App from './App';

// ==== Style imports
import './Styles/index.scss';

// Creating a new Redux store with rootReducer
const store = createStore(rootReducer);

ReactDOM.render(
  // Creating a provider for redux store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
