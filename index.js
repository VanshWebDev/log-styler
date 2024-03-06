let logStyler = (styleObj, text) => {
  try {
    //validation
    if (typeof styleObj !== "object") {
      throw new Error("Style object is required");
    } else if (!Object.keys(styleObj).length) {
      throw new Error("Style object should not be empty");
    } else if (!text) {
      throw new Error("second parameter text is required");
    }
    //run if validation passed
    let style = styleObj;
    let styleString = "";
    for (let prop in style) {
      styleString += `${prop}: ${style[prop]};`;
    }
    console.log(`%c${text}`, styleString);
  } catch (error) {
    console.error(error);
  }
};

export { logStyler };
