export const ChangeState = (State, newValue, property, index1, index2) => {
  if (index1 === undefined && index2 === undefined) {
    State((prevState) => ({ ...prevState, [property]: newValue }))
  }
  else if (index2 === null || index2 === undefined) {
    State((prevState) => ({
      ...prevState, [index1]: { ...prevState[index1], [property]: newValue },
    }));
  }
  else {
    State((prevState) => ({
      ...prevState,
      [index1]: {
        ...prevState[index1],
        [index2]: {
          ...prevState[index1][index2],
          [property]: newValue
        },
      },
    }));
  }
}

export const ValidateElement = (element, type) => {
  if (element === undefined)
    return `ERROR ! missing ${type.toString()}`;

  return element.toUpperCase();
}