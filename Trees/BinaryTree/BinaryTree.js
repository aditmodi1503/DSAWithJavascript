const a = {
    root: {
        data: 1,
        left
    }
}












//Structure
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
        this.count = null;
    }
}

//Insert from array implementation
const InsertFromArray = arr => {
    if(!arr.length) return;

    const nodes = arr.map(data => data != null ? new Node(data) : null)

    nodes.forEach((node, index) => {
        if(!node) return;
        let leftIndex = (2 * index) + 1;
        if(leftIndex < arr.length){
            node.left = nodes[leftIndex]
        }
        let rightIndex = (2 * index) + 2;
        if(rightIndex < arr.length){
            node.right = nodes[rightIndex];
        }
    });
    return nodes[0];
}

//Insert from level order traversal
const InserFromLevelOrder = (root, data) => {
    let node = new Node(data);
    if(!root) return node;

    const queue = [root];
    while(queue.length > 0){
        const n = queue.shift();
        if(!n.left){
            n.left = node;
            break;
        }
        queue.push(n.left);
        if(!n.right){
            n.right = node;
            break;
        }
        queue.push(n.right)
    }
}

//Update - Find the element and replace the value;

//Delete
const Delete = (root, data) => {
    if(!root) return;
    if(root.data == data) return null;

    let queue = [root];
    while(queue.length > 0){
        let node = queue.shift();
        if(node.left && node.left.data == data){
            node.left = null;
            return node;
        }
        queue.push(node.left);
        if(node.right && node.right.data == data){
            node.right = null;
            return node;
        }
        queue.push(node.right);
    }
    return queue[0];
}