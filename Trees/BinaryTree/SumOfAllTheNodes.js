//Problem 22 & 23

//With recursion
const SumOfAlNodes = root => {
    if(!root) return 0;

    return root.data + SumOfAlNodes(root.left) + SumOfAlNodes(root.right);
}

//Without recursion
const SumOfAlNodesWithoutRecursion = root => {
    if(!root) return 0;

    let stack = [root], sum = 0;
    while(stack.length > 0){
        let node = stack.pop();
        sum += node.data;
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return sum;
}