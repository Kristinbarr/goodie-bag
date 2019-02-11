import axios from 'axios'

const initialState = {
  candyList: []
}

// ACTION TYPES
const GET_CANDIES = 'GET_CANDIES'

// ACTION CREATORS


// THUNK CREATOR
export const getCandies = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:1337/api/candies')
    console.log(res)
    dispatch({
      type: GET_CANDIES,
      payload: res.data
    })
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      console.log(action)
      return { ...state, candyList: action.payload};
    default:
      return state
  }
}

export default rootReducer
