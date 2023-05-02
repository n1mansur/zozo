const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'
const CLEAR_ALL = 'CLEAR_ALL'
const MINUS = 'MINUS'
const PLUS = 'PLUS'

export default function basketReducer(state = [], action) {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.el]
    case DELETE_ORDER:
      return state.filter((old) => old.id != action.el.id)
    case CLEAR_ALL:
      return []
    case MINUS:
      return state.map((old) => {
        return old.id == action.el.id
          ? { ...old, count: old.count - 1 }
          : old
      })

    case PLUS:
      return state.map((old) => {
        return old.id == action.el.id
          ? { ...old, count: old.count + 1 }
          : old
      })
    default:
      return state
  }
}

export const addOrderActionCreate = (el) => {
  return { type: ADD_ORDER, el }
}
export const deleteOrderActionCreate = (el) => {
  return { type: DELETE_ORDER, el }
}
export const clearAllOrderActionCreate = (orders) => {
  return { type: CLEAR_ALL, orders }
}
export const minusActionCreate = (el) => {
  return { type: MINUS, el }
}
export const plusActionCreate = (el) => {
  return { type: PLUS, el }
}
