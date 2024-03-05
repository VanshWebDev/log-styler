let logStyler=()=>{
    
}


let style = {
  color: "red",
  "font-size": "40px",
  background: "orange",
  "border-radius": "10px",
  "border-right": "green",
  color: "white",
  padding: "10px",
};

let styleString = "";
for (let prop in style) {
  styleString += `${prop}: ${style[prop]};`;
}

console.log(`%cName`, styleString);
