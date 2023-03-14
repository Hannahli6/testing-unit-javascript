function capitalize(string) {
  if(/^[^a-zA-Z0-9]+$/.test(string)|| /^[0-9]+$/.test(string)){
    return "no valid characters"
  }
  for (let i = 0; i < string.length; i++) {
    if (/^[a-zA-Z]+$/.test(string[i])) {
      return (
        string.slice(0, i) +
        string.charAt(i).toUpperCase() +
        string.slice(i + 1)
      );
    }
  }
}
export default capitalize;
