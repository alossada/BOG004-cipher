const cipher = {

  encode: (offset, text) => {

    if (!offset || !text) {
      alert ("Debes ingresar un número y un texto");
      throw new TypeError();
    }

    if (offset==0) {
      alert ("La clave debe ser un número positivo diferente de 0");
      throw new TypeError();
    }

    let cipEncode = "";
    let filter = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i = 0; i < text.length; i++) {

      if (filter.indexOf(text.charAt(i)) != -1) {
        
        let letterCode = text.charCodeAt(i);

        if (letterCode == 32) {
          cipEncode += String.fromCharCode(32);

        } else if (letterCode > 64 && letterCode < 91) {
          let newLetterCode = (letterCode - 65 + parseInt(offset)) % 26 + 65;

          cipEncode += String.fromCharCode(newLetterCode);

        } else if (letterCode > 96 && letterCode < 123) {
          let newLetterCode = (letterCode - 97 + parseInt(offset)) % 26 + 97;

          cipEncode += String.fromCharCode(newLetterCode);
        }
      }
      else {
        cipEncode = "";
        alert("Tu mensaje solo debe contener letras");
      }
    }
    return cipEncode;
  },


  decode: (offset, text) => {

    if (!offset || !text) {
      alert ("Debes ingresar un número y un texto");
      throw new TypeError();
    }

    if (offset==0) {
      alert ("La clave debe ser un número positivo diferente de 0");
     throw new TypeError();
    }

    let cipDecode = "";
    let filterDecode = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i = 0; i < text.length; i++) {

      if (filterDecode.indexOf(text.charAt(i)) != -1) {
        let letterDecode = text.charCodeAt(i);

        if (letterDecode == 32) {
          cipDecode += String.fromCharCode(32);

        } else if (letterDecode > 64 && letterDecode < 91) {
          let newLetterDecode = (letterDecode + 65 - parseInt(offset)) % 26 + 65;

          cipDecode += String.fromCharCode(newLetterDecode);

        } else if (letterDecode > 96 && letterDecode < 123) {
          let newLetterDecode = (letterDecode - 97 - parseInt(offset) + 52) % 26 + 97;

          cipDecode += String.fromCharCode(newLetterDecode);
        }
      }
      else {
        cipDecode = "";
        alert("Tu mensaje solo debe contener letras");
      }
    }
    return cipDecode;
     
  }
}


export default cipher;