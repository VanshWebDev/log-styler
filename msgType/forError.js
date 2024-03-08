import defaultStyle from "../styleObj/defaultStyle";
import errorCss from "../cssObj/errorCss";
let forError = (key, text) => {
  // if (key.addEmoji === true) {
  //   errorCss.withEmojiText = text.concat("❌");
  //   if (key.size === "big") {
  //     errorCss.fontSize = "50px";
  //     return errorCss;
  //   }
  //   return errorCss;
  // }

  // if (key.size === "small") {
  //   errorCss.fontSize = "20px";
  //   return errorCss;
  // } else {
  //   return errorCss;
  // }

  for (let i in key) {
    if (i === "size" || (i === "addEmoji" && key.addEmoji === true)) {
      console.log("testing");
    }
  }
};

export default forError;
