//Breadth first traversal - Level order traversal
const LevelOrder = (root) => {
    if(!root) return;

    const queue = [root];
    while(queue.length > 0){
        const node = queue.shift();
        console.log(node.data);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}