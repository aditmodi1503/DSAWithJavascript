const max = (a, b) => a > b ? a : b;

const height = root => {
    if(!root) return 0;

    return 1 + max(height(root.left), height(root.right));
}

const heightWithoutRecursion = root => {
    if(!root) return 0;

    let stack = [root], height = 0;
    while(stack.length > 0){
        let node = stack.pop();
        stack.push(max(root.left, root.right));
        height++;
    }
}

const diameter = root => {
    if(!root) return 0;

    let lheight = height(root.left);
    let rheight = height(root.right);

    let ldiameter = diameter(root.left);
    let rdiameter = diameter(root.right);

    return max(1 + lheight + rheight, max(ldiameter, rdiameter));
}

// const diameterWithoutrecursion = root => {
//     if(!root) return 0;

//     let stack = [root], diameter = 0;
//     while(stack.length > 0){
//         stack.pop();

//     }
// }