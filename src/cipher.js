const cipher = {

  encode: (offset, text) => {
    
    console.log('desplazamiento', offset);
    console.log('mensaje', text);

    if (!offset || !text) {
      throw new TypeError();
    }
    
    
    let cipEncode = "";
    let filter = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for (let i = 0; i < text.length; i++) {
      if (filter.indexOf(text.charAt(i)) != -1) {
        let letterCode = text.charCodeAt(i);
        if (letterCode == 32) {
          cipEncode += String.fromCharCode(32);
          console.log('lettercode:', letterCode);
        } else if (letterCode > 64 && letterCode < 91) {
          let newLetterCode = (letterCode - 65 + parseInt(offset)) % 26 + 65;
          console.log('codigo-desplazado:', newLetterCode);

          cipEncode += String.fromCharCode(newLetterCode);
          console.log('cipEnconde:', cipEncode);
        } else if (letterCode > 96 && letterCode < 123) {
          let newLetterCode = (letterCode - 97 + parseInt(offset)) % 26 + 97;
          console.log('codigo-desplazado:', newLetterCode);

          cipEncode += String.fromCharCode(newLetterCode);
          console.log('cipEnconde:', cipEncode);
        } else {
          cipEncode += "error";
          console.log('cipEnconde:', cipEncode);
        }
      }
else { cipEncode = "tu mensaje solo debe contener letras";
}


    }


    return cipEncode;

  },

  decode: (offset, text) => {

    if (!offset || !text) {
      throw new TypeError();
    }
   

    let cipDecode = "";

    for (let i = 0; i < text.length; i++) {
      let letterDecode = text.charCodeAt(i);
      if (letterDecode == 32) {
        cipDecode += String.fromCharCode(32);
      } else {
        let newLetterDecode = (letterDecode + 65 - parseInt(offset)) % 26 + 65;
        cipDecode += String.fromCharCode(newLetterDecode);
      }
    }
    return cipDecode;

  }
}


export default cipher;