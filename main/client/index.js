import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducers/productsReducer';


// need to import store
const store = configureStore({ reducer: reducer });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <Provider store={store}>
    <App />
  </Provider>
)
