//import seperate reducers to be used by the combined reducer in this file =
import { combineReducers } from "redux";
import authReducer from './authorization'

const appReducer = combineReducers({
  auth: authReducer, 
  // other reducers will funnel into this comibned reducer
})

  export default appReducer