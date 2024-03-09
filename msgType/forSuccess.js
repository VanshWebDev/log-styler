import successCss from "../cssObj/successCss"; // Import default success CSS styles

/**
 * Function to apply styling for success messages.
 *
 * @param {Object} key - An object containing properties related to success styling.
 * @param {string} text - The text message to be styled.
 * @returns {Object} - The updated CSS object with applied styles for success messages.
 */
const forSuccess = (key, text) => {
  // Create a copy of successCss to avoid mutating the original object
  let updatedCss;

  // Check if the 'overRide' property exists and is set to true in the 'key.success' object
  if (
    key.success &&
    key.success.hasOwnProperty("overRide") &&
    key.success.overRide === true
  ) {
    // If 'overRide' is true, merge user-provided CSS with default success CSS
    updatedCss = {
      ...successCss,
      ...key,
    };
  } else {
    // If 'overRide' is not true or not provided, use default success CSS
    updatedCss = {
      ...successCss,
    };
  }

  // Check if emoji needs to be added to the text
  if (key.success && key.success.addEmoji) {
    // Add the check mark emoji to the text
    updatedCss.withEmojiText = text.concat("✅");
  }

  // Check the size of the success text
  if (key.success && key.success.size === "big") {
    // Apply big font size
    updatedCss.fontSize = "50px";
  } else if (key.success && key.success.size === "small") {
    // Apply small font size
    updatedCss.fontSize = "20px";
  }

  // Return the updated CSS object with applied styles
  return updatedCss;
};

// Export the forSuccess function
export default forSuccess;
