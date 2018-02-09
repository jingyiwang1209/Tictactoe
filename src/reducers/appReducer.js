const INITIAL_STATE=Array(9).fill(null);
export default (state = INITIAL_STATE, action)=>{

  switch(action.type){
    case "updateSquares":
      let newState = state.slice(0);
      if(action.payload.isNextO){
        newState[action.payload.index]= 'O';
      }else{
        newState[action.payload.index]= 'X';
      }

      return newState;

  }
  return state;
}