import filterObj from "./styleObj.js/filterObj";
import validation from "./styleObj.js/validation";
import printOnConsole from "./styleObj.js/printOnConsole";

/**
 * Applies CSS styling to the specified text and logs it to the console.
 *
 * @param {Object} styleObj - An object containing CSS style properties.
 * @param {string} text - The text to be styled and logged to the console.
 * @throws {Error} If the style object is not provided or is empty, or if the text is not provided.
 */
let logStyler = (styleObj, text) => {
  try {
    // Validate the style object and text parameter
    validation(styleObj, text);

    // Filter out unsupported CSS properties
    const filteredStyle = filterObj(styleObj);

    // Print the styled text to the console
    printOnConsole(filteredStyle, text);
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
};

export default logStyler ;
