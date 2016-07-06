import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// ------------------------------------
// Actions
// ------------------------------------
export const increment = () => {
  return (dispatch, getState) => {
    dispatch(increase())
  }
}

export const decrement = () => {
  return (dispatch, getState) => {
    dispatch(decrease())
  }
}

export const increase = createAction(INCREMENT)
export const decrease = createAction(DECREMENT)

export const actions = {
  increment,
  decrement
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [INCREMENT]: (state, action) => ({
    ...state,
    count: state.count + 3
  }),
  [DECREMENT]: (state, action) => ({
    ...state,
    count: state.count - 1
  })
}, {
  count: 0
})
