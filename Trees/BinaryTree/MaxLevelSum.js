//Problem 19 - Trees
const MaxLevelSum = root => {
    if(!root) return;

    let queue = [root];
    let level = 0, maxLevel = 0, currentSum = 0, maxSum = 0
    while(queue.length > 0){
        
        let size = queue.length;
        level++;
        for(let i=0; i < size; i++){
            let node = queue.shift();
            if(node.left){ queue.push(node.left) }
            if(node.right){ queue.push(node.right) }
            currentSum += node.data;
        }
        if(currentSum > maxSum){
            maxSum = currentSum;
            maxLevel = level;
        }
    }
}