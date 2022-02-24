import '../public/style.css'
import React from "react";
import ReactDOM from 'react-dom' 
import { Provider } from 'react-redux'
import store from './store/index'
 
ReactDOM.render(
    <Provider store={store}>
    <div> 
    </div>
    </Provider>, 
    document.getElementById('app')
)