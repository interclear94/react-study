const initialState = {
  login : false
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case "LOGIN":
      return {...state, login: true}
    case "LOGOUT":
      return {...state, login: false}
    default :
      return state;
  }
}

export default reducer;