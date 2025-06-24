const isInList = (currentString, list, isStrict) => {
  if (isStrict) {
    return list.some((item) => currentString === item);
  }
  return list.some((item) => currentString.includes(item.toLowerCase()));
};

export default isInList;
