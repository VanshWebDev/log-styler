/**
 * Filters out unsupported CSS properties from the provided style object.
 * 
 * @param {Object} styleObj - An object containing CSS style properties.
 * @returns {Object} An object containing filtered CSS style properties.
 * @function filterObj
 */
let filterObj = (styleObj) => {
  let transformedStyle = {}; // Object to store transformed keys and values

  // Loop through each key in the provided style object
  for (let key in styleObj) {
    // Convert camelCase to kebab-case for CSS properties
    let transformedKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    
    // Assign the value of the original key to the transformed key in the new object
    transformedStyle[transformedKey] = styleObj[key];
  }

  // Return the transformed style object with filtered CSS properties
  return transformedStyle;
};

export default filterObj;
