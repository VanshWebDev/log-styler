// Import necessary modules
import forError from "../msgType/forError";
import forSuccess from "../msgType/forSuccess";
import forWarning from "../msgType/forWarning";

/**
 * Applies default styling based on the specified message type.
 *
 * @param {Object} styleObj - An object containing message type and its associated style properties.
 * @param {string} text - The text message to be styled.
 * @returns {Object} - The styled message object.
 */
let defaultStyle = (styleObj, text) => {
  // Iterate through each key in the style object
  for (let key in styleObj) {
    // Check if the message type is 'error'
    if (key === "error") {
      // Apply styling for error message
      if (styleObj.error.overRide) {
        // Merge user-provided CSS with default warning CSS
        const mergedCss = {
          ...forError(styleObj, text),
          ...styleObj.error,
        };
        return mergedCss;
      } else {
        // Apply default styling for warning message
        return forError(styleObj, text);
      }
    }
    // Check if the message type is 'success'
    if (key === "success") {
      // Apply styling for success message
      if (styleObj.success.overRide) {
        // Merge user-provided CSS with default warning CSS
        const mergedCss = {
          ...forSuccess(styleObj, text),
          ...styleObj.success,
        };
        return mergedCss;
      } else {
        // Apply default styling for warning message
        return forSuccess(styleObj, text);
      }
    }
    // Check if the message type is 'warning'
    if (key === "warning") {
      // Check if user has provided additional CSS properties for warning
      if (styleObj.warning.overRide) {
        // Merge user-provided CSS with default warning CSS
        const mergedCss = {
          ...forWarning(styleObj, text),
          ...styleObj.warning,
        };
        return mergedCss;
      } else {
        // Apply default styling for warning message
        return forWarning(styleObj, text);
      }
    }
  }
};

// Export the defaultStyle function
export default defaultStyle;
