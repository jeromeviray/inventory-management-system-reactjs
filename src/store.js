import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './service/redux/reducers'

import thunk from 'redux-thunk'
import { responsiveStoreEnhancer } from 'redux-responsive'

export default createStore(reducers, compose(responsiveStoreEnhancer, applyMiddleware(thunk)))
