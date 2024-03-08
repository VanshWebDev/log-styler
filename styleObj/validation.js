/**
 * Validates the provided style object and text parameter.
 *
 * @param {Object} styleObj - An object containing CSS style properties.
 * @param {string} text - The text to be styled and logged to the console.
 * @returns {boolean} True if validation passes.
 * @throws {Error} If the style object is not provided or is empty, or if the text is not provided or exceeds the maximum length.
 * @function validation
 */
let validation = (styleObj, text) => {
  // Check if the style object is provided and is of type 'object'
  if (typeof styleObj !== "object") {
    throw new Error("Style parameter object is required");
  }
  // Check if the style object is empty
  else if (!Object.keys(styleObj).length) {
    throw new Error("Style object should not be empty");
  }
  // Check if the text is provided
  else if (!text) {
    throw new Error("Second parameter text is required");
  }
  // Check if the text exceeds the maximum length
  else if (text.length > 100) {
    throw new Error("Text length must be less than 100");
  }
  // Return true if validation passes
  else {
    return true;
  }
};

export default validation;
