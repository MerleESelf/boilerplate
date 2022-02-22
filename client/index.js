// import react
import React from "react";
import ReactDOM from 'react-dom'
// import provider and store 
import { Provider } from 'react-redux'
import store from './store/index'
 
ReactDOM.render(
    <Provider store={store}>
    <div> Hello!
    </div>
    </Provider>, 
    document.getElementById('app')
)