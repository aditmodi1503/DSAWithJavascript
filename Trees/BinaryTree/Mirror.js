//Problem 24
const Mirror = root => {
    if(!root) return;

    if(root.left) Mirror(root.left);
    if(root.right) Mirror(root.right);

    let temp;
    temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
}

const MirrorWithoutRecursion = root => {
    if(!root) return;

    let stack = [root];
    while(stack.length > 0){
        let node = stack.pop(), temp;
        temp = node.left;
        node.left = node.right;
        node.right = temp;

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
}

//Problem 25
const MirrorCompare = (root1, root2) => {
    if(!root1 && !root2) return true;
    if(!root1 || !root2) return false;
    if(root1.data != root2.data) return false;
    else return MirrorCompare(root1.left, root2.right) && MirrorCompare(root1.right, root2.left);
}