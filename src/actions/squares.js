export const handleClick = (index, isNextO) => {
  return {
    type: "updateSquares",
    payload: {
      index: index,
      isNextO: isNextO
    }
  };
};

export const travelBack = (stepTracker) =>{
    return {
        type:'travelBack',
        payload: stepTracker
    };
}