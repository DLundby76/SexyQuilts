import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {StripeProvider} from 'react-stripe-elements';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './createStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
  <BrowserRouter>
    <Provider store={store} >
      <StripeProvider
        apiKey='pk_test_sYIvfEtDzXZBYM22NyxDgMLB'
      >
        <App />
    </StripeProvider>
  </Provider>
</BrowserRouter>
),
  document.getElementById('root'));
registerServiceWorker();
