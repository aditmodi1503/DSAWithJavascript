//Depth first search

//Inorder traversal
const InOrder = (root) =>{
    if(!root) return;

    InOrder(root.left);
    console.log(root.data);
    InOrder(root.right);

}

const InOrderWithoutRecursion = root => { // Without Recursion
    if(!root) return;

    let stack = [];
    do{
        if(root.left){
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        if(node.right) node = node.right;
    }while(stack.length)
}

//Preorder traversal
const PreOder = (root) => {
    if(!root) return;

    console.log(root.data);
    PreOder(root.left);
    PreOder(root.right);
}

const PreOderWithoutRecursion = root => {
    if(!root) return;

    let stack = [root];
    do{
        let node = stack.pop();
        console.log(node.data);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }while(stack.length > 0)
}

//Postorder traversal
const PostOrder = (root) => {
    if(!root) return;

    PostOrder(root.left);
    PostOrder(root.right);
    console.log(root.data);
}

const PostOrderWithoutRecursion = root => {
    if(!root) return;

    let stack = [];
    do{
        if(root.right) stack.push(root.right)
        if(root.left) stack.push(root.left)
        
        console.log(root.data);
    }while(stack.length)
}
