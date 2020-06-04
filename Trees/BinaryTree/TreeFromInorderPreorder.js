// Inorder traversal  - D B E A F C
// PreOrder traversal - A B D E C F

const BuildBinaryTree = (preorder, inorder) => {
    function helper(p1, p2, i1, i2) {
        if(p1 > p2 || i1 > i2) return null;

        let value = preorder[p1];
        let index = inorder.indexOf(value);
        let nLeft = index - i1
        let root = new Node(value);

        root.left = helper(p1+1, p1+nLeft, i1, index - 1);
        root.right = helper(p1+nLeft, p2, index+1, i2);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1)
}

