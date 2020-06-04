const FindMax = root => {                   //With recursion
    if(!root) return;

    let root_val = root.data, max;
    let left = FindMax(root.left);
    let right = FindMax(root.right);

    if(left > right)
        max = left;
    else
        max = right;
    if(root_val > max)
        max = root_val;

    return max;
}

const FindMax = root => {               //Without recursion
    if(!root) return;

    let root_val = root.data, max;
    let queue = [root];
    while(queue.length > 0){
        let node = queue.shift();
        if(node.data > max){
            max = node.data
        }

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
    return max
}