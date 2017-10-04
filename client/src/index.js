import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {StripeProvider} from 'react-stripe-elements';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
  <BrowserRouter>
    <StripeProvider
      apiKey='pk_test_sYIvfEtDzXZBYM22NyxDgMLB'
    >
    <App />
</StripeProvider>
</BrowserRouter>
),
  document.getElementById('root'));
registerServiceWorker();
