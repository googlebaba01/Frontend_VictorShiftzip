export const isValidJavaScriptVariable = (name) => {
  // Check if name starts with a valid character
  const startsWithValidChar = /^[a-zA-Z_$]/.test(name);
  // Check if the rest of the name contains only valid characters
  const restIsValid = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(name);
  
  return startsWithValidChar && restIsValid;
};
