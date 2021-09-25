const uncompress = (s) => {
  let newString = "";
  let currentNum = "";

  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i])) {
      currentNum += s[i];
    } else {
      let substring = "";
      console.log(substring);
      substring = s[i].repeat(parseInt(currentNum));
      newString += substring;
      currentNum = "";
    }
  }
  return newString;
};

const compress = (s) => {
  let currentL = "";
  let count = 0;
  let newStr = [];

  for (let i = 0; i < s.length; i++) {
    count += 1;
    if (s[i] !== s[i + 1] && count !== 1) {
      newStr.push(`${count}`, s[i]);
      count = 0;
    } else if (s[i] !== s[i + 1]) {
      newStr.push(s[i]);
      count = 0;
    }
  }
  return newStr.join("");
};

const anagrams = (s1, s2) => {
  let object = {};
  for (let i = 0; i < s1.length; i++) {
    if (object[s1[i]] === undefined) {
      object[s1[i]] = 1;
    } else {
      object[s1[i]] += 1;
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (object[s2[j]] === undefined) {
      return false;
    } else {
      object[s2[j]] -= 1;
    }
  }
  if (Object.values(object).filter((ele) => ele !== 0).length !== 0) {
    return false;
  } else {
    return true;
  }
};

const mostFrequentChar = (s) => {
  let object = {};
  let top = 0;
  let topChar;
  for (let char of s) {
    if (!(char in object)) {
      object[char] = 1;
    } else {
      object[char] += 1;
    }
  }
  Object.entries(object).forEach((ele) => {
    if (ele[1] > top) {
      top = ele[1];
      topChar = ele[0];
    }
  });
  return topChar;
};

const pairSum = (numbers, targetSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
    }
  }
};

const pairProduct = (numbers, targetProduct) => {
  let object = {};
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    let compliment = targetProduct / currentNum;

    if (compliment in object) {
      return [object[compliment], i];
    }

    object[numbers[i]] = i;
  }
};

const intersection = (a, b) => {
  let object = {};
  let ans = [];
  for (let i = 0; i < a.length; i++) {
    if (!(a[i] in object)) {
      object[a[i]] = 1;
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (b[j] in object) {
      ans.push(b[j]);
    }
  }
  return ans;
};

const linkedListValues = (head) => {
  if (head === null) {
    return [];
  }
  let ans = [];
  ans.push(head.val);
  console.log("head", head);
  console.log("head.next", head.next);
  if (head.next === null) {
    return [head.val];
  } else {
    let recursArr = linkedListValues(head.next);
    console.log("recurs", recursArr);
    ans = ans.concat(recursArr);
  }

  return ans;
};

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[j] === 5) {
      j -= 1;
    } else if (nums[i] === 5) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i += 1;
    } else {
      i += 1;
    }
  }

  return nums;
};

const sumList = (head) => {
  let current = head;
  let ans = 0;

  while (current !== null) {
    ans += current.val;
    current = current.next;
  }

  return ans;
};

const linkedListFind = (head, target) => {
  let current = head;
  console.log(head);
  while (current !== null) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) {
      console.log("count", count);
      return current.val;
    } else {
      current = current.next;
      count += 1;
      console.log("curent changing and count change", current, count);
    }
  }
  return null;
};

const reverseList = (head) => {
  let current = head;
  let prev;
  while (current !== null) {
    let temp = current.next;
    if (current === head) {
      current.next = null;
      prev = current;
      current = temp;
    } else {
      current.next = prev;
      prev = current;
      current = temp;
    }
  }
  return prev;
};

const mergeLists = (head1, head2) => {
  let tail;
  let head;
  let next1;
  let next2;

  if (head1.val < head2.val) {
    tail = head1;
    head = head1;
    next1 = head1.next;
    next2 = head2;
  } else {
    tail = head2;
    head = head2;
    next1 = head1;
    next2 = head2.next;
  }

  while (next1 !== null && next2 !== null) {
    if (next1.val < next2.val) {
      tail.next = next1;
      next1 = next1.next;
      tail = tail.next;
    } else {
      tail.next = next2;
      next2 = next2.next;
      tail = tail.next;
    }
  }

  if (next1 === null) {
    tail.next = next2;
  }

  if (next2 === null) {
    tail.next = next1;
  }

  return head;
};

const isUnivalueList = (head) => {
  let uniqueList = [];
  let current = head;

  while (current !== null) {
    if (!uniqueList.includes(current.val)) {
      uniqueList.push(current.val);
    }
    current = current.next;
  }

  if (uniqueList.length === 1) {
    return true;
  }
  return false;
};

const removeNode = (head, targetVal) => {
  let prev = null;
  let current = head;
  let next;
  let hit = false;

  while (current !== null && hit === false) {
    next = current.next;
    if (current === head && current.val === targetVal) {
      return current.next;
    }
    if (current.val === targetVal) {
      console.log("current", current);
      console.log("next", next);
      prev.next = next;
      hit = true;
    }
    prev = current;
    current = current.next;
  }
  return head;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  let icounter = 0;
  let current = head;
  let prev = null;
  let newNode = new Node(value);

  if (icounter === 0 && index === 0) {
    newNode.next = current;
    return newNode;
  }

  while (current !== null) {
    if (index === icounter) {
      prev.next = newNode;
      newNode.next = current;
    }
    prev = current;
    current = current.next;
    icounter += 1;
  }
  if (icounter === index) {
    prev.next = newNode;
    return head;
  }
  return head;
};

const createLinkedList = (values) => {
  let prev = null;
  let current;
  let head;

  if (values.length === 0) {
    return null;
  }

  for (let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i]);
    if (i === 0) {
      prev = newNode;
      head = newNode;
    } else if (i === values.length - 1) {
      prev.next = newNode;
      newNode.next = null;
      return head;
    } else {
      prev.next = newNode;
      prev = newNode;
    }
  }
  return head;
};

const addLists = (head1, head2) => {
  let dummyHead = new Node(null);
  let current0 = dummyHead;
  let current1 = head1;
  let current2 = head2;
  let carry = 0;
  let sum;

  while (current1 !== null && current2 !== null) {
    sum = current1.val + current2.val + carry;
    carry = 0;
    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
    }
    current0.next = new Node(sum);
    current0 = current0.next;
    current1 = current1.next;
    current2 = current2.next;
  }
  if (current1 !== null && current2 === null) {
    while (current1 !== null) {
      sum = current1.val + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum - 10;
      }
      current0.next = new Node(sum);
      current0 = current0.next;
      current1 = current1.next;
    }
  }

  if (current1 === null && current2 !== null) {
    while (current2 !== null) {
      sum = current2.val + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum - 10;
      }
      current0.next = new Node(sum);
      current0 = current0.next;
      current2 = current2.next;
    }
  }

  if (current1 === null && current2 === null && carry !== 0) {
    current0.next = new Node(carry);
    carry = 0;
  }
  return dummyHead.next;
};

const depthFirstValues = (root) => {
  let stack = [root];
  let ans = [];

  while (stack.length !== 0 && root !== null) {
    let newbie = stack.shift();
    ans.push(newbie.val);

    if (newbie.right !== null) {
      stack.unshift(newbie.right);
    }
    if (newbie.left !== null) {
      stack.unshift(newbie.left);
    }
  }

  return ans;
};

const treeIncludes = (root, target) => {
  if (!root) {
    return false;
  }

  let stack = [root];
  let bubba;

  while (stack.length !== 0) {
    bubba = stack.pop();
    if (bubba.val === target) {
      return true;
    }

    if (bubba.left !== null) {
      stack.push(bubba.left);
    }

    if (bubba.right !== null) {
      stack.push(bubba.right);
    }
  }

  return false;
};

const treeSum = (root) => {
  let queue = [root];
  let sum = 0;
  let bubba;

  while (queue.length !== 0 && root !== null) {
    bubba = queue.shift();
    sum = sum + bubba.val;
    if (bubba.left) {
      queue.push(bubba.left);
    }
    if (bubba.right) {
      queue.push(bubba.right);
    }
  }
  return sum;
};

const treeMinValue = (root) => {
  let min = Infinity;
  let stack = [root];
  let bubba;

  while (stack.length !== 0 && root !== null) {
    bubba = stack.pop();
    if (bubba.val < min) {
      min = bubba.val;
    }

    if (bubba.right) {
      stack.push(bubba.right);
    }

    if (bubba.left) {
      stack.push(bubba.left);
    }
  }

  return min;
};

const maxPathSum = (root) => {
  if (root.left === null && root.right === null) {
    return root.val 
  }
  
  if(root.left !== null || root.right !== null) {
    
    let left = (root.left === null) ? -Infinity : maxPathSum(root.left);
    let right = (root.right === null) ? -Infinity : maxPathSum(root.right);

    if (left >= right) {
      return left + root.val
    } else {
      return right + root.val
    }
  }

}

const pathFinder = (root, target) => {
  if (root === null) {
    return null;
  }

  if (root.val === target) {
    return [root.val];
  }

  let left = pathFinder(root.left, target);
  let right = pathFinder(root.right, target);

  if (left !== null) {
    return [root.val].concat(left);
  }

  if (right !== null) {
    return [root.val].concat(right);
  }

  return null;
};


const treeValueCount = (root, target) => {
  let count = 0;
  let stack = [root];
  let noob;

  while (stack.length !== 0 && root !== null) {
    noob = stack.pop();
    if (noob.val === target) {
      count += 1;
    }

    if (noob.left) {
      stack.push(noob.left);
    }
    if (noob.right) {
      stack.push(noob.right);
    }
  }
  return count;
};


const howHigh = (node) => {
  if (node === null) {
    return -1
  }
  if (node.left === null && node.right === null){
    return 0
  }
  
  let left = 0
  let right = 0
  
  if (node.left){
    left = howHigh(node.left);
  }
  
  if (node.right){
    right = howHigh(node.right);
  }
  
  if (left > right) {
    return left + 1
  } else {
    return right + 1
  }
  
  
  
};

const bottomRightValue = (root) => {
  let queue = [root]
  let noob;
  
  while (queue.length !== 0) {
    noob = queue.pop();
    if (queue.length === 0 && noob.left === null && noob.right === null){
      return noob.val
    }
    if (noob.left) {
      queue.unshift(noob.left)
    }
    
    if (noob.right) {
      queue.unshift(noob.right)
    }
  }
};


const allTreePaths = (root) => {
  let ans = [];
  let left;
  let right;
  if (root.left === null && root.right === null) {
    return [[root.val]];
  }

  if (root.left !== null) {
    left = allTreePaths(root.left);
    console.log("left", left);
    ans = ans.concat(left);
  }

  if (root.right !== null) {
    right = allTreePaths(root.right);

    console.log("right", right);
    ans = ans.concat(right);
  }
  console.log("ans", ans);
  for (let i = 0; i < ans.length; i++) {
    ans[i].unshift(root.val);
  }

  return ans;
};

const treeLevels = (root) => {
  if (root === null) {
    return [];
  }
  let stack = [[root, 0]];
  let ans = [];

  while (stack.length !== 0) {
    let popped = stack.pop();
    let level = popped[1];
    let node = popped[0];

    if (!ans[popped[1]]) {
      console.log("node", node);
      ans[level] = [node.val];
    } else {
      ans[level].push(node.val);
    }

    if (node.right !== null) {
      stack.push([node.right, level + 1]);
    }

    if (node.left !== null) {
      stack.push([node.left, level + 1]);
    }
  }
  return ans;
};

const levelAverages = (root) => {
  if (root === null) return [];

  let stack = [{ node: root, level: 0 }];
  let levels = [];
  let ans = [];

  while (stack.length !== 0) {
    const { node, level } = stack.pop();
    if (!levels[level]) {
      levels[level] = [node.val];
    } else {
      levels[level].unshift(node.val);
    }

    if (node.right) stack.push({ node: node.right, level: level + 1 });
    if (node.left) stack.push({ node: node.left, level: level + 1 });
  }

  for (let i = 0; i < levels.length; i++) {
    let sum = 0;
    for (let j = 0; j < levels[i].length; j++) {
      console.log("number", levels[i][j]);
      sum += levels[i][j];
      console.log("sum", sum);
    }
    let average = sum / levels[i].length;
    ans.push(average);
  }

  return ans;
};

const leafList = (root) => {
  if (root === null) return [];
  let stack = [root];
  let ans = [];

  while (stack.length) {
    let poop = stack.pop();

    let left = poop.left;
    let right = poop.right;

    if (!left && !right) {
      ans.push(poop.val);
    }

    if (right) stack.push(right);
    if (left) stack.push(left);
  }
  return ans;
};

const hasPath = (graph, src, dst) => {
  if (src === dst) {
    return true;
  }

  let stack = [];
  let visited = [];
  let srcArr = graph[src];
  for (let i = 0; i < graph[src].length; i++) {
    stack.push(graph[src][i]);
    visited.push(graph[src][i]);
  }

  while (stack.length !== 0) {
    let noob = stack.pop();
    if (noob === dst) {
      return true;
    } else {
      for (let j = 0; j < graph[noob].length; j++) {
        if (!visited.includes(graph[noob][j])) {
          stack.push(graph[noob][j]);
        }
      }
    }
  }

  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  let graph = convertGraph(edges);

  let queue = [nodeA];
  let visited = [];

  while (queue.length !== 0) {
    let popped = queue.pop();
    if (popped === nodeB) return true;
    for (let i = 0; i < graph[popped].length; i++) {
      let node = graph[popped][i];
      if (!visited.includes(node)) {
        visited.push(node);
        queue.unshift(node);
      }
    }
  }
  return false;
};


const connectedComponentsCount = (graph) => {
  let count = 0;
  let stack = [];
  let visited = new Set();

  for (let node in graph) {
    // let intNode = parseInt(node)
    if (!visited.has(node)) {
      stack = [node];
      visited.add(node);
      console.log("visited1", visited);
      while (stack.length !== 0) {
        let popped = stack.pop();
        let graphArr = graph[popped];
        console.log(graphArr, "graphArr");
        for (let i = 0; i < graphArr.length; i++) {
          let aNode = graphArr[i];
          if (!visited.has(String(aNode))) {
            console.log("parseInt", String(aNode));
            stack.push(String(aNode));
            visited.add(String(aNode));
            console.log("visited2", visited);
          }
        }
      }
      console.log("visited3", visited);
      count++;
    }
  }
  return count;
};

const largestComponent = (graph) => {
  let stack = [];
  let visited = new Set();
  let count = 1;
  let maxCount = 0;

  for (let node in graph) {
    if (!visited.has(node)) {
      stack.push(node);
      visited.add(node);
      while (stack.length !== 0) {
        let popped = stack.pop();
        let graphArr = graph[popped];
        for (let i = 0; i < graphArr.length; i++) {
          let strNode = String(graphArr[i]);
          if (!visited.has(strNode)) {
            visited.add(strNode);
            stack.push(strNode);
            count++;
          }
        }
      }
      if (count > maxCount) {
        maxCount = count;
      }
      count = 1;
    }
  }
  return maxCount;
};

const shortestPath = (edges, nodeA, nodeB) => {
  let visited = new Set();
  let queue = [{ node: nodeA, edgeCount: 0 }];
  let graph = convertToGraph(edges);

  while (queue.length !== 0) {
    let popped = queue.pop();
    let { node, edgeCount } = popped;
    if (node === nodeB) {
      return edgeCount;
    }

    for (let i = 0; i < graph[node].length; i++) {
      let newNode = graph[node][i];
      if (!visited.has(newNode)) {
        if (newNode === nodeB) {
          return edgeCount + 1;
        } else {
          visited.add(newNode);
          queue.unshift({ node: newNode, edgeCount: edgeCount + 1 });
        }
      }
    }
  }

  return -1;
};

const convertToGraph = (edges) => {
  let graph = {};

  for (let edge of edges) {
    let [first, second] = edge;

    if (!(first in graph)) graph[first] = [];
    if (!(second in graph)) graph[second] = [];

    graph[first].push(second);
    graph[second].push(first);
  }
  return graph;
};


const islandCount = (grid) => {
  let visited = new Set();
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (explore(grid, i, j, visited) === true) count++;
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  const rBound = 0 <= r && r < grid.length;
  const cBound = 0 <= c && c < grid[0].length;

  if (rBound === false || cBound === false) return false;

  if (grid[r][c] === "W") return false;

  let pos = r + "," + c;

  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r + 1, c, visited);
  explore(grid, r - 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);

  return true;
};

const minimumIsland = (grid) => {
  let minCount = Infinity;
  let visited = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      newCount = explore(grid, i, j, visited);
      console.log(newCount, "newCount");
      if (newCount < minCount && newCount !== 0) minCount = newCount;
    }
  }
  return minCount;
};

const explore = (grid, i, j, visited) => {
  let rowBound = 0 <= i && i < grid.length;
  let columnBound = 0 <= j && j < grid[0].length;

  if (visited.has(`${i},${j}`)) return 0;
  if (!rowBound || !columnBound) return 0;
  if (grid[i][j] === "W") return 0;
  visited.add(`${i},${j}`);

  count = 1;

  count += explore(grid, i + 1, j, visited);
  count += explore(grid, i - 1, j, visited);
  count += explore(grid, i, j - 1, visited);
  count += explore(grid, i, j + 1, visited);

  return count;
};

const closestCarrot = (grid, startRow, startCol) => {
  let visited = new Set(`${startRow},${startCol}`);
  let steps = explore(grid, startRow, startCol, visited);

  return steps;
};

const explore = (grid, i, j, visited) => {
  let queue = [{ pos: [i, j], step: 0 }];

  while (queue.length !== 0) {
    let popped = queue.pop();
    console.log("popped", popped);
    let { pos, step } = popped;
    let [r, c] = pos;
    console.log("step", step);
    if (grid[r][c] === "C") return step;

    if (spaceCheck(grid, r + 1, c, visited))
      queue.unshift({ pos: [r + 1, c], step: step + 1 });
    if (spaceCheck(grid, r - 1, c, visited))
      queue.unshift({ pos: [r - 1, c], step: step + 1 });
    if (spaceCheck(grid, r, c + 1, visited))
      queue.unshift({ pos: [r, c + 1], step: step + 1 });
    if (spaceCheck(grid, r, c - 1, visited))
      queue.unshift({ pos: [r, c - 1], step: step + 1 });
  }

  return -1;
};

const spaceCheck = (grid, r, c, visited) => {
  let rBound = 0 <= r && r < grid.length;
  let cBound = 0 <= c && c < grid[0].length;

  if (!rBound || !cBound) return false;

  let place = `${r},${c}`;
  if (visited.has(place)) return false;
  visited.add(place);
  if (grid[r][c] === "X") return false;

  return true;
};