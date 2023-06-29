export const ChangeState = (Hook, initValues, newValue, property, index1, index2) => {
  if (index2 === null || index2 === undefined)
    Hook({
      ...initValues,
      [index1]: { ...initValues[index1], [property]: newValue },
    });
  else
    Hook({
      ...initValues,
      [index1]: {
        ...initValues[index1],
        [index2]: {
          ...initValues[index1][index2],
          [property]: !newValue
        },
      },
    });
  console.log(initValues);
}