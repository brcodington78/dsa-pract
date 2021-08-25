const uncompress = (s) => {
    let newString= ''
    let currentNum = ''
    
    for(let i = 0; i < s.length; i++){
      if (parseInt(s[i])) {
        currentNum += s[i]
      } else {
        let substring = ''
        console.log(substring)
        substring = s[i].repeat(parseInt(currentNum))
        newString += substring
        currentNum = ''
      }
    }
    return newString
    
  };
  
  uncompress("2c3a1t"); // -> 'ccaaat'
  

  const compress = (s) => {
    let currentL = '';
    let count = 0;
    let newStr = ''
    
    for(let i = 0; i < s.length; i++){
      count += 1;
      if (s[i] !== s[i + 1] && count !== 1){
        newStr += `${count}` + s[i]
        count = 0
      } else if (s[i] !== s[i + 1]) {
        newStr += s[i]
        count = 0
      }
    }
    return newStr
  };
  