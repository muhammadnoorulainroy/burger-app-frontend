const initialState = false;

const isLoggedIn = (state=initialState, action) =>{
  switch(action.type){
    case 'LOGIN': return state = true;
    case 'SIGN_OUT': return state = false;
    default: return state;
  }
}

export default isLoggedIn;
