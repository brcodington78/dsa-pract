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

const longestPath = (graph) => {
  let maxCount = 0;
  for(let node in graph) {
    let exploreCount = explore(graph, node)
    if (maxCount < exploreCount) {
      maxCount = exploreCount 
    }
  }
  return maxCount
};

const explore = (graph, node) => {
  let stack = [{node: node, level: 0}]
  let count = 0
  while (stack.length !== 0) {
    let {node, level} = stack.pop();
    if (level > count) count = level
    let graphArr = graph[node];
    for(let i = 0; i < graphArr.length; i++) {
      stack.unshift({node: graphArr[i], level: level + 1})
    }
    
  }
  return count
}

const semestersRequired = (numCourses, prereqs) => {
  if (prereqs.length === 0) return 1;
  let graph = createPrereqs(prereqs);
  let range = Object.keys(graph);

  let maxCount = 1;

  for (let i = 0; i < range.length; i++) {
    let newNode = range[i];
    let stack = [{ node: newNode, level: 0 }];

    while (stack.length !== 0) {
      let { node, level } = stack.pop();
      node = String(node);
      if (level > maxCount) {
        maxCount = level;
      }
      if (node in graph) {
        let nodeArr = graph[node];
        for (let j = 0; j < nodeArr.length; j++) {
          stack.unshift({ node: nodeArr[j], level: level + 1 });
        }
      }
    }
  }
  return maxCount + 1;
};

const createPrereqs = (prereqs) => {
  let graph = {};

  for (let i = 0; i < prereqs.length; i++) {
    let [first, second] = prereqs[i];

    if (!(first in graph)) graph[first] = [];
    graph[first].push(second);
  }
  return graph;
};


const hasCycle = (graph) => {
  let visited = new Set();
  let keys = Object.keys(graph);
  for (let node of keys) {
    visited.add(node);
    let valueArr = graph[node];
    for (let i = 0; i < valueArr.length; i++) {
      if (visited.has(valueArr[i]) && lookForKey(graph, valueArr[i], node))
        return true;
    }
  }

  return false;
};

const lookForKey = (graph, key, target) => {
  // key valueArr[i]
  //target is node
  let seen = new Set();
  let queue = [key];

  while (queue.length !== 0) {
    let popped = queue.pop();
    let arr = graph[popped];
    if (popped === target) return true;
    for (let i = 0; i < arr.length; i++) {
      if (!seen.has(arr[i])) {
        queue.unshift(arr[i]);
      }
    }
  }

  return false;
};

const fib = (n) => {
  let arr = [0, 1];
  let count = 2;
  let newNum;
  if (n === 0) return 0;
  if (n === 1) return 1;

  while (count !== n + 1) {
    let [first, second] = arr;
    newNum = first + second;
    arr.shift();
    arr.push(newNum);
    count++;
  }
  return newNum;
};

const tribonacci = (n, memo = {}) => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  if (n in memo) return memo[n];

  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  return memo[n];
};

const sumPossible = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;

  if (amount in memo) return memo[amount];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let newNumBool = sumPossible(amount - num, numbers, memo);
    memo[amount - num] = newNumBool;

    if (memo[amount - num] === true) return true;
  }

  return false;
};

const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins);
  if (answer === Infinity) {
    return -1;
  } else {
    return answer;
  }
};

const _minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;

  let minCoins = Infinity;
  for (let coin of coins) {
    const numCoins = 1 + _minChange(amount - coin, coins, memo);
    if (numCoins < minCoins) {
      minCoins = numCoins;
    }
  }
  memo[amount] = minCoins;
  return minCoins;
};

const countPaths = (grid, pos = [0, 0], memo = {}) => {
  let stringPos = `${pos[0]}, ${pos[1]}`;
  let endPos = `${grid.length - 1}, ${grid[0].length - 1}`;
  let count = 0;

  if (stringPos === endPos) return 1;
  if (stringPos in memo) return memo[stringPos];

  let [x, y] = pos;

  let space1 = [x + 1, y];
  let space2 = [x, y + 1];

  if (validPos(space1, grid)) {
    let route1 = countPaths(grid, space1, memo);
    count += route1;
  }

  if (validPos(space2, grid)) {
    let route2 = countPaths(grid, space2, memo);
    count += route2;
  }

  memo[stringPos] = count;

  return count;
};

const validPos = (spaceArr, grid) => {
  let xEnd = grid.length - 1;
  let yEnd = grid[0].length - 1;

  let [x, y] = spaceArr;

  let rBound = 0 <= x && x < grid.length;
  let cBound = 0 <= y && y < grid[0].length;

  if (rBound && cBound && grid[x][y] !== "X") return true;
};

const maxPathSum = (grid, pos = [0, 0], memo = {}) => {
  let [r, c] = pos;
  let stringPos = `${r},${c}`;
  let endPos = [grid.length - 1, grid[0].length - 1];

  if (String(pos) === String(endPos)) return grid[r][c];

  if (stringPos in memo) return memo[stringPos];

  let newR = r + 1;
  let newC = c + 1;

  let firstPos = -Infinity;
  let secondPos = -Infinity;

  if (validPos(grid, [newR, c])) firstPos = maxPathSum(grid, [newR, c], memo);
  if (validPos(grid, [r, newC])) secondPos = maxPathSum(grid, [r, newC], memo);

  let newVal;
  console.log("first", firstPos);
  console.log("second", secondPos);

  if (firstPos > secondPos) {
    newVal = firstPos + grid[r][c];
  } else {
    newVal = secondPos + grid[r][c];
  }

  memo[stringPos] = newVal;
  return newVal;
};

const befittingBrackets = (str) => {
  let obj = {
    '(' : ")",
    "{" : "}",
    "[" : "]"
  }
  let stack = []
  
  for(let char of str) {
    if (char in obj) {
      stack.push(obj[char])
    } else {
      let closer = char;
      console.log('stack bool', stack[stack.length - 1] === closer, 'closer', closer, 'stack le', stack[stack.length - 1])
      if (stack.length > 0 && stack[stack.length - 1] === closer){
 
        stack.pop()
      } else {

        return false
      }
    }
  }
  
  console.log('hitting')
  if (stack.length !== 0) return false;
  
  return true
  
};

const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i >= nums.length) return 0;
  if (i in memo) return memo[i];

  let included = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  let excluded = nonAdjacentSum(nums, i + 1, memo);

  let max = Math.max(included, excluded);
  memo[i] = max;

  return max;
};


const summingSquares = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;

  let min = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    let square = i * i;
    let squareDif = n - square;
    let turn = 1 + summingSquares(squareDif, memo);
    min = Math.min(turn, min);
  }

  memo[n] = min;

  return min;
};

const countingChange = (amount, coins, i = 0, memo = {}) => {
  let instance = i + "," + amount;
  if (instance in memo) return memo[instance];
  if (amount === 0) return 1;
  if (i === coins.length) return 0;
  let count = 0;

  const coin = coins[i];

  for (let quantity = 0; quantity * coin <= amount; quantity++) {
    let paths = countingChange(amount - quantity * coin, coins, i + 1, memo);
    count += paths;
  }

  memo[instance] = count;
  return count;
};

const arrayStepper = (nums, i = 0, memo = {}) => {
  console.log("i", i);
  let maxIdx = nums.length - 1;
  if (i >= maxIdx) return true;
  if (String(i) in memo) return memo[String(i)];
  let numSteps = nums[i];
  if (numSteps === 0) return false;

  for (let j = 1; j <= numSteps; j++) {
    let possible = arrayStepper(nums, i + j, memo);
    if (possible === true) {
      return true;
    } else {
      memo[String(i + j)] = false;
    }
  }

  return false;
};

const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  if (i === j) return 1;
  if (i > j) return 0;
  if (i + "," + j in memo) return memo[i + "," + j];

  // console.log('memo', memo)

  if (str[i] === str[j]) {
    memo[i + "," + j] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    let first = maxPalinSubsequence(str, i + 1, j, memo);
    let second = maxPalinSubsequence(str, i, j - 1, memo);
    // console.log('first', first, 'second', second)
    memo[i + "," + j] = Math.max(first, second);
  }

  console.log("memo @ i and j", memo[i + "," + j], "i", i, "j", j);

  return memo[i + "," + j];
};

const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
  if (i >= str1.length || j >= str2.length) return 0;
  let pos = i + "," + j
  if (pos in memo ) return memo[pos];
  
  let char1 = str1[i];
  let char2 = str2[j];
  let sum
  
  if (char1 === char2) {
    sum = 1 + overlapSubsequence(str1, str2, i + 1, j + 1 , memo)
  } else {
    let sum1 = overlapSubsequence(str1, str2, i + 1, j, memo);
    let sum2 = overlapSubsequence(str1, str2, i, j + 1, memo);
    
    sum = Math.max(sum1, sum2)
  }
  
  memo[pos] = sum;
  
  return memo[pos]
  
};

const canConcat = (s, words, currentStr = "", memo = {}) => {
  if (currentStr in memo) return memo[currentStr];
  if (!s.includes(currentStr)) return false;
  if (currentStr === s) {
    memo[currentStr] = true;
    return true;
  }
  for (let word of words) {
    let newWord = currentStr + word;
    if (canConcat(s, words, newWord, memo)) {
      memo[currentStr] = true;
      return true;
    }
  }

  memo[currentStr] = false;
  return false;
};


const quickestConcat = (s, words) => {
  const answer = _quickestConcat(s, words);

  if (answer === Infinity) {
    return -1;
  } else {
    return answer;
  }
};

const _quickestConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  if (s === "") return 0;

  let minWords = Infinity;
  for (let word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length);
      const attempt = 1 + _quickestConcat(suffix, words, memo);
      minWords = Math.min(minWords, attempt);
    }
  }
  memo[s] = minWords;
  return memo[s];
};


const pairedParentheses = (str) => {
  let stack = [];
  let arr = str.split("");

  for (let char of arr) {
    if (char === "(") stack.push("(");
    if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  if (stack.length) return false;
  return true;
};


const decompressBraces = (s) => {
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let stringArr = s.split("");
  let stack = [];

  for (let i = 0; i < stringArr.length; i++) {
    let char = stringArr[i];

    if (char === "}") {
      let popped = stack.pop();
      let tempStr = "";
      while (!numArr.includes(popped)) {
        tempStr = popped + tempStr;
        popped = stack.pop();
      }
      console.log("tempStr", tempStr);
      console.log("popped but a num", popped);
      let stackItem = tempStr.repeat(parseInt(popped));
      console.log("stackItem", stackItem);

      stack.push(stackItem);
    } else if (char !== "{") {
      stack.push(char);
    }
  }

  return stack.join("");
};

const nestingScore = (str) => {
  let stack = [0];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "[") stack.push(0);
    console.log("stack from short being added", stack);
    if (char === "]") {
      let popped = stack.pop();
      if (popped === 0) stack[stack.length - 1] = stack[stack.length - 1] + 1;
      if (popped > 0)
        stack[stack.length - 1] = stack[stack.length - 1] + popped * 2;
      console.log("stack from long being added", stack);
    }
  }

  console.log("stack", stack);
  return stack.pop();
};

const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  let first = elements[0];
  let slice = elements.slice(1);
  let subsetWithoutFirst = subsets(slice);
  let subsetsWithFirst = [];

  for (let sub of subsetWithoutFirst) {
    let newSub = [first, ...sub];
    subsetsWithFirst.push(newSub);
  }

  return subsetsWithFirst.concat(subsetWithoutFirst);
};


const permutations = (items) => {
  if(items.length === 0) return [[]];
  
  let first = items[0];
  let slice = items.slice(1);
  let permsWithoutFirst = permutations(slice);
  let ansArr = []
  
  for (let perm of permsWithoutFirst) {
    for(let i = 0; i <= perm.length; i++) {
      let newPerm = [...perm.slice(0,i), first, ...perm.slice(i)];
      ansArr.push(newPerm);
    }
  }
  
  return ansArr;
  
};


// going to use recursion 
// similar structure as the last problem

// set a base case for if the array is empty
// save the first element into a var
// run a recursive call with a slice of items that does not include the first index
// save that call to a var, this will result in an array with arrays
// make an empty array
// make a for loop with each array from the recursive var
// for each array put that element into every possible index
// push that arr into the empty array

const createCombinations = (items, k) => {
  if (items.length < k ) return [];
  if (k === 0) return [[]];
  
  let first = items[0];
  let itemsWithoutFirst = items.slice(1);
  let ans = []
  
  let itemsThatWillHaveFirst = createCombinations(itemsWithoutFirst, k - 1);
  for(let item of itemsThatWillHaveFirst) {
    let newItem = [first, ...item];
    ans.push(newItem)
  }
  
  let itemsThatWillNotHaveFirst = createCombinations(itemsWithoutFirst, k);
  
  return ans.concat(itemsThatWillNotHaveFirst)
  
};

//going to use recursion
// going to approach this using a tree type framework
// the initial array will produce two types of arrays

// one will be an array that contains all of the combinations of items but of length k - 1
// another will be an array that contains items.slice(1, k)


const parentheticalPossibilities = (s) => {
  if (s.length === 0) return [""];
  
  let {choices, remainder} = parseString(s);
  let possibilities = parentheticalPossibilities(remainder); // an array of the possible endings
  let ans = [];
  
  for (let choice of choices) {
    for (let possible of possibilities) {
      console.log("possible", possible)
      let newS = choice + possible
      ans.push(newS)
    }
  }
  
  return ans
  
  
};


function parseString(s) {
  let first = s[0];
  
  if (first !== '(') return {choices: first, remainder: s.slice(1)}
  else {
    let parI = s.indexOf(')');
    let choices = s.slice(1,parI);
    let theRest = s.slice(parI + 1);
    return {choices: choices, remainder: theRest};
  }
}

// going to use recursion

// first check to see if the first element of the string is a paranthesis.
// if it is not call a recursive function on the rest of the string

// if it is iterate through the string until you find then closing parenthesis
// store all the characters before the closing parenthesis into an array
// make a recursive call on the rest of the string, it will return an array with the rest of the possible arrangements.

// make an empty array
// iterate through the stored characters
// have a nested loop that iterates through the remainder possibilities
// add a stored char to the remainder possibility and push that into the empty array

// return


const substituteSynonyms = (sentence, synonyms) => {
  if (sentence.length === 0) return [''];
  
  let {choices, remainder} = parseSentence(sentence, synonyms);
  let restOfSentencePossiblities = substituteSynonyms(remainder.join(" "), synonyms);
  let ans = [];
  
  for (let choice of choices) {
    for (let possibility of restOfSentencePossiblities) {
      if (possibility === '') ans.push(choice);
      else {
        let newSentence = choice + " " + possibility
        ans.push(newSentence)  
      }
      
    }
  }
  
  return ans
};



function parseSentence(sentence, synonyms) {
  console.log("hitting")
  let sentenceArr = sentence.split(' ');
  let obj;
  if (sentenceArr[0] in synonyms) {
    obj = {
      choices: synonyms[sentenceArr[0]],
      remainder: sentenceArr.splice(1)
    }
    
  }else {
      obj = {
        choices: [sentenceArr[0]],
        remainder: sentenceArr.splice(1)
      }
    }
    return obj
} // return an object with 2 values that are arrays

  

// very similar to the last problem, going to use recursion
// first we will split the string
// we will run it through the parse function

// the parse function will detect whether the first word is in the synonyms object

// if it is not in the synonyms object return an object that has has {choices: ["theword"] remainder: ["the", " remainder", "of", "the", "sentence"]}

// if it is in the object
// return {choices: ["all", "the" , "possibilities"], remainder: ["the", " remainder", "of", "the", "sentence"] }

// after you deconstruct your object
// run your remainder through the recursive function
// save that to a variable
// set an empty array
// iterate through your choices
// iterate through the remainder possibilities
// add your choice to the beginnging of each possibility
// push that to the array
//return the ans array.join


const linkedPalindrome = (head) => {
  let current = head;
  let ansArr = []
  while (current) {
    ansArr.push(current.val);
    current = current.next;
    
  }
  
  let stringAns = ansArr.join("")
  let reverse = ansArr.reverse().join("")
  
  return stringAns === reverse
  
};
// iterate through the linked list using a while loop;
// add each node value into an array
// join the array and see if the reverse of the array is equal to it

const middleValue = (head) => {
    let ansArr = [];
    let current = head;
  
  while(current) {
    ansArr.push(current.val);
    current = current.next;
  }
  
  return ansArr[Math.floor(ansArr.length / 2)]
};

// iterate through the linked list
// add the values into an array
// return ansArr[ansArr.length/2]

const linkedListCycle = (head) => {
  let set = new Set();
  let current = head;
  
  while(current) {
    if (set.has(current.val)) return true;
    set.add(current.val);
    current = current.next
  }
  return false
};

//create an empty set
//iterate through the linked list
// see if the value of the node is in the linked list
// if it is not add it to the set, change current.next
// if it is return true


const lowestCommonAncestor = (root, val1, val2) => {
  let arr1 = findAncestors(root, val1);
  let arr2 = findAncestors(root, val2);
  let set1 = new Set(arr1);
  
  for(let ele of arr2) {
    if (set1.has(ele)) return ele
  } 
  
  return null
};


function findAncestors(root, val) {
  if (root === null) return null;
  if (root.val === val) return [val];
  
  
  let leftArr = findAncestors(root.left, val);
  let rightArr = findAncestors(root.right, val);
  
  if (leftArr) return [...leftArr, root.val];
  if (rightArr) return [...rightArr, root.val];
  
  
  
}


// check to see if the root is the value, if it is return a set with the value
// if it not the value check to see if it has a left or a right;
// if it does not return an empty set
// if it does run the function on the left and or right
// add the return to the set and return the set


// make a helper function
// it will iterate through the tree 
// as it iterates lookig for the value, it will store the ancestors of the desired node
// into a set

// we will run this helper with both vals and save each result into a new variable;
// we will then iterate through one of them until we find a corresponding value in teh other set
// we will return that value


const flipTree = (root) => {
  let queue = [root];
  
  while(queue.length !== 0) {
    let currentNode = queue.pop()
    let temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;
    
    if (currentNode.left) queue.unshift(currentNode.left);
    if (currentNode.right) queue.unshift(currentNode.right);
  }
  
  return root
};

// iterate through the tree, probably best to use bfs

//when you are on a node
// set the node.left = node.right, node.right = node.left
// this way nulls are flipped when they are present.this
// after this check to see if left and right exist, add the ones that exist to the queue
//repeat until queue is empty so we will use a while loop with the condition of the length of the queue
// return the head of the tree

const leftyNodes = (root) => {
  if (root === null) return []
  let ansArr = []
  let stack = [{node: root, level: 0}];
  
  
  while(stack.length !== 0) {
    let {node, level} = stack.pop();
    if (!ansArr[level]) ansArr.push(node.val);
    
    if (node.right) stack.push({node: node.right, level: level + 1});
    if (node.left) stack.push({node: node.left, level: level + 1});
  }
  return ansArr
  
};

// we will use a stack 
// we will perform depth first search
// when we add an object to our stack array it will consist of when
// the node itself and its level relative to the rest of the tree

//when we pop a node from the stack
// we check to see if that node level is already present in our array
// by this i mean that we check to see if that index is already populated
// if it is not we push that node value into the array 
// no matter what we add the nodes children to the stack 

const canColor = (graph) => {
  let colorObj = {};

  for (let node in graph) {
    if (!(node in colorObj) && !validateNode(graph, node, colorObj, false))
      return false;
  }
  return true;
};

const validateNode = (graph, node, colorObj, currentColor) => {
  if (node in colorObj) return currentColor === colorObj[node];
  colorObj[node] = currentColor;

  for (let neighbor of graph[node]) {
    if (!validateNode(graph, neighbor, colorObj, !currentColor)) return false;
  }
  return true;
};

const tolerantTeams = (rivalries) => {
  let graph = constructGraph(rivalries);
  let teamObj = {};
  
  
  for (let person in graph) {
    if (!(person in teamObj)) {
      if (!validate(person, graph, teamObj, false)) return false
    }
  }
  
  return true
  
};

const validate = (person, graph, teamObj, color) => {
  if (person in teamObj) return teamObj[person] === color;
  teamObj[person] = color
  
  for(let neighbor of graph[person]){
    if (!validate(neighbor,graph,teamObj, !color)) return false
  }
  
  return true
}

const constructGraph = (rivalries) => {
  let graph = {}
  
  for(let pairArr of rivalries) {
    let [person1, person2] = pairArr;
    
    if (!graph[person1])  graph[person1] = [];
    if (!graph[person2])  graph[person2] = [];
    
    graph[person1].push(person2);
    graph[person2].push(person1);
  }
  
  return graph
}

// it looks like it will be a good idea to do dfs through peeps

// create another obj but with false and true being values and keys being the players name
// make a validation function that will take in a node
// will take in team obj
// will take in a team type


// the function will basically perform a dfs search through the peeps
// alternating team types as you put another node through the function
// if a person is in the teamObj with a team that it cant be on
// return false
// continueto iterate through the whole thing until you can't

const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo ={}) => {
  const key = i + ',' + previous;
  if(key in memo) return memo[key]
  if (i > numbers.length - 1) return 0;
  
  const current = numbers[i];
  
  let dontTake = maxIncreasingSubseq(numbers, i + 1, previous, memo);
  
  let options = [dontTake]
  if (current > previous) {
    let take = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo)
    options.push(take)
  }
 
  memo[key] = Math.max(...options);
  return memo[key]
};


// going to use recursion for this problem 
// basically going to call the function on itself with a base case of:
// if the length of the array we are looking at is zero return 0;

// we are then going to compare two values
// the value of the function when given the current number and continueing to go through the rest of the array
// and the value without the current number but continuing to go through the array
// in the case of using the current number we add one to the result because our aim
// is to count the max subsequence

//we also have to consider what the previous number was in the sequence when taking a number
// we need to make sure the previous number is smaller than the current so before we make that recursive call
// we should make a conditional to verify and then make the recursive call

// at the end we return the greater value which will represent the longer sequence

const positioningPlants = (costs, i = 0, prev = null, memo = {}) => {
  const key = i + "," + prev;
  if(key in memo) return memo[key]
  
  if(i === costs.length) return 0;
  let minCost = Infinity;
  let options = [];
  
  for(let j = 0; j < costs[i].length; j++) {
    let currentPlantCost = costs[i][j]
    if(j !== prev) {
      let trial = currentPlantCost + positioningPlants(costs, i + 1, j, memo)
      minCost = Math.min(trial, minCost)
    }
  }
  
  memo[key] = minCost
  return memo[key]
  
};


// it would be helpful to use recurtion for this problem
// also memoization

// want to be able to pick a flower from a row
// save the index to a variable as prev

// we want to see all the possible choices
// we can 

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let half1 = nums.slice(0, mid);
  let half2 = nums.slice(mid);
  half1 = mergeSort(half1);
  half2 = mergeSort(half2);

  return merge(half1, half2);
};

const merge = (num1, num2) => {
  let arr = [];
  while (num1.length !== 0 || num2.length !== 0) {
    if (num1.length === 0) return [...arr, ...num2];
    if (num2.length === 0) return [...arr, ...num1];
    if (num1[0] >= num2[0]) {
      arr.push(num2.shift());
    } else arr.push(num1.shift());
  }
  return arr;
};


const breakingBoundaries = (m, n, k, r, c, memo={}) => {
  let pos = r + ',' + c + ',' + k
  if (!validPos(m,n,r,c)) return 1;
  if (k === 0) return 0;
  if (memo[pos]) return memo[pos]
  
  let left = breakingBoundaries(m,n, k - 1, r, c - 1, memo);
  let right = breakingBoundaries(m,n, k - 1, r, c + 1, memo);
  let up = breakingBoundaries(m,n, k - 1, r - 1, c, memo);
  let down = breakingBoundaries(m,n, k - 1, r + 1, c, memo);
  
  let count = left + right + up + down
  
  memo[pos] = count 
  return memo[pos]
  
  
  
  
};
  
const validPos = (m,n,r,c) => {
  if (!(r <= m - 1 && r >= 0)) return false;
  if (!(c <= n - 1 && c >= 0)) return false;
  
  return true
}


// going to return a number
// going to make this a recursive problem

// base case: if position is in bounds and moves equals 0 return 0;
// base case: if position is out of bounds return 1;
// if position is in memo return memo[pos]


// make four recursive calls based off the different moves you can go in
// add the result of all those to count
// memoize the result and return it

//going to need a function to see if position is valid 

const combineIntervals = (intervals) => {
  let sortedIntervals = intervals.sort((intervalA, intervalB) => {
    return intervalA[0] - intervalB[0]
  })
  let ans = [sortedIntervals[0]];
  for(let i = 1; i < sortedIntervals.length; i++) {
    let [first1, first2] = ans[ans.length - 1];
    let [second1, second2] = sortedIntervals[i];
    
    if(second1 > first1 && second1 <= first2 && second2 > first2) ans[ans.length - 1][1] = second2;
    else if(second2 > first2) ans.push([second1, second2])
    
  }
  return ans
  
};

//first sort intervals into ascending for first index of arr
//create an empty answer arr
// give it the first item of the sorted arr
// iterate through the sorted arr

// if the beginning of the second arr is greater than the end of the first arr 
// and the ending of the second arr is greater than the ending of the first arr
// set the ending of the first arr to the ending of the second arr
// if not add it to the arr

const binarySearch = (numbers, target) => {
  if (numbers.length === 0) return -1;

  let mid = Math.floor(numbers.length / 2);

  if (numbers[mid] === target) return mid;

  if (numbers[mid] > target) {
    return binarySearch(numbers.slice(0, mid), target);
  }

  if (numbers[mid] <= target) {
    let ans = binarySearch(numbers.slice(mid + 1), target);
    if (ans !== -1) return ans + mid + 1;
    else return -1;
  }
};


const binarySearchTreeIncludes = (root, target) => {
  if (root.val === target) return true
  if (root.val > target) {
    if (root.left) {
      return binarySearchTreeIncludes(root.left , target)
    }
  }
  if (root.val < target){
    if (root.right) {
      return binarySearchTreeIncludes(root.right, target)
    }
  }
  
  return false
  
};


// check to see if root is target, if yes return true
  
// if not check to see if root.val is bigger than the target
// first check to see if root.left exists than run the recursive function on it if it does
// if not return false


const isBinarySearchTree = (root) => {
  let orderedArr = createArr(root);

  console.log("orderedArr", orderedArr);

  for (let i = 0; i < orderedArr.length - 1; i++) {
    if (orderedArr[i] > orderedArr[i + 1]) return false;
  }

  return true;
};

const createArr = (root) => {
  if (!root.left && !root.right) return [root.val];

  let arr = [root.val];

  if (root.left) {
    let left = createArr(root.left);
    arr = [...left, ...arr];
  }

  if (root.right) {
    let right = createArr(root.right);
    arr = [...arr, ...right];
  }

  return arr;
};

const postOrder = (root) => {
  if (root === null) return [];
  if (!root.left && !root.right) return [root.val];

  let ansArr = [];

  if (root.left) {
    let left = postOrder(root.left);
    ansArr = [...left];
  }

  if (root.right) {
    let right = postOrder(root.right);
    ansArr = [...ansArr, ...right];
  }

  return [...ansArr, root.val];
};

const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 1 || postOrder.length === 1)
    return new Node(inOrder[0]);

  let rootVal = postOrder[postOrder.length - 1];
  let rootIndexInOrder = inOrder.indexOf(rootVal);

  let rootNode = new Node(rootVal);

  let left = inOrder.slice(0, rootIndexInOrder);
  let right = inOrder.slice(rootIndexInOrder + 1);

  if (left.length !== 0) {
    let leftPostOrder = postOrder.slice(0, left.length);
    let leftNode = buildTreeInPost(left, leftPostOrder);
    rootNode.left = leftNode;
  }

  if (right.length !== 0) {
    let rightPostOrder = postOrder.slice(left.length, postOrder.length - 1);
    let rightNode = buildTreeInPost(right, rightPostOrder);
    rootNode.right = rightNode;
  }

  return rootNode;
};

// going to use recursion


//our base case will be if the inOrder arr and postOrder arr are both length 1
// return a node with the val of inOrder[0];

// the initial post order array's last element is the root of the binary root
// what we want to do is find that element within the inOrder arr to determine the left and right sides of the tree;
// you take the index of the root in the inOrder arr and split arr
// the first half will be elements that are on the left sides
// the second half will be elements that are on the right sides

// make the root into a node and save it to a var
// put the first slice into a recursive call of buildTreeInPost and make the return the left of the current node
// put the second slice into a recursive call of buildTreeInPost and make the return the right node of the current node
// return the root


const buildTreeInPre = (inOrder, preOrder) => {
  if (inOrder.length === 1 || preOrder.length === 1)
    return new Node(inOrder[0]);

  let rootVal = preOrder[0];
  let rootIndex = inOrder.indexOf(rootVal);
  let root = new Node(rootVal);

  let leftOrder = inOrder.slice(0, rootIndex);
  let rightOrder = inOrder.slice(rootIndex + 1);

  if (leftOrder.length !== 0) {
    let leftNode = buildTreeInPre(
      leftOrder,
      preOrder.slice(1, leftOrder.length)
    );
    root.left = leftNode;
  }

  if (rightOrder.length !== 0) {
    let rightNode = buildTreeInPre(
      rightOrder,
      preOrder.slice(leftOrder.length + 1)
    );
    root.right = rightNode;
  }

  return root;
};

const lexicalOrder = (word1, word2, alphabet) => {
  let object = {};
  let i = 0
  for (let char of alphabet) {
    object[char] = i;
    i++
  }
  
  i = 0;
  while (i <= word1.length && i <= word2.length ) {
    let char1 = word1[i];
    let char2 = word2[i];
    console.log("char1",char1);
    console.log('char2', char2)
    if (!char1) return true;
    if(!char2) return false;
    
    if (object[char1] < object[char2]) return true;
    if (object[char1] > object[char2]) return false;
    i++
  }
  
  
  return true
  
};


// make an object that contains letters as keys and indexes as values
// iterate through each word at the same time
// check to see if a character exists at that indexes
// if does not exist in the first one, return true
// if it does not appear in the second return false

// then check to see if the chars are the same, if they are restart loop with index position incremented
// if they are not key into the object with both letters and see if
// which value is lower, if the first word has a lower value return true
// else return false
// continue this until one of the words runs out of letters 

const detectDictionary = (dictionary, alphabet) => {
  let i = 0;
  let j = 1;

  while (j < dictionary.length) {
    let word1 = dictionary[i];
    let word2 = dictionary[j];

    if (!lexicalOrder(word1, word2, alphabet)) return false;
    i++;
    j++;
  }

  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  let object = {};
  let i = 0;
  for (let char of alphabet) {
    object[char] = i;
    i++;
  }

  i = 0;
  while (i <= word1.length && i <= word2.length) {
    let char1 = word1[i];
    let char2 = word2[i];
    console.log("char1", char1);
    console.log("char2", char2);
    if (!char1) return true;
    if (!char2) return false;

    if (object[char1] < object[char2]) return true;
    if (object[char1] > object[char2]) return false;
    i++;
  }

  return true;
};

const topologicalOrder = (graph) => {
  let ans = [];
  let queue = [];
  let obj = findKids(graph);

  for (let node in obj) {
    if (obj[node] === 0) queue.unshift(node);
  }

  while (queue.length > 0) {
    let node = queue.pop();
    ans.push(node);
    for (let child of graph[node]) {
      obj[child] = obj[child] - 1;
      if (obj[child] === 0) queue.unshift(child);
    }
  }

  return ans;
};

const findKids = (graph) => {
  let obj = {};

  for (let node in graph) {
    let arr = graph[node];
    if (!obj[node]) obj[node] = 0;
    for (let child of arr) {
      if (!obj[child]) obj[child] = 0;
      obj[child] = obj[child] + 1;
    }
  }

  return obj;
};


const safeCracking = (hints) => {
  let ansStr = "";
  let graph = createGraph(hints);
  let obj = createCountObj(graph);
  let queue = [];

  for (let node in obj) {
    if (obj[node] === 0) queue.push(node);
  }

  while (queue.length > 0) {
    let node = queue.pop();
    ansStr += node;
    console.log("node", node);
    for (let child of graph[node]) {
      obj[child] -= 1;
      if (obj[child] === 0) queue.unshift(child);
    }
  }

  return ansStr;
};

//make a graph from the pairs
// run graph through createCountObj
//create queue
//add the first zero key-value pair to the queue
// create while loop that when the queue has length
// it pops one value from the queue
// adds it to an answer string
// then checks to see if any of the other values in the obj have zero as a values
// repeat until done
//return string

function createGraph(hints) {
  let graph = {};

  for (let hint of hints) {
    let [first, second] = hint;
    if (!graph[first]) graph[first] = [];
    if (!(second in graph)) graph[second] = [];
    graph[first].push(second);
  }
  return graph;
}

function createCountObj(graph) {
  let obj = {};

  for (let node in graph) {
    if (!(String(node) in obj)) obj[node] = 0;

    for (let child of graph[node]) {
      if (!(child in obj)) obj[child] = 0;
      obj[child] += 1;
    }
  }

  return obj;
}

const stringSearch = (grid, s) => {
  let firstChar = s[0]
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      let currentChar = grid[i][j];
      if (firstChar === currentChar) {
        if (findWord(grid, s, 0, i, j)) return true
      }
    }
  }
  return false
};

"01234"


const findWord = (grid, s, i, row, col, set = new Set()) => {
  if (i === s.length ) return true;
  if(!inBounds(row, col, grid)) return false;
  let pos = row + ',' + col;
  let char = grid[row][col]
  if(set.has(pos)) return false;
  if (char !== s[i]) return false;
  
  set.add(pos)
  console.log("pos", pos)
  console.log("i", i)
  console.log("length", s.length)
  let up = findWord(grid, s, i + 1, row - 1, col, set);
  let down = findWord(grid, s, i + 1, row + 1, col, set);
  let left = findWord(grid, s, i + 1, row, col - 1, set);
  let right = findWord(grid, s, i + 1, row, col + 1, set);
  
  if(up || down || left || right) {
    console.log('true');
    return true
  }
  
  return false
  
  
}

const inBounds = (row, col, grid) => {
  let validRow = (0 <= row && row < grid.length );
  let validCol = (0 <= col && col < grid[0].length);
  
  if (!validRow || !validCol) return false;
  
  return true
}

// perform some sort of breadth first recursive search

// iterate through the graph and find the first letter of the stringSearch
// once found check to see if any direction contains the next character
// we will want to be able to remember spaces we have used and the current index of the string we are looking for
// if any return true return true

//it will help to make a recursive helper function to deal with the logic above


const tokenReplace = (s, tokens) => {
  let ans = "";
  let i = 0;
  let j = 1;

  while (i < s.length) {
    if (s[i] !== "$") {
      ans += s[i];
      i++;
      j = i + 1;
    } else if (s[j] === "$") {
      let newWord = s.slice(i, j + 1);
      if (newWord in tokens) ans += tokens[newWord];
      i = j + 1;
      j = i + 1;
    } else {
      j++;
    }
  }

  return ans;
};

const tokenTransform = (s, tokens) => {
  let ans = [];
  let i = 0;
  let j = 1;

  while (i < s.length) {
    if (s[i] !== "$") {
      ans.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] === "$") {
      let key = s.slice(i, j + 1);
      let word = tokens[key];
      let evaluated = tokenTransform(word, tokens);
      tokens[key] = evaluated;
      ans.push(evaluated);
      i = j + 1;
      j = i + 1;
    } else j++;
  }

  return ans.join("");
};


const bestBridge = (grid) => {
  let firstIslandLands;

  outerLoop: for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "L") {
        firstIslandLands = traverseIsland(grid, r, c);
        break outerLoop;
      }
    }
  }

  let queue = [];

  for (let islandPiece of firstIslandLands) {
    let [row, col] = islandPiece.split(",").map(Number);
    queue.unshift({ row: row, col: col, count: 0 });
  }

  while (queue.length > 0) {
    let { row, col, count } = queue.pop();
    let marker = grid[row][col];
    let pos = row + "," + col;
    if (marker === "L" && !firstIslandLands.has(pos)) return count - 1;

    firstIslandLands.add(pos);

    let deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (let delta of deltas) {
      let [x, y] = delta;
      let deltaRow = row + x;
      let deltaCol = col + y;
      let deltaPos = deltaRow + "," + deltaCol;

      if (
        !firstIslandLands.has(deltaPos) &&
        inBounds(grid, deltaRow, deltaCol)
      ) {
        queue.unshift({ row: deltaRow, col: deltaCol, count: count + 1 });
      }
    }
  }
};

function inBounds(grid, r, c) {
  let rBound = 0 <= r && r < grid.length;
  let cBound = 0 <= c && c < grid[0].length;

  return rBound && cBound;
}

const traverseIsland = (grid, r, c, visited = new Set()) => {
  let inBound = inBounds(grid, r, c);
  if (!inBound) return visited;
  let currentPos = grid[r][c];
  if (currentPos === "W") return visited;
  let pos = r + "," + c;

  if (visited.has(pos)) return visited;

  visited.add(pos);

  traverseIsland(grid, r - 1, c, visited);
  traverseIsland(grid, r + 1, c, visited);
  traverseIsland(grid, r, c + 1, visited);
  traverseIsland(grid, r, c - 1, visited);

  return visited;
};

