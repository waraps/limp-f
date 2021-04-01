const formatNumber = (num, simbol) => {
    const separador = '.'; // separador para los miles
    const sepDecimal = ','; // separador para los decimales
  
    num += '';
    const splitStr = num.split('.');
    let splitLeft = splitStr[0];
    let splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
    if (splitRight.length > 3) {
      const after = parseInt(splitRight.substring(3, 4), 10);
      if (after >= 5) {
        let before = parseInt(splitRight.substring(1, 3), 10);
        before += 1;
        splitRight = sepDecimal + before.toString();
      } else {
        splitRight = splitRight.substring(0, 3);
      }
    }
    const regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
      splitLeft = splitLeft.replace(regx, `$1${separador}$2`);
    }
    return `${splitLeft + splitRight} ${simbol}`;
  };
  
  export default formatNumber;
  