import filterObj from "./styleObj/filterObj.js";
import validation from "./styleObj/validation.js";
import printOnConsole from "./styleObj/printOnConsole.js";
import defaultStyle from "./styleObj/defaultStyle.js";

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

    //default styling
    let defaultCss = defaultStyle(styleObj, text);
    if (defaultCss.withEmojiText) {
      let { withEmojiText } = defaultCss;
      text = withEmojiText;
    }

    // Filter out unsupported CSS properties
    let filteredStyle;
    if (!defaultCss) {
      filteredStyle = filterObj(styleObj);
    } else {
      filteredStyle = filterObj(defaultCss);
    }
    // Print the styled text to the console accordingly
    !defaultCss
      ? printOnConsole(filteredStyle, text)
      : printOnConsole(filteredStyle, text);
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
};

export default logStyler;
