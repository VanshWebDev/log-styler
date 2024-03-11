import errorCss from "../cssObj/errorCss"; // Import default error CSS styles

/**
 * Function to apply styling for error messages.
 *
 * @param {Object} key - An object containing properties related to error styling.
 * @param {string} text - The text message to be styled.
 * @returns {Object} - The updated CSS object with applied styles for error messages.
 */
const forError = (key, text) => {
  // Create a copy of errorCss to avoid mutating the original object
  let updatedCss;

  // Check if the 'overRide' property exists and is set to true in the 'key.error' object
  if (
    key.error &&
    key.error.hasOwnProperty("overRide") &&
    key.error.overRide === true
  ) {
    // If 'overRide' is true, merge user-provided CSS with default error CSS
    updatedCss = {
      ...errorCss,
      ...key,
    };
  } else {
    // If 'overRide' is not true or not provided, use default error CSS
    updatedCss = {
      ...errorCss,
    };
  }

  // Check if emoji needs to be added to the text
  if (key.error && key.error.addEmoji) {
    // Add the error emoji to the text
    updatedCss.withEmojiText = text.concat("❌");
  }

  // Check the size of the error text
  if (key.error && key.error.size === "big") {
    // Apply big font size
    updatedCss.fontSize = "50px";
  } else if (key.error && key.error.size === "small") {
    // Apply small font size
    updatedCss.fontSize = "20px";
  }

  // Return the updated CSS object with applied styles
  return updatedCss;
};

// Export the forError function
export default forError;
