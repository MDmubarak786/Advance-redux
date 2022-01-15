const getItemFromLocalStorage = JSON.parse(localStorage.getItem('userData'))
const username = getItemFromLocalStorage?.username || ''
const userEmail = getItemFromLocalStorage?.userEmail || ''
const isAuth = getItemFromLocalStorage?.isAuth || false

const initialState = {
  data: {
    userEmail: userEmail,
    username: username,
    password: '',
    isAuth: isAuth,
  },
}

export const LoginAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { data: action.payload }
    default:
      return state
  }
}
