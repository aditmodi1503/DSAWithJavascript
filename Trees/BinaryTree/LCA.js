const LCA = (root, a, b) => {                   //With recusrion
    if(!root) return;

    if(root == a || root == b) return root;

    let left = LCA(root.left, a, b);
    let right = LCA(root.right, a, b);

    if(left && right)   return root;
    else return (left ? left : right);
}