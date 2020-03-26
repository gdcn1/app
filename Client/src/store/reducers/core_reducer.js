import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
      messages: null
}

export const CoreReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.FETCH_DB_POSTS:{
        const newAr = action.payload.map(val => {return { ...val, key: val.id }})
        return {
          ...state,
          messages: newAr
        }
      }
      default:
        return state
    }
}
