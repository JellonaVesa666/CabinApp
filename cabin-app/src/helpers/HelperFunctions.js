export const ChangeState = (State, initValues, newValue, property, index1, index2) => {
  if (!index1 && !index2)
    State({ ...initValues, [property]: newValue })
  else if (index2 === null || index2 === undefined)
    State(initValues => ({
      ...initValues, [index1]: { ...initValues[index1], [property]: newValue },
    }));
  else
    State({
      ...initValues,
      [index1]: {
        ...initValues[index1],
        [index2]: {
          ...initValues[index1][index2],
          [property]: !newValue
        },
      },
    });
}

export const ValidateElement = (element, type) => {
  if (element === undefined)
    return `ERROR ! missing ${type.toString()}`;

  return element.toUpperCase();
}