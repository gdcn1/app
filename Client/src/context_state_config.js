import React, { useReducer } from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';
import * as CoreReducer from "./store/reducers/core_reducer";
import Routes from './routes';

const ContextState = (props) => {

    const [stateCoin, dispatchCoinReducer] = useReducer(CoreReducer.CoreReducer,
        CoreReducer.initialState)

    const handleGetMessages = (messages) => {
        dispatchCoinReducer(ACTIONS.set_db_posts(messages) )
    }

    const getApiUrl = () => {
        console.log('API!!!!', process.env.REACT_APP_API_ENDPOINT)
        return process.env.REACT_APP_API_ENDPOINT
    }


    return(
      <div>
      <Context.Provider
          value={{
              apiUrl: getApiUrl(),
              messages: stateCoin.messages,
              handleAddMessages: (messages) => handleGetMessages(messages)
          }}>
          <Routes />
      </Context.Provider>
      </div>
    )
}


export default ContextState;
