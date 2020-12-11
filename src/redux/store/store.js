import {createStore, applyMiddleware} from 'redux'

// createStore is used to create the store
// appliymiddlware is used to connect thunk

import {composeWithDevtools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//when we will mention only folder name then it will consider the inde file
import rootReducer from '../reducers'


const initialState = {}
const middleware = [thunk] 
// thunk is middl ware specification.

const store = createStore(rootReducer, initialState, composeWithDevtools(applyMiddleware(...middleware)))

export default store;