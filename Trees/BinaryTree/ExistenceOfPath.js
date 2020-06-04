// Problem 21

const ExistenceOfPath = (root, sum) => {
    if(!root) return;

    let currentSum = sum - root.data;
    if(currentSum == 0){
        console.log('Path exists')
    }

    ExistenceOfPath(root.left, currentSum);
    ExistenceOfPath(root.right, currentSum);
}