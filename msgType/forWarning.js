import warningCss from "../cssObj/warningCss";

const forWarning = (key, text) => {
  // Merge user-provided CSS with default warning CSS
  let updatedCss;

  if (
    key.warning &&
    key.warning.hasOwnProperty("overRide") &&
    key.warning.overRide === true
  ) {
    updatedCss = {
      ...warningCss,
      ...key,
    };
  } else {
    updatedCss = {
      ...warningCss,
    };
  }

  // Check if emoji needs to be added to the text
  if (key.warning && key.warning.addEmoji) {
    updatedCss.withEmojiText = text.concat("⚠️");
  }
  // Apply font size based on the 'size' key
  if (key.warning && key.warning.size === "big") {
    updatedCss.fontSize = "50px";
  } else if (key.warning && key.warning.size === "small") {
    updatedCss.fontSize = "20px";
  }
  //   console.log(updatedCss);
  return updatedCss;
};

export default forWarning;