export const handleClick = (index, isNextO) => {
  return {
    type: "updateSquares",
    payload: {
      index: index,
      isNextO: isNextO
    }
  };
};