const initialSquare =Array(9).fill(null);
const INITIAL_STATE = [
 {
  squares:initialSquare,
  stepTracker:0
 }
];

export default (state = INITIAL_STATE, action)=>{

  switch(action.type){
    case "updateSquares":
      let latest = state[state.length - 1];
      let newSquare = latest.squares.slice(0);
      if(action.payload.isNextO){
        newSquare[action.payload.index]= 'O';
      }else{
        newSquare[action.payload.index]= 'X';
      }
      let newsStepTracker = latest.stepTracker + 1;

      let newState = state.concat([{
        squares:newSquare,
        stepTracker:newsStepTracker
      }]);
      return newState;

    case "travelBack":
      let stepTracker = action.payload;
      let travelTo = state.filter((item)=>{
         return item.stepTracker == stepTracker;
      });
      return state.concat(travelTo);
  }
  return state;
}