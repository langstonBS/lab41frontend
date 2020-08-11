export const initialState = {
cereal:[]
  }

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CEREAL':
      return { ...state, cereal: action.payload }
    default:
      return state;
  }
}