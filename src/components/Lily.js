import React from "react";
import logo from '../img/lily-top-img.png';

console.log(logo); // /logo.84287d09.png

function Lily() {
  // Import result is the URL of your image
  return <img className="lily-logo" src={logo} alt="Lily daMota" />;
}

export default Lily;