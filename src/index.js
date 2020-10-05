import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './configStore/store'

//import {setdata} from './action/postaction'

import App from './App';

const store=configureStore()

const jsx=(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  jsx,
  document.getElementById('root')
);




