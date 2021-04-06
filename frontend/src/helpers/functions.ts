export const nestedSort = (prop1: any, prop2: any = null, direction = "asc") => (
  first: [],
  second: []
) => {
  const a = prop2 ? first[prop1][prop2] : first[prop1],
    b = prop2 ? second[prop1][prop2] : second[prop1],
    sortOrder = direction === "asc" ? 1 : -1;
  return a < b ? -sortOrder : a > b ? sortOrder : 0;
};
