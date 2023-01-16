function rot13(str) {
  let result = "";
  // Checking each character
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    // Is it a letter
    if (c.match(/[A-Z]/)) {
      // ASCII
      let c_ASCII = str.charCodeAt(i);
      c_ASCII -= 13;
      // If it's inferior to A
      if (c_ASCII < 65) {
        c_ASCII = 91 - (65 - c_ASCII);
      }
      // Convert again, to character
      c = String.fromCharCode(c_ASCII);
    }
    result += c;
  }
  return result;
}


rot13("SERR PBQR PNZC");