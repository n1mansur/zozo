const ADD_ORDER = 'ADD_ORDER'

export default function basketReducer(state = [], action) {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.el]
    default:
      return state
  }
}

export const addOrderActionCreate = (el) => {
  return { type: ADD_ORDER, el }
}
