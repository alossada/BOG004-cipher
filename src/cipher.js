const cipher = {

  encode: (offset, text) => {

    if (!offset || !text) {
      //alert("Debes ingresar un número y un texto");
      throw new TypeError();
    }

    let cipEncode = "";

    for (let i = 0; i < text.length; i++){
      let letterCode = text.charCodeAt(i);
      if (letterCode > 64 && letterCode < 91) {
        let newLetterCode = (letterCode - 65 + parseInt(offset)) % 26 + 65;
        cipEncode += String.fromCharCode(newLetterCode);
      } else if (letterCode > 96 && letterCode < 123) {
        let newLetterCode = (letterCode - 97 + parseInt(offset)) % 26 + 97;
        cipEncode += String.fromCharCode(newLetterCode);
      } else {
        cipEncode += String.fromCharCode(letterCode);
      }
    }
    return cipEncode;
  },


  decode: (offset, text) => {

    if (!offset || !text) {
      //alert("Debes ingresar un número y un texto");
      throw new TypeError();
    }

    let cipDecode = "";

    for (let i = 0; i < text.length; i++) {
      let letterDecode = text.charCodeAt(i);
      if (letterDecode > 64 && letterDecode < 91) {
        let newLetterDecode = (letterDecode + 65 - parseInt(offset)) % 26 + 65;
        cipDecode += String.fromCharCode(newLetterDecode);
      } else if (letterDecode > 96 && letterDecode < 123) {
        let newLetterDecode = (letterDecode - 97 - parseInt(offset) + 52) % 26 + 97;
        cipDecode += String.fromCharCode(newLetterDecode);
      } else {
        cipDecode += String.fromCharCode(letterDecode);
      }
    }
    return cipDecode;
  }
}
export default cipher;