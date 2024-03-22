export const getStringifiedDate = (input: string) => {
  const numericDate = parseInt(input);
  const date = new Date(numericDate);
  const month = addLeadingZeroIfNecessary(date.getMonth() + 1);
  const day = addLeadingZeroIfNecessary(date.getDate());
  const year = addLeadingZeroIfNecessary(date.getFullYear());
  return `${month}/${day}/${year}`;
}

export const addLeadingZeroIfNecessary = (input: number) => {
  if (input > 9) {
    return `${input}`;
  }
  return `0${input}`;
}