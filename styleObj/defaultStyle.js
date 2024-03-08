import addEmoji from "../cssObj/addEmoji";
import forError from "../msgType/forError";
let defaultStyle = (styleObj, text) => {
  for (let key in styleObj) {
    if (key === "error") {
      return forError(styleObj.error, text);
    }
    if (key === "success") {
      console.log("success msg");
    } else {
      console.log("nothing");
    }
  }
};

export default defaultStyle;
