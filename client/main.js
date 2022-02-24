import '../public/style.css'
import React from "react";
import ReactDOM from 'react-dom' 
import { Provider } from 'react-redux'
import store from './store/index'
import Navbar from './components/Navbar'
import Routes from './components/Routes'
 
ReactDOM.render(
    <Provider store={store}>
    <div> 
        <Navbar /> 
        <Routes /> 
    </div>
    </Provider>, 
    document.getElementById('app')
)