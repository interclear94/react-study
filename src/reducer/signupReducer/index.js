// 리듀서 함수
// 초기값을 기본으로 할당

// state
// 기본값을 할당
// 초기에는 기본값이 사용된다.

const initialState = {
  users: []
}

const reducer = (state = initialState, action) => {
  // state 초기에는 기본값으로 할당한 initialState가 할당되고
  // 상태를 업데이트한 이후에는 이전 상태값을 할당해준다.
  // reducer 꼭 반환 값이 있어야한다.

  const { type, payload } = action;
  switch(type){
    case "signup":
      console.log({...state, users:[...state.users, payload]})
      return {...state, users: [...state.users, payload]}
    default:
      return state
  }
}

export default reducer;