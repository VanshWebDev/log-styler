/**
 * Prints the specified text to the console with applied CSS styles.
 * 
 * @param {Object} filteredObj - An object containing filtered CSS style properties.
 * @param {string} text - The text to be styled and logged to the console.
 * @function printOnConsole
 */
let printOnConsole = (filteredObj, text) => {
  // Construct the style string from the filtered CSS style object
  let styleString = "";
  for (let prop in filteredObj) {
    styleString += `${prop}: ${filteredObj[prop]};`;
  }

  // Log the text to the console with the applied CSS styles
  console.log(`%c${text}`, styleString);
};

export default printOnConsole;
