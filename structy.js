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
  