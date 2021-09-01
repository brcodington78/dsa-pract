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
  
  const compress = (s) => {
    let currentL = '';
    let count = 0;
    let newStr = []
    
    for(let i = 0; i < s.length; i++){
      count += 1;
      if (s[i] !== s[i + 1] && count !== 1){
        newStr.push(`${count}`,s[i])
        count = 0
      } else if (s[i] !== s[i + 1]) {
        newStr.push(s[i])
        count = 0
      }
    }
    return newStr.join('')
  };

  const anagrams = (s1, s2) => {
    let object = {}
    for(let i = 0; i < s1.length; i++){
      if (object[s1[i]] === undefined){
        object[s1[i]] = 1
      } else {
        object[s1[i]] += 1  
      }
      
    }
     for(let j = 0; j < s2.length; j++){
      if (object[s2[j]] === undefined){
        return false
      } else {
        object[s2[j]] -= 1  
      }
    }
    if (Object.values(object).filter(ele => ele !== 0).length !== 0){
      return false
    } else {
      return true
    }
  };

  const mostFrequentChar = (s) => {
    let object = {};
    let top = 0;
    let topChar;
    for( let char of s ) {
      if (!(char in object)) {
        object[char] = 1
      } else {
        object[char] += 1
      }
    }
    Object.entries(object).forEach(ele => {
      if (ele[1] > top){
        top = ele[1];
        topChar = ele[0]
      }
    })
    return topChar
  };
  

  const pairSum = (numbers, targetSum) => {
    for(let i = 0; i < numbers.length; i ++)  {
      for(let j = 1; j < numbers.length; j ++) {
        if((numbers[i] + numbers[j]) === targetSum) {
          return [i,j]
        }
      }
    }
  };

  const pairProduct = (numbers, targetProduct) => {
    let object = {}
    for (let i = 0; i < numbers.length; i++) {
      let currentNum = numbers[i]
      let compliment = targetProduct/currentNum
      
      if (compliment in object) {
        return [object[compliment],i ]
      }
      
      object[numbers[i]]= i;
      
    }
  };

  const intersection = (a, b) => {
    let object = {};
    let ans = [];
    for(let i = 0; i < a.length; i++){
      if(!(a[i] in object)) {
        object[a[i]] = 1
      }
    }
    for (let j = 0; j < b.length; j++){
      if (b[j] in object){
        ans.push(b[j])
      }
    }
    return ans
  };
  
  const linkedListValues = (head) => {
  if (head === null) {
    return []
  }
  let ans = [];
  ans.push(head.val)
  console.log('head',head)
  console.log("head.next",head.next)
  if (head.next === null) {
    return [head.val]
  } else {
    let recursArr = linkedListValues(head.next)
    console.log('recurs', recursArr)
    ans = ans.concat(recursArr)  
  }
  
  return ans
}


const fiveSort = (nums) => {
  let i = 0
  let j = nums.length - 1
  
  while (i < j) {
    if(nums[j] === 5) {
      j -= 1;  
    } else if (nums[i] === 5) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
       i+= 1;

    } else {
      i += 1;

    }
  
  }

  return nums
  
    
};

const sumList = (head) => {
  let current = head
  let ans = 0
  
  while (current !== null) {
    ans += current.val
    current = current.next
  }
  
  return ans
};


const linkedListFind = (head, target) => {
  let current = head;
  console.log(head)
  while (current !== null) {
    if (current.val === target) {
      return true
    }
    current = current.next
  }
  return false
};

const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if(count === index) {
      console.log('count', count)
      return current.val
    } else {
      current = current.next;
      count += 1
      console.log('curent changing and count change', current, count)
    }
  }
  return null
}